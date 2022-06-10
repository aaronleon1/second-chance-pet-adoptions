import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="bg-header h-20">
      <div className="mx-auto flex max-w-7xl ">
        <div>
          <Image
            src="/images/SCPAlogo.png"
            alt="second chance pet adoption logo"
            width={180}
            height={75}
          />
        </div>
        <ul className="ml-auto mr-4 flex items-center text-white">
          <li className="mr-4 text-xl hover:bg-orange-300 ">
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
          <li className="mr-4 text-xl hover:bg-orange-300 ">
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
          <li className="mr-4 text-xl hover:bg-orange-300 ">
            <Link href="#">
              <a>Dog Care</a>
            </Link>
          </li>
          <li className="mr-4 text-xl hover:bg-orange-300  ">
            <Link href="#">
              <a>Cat Care</a>
            </Link>
          </li>
          <li className="mr-4 text-xl hover:bg-orange-300 ">
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
