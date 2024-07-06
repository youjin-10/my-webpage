import { useRef, useState } from "react";
import Image from "next/image";
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
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <section className="absolute right-0 left-0 top-96">
        <div className="carousel space-x-4 p-4 h-64">
          {MY_STORY.map((myStory) => {
            return (
              <div
                key={myStory.title}
                className="carousel-item transition-transform duration-300 ease-in-out transform hover:-translate-y-4 cursor-pointer"
                onClick={() => handleClickCarouselItem(myStory)}>
                <Image
                  priority
                  src={myStory.src}
                  width={220}
                  height={220}
                  alt={myStory.title}
                  className="object-cover shadow-md rounded-box"
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
