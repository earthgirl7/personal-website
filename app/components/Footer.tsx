import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 px-4 ">
      <div className=" flex justify-center">
        <div className="flex justify-center space-x-4 mb-3 p-2 rounded-lg opacity-80">
          <a
            href="https://github.com/anosharahim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl text-[var(--foreground-rgb)] hover:text-pink-500 transition duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/anosharahim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl text-[var(--foreground-rgb)] hover:text-hover-color transition duration-300" />
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl text-gray-800 hover:text-black transition duration-300" />
          </a> */}
          <a
            href="https://twitter.com/anosha_rahim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-xl text-[var(--foreground-rgb)] hover:text-hover-color transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
