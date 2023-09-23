import { NavLink, useLoaderData, useParams } from "react-router-dom";
import {CiDollar, CiCalendarDate, CiPhone, CiMail, CiLocationOn } from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from "../utilities/localStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const eachJob = jobs.find(job => job.id === idInt)
    // console.log(jobs, id, eachJob);

    const handelApplyJob = () =>{
        toast.success('Applied')
        saveApplication(idInt)
    }

    return (
        <div className=" grid grid-cols-6 mx-20 my-10 gap-6">
            <div className=" col-span-4 flex flex-col gap-6 text-[#757575]">
                <h1><span className=" font-bold text-black">Job Description: </span>{eachJob.job_description} </h1>
                <h1><span className=" font-bold text-black">Job Responsibility: </span>{eachJob.job_responsibility} </h1>
                <h1 className=" font-bold text-black">Educational Qualification</h1>
                <p>{eachJob.educational_requirements}</p>
                <h1 className=" font-bold text-black">Experiences</h1>
                <p>{eachJob.experiences}</p>
            </div>
            <div className=" col-span-2 text-xl">
            <div className="rounded-md text-[#757575] bg-[#9873FF1A] ">
                <div className="card-body flex gap-6">
                    <h2 className="  font-bold text-black">Job Details</h2>
                    <hr />
                    <p className=" flex items-center " > <CiDollar className=" mr-1 text-[#9873FF] text-2xl" ></CiDollar>  <span className=" font-bold text-[#474747] mr-2">Salary: </span> {eachJob.salary} </p>
                    <p className=" flex justify-between items-start " > <CiCalendarDate className=" mr-1 text-[#9873FF] text-2xl" ></CiCalendarDate> <span className=" font-bold text-[#474747] "> Job Title: </span> {eachJob.job_title} </p>
                   
                    <h2 className=" font-bold text-black">Contact Information</h2>
                    <hr />
                    <p className=" flex items-center " > <CiPhone className=" mr-1 text-[#9873FF] text-2xl" ></CiPhone>  <span className=" font-bold text-[#474747] mr-2">Phone: </span> {eachJob.contact_information.phone} </p>
                    <p className=" flex items-center " > <CiMail className=" mr-1 text-[#9873FF] text-2xl" ></CiMail> <span className=" font-bold text-[#474747] mr-2"> Email: </span> {eachJob.contact_information.email} </p>
                    <p className=" flex items-start" > <CiLocationOn className=" mr-1 text-[#9873FF] text-2xl" ></CiLocationOn> <span className=" font-bold text-[#474747] mr-2"> Address: </span> {eachJob.contact_information.address} </p>
                </div>
                </div>
                <NavLink><button onClick={handelApplyJob} className=" w-full btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-4">Apply Now</button></NavLink>
            <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;