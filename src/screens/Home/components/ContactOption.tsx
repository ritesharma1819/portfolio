import Link from "next/link";

import EmailIcon from "@/public/assets/icons/emailIcon.svg";
import FacebookIcon from "@/public/assets/icons/facebookIcon.svg";
import InstagramIcon from "@/public/assets/icons/instagramIcon.svg";
import LinkedInIcon from "@/public/assets/icons/linkedInIcon.svg";
import TwitterIcon from "@/public/assets/icons/twitterIcon.svg";

const ContactOption = () => {
  return (
    <div>
      <p className="w-full md:w-[80%]">
        Feel free to reach out if you want a to build something together, have a
        question, or just want to connect.
      </p>
      <Link
        className="underline hover:text-designColor py-2"
        href="mailto:rs211638@gmail.com"
        target="_blank"
      >
        rs211638@gmail.com
      </Link>
      <div className="flex gap-4 mt-4">
        <Link
          className="bannerIcon"
          href="mailto:rs211638@gmail.com"
          target="_blank"
        >
          <EmailIcon className="w-4 h-4" />
        </Link>
        <Link
          className="bannerIcon"
          href="https://www.linkedin.com/in/ritesharma1819/"
          target="_blank"
        >
          <LinkedInIcon className="w-4 h-4" />
        </Link>
        <Link
          className="bannerIcon"
          href="https://twitter.com/Ritesharma1819"
          target="_blank"
        >
          <TwitterIcon className="w-4 h-4" />
        </Link>
        <Link
          className="bannerIcon"
          href="https://www.instagram.com/ritesharma1819/"
          target="_blank"
        >
          <InstagramIcon className="w-4 h-4" />
        </Link>
        <Link
          className="bannerIcon"
          href="https://www.facebook.com/rs211638"
          target="_blank"
        >
          <FacebookIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ContactOption;
