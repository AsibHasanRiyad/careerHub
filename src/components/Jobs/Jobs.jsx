import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
    const[jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className=" my-20 px-5 md:px-20">
            <div className=" text-center">
                <h1 className=" text-5xl font-extrabold">Job Category List {jobs.length} </h1>
                <p className=" text-base text-[#757575] py-4 ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={ job.id} job={job}></Job> )
                }
            </div>
            <div className=" flex justify-center mt-10" >
            <div className={dataLength=== jobs.length ? 'hidden' : ''}>
            <button onClick={()=>setDataLength(jobs.length)} className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-md text-white">Details</button>
            </div>
            </div>
        </div>
    );
};

export default Jobs;