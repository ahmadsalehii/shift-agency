import { Disclosure, Transition } from "@headlessui/react";
import GreenCircleTickIcon from "../icons/GreenCircleTickIcon";
import ChevronUpIcon from "../../Index/Services/icons/ChevronUpIcon";
import ProjectPanelTask from "./ProjectPanelTask";
import EmptyCircleIcon from "../icons/EmptyCircleIcon";

const ProjectPanelCardAccordion = ({
  title,
  icon,
  doneTasks = [],
  pendingTasks = [],
  notStartedTasks = [],
}) => {
  const totalTasks =
    doneTasks.length + pendingTasks.length + notStartedTasks.length;

  return (
    <div
      className="mt-4 px-4 lg:px-6 py-6 rounded-lg border-[1px] border-black border-opacity-[0.12]"
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full items-center">
              <div className="flex items-center gap-3">
                {icon}
                <p className="capitalize text-black font-medium text-[16px] leading-[20.83px]">
                  {title}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {doneTasks.length == totalTasks && (
                  <GreenCircleTickIcon className="hidden lg:flex" />
                )}
                {doneTasks.length == 0 && (
                  <EmptyCircleIcon className="hidden lg:flex" />
                )}
                {doneTasks.length > 0 && doneTasks.length < totalTasks && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25"
                    height="25"
                    className="hidden lg:flex"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      stroke="#ccc"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      stroke="#3ABE37"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${
                        ((2 * 3.14 * 20) / totalTasks) * doneTasks.length
                      } ${2 * 3.14 * 20}`}
                      strokeDashoffset="0"
                    ></circle>
                  </svg>
                )}
                <p className="text-[16px] leading-[20.83px] text-app-text-details">
                  {totalTasks} Tasks
                </p>
                <ChevronUpIcon
                  className={`transition ${open ? "rotate-0" : "rotate-180"}`}
                />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="flex flex-col items-start gap-4 pt-6">
                {doneTasks.map((task) => (
                  <ProjectPanelTask key={task} done>
                    {task}
                  </ProjectPanelTask>
                ))}
                {pendingTasks.map((task) => (
                  <ProjectPanelTask key={task} in_progress>
                    {task}
                  </ProjectPanelTask>
                ))}
                {notStartedTasks.map((task) => (
                  <ProjectPanelTask key={task} not_started>
                    {task}
                  </ProjectPanelTask>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ProjectPanelCardAccordion;
