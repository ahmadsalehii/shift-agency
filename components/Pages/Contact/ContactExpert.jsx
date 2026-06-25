"use client";

import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import ContactExpertItem from "./ContactRadioItem";

const ContactExpert = () => {
  const [expert, setExpert] = useState();

  return (
    <RadioGroup
      value={expert}
      onChange={setExpert}
      className="max-w-[900px] flex flex-wrap mt-12"
    >
      <ContactExpertItem value="Branding" />
      <ContactExpertItem value="Ui/Ux" />
      <ContactExpertItem value="Illustration" />
      <ContactExpertItem value="NFT Design" />
      <ContactExpertItem value="Frontend Development" />
      <ContactExpertItem value="Backend Development" />
      <ContactExpertItem value="Digital Marketing" />
      <ContactExpertItem value="Other" />
    </RadioGroup>
  );
};

export default ContactExpert;
