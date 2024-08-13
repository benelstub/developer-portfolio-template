"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  copyrightText: string;
}

// TODO: Add social URLs. Github, LinkedIn and Twitter/X ready to go
// https://react-icons.github.io/react-icons/

const socialLinks = {
  twitter: "#",
  linkedin: "#",
  github: "#",
  medium: "#",
  instagram: "#",
  youtube: "#",
};

export const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="">
      <div className="mx-auto px-4 mb-8">
        <div className="flex justify-center mb-4">
          <Link href={socialLinks.github} target="_blank" className="mr-4">
            <FaGithub size={24} />
          </Link>
          <Link href={socialLinks.linkedin} target="_blank" className="mr-4">
            <FaLinkedin size={24} />
          </Link>
          <Link href={socialLinks.twitter} target="_blank" className="mr-4">
            <FaXTwitter size={24} />
          </Link>
        </div>
        <div className="text-center text-gray-600">
          <p>{copyrightText}</p>
          <img
            src="/icon.ico"
            alt="Icon"
            className="inline-block ml-2 h-8 mt-2"
          />
        </div>
      </div>
    </footer>
  );
};
