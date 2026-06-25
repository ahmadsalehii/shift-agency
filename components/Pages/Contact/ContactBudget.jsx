"use client";

import { RadioGroup } from "@headlessui/react";
import ContactRadioItem from "./ContactRadioItem";
import { useState } from "react";

const ContactBudget = () => {
  const [budget, setBudget] = useState();

  return (
    <div className="flex flex-col mt-10">
      <h4 className="text-[24px] leading-[29px] font-medium">Your Budget $?</h4>
      <div className="mt-6">
        <RadioGroup
          value={budget}
          onChange={setBudget}
          className="max-w-[800px] flex flex-wrap"
        >
          <ContactRadioItem value="1k-3k" />
          <ContactRadioItem value="3k-5k" />
          <ContactRadioItem value="5k-10k" />
          <ContactRadioItem value="10k-20k" />
          <ContactRadioItem value="20k-50k" />
          <ContactRadioItem value="50k-100k" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default ContactBudget;
