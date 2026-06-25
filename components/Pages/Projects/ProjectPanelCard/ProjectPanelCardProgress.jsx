const ProjectPanelCardProgress = ({ progress = 75, daysLeft = 21 }) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <p className="text-[18px] leading-[32.4px]">
          {progress == 0 ? "Not Started" : `${progress}% Completed`}
        </p>
        <p className="text-[18px] leading-[32.4px] text-app-text-details">
          {daysLeft == 0 ? "Done" : `${daysLeft} Days Left`}
        </p>
      </div>
      <div className="mt-2 relative h-[3px] rounded-[8px] bg-[#EDEDED]">
        <div
          className="h-full left-0 top-0 absolute bg-[#3ABE37]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectPanelCardProgress;
