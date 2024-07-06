"use client";

import AboutMeBrief from "@/app/components/about-me-brief";
import WorkExperience from "@/app/components/work-experience";
import MyStory from "@/app/components/my-story";

export default function Home() {
  return (
    <>
      <AboutMeBrief />
      <MyStory />
      <WorkExperience />

      {/* additional links */}
      <section className="pb-32 text-base-content">
        {/* <p>
          To know more stories about me, please visit{" "}
          <Link href="/about" className="link link-accent">
            about
          </Link>{" "}
          .
        </p> */}
        <p>
          My resume is{" "}
          <a
            href="https://drive.google.com/file/d/1F6y-yDnz7a6E5XS1UjGwdirjhuWqm9vK/view?usp=sharing"
            target="_blank"
            className="link link-accent">
            here
          </a>
          .
        </p>
      </section>
    </>
  );
}
