/* eslint-disable react/prop-types */

import { CiLocationOn, CiDollar } from 'react-icons/ci';
const AppliedDetails = ({job}) => {
    const { logo,job_title,  company_name, remote_or_onsite, location,job_type, salary} = job
    return (
        <div>
            <div className=' flex flex-col md:flex-row items-center  border border-slate-200 rounded-md p-4'>
            <div className=" bg-white w-full">
            <div className="hero-content justify-start flex-col lg:flex-row">
                <div className=" w-[240px] h-[240px] bg-[#F4F4F4] flex justify-center items-center rounded-md">
                <img src={logo} className="w-[145px] h-[50px] bg-[#F4F4F4] " />
                </div>
                <div>
                <h1 className="text-2xl font-bold">{job_title}</h1>
                <p className="py-4">{company_name}</p>
                <div className=" flex gap-4">
                <button className="border-2 border-sky-500 text-sky-500 rounded-md px-5 py-2">{remote_or_onsite}</button>
                <button className="border-2 border-sky-500 text-sky-500 rounded-md px-5 py-2">{job_type}</button>
                
            </div>
            <div className=" flex gap-6 my-4 text-[#757575] text-lg font-medium" >
                <h1 className=' flex items-center gap-2'> <CiLocationOn></CiLocationOn> {location}</h1>
                <h1 className=' flex items-center gap-2'> <CiDollar className='text-2xl font-bold'></CiDollar> {salary}</h1>
                
            </div>
                </div>
            </div>
            </div>
            <div>
            <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-md text-white">View Details</button>
            </div>
        </div>
        </div>
    );
};

export default AppliedDetails;