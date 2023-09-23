/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utilities/localStorage";
import AppliedDetails from "../AppliedDetails/AppliedDetails";


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);
    const handelFilter = filter =>{
        if (filter === 'all') {
            setDisplayJob(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJob(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(onsiteJobs)
        }
    }
    const jobs = useLoaderData();
    useEffect( ()=> {
        const storedJobId = getStoredApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobId.includes(job.id))
            // console.log(jobsApplied, jobs, storedJobId);
            setAppliedJobs(jobsApplied);
            setDisplayJob(jobsApplied)
        }
    },[])
    return (
        <div className="mx-20 my-10">
            <div className=" flex justify-end ">
            <details className="dropdown my-7">
            <summary className="m-1 btn">Filter By 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#474747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={() => handelFilter('all')}><a>All</a></li>
                <li onClick={() => handelFilter('remote')}><a>Remote</a></li>
                <li onClick={() => handelFilter('onsite')}><a>Onsite</a></li>
            </ul>
            </details>
            </div>
            {
                displayJob.map(job => <AppliedDetails key={job.id} job={job}></AppliedDetails>)
            }
        </div>
    );
};

export default AppliedJobs;