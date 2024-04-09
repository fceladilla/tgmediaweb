import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterLine,
  RiWhatsappLine,
} from "react-icons/ri";

function Footer() {
  return (
    <>
      <footer className="bg-black p-8 xl:p-20 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4  -mt-4 border-b border-primary p-8 ">
          {/* Logo */}
          <a href="" className="font-bold relative p-1 ">
            <span className="text-2xl text-white">tg</span>
            <span className="text-primary text-3xl">|</span>
            <span className="text-white">media</span>
          </a>
          {/* Social media */}
          <nav className="flex items-center gap-4">
            <a
              href=""
              className="block bg-primary text-black rounded-full p-4"
              s
            >
              <RiWhatsappLine />
            </a>
            <a
              href="https://www.instagram.com/tgmediaok/"
              className="block bg-primary text-black rounded-full p-4"
              s
            >
              <RiInstagramLine />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063868782966"
              className="block bg-primary text-black rounded-full p-4"
              s
            >
              <RiFacebookLine />
            </a>
            {/* <a href="" className="block bg-primary text-black rounded-full p-4">
              <RiTwitterLine />
            </a> */}
          </nav>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-white text-center md:text-left">
            Company
          </h3>
          <nav className="flex flex-col md:flex-row mt-4 flex items-center justify-between gap-4">
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              Press
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              Events
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              Investors
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of use
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <button className=" font-semibold py-2 px-6 bg-primary text-black rounded-xl top-1/2 ">
              Contact Us
            </button>
          </nav>
        </div>
        <div className="mt-20">
          <p className="text-gray-300 text-center">Copyright tg|media®™ 2024</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
