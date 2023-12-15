import { Link } from "@remix-run/react";
const Hero = ({ title1, title2, content, buttonText, img }) => {
  return (
    <div className="container">
      <div className="items-center grid grid-cols-1 lgl:grid lgl:grid-cols-2">
        <div className="content text-center mt-7 lgl:text-left lgl:mt-3">
          <h1 className=" text-[#020202] text-xxxl60 font-LeagueSpartan font-extrabolds">
            {title1}
            <br /> {title2}
          </h1>
          <p>{content}</p>
          <div className="mb-9 mt-9 text-center flex justify-center lgl:flex lgl:justify-start">
            <img src="../../img/sign.png" alt="" />
          </div>
          <Link to="" className=" bg-black text-white p-2 mt-5">
            {buttonText}
          </Link>
        </div>
        <div className="video relative mt-10 lgl:mt-0">
          <img className="w-full -bottom-4" src={img} alt="" />
          <button className="absolute top-1/4 right-0 bottom-0 left-1/2 m-auto text-center button-position">
            <img
              className=" rounded-full w-[100px]"
              src="../../img/play.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
