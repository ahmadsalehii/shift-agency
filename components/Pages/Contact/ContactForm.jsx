const ContactForm = () => {
  return (
    <form className="mt-10 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[30px]">
        <input
          type="text"
          className="py-4 text-[18px] leading-[21px] border-b-[1px] border-black border-opacity-[0.12] outline-none w-full"
          placeholder="Your Name"
        />
        <input
          type="text"
          className="py-4 text-[18px] leading-[21px] border-b-[1px] border-black border-opacity-[0.12] outline-none w-full"
          placeholder="Work Email"
        />
        <input
          type="text"
          className="py-4 text-[18px] leading-[21px] border-b-[1px] border-black border-opacity-[0.12] outline-none w-full"
          placeholder="Phone Number"
        />
      </div>
      <input
        type="text"
        className="mt-6 lg:mt-8 py-4 text-[18px] leading-[21px] border-b-[1px] border-black border-opacity-[0.12] outline-none w-full"
        placeholder="Describe your Project"
      />
    </form>
  );
};

export default ContactForm;
