const Footer = () => {
  return (
    <footer className="bg-footer py-20">
      <div className="flex justify-between mt-auto max-w-7xl mx-auto text-white">
        <div className="w-1/4 md:ml-3">
          <span className="block text-xl pb-1 border-b-2 max-w-max">About</span>
          <ul className="mt-4">
            <li className="my-1">Our Mission</li>
            <li className="my-1">FAQs</li>
            <li className="my-1">Terms of Service</li>
            <li className="my-1">Contact Us</li>
          </ul>
        </div>
        <div className="w-1/4">
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
        <div className="w-1/4">
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
        <div className="w-1/4">
          <span>Follow us on social media!</span>
          <div className="flex">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Youtube</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
