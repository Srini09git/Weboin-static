import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import A from "../../../public/MapIcons2/phone.png";
import B from "../../../public/MapIcons2/email.png";
import C from "../../../public/MapIcons2/location.png";
import D from "../../../public/MapIcons2/time.png";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className=" text-black py-8 px-4 flex flex-col sm:flex-row sm:flex-wrap justify-around items-center space-y-8 sm:space-y-0">
      {/* Phone Number */}
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 w-full sm:w-auto">
        <Image src={ A} width={100} height={ 100} />
        <div>
          <p className="text-sm font-semibold">PHONE NUMBER</p>
          <p>+123 456 789 012</p>
          <p>+123 456 789 012</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 w-full sm:w-auto">
      <Image src={B} width={100} height={ 100} />
        <div>
          <p className="text-sm font-semibold">EMAIL</p>
          <p>demolink@gmail.com</p>
          <p>demolink@gmail.com</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 w-full sm:w-auto">
      <Image src={C} width={100} height={ 100} />
        <div>
          <p className="text-sm font-semibold">LOCATION</p>
          <p>Maven</p>
          <p>Djin Webber, NYC</p>
        </div>
      </div>

      {/* Work Hours */}
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 w-full sm:w-auto">
      <Image src={D} width={100} height={ 100} />
        <div>
          <p className="text-sm font-semibold">WORK HOURS</p>
          <p>9:00am - 10:00pm</p>
          <p>9:00am - 10:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
