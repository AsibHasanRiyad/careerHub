import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
        <div className="card lg:card-side">
      <figure className=" w-[700px]">
        <img
          src="https://freefrontend.com/assets/img/html-funny-404-pages/Darknet-404-Page-Concept.png"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl font-medium">Oppsss!!!!!!!!! 404 Page not Found</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <NavLink><button className="btn btn-primary">Go Back To Home Page</button></NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;
