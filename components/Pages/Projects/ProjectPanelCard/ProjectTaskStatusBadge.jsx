const ProjectTaskStatusBadge = ({ done, in_progress, not_started }) => {
  return (
    <div
      className={`py-[3px] px-4 text-[12px] leading-[15.62px] rounded-[3px]  
      ${done && "text-[#3ABE37] bg-[#EBF9EB]"} ${
        in_progress && "bg-[#EBF0FD] text-[#3366E8]"
      } ${not_started && "text-[#5D1617] bg-[#FFD2DE]"}`}
    >
      <p>
        {done && "Done"}
        {in_progress && "In Progress"}
        {not_started && "Not Started"}
      </p>
    </div>
  );
};

export default ProjectTaskStatusBadge;
