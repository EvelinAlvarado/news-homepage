import linkedinIcon from "../../public/linkedin-icon.svg";
import githubIcon from "../../public/github-icon.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-VeryDarkBlue mt-16 text-center gap-1 ">
      <p className="text-[12px] ">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-SoftOrange hover:text-SoftRed cursor-pointer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        .
      </p>
      <p className="mb-1 text-[12px]">
        Coded by{" "}
        <a
          href="#"
          className="text-SoftOrange hover:text-SoftRed cursor-pointer"
        >
          Evelin
        </a>
        .
      </p>

      <div className="flex justify-center gap-2 ">
        <a href="https://github.com/EvelinAlvarado" target="_blank">
          <FaGithub className="w-6 h-6 text-VeryDarkBlue hover:text-SoftOrange cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/evelinalvarado/" target="_blank">
          <FaLinkedin className="w-6 h-6 text-VeryDarkBlue hover:text-SoftOrange cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};
