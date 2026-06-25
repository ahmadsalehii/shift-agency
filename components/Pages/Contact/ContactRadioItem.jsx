const ContactExpertItem = ({ value }) => {
  const onMouseOver = (e) => {
    const span = e.target.querySelector("span");
    span.style.left = e.pageX - e.target.offsetLeft + "px";
    span.style.top = e.pageY - e.target.offsetTop + "px";
  };

  const onMouseLeave = (e) => {
    const span = e.target.querySelector("span");
    span.style.left = e.pageX - e.target.offsetLeft + "px";
    span.style.top = e.pageY - e.target.offsetTop + "px";
  };

  return (
    <button
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className="ripple-button overflow-hidden mr-4 lg:mr-6 mb-6 lg:mb-4 relative capitalize transition cursor-pointer px-12 py-4 rounded-full text-[18px] leading-[21px] text-app-main-text border-[1px] border-black border-opacity-[0.12]"
    >
      {value}
      <span></span>
    </button>
  );
};

export default ContactExpertItem;
