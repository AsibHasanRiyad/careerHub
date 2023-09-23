

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:min-h-[500px] bg-[#F9F9FF]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/1R9bf33/user.png" className=" w-[600px]" />
                <div>
                <h1 className="text-5xl font-bold leading-[60px]">One Step <br /> Closer To Your <br /> <span className="text-blue-500"> Dream Job</span> </h1>
                <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />
                 your job application from start to finish.</p>
                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;