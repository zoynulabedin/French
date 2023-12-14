import { Link } from "@remix-run/react";
const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-4 items-centers justify-between">
        <li className="border-r-2 border-black70 pr-4">
          <Link className=" text-black80" to="/bio">
            Bio
          </Link>
        </li>
        <li className="border-r-2 border-black70 pr-4">
          <Link className=" text-black80" to="/gallery">
            Gallery
          </Link>
        </li>
        <li className="border-r-2 border-black70 pr-4">
          <Link className=" text-black80" to="/videos">
            Videos
          </Link>
        </li>
        <li className="border-r-2 border-black70 pr-4">
          <Link className=" text-black80" to="/marketplace">
            Marketplace
          </Link>
        </li>
        <li>
          <Link className=" text-black80" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
