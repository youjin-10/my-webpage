"use client";

import CopyButton from "@/app/components/copy-button";
import { useState } from "react";
import Image from "next/image";
import { Briefcase, MapPin } from "lucide-react";

const myStory = [
  {
    src: "/images/tianjin-china.jpg",
    title: "Life in China (2013 - 2017)",
    content:
      "I lived in Qingdao, China for about 5 years. I began my career as an account manager at a Korean company, handling international buyers' requests and order schedules. <br /><br />Frontend development is like the face of a website; it's the first thing users see and interact with. Similarly, as an account manager, I was the face of the company to buyers. My role required effective communication and addressing buyers' needs, just as a frontend developer must create a user-friendly interface that meets users' expectations.",
  },
  {
    src: "/images/first-app-ever.jpg",
    title: "My first application ever (2018)",
    content:
      "After returning to Korea from China, I enrolled in a 4-month Java Web Developer course. During the course, I also had a chance to briefly learn how to create Anroid applications. This is a screenshot of my first app. <br /><br /> Although it was a simple app that allowed users to choose numbers for RGB color and copy the value, I was thrilled to build something from scratch. I learned how to solve problems by asking for advice or searching online.",
  },
  {
    src: "/images/old-code-java.jpg",
    title: "Old code (2018)",
    content:
      "This is the only screenshot I have from one of my project during the course. Now, I am more familiar with JavaScript and VScode, but I definitely would not name variables 'jsonObject1' and 'jsonObject2' anymore. 😅",
  },
  {
    src: "/images/first-conference.jpg",
    title: "First IT conference (2020)",
    content:
      "This was my first IT conference, and it was also when I realized how many female developers there are!",
  },
  {
    src: "/images/presentation.jpeg",
    title: "First Presentation (2023)",
    content:
      "When I started using React at work, I wanted to join a study group for commitment and learning. I found a wonderful group of developers who met every Sunday morning to read React documentation and share thoughts. This picture shows me sharing my experience of studying together. I hope to become a speaker one day and share more technical knowledge and experiences.",
  },
  {
    src: "/images/trip-busan.jpg",
    title: "Hobbies 1. trip",
    content:
      "I love traveling. (If you love it too, we can be best friends!) This picture is from my latest trip to Busan, South Korea.",
  },
  {
    src: "/images/boxer.jpg",
    title: "Hobbies 2. boxing",
    content:
      "Another hobby of mine is boxing. As developers, we spend a lot of time in front of a monitor, so I believe exercise is very important. I'm still a beginner, but I already feel much stronger and healthier! If you're looking for an exercise, I highly recommend boxing.",
  },
  {
    src: "/images/playlist.jpg",
    title: "Hobbies 3. listening to music",
    content:
      "Last but not least, I love listening to music while coding. This screenshot is from my playlist. I always appreciate song recommendations from any country!",
  },
];
const myEmail = "yjlee1026@yahoo.com";

export default function Home() {
  // could've used useRef
  // but useState here does not have a huge impact on performance
  const [selectedStory, setSelectedStory] = useState<
    (typeof myStory)[0] | null
  >(null);

  const handleClickCarouselItem = (selectedStory: (typeof myStory)[0]) => {
    setSelectedStory(selectedStory);

    const modal = document.getElementById("picture_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <main className="container mx-auto px-6 pt-40 bg-slate-50 border-x border-slate-200">
      <section className="mb-96">
        <h1 className="text-3xl font-bold mb-4">Youjin Lee</h1>
        <p className="max-w-xl leading-7 mb-4">
          I am a dedicated frontend developer with a background in international
          business, leveraging my experience in communication and
          problem-solving to create user-friendly interfaces that make a
          positive impact.
        </p>
        <p>
          If you would like to get in touch, send me an email
          <span>({myEmail})</span>
          <CopyButton textToCopy={myEmail} />
        </p>
      </section>

      <section className="mb-12 max-w-xl">
        <div className="flex items-center gap-2">
          <Briefcase size={20} />
          <h2 className="text-lg font-bold">Work Experience</h2>
        </div>

        <ul className="mt-6">
          <li className="mb-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Fooding Co Ltd</div>
              <div className="text-sm text-gray-500">May 2022 - Nov 2023</div>
            </div>
            <div className="flex items-center gap-0.5 text-gray-400">
              <MapPin size={11} />
              <span className="text-xs">Seoul, South Korea</span>
            </div>
            <div className="text-gray-600 mt-1">Frontend Developer</div>
          </li>
          <li className="mb-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Trediy</div>
              <div className="text-sm text-gray-500">July 2021 - Dec 2021</div>
            </div>
            <div className="flex items-center gap-0.5 text-gray-400">
              <MapPin size={11} />
              <span className="text-xs">Seoul, South Korea</span>
            </div>
            <div className="text-gray-600 mt-1">Frontend Developer</div>
          </li>
          <li className="mb-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Hakyung Software</div>
              <div className="text-sm text-gray-500">Nov 2018 - Dec 2019</div>
            </div>
            <div className="flex items-center gap-0.5 text-gray-400">
              <MapPin size={11} />
              <span className="text-xs">Seoul, South Korea</span>
            </div>
            <div className="text-gray-600 mt-1">Web Developer</div>
          </li>
        </ul>
      </section>

      <section className="pl-4 absolute right-0 left-0 top-96">
        <div className="carousel space-x-4 p-4 h-64">
          {myStory.map((myStory) => {
            return (
              <div
                key={myStory.title}
                className="carousel-item transition-transform duration-300 ease-in-out transform hover:-translate-y-4 cursor-pointer"
                onClick={() => handleClickCarouselItem(myStory)}>
                <Image
                  src={myStory.src}
                  width={220}
                  height={100}
                  alt={myStory.title}
                  className="object-cover shadow-md rounded-box"
                />
              </div>
            );
          })}
        </div>
      </section>
      <Modal selectedStory={selectedStory} />
    </main>
  );
}

function Modal({
  selectedStory,
}: {
  selectedStory: (typeof myStory)[0] | null;
}) {
  if (!selectedStory) return null;

  return (
    <dialog id="picture_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="w-full h-72 relative mb-8">
          <Image
            src={selectedStory.src}
            objectFit="contain"
            fill
            alt={selectedStory.title}
          />
        </div>
        <h3 className="font-bold text-lg mb-2">{selectedStory.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: selectedStory.content }} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
