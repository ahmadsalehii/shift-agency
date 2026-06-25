import Image from "next/image";

import ArticleImage from "@/public/images/article/cover.png";
import Article1Image from "@/public/images/article/1.png";
import Article2Image from "@/public/images/article/2.png";

const ArticleContent = () => {
  return (
    <>
      <Image
        src={ArticleImage}
        className="mt-6 lg:mt-12 rounded-[16px] w-full h-[155px] lg:h-[540px] object-cover"
        alt=""
      />
      <div className="mt-6 lg:mt-12 flex flex-col items-start">
        <h4 className="text-[16px] lg:text-[24px] leading-[21px] lg:leading-[29px] font-medium">
          How to give professional design feedback
        </h4>
        <p className="lg:pl-[98px] mt-3 lg:mt-8 text-app-main-text text-[14px] lg:text-[18px] leading-[22px] lg:leading-[32px]">
          Professional web designers understand how crucial client feedback is
          to the creative process. While web design involves equal amounts of
          creativity, talent, and technical know-how, building a truly
          successful website that meets your goals also requires a collaborative
          and respectful dialogue between you and your designer. This is where
          the knowledge on how to give good design feedback comes into play.{" "}
          <br /> That said, communicating your needs, opinions, and wants to
          your web designer can be an unfamiliar experience—that’s why it’s so
          important to prepare for your feedback sessions. <br /> Your designer,
          despite their experience and expertise, still relies heavily on your
          opinion and insights when creating the perfect product. If you have
          design feedback questions, keep reading. In this guide, we’ll discuss
          our top five tips for how to give feedback to designers.
        </p>
        <Image
          src={Article1Image}
          alt=""
          className="mt-6 lg:mt-12 w-full rounded-[16px]"
        />
        <h4 className="mt-6 lg:mt-8 text-[16px] lg:text-[24px] leading-[21px] lg:leading-[29px] font-medium">
          #1 Work from a place of trust
        </h4>
        <div className="lg:pl-[98px] mt-3 lg:mt-8 text-app-main-text text-[14px] lg:text-[18px] leading-[21px] lg:leading-[32px]">
          <p>
            Like all healthy and productive relationships, the one between you
            and your website designer should be built on a foundation of:
          </p>
          <ul className="list-disc pl-5 my-2">
            <li>Trust</li>
            <li>Respect</li>
            <li>Honesty</li>
          </ul>
          <p>
            Trust is perhaps the most important quality of any successful
            client-designer relationship. When you trust your designer, you’re
            able to give them creative freedom, space to produce their best
            work, and opportunities for exciting designs that they may not have
            otherwise arrived at. <br /> And this process should be a
            collaborative one. You and your designer both have very different,
            though equally important, roles to play, and you each bring
            necessary skills to the table. <br /> So, when giving website design
            feedback, begin with the faith that your designer is invested in and
            capable of building you the best website possible. Remember,
            feedback in design goes a long way, so make sure to trust your
            designer’s:
          </p>
          <ul className="list-disc pl-5 my-2">
            <li>
              Intentions – You’ve both entered this collaboration to build a
              website that reflects your brand’s unique ethos and meets its
              unique challenges. Trust that your designer has your best
              interests in mind, and that any creative misalignments are due to
              simple misunderstanding rather than malice or apathy.
            </li>
            <li>
              Capabilities – If web design were easy, you’d do it yourself. Have
              faith in the skills and experience your designer brings to the
              table. When reviewing their designs, be open to their
              interpretation and creative input before expressing your thoughts.
            </li>
          </ul>
        </div>
        <Image
          src={Article2Image}
          alt=""
          className="mt-6 lg:mt-12 w-full rounded-[16px]"
        />
        <h4 className="mt-6 lg:mt-8 text-[16px] lg:text-[24px] leading-[21px] lg:leading-[29px] font-medium">
          #2 Put clarity and specificity at the forefront
        </h4>
        <div className="lg:pl-[98px] mt-3 lg:mt-8 text-app-main-text text-[14px] lg:text-[18px] leading-[21px] lg:leading-[32px]">
          <p>
            Collaboration thrives on clear communication and specific input.
            When giving design feedback, always be as clear as possible. With
            clear, precise criticisms and instructions, your designer will be
            able to fully understand and capture your vision, giving you a
            better end product in less time. That includes using specific
            language and details rather than clichés or generalizations. <br />{" "}
            If you’re still figuring out how to give good website design
            feedback, here are some ideas to provide specific, helpful notes:{" "}
            <br />
            Pinpoint individual elements – We often hear phrases like “make it
            pop,” but a design that “pops” is subjective—it’s more of a
            reflection of your feelings toward it than anything innate to the
            visuals themselves. Here are some concrete notes that might
            encapsulate what you really mean to say:
          </p>
          <ul className="list-disc pl-5 my-2">
            <li>
              “I want more contrast between the background and foreground colors
              so that the designs are clearly noticeable.”
            </li>
            <li>
              “I wish the colors were more vibrant. I don’t think pastels and
              neutrals encompass the energy of my brand.”
            </li>
            <li>
              “I’d love to see more unique shapes. The square boxes and buttons
              are too uniform, and lack that zany quality that I mentioned
              earlier.”
            </li>
          </ul>
          <p>
            Tell them what you’d like to see more and less of – Tell your
            designer what you want and love about a design, in addition to what
            you don’t. For example, “I’m not loving the icons. I’d like to see a
            curvier, more abstract style, and I wish the typeface had fewer
            straight lines and square edges to match.” If you don’t know the
            exact technical terms, that’s okay—describe a feeling or impression
            you wish you had. <br />
            Explain why you don’t like something – Although your personal taste
            will certainly play a part in what you bring to the design process,
            it’s best to pair any personal judgments with descriptive reasoning.
            Be specific about what elements you’re not sure about. Are the
            colors too bright? Does the large font feel aggressive? Do you find
            the art style too abstract? This will give your designer a better
            idea of what changes to make.
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleContent;
