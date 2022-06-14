import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <nav className="bg-header h-20">
      {/* START DESKTOP NAV */}
      <div className="mx-auto hidden md:flex max-w-7xl ">
        <Link href="/">
          <Image
            src="/images/SCPAlogo.png"
            alt="second chance pet adoption logo"
            width={180}
            height={75}
            className="cursor-pointer"
          />
        </Link>
        <ul className="ml-auto mr-4 flex items-center text-white">
          <li className="mr-4 text-xl ">
            <Link href="/">
              <a>
                <FontAwesomeIcon
                  icon={faHouse}
                  color="#ffffff"
                  className="w-8 pt-1 mx-auto"
                />
              </a>
            </Link>
          </li>
          <li className="mr-4 text-xl ">
            <Link href="/liked">
              <a>
                <FontAwesomeIcon
                  icon={faHeart}
                  color="#ffffff"
                  className="w-8 pt-1 mx-auto"
                />
              </a>
            </Link>
          </li>

          <li className="mr-4 text-xl ">
            <Link href="#">
              <a>Found a Stray?</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* END DESKTOP NAV */}
      {/* START MOBILE NAV */}
      <div className="flex flex-col rel md:hidden">
        <div className=" flex md:hidden justify-between ">
          <Link href="/">
            <Image
              src="/images/SCPAlogo.png"
              alt="second chance pet adoption logo"
              width={180}
              height={75}
              className="cursor-pointer"
            />
          </Link>
          {open ? (
            <button onClick={handleOpen} className="mr-5">
              <i className="fas fa-x fa-2xl"></i>
            </button>
          ) : (
            <button onClick={handleOpen} className="mr-5">
              <i className="fas fa-bars fa-2xl"></i>
            </button>
          )}
        </div>
        <ul
          className={`${
            open ? "block z-10" : "hidden"
          } w-full text-white bg-header text-center -mt-1`}
        >
          <li className="text-xl ">
            <Link href="/">
              <a>
                <FontAwesomeIcon
                  icon={faHouse}
                  color="#ffffff"
                  className="w-8 mx-auto"
                />
              </a>
            </Link>
          </li>
          <li className=" text-xl my-3">
            <Link href="/liked">
              <a>
                <FontAwesomeIcon
                  icon={faHeart}
                  color="#ffffff"
                  className="w-8 mx-auto"
                />
              </a>
            </Link>
          </li>

          <li className=" text-xl ml-4 my-3 ">
            <Link href="#">
              <a>Found a Stray?</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
