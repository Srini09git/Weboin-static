import Contactinfo from "@/Components/Contact/Contactinfo";
import ContactUI from "@/Components/Contact/ContactUI";
import ContactMap from "@/Components/Contact/ContactMap"
import React from "react";

const Contacts = () => {
  return (
    <div>
      {/* <ContactUI /> */}
      <div id='contact-info'>
        <Contactinfo />
        <ContactMap />
      </div>

    </div>
  );
};

export default Contacts;
