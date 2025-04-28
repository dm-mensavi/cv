import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-base font-semibold border-b border-blue-200 pb-1 mb-2 uppercase tracking-wider">
        Coordonnées
      </h2>
      <div className="space-y-2 text-sm">
        <p className="flex items-center">
          <MdEmail className="mr-2" /> mensavidavid@gmail.com
        </p>
        <p className="flex items-center">
          <MdPhone className="mr-2" /> +33 78 07 939 51
        </p>
        <Link href={"https://mensavi.tech"} target="_blank" className="flex items-center">
          <HiOutlineGlobeAlt className="mr-2" /> mensavi.tech
        </Link>
        <Link href={"https://github.com/dm-mensavi"} target="_blank" className="flex items-center">
          <SiGithub className="mr-2" /> dm-mensavi
        </Link>
        <Link href={"https://www.linkedin.com/in/mensavi"} target="_blank" className="flex items-center">
          <SiLinkedin className="mr-2" /> mensavi
        </Link>
        <p className="flex items-center">
          <MdLocationOn className="mr-2" /> Lille, France
        </p>
      </div>
    </div>
  );
}