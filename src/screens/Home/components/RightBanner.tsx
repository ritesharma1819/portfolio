import Image from "next/image";

import profileImage from "@/public/assets/profile.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <Image
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] object-contain z-10"
        src={profileImage}
        alt="bannerImg"
      />
      <div className="absolute top-1/2 md:right-[200px] w-[350px] h-[200px] lgl:w-[500px] lgl:h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
