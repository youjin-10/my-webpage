import AboutMeBrief from "@/app/components/about-me-brief";
import WorkExperience from "@/app/components/work-experience";
import MyStory from "@/app/components/my-story";
import { MessageCircleQuestion } from "lucide-react";

export default function Home() {
  return (
    <>
      <AboutMeBrief />
      <MyStory />
      <WorkExperience />

      <section className="pb-32 max-w-2xl text-base-content">
        <div className="flex items-center gap-2">
          <MessageCircleQuestion size={20} />
          <h2 className="text-lg font-bold">FAQ</h2>
        </div>

        <ul className="mt-6">
          <li className="mb-6">
            <h3 className="font-bold mb-2">
              Can you share when and how did you learn to code?
            </h3>
            <p className="indent-3 leading-7 mb-2">
              I began my journey into coding in 2018 by enrolling in a 5-month
              Java Developer course. This program not only introduced me to Java
              but also covered essential web technologies such as HTML, CSS,
              JavaScript, and PHP. Transitioning into a software development
              role afterward, I quickly became skilled at self-directed
              learning.
            </p>
            <p className="indent-3 leading-7">
              Today, I keep improving my skills in study groups, where learning
              together helps me understand better. I also learn from podcasts
              and YouTube videos. When I explore new libraries and frameworks, I
              focus on reading their official documents, examining code, and
              studying examples. These resources give me valuable insights and
              practical knowledge.
            </p>
          </li>
          <li className="mb-6">
            <h3 className="font-bold mb-2">
              Did you learn any new programming language / framework /
              technology in the last two years? How did you learn it?
            </h3>
            <p className="indent-3 leading-7 mb-2">
              I began using React extensively in 2022, initially through a study
              group where we met every Sunday morning to discuss insights gained
              from reading the React official documentation together. This
              experience showed me how crucial it is to read official
              documentation thoroughly and put concepts into practice in real
              projects at the same time.
            </p>
            <p className="indent-3 leading-7 mb-2">
              Shortly after, I was tasked with building an admin panel using
              React-Admin. At that time, there were few detailed tutorials or
              resources available locally, so I relied heavily on the official
              documentation, GitHub source code, and a Discord channel managed
              by the development team. Recognizing the importance of thorough
              documentation, I read it so extensively that I even discovered and
              corrected a typo through a{" "}
              <a
                href="https://github.com/ismail9k/vue3-carousel/issues/205"
                target="_blank"
                className="link">
                pull request (PR) on their GitHub repository
              </a>
              .
            </p>
            <p className="indent-3 leading-7 mb-2">
              Furthermore, regarding constructing custom components, I
              thoroughly studied the library&apos;s source code. Actively
              participating in the Discord channel was invaluable whenever I
              faced challenges, allowing me to seek direct guidance from
              experienced community members.
            </p>
            <p className="indent-3 leading-7">
              This experience not only boosted my technical skills but also
              emphasized the importance of thorough documentation review,
              learning together in the community, and mastering the skill of
              understanding and applying solutions from existing codebases.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
