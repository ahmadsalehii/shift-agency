import ContactDetails from "@/components/Pages/Index/Contact/ContactDetails";
import ProjectDateIcon from "@/components/Pages/Index/Projects/ProjectDateIcon";
import ProjectSingleHeading from "@/components/Pages/ProjectSingle/ProjectSingleHeading";
import ProjectSingleDetailsBullet from "@/components/Pages/ProjectSingle/icons/ProjectSingleDetailsBullet";

const page = () => {
  return (
    <div>
      <ProjectSingleHeading />
      <div className="app-container flex flex-col lg:flex-row justify-between items-start lg:items-center mt-16">
        <h1 className="text-[32px] leading-[41px] text-app-main-text">
          We kicked “TaskBox” website into top gear
        </h1>
        <div className="mt-6 lg:mt-0 rounded-full flex items-center gap-2 border-[1px] border-black border-opacity-[0.08] py-4 px-5">
          <ProjectDateIcon />
          <p className="text-[16px] leading-[21px] text-app-text-details opacity-80">
            Start: Jan 08 - End Sep 12
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 app-container mt-16">
        <div className="lg:mt-0 order-2 lg:order-1 col-span-3 mt-6 flex flex-col items-start">
          <ul className="flex flex-col gap-10">
            <li>
              <p className="uppercase text-[18px] leading-[23px]">brand</p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  TaskBox
                </span>
              </p>
            </li>
            <li>
              <p className="uppercase text-[18px] leading-[23px]">LOCATION</p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  Reykjavík, Iceland
                </span>
              </p>
            </li>
            <li>
              <p className="uppercase text-[18px] leading-[23px]">CLIENT</p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  Genki Instruments.
                </span>
              </p>
            </li>
            <li>
              <p className="uppercase text-[18px] leading-[23px]">BUDGET</p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  Confidential
                </span>
              </p>
            </li>
            <li>
              <p className="uppercase text-[18px] leading-[23px]">INDUSTRY</p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  Technology
                </span>
              </p>
            </li>
            <li>
              <p className="uppercase text-[18px] leading-[23px]">Services</p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  Product Strategy
                </span>
              </p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  UI/UX Design
                </span>
              </p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  Logo Design
                </span>
              </p>
              <p className="mt-4 flex gap-2 items-center">
                <ProjectSingleDetailsBullet />
                <span className="text-[16px] leading-[21px] text-app-text-details">
                  Brand Strategy
                </span>
              </p>
            </li>
            <li>
              <p className="text-[18px] leading-[23px]">Live</p>
              <a
                href=""
                className="mt-4 text-app-main underline text-[16px] leading-[21px]"
              >
                Check Live
              </a>
            </li>
          </ul>
        </div>
        <div className="order-1 lg:order-2 col-span-9 flex flex-col">
          <p className="text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[37px] text-app-main-text">
            The previous website got old, and it didnt match Genkis ambition. It
            had an overly flashy, gadgety, and sometimes infantile look, which
            was in stark contrast to the values Genki wished to communicate:
            professionalism, maturity, and innovation. <br /> <br /> We came up
            with a plan for a minimalistic, state-of-the-art Shopify-based
            headless website with carefully designed UX/UI, toned-down
            backgrounds, and eye-catching icons & typography. The goal was to
            achieve a professional yet welcoming mood, all without overwhelming
            the user.
          </p>
          <img src="/images/screenshots/2.png" alt="" className="mt-16" />
          <p className="text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[37px] text-app-main-text mt-16">
            In the spirit of a slightly clichéd, albeit still valuable slogan
            less is more, weve designed and built a mature, clear, modern;
            simple-yet-engaging headless website with an integrated, custom
            e-commerce platform to give Genki the extra edge over their rivals.
          </p>
        </div>
      </div>
      <div className="app-container mt-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="capitalize text-app-text-details text-[16px] lg:text-[20px] opacity-30 leading-[25.6px] lg:leading-[35px]">
            The result of the work
          </p>
          <div className="flex lg:hidden">
            <img
              src="/images/screenshots/3.png"
              className="w-full mt-4"
              alt=""
            />
          </div>
          <h3 className="mt-4 text-[24px] lg:text-[55px] leading-[31px] lg:leading-[71px] max-w-[555px]">
            A Product with a human touch
          </h3>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px] max-w-[555px] text-app-text-details">
            A unique and minimalist product called for a clean and modern
            website, which immerses you with smoothness and fluidity of human
            motion, reflecting the features that distinguish their products. The
            goal was to guarantee the brand a professional look, without
            overwhelming the user with a feeling of being crushed by the amount
            of data. Our project encompassed an entirely new headless website, a
            blog feature, and a functional, custom e-commerce based on Shopify.
          </p>
        </div>
        <div className="hidden lg:flex">
          <img
            src="/images/screenshots/3.png"
            className="max-w-[450px] ml-auto"
            alt=""
          />
        </div>
      </div>
      <div className="app-container mt-16">
        <img src="/images/screenshots/4.png" alt="" />
      </div>
      <div className="app-container mt-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="capitalize text-app-text-details text-[20px] opacity-30 leading-[35px]">
            integrated video
          </p>
          <div className="flex lg:hidden">
            <img
              src="/images/screenshots/5.png"
              className="w-full mt-4"
              alt=""
            />
          </div>
          <h3 className="mt-4 text-[31px] lg:text-[55px] leading-[31px] lg:leading-[71px] max-w-[555px]">
            Works best in motion
          </h3>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px] max-w-[555px] text-app-text-details">
            The unique nuances of Genki wearables are easiest to grasp when
            viewed in video form. Its no wonder that the website utilizes the
            video format extensively, offering an emotive addition to product
            and description pages, as well as an option to take a look at what
            the product performs and operates like in practice.{" "}
          </p>
        </div>
        <div className="hidden lg:flex">
          <img
            src="/images/screenshots/5.png"
            className="max-w-[450px] ml-auto"
            alt=""
          />
        </div>
      </div>
      <div className="app-container mt-16">
        <img src="/images/screenshots/6.png" alt="" />
      </div>
      <div className="app-container mt-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="capitalize text-app-text-details text-[20px] opacity-30 leading-[35px]">
            Design Style
          </p>
          <div className="flex lg:hidden">
            <img
              src="/images/screenshots/7.png"
              className="w-full mt-4"
              alt=""
            />
          </div>
          <h3 className="mt-4 text-[24px] lg:text-[55px] leading-[31px] lg:leading-[71px] max-w-[555px]">
            Elegant & minimalist
          </h3>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px] max-w-[555px] text-app-text-details">
            The website grasps the users attention by alternating between
            several backgrounds and text color combinations. We went with a
            striking blood-orange, bright gray and a trusted black & white
            contrast to ensure optimal readability, as well as a compromise
            between energetic maturity and captivating, joyful design.
          </p>
        </div>
        <div className="hidden lg:flex">
          <img
            src="/images/screenshots/7.png"
            className="max-w-[450px] ml-auto"
            alt=""
          />
        </div>
      </div>
      <div className="mt-16">
        <ContactDetails />
      </div>
    </div>
  );
};

export default page;
