"use client";

import { useRef, useState } from "react";
import { MY_STORY } from "@/app/constants";
import MyStoryModal from "@/app/components/my-story-modal";

export default function MyStory() {
  const [selectedStory, setSelectedStory] = useState<
    (typeof MY_STORY)[0] | null
  >(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClickCarouselItem = (selectedStory: (typeof MY_STORY)[0]) => {
    setSelectedStory(selectedStory);

    if (modalRef.current) {
      setTimeout(() => {
        modalRef.current?.showModal();
      }, 100);
    }
  };

  return (
    <>
      <section className="mb-24">
        <p className="text-accent">👇 Click images to see my story</p>
        <div className="carousel space-x-4 py-4 h-64">
          {MY_STORY.map((myStory) => {
            return (
              <div
                key={myStory.title}
                className="carousel-item basis-64 cursor-pointer"
                onClick={() => handleClickCarouselItem(myStory)}>
                <img
                  src={myStory.src}
                  alt={myStory.title}
                  className="object-cover w-full shadow-md rounded-box"
                />
              </div>
            );
          })}
        </div>
      </section>

      <MyStoryModal mRef={modalRef} selectedStory={selectedStory} />
    </>
  );
}
