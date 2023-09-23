/* eslint-disable react/prop-types */
import { CiLocationOn, CiDollar } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
const Job = ({job}) => {
    const {id, logo,job_title,  company_name, remote_or_onsite, location,job_type, salary} = job
    return (
        <div className=" drop-shadow-md bg-base-100 p-8 rounded-md">
            <figure className=" w-28 h-10">
                <img src={logo} alt="" />
            </figure>
            <h1 className=" text-xl font-bold">{job_title}</h1>
            <h4 className=" text-[#757575] text-lg font-medium my-3">{company_name}</h4>
            <div className=" flex gap-4">
                <button className="border-2 border-sky-500 text-sky-500 rounded-md px-5 py-2">{remote_or_onsite}</button>
                <button className="border-2 border-sky-500 text-sky-500 rounded-md px-5 py-2">{job_type}</button>
                
            </div>
            <div className=" flex gap-6 my-4 text-[#757575] text-lg font-medium" >
                <h1 className=' flex items-center gap-2'> <CiLocationOn></CiLocationOn> {location}</h1>
                <h1 className=' flex items-center gap-2'> <CiDollar className='text-2xl font-bold'></CiDollar> {salary}</h1>
                
            </div>
            <NavLink to={`/job/${id}`}>
            <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-md text-white">Details</button>
            </NavLink>
        </div>
    );
};
 
export default Job;