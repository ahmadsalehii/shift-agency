import ProjectTaskBullet from "../icons/ProjectTaskBullet";
import ProjectTaskStatusBadge from "./ProjectTaskStatusBadge";

const ProjectPanelTask = ({ children, done, in_progress, not_started }) => {
  return (
    <div className="grid grid-cols-2 lg:flex items-center">
      <div className="flex items-center">
        <ProjectTaskBullet />
        <p className="ml-3 mr-4 text-[16px] leading-[20.83px] truncate text-app-text-details">
          {children}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ProjectTaskStatusBadge
          done={done}
          in_progress={in_progress}
          not_started={not_started}
        />
      </div>
    </div>
  );
};

export default ProjectPanelTask;
