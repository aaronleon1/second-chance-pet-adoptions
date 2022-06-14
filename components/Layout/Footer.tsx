const Footer = () => {
  return (
    <footer className="bg-footer py-20">
      <div className="flex flex-col md:flex-row justify-between mt-auto max-w-7xl mx-auto text-white">
        <div className=" w-1/2 mx-auto md:w-1/4 md:ml-3">
          <span className="block text-xl pb-1 border-b-2 max-w-max">About</span>
          <ul className="mt-4">
            <li className="my-1">Our Mission</li>
            <li className="my-1">FAQs</li>
            <li className="my-1">Terms of Service</li>
            <li className="my-1">Contact Us</li>
          </ul>
        </div>
        <div className=" w-1/2 mx-auto mt-5 md:w-1/4 md:ml-3 md:mt-0">
          <span className="block text-xl pb-1 border-b-2 max-w-max">
            Pet Adoption
          </span>
          <ul className="mt-4">
            <li className="my-1">Dog Adoption</li>
            <li className="my-1">Cat Adoption</li>
            <li className="my-1">Search Shelters</li>
            <li className="my-1">Contact Us</li>
          </ul>
        </div>
        <div className=" w-1/2 mx-auto mt-5  md:w-1/4 md:ml-3 md:mt-0">
          <span className="block text-xl pb-1 border-b-2 max-w-max">
            Pet Care Topics
          </span>
          <ul className="mt-4">
            <li className="my-1">Dog Care</li>
            <li className="my-1">Dog Breeds</li>
            <li className="my-1">Cat Care</li>
            <li className="my-1">Cat Breeds</li>
            <li className="my-1">Pet Care Videos</li>
          </ul>
        </div>
        <div className=" w-1/2 mx-auto mt-5  md:w-1/4 md:ml-3 md:mt-0">
          <span className="block text-xl pb-1 border-b-2 max-w-max md:mx-auto">
            Follow us on social media!
          </span>
          <div className="flex md:justify-evenly mt-8 ">
            <a href="#">
              <i className="fa-brands fa-facebook fa-2xl mr-4 md:mr-0"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-instagram-square fa-2xl mr-4 md:mr-0  "></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-youtube fa-2xl mr-4 md:mr-0  "></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter-square fa-2xl mr-4 md:mr-0  "></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
