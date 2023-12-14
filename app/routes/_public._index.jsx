import { Link } from "@remix-run/react";
const Index = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 items-center">
        <div className="content">
          <h1 className=" text-[#020202] text-xxxl60 font-LeagueSpartan">
            Home of The Coke Boys
          </h1>
          <p>
            Welcome to French Montana’s official website. If it’s not here then
            it’s probably not official. On this site you can shop, watch and
            play... So let’s get to it!
          </p>
          <div className="mb-9 mt-9">
            <img src="../../img/sign.png" alt="" />
          </div>
          <Link className=" bg-black text-white p-2 mt-5">
            Enter The Mansion
          </Link>
        </div>
        <div className="video relative ">
          <img src="../../img/singer.png" alt="" />
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

export default Index;
