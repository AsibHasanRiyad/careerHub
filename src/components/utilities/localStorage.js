const getStoredApplication = () =>{
    const storedApplication = localStorage.getItem('job-application');
    if (storedApplication) {
        return JSON.parse(storedApplication)
    }
    else{
        return []
    }

}
const saveApplication = id =>{
    const storedApplications = getStoredApplication();
    const exists = storedApplications.find(jobId => id === jobId);
    if (!exists) {
        storedApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedApplications))
    }
}

export {saveApplication, getStoredApplication}