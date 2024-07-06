import { useState } from "react";
import Image from "next/image";
import { MY_STORY } from "@/app/constants";
import MyStoryModal from "@/app/components/my-story-modal";

export default function MyStory() {
  // could've used useRef
  // but useState here does not have a huge impact on performance
  const [selectedStory, setSelectedStory] = useState<
    (typeof MY_STORY)[0] | null
  >(null);
  const handleClickCarouselItem = (selectedStory: (typeof MY_STORY)[0]) => {
    setSelectedStory(selectedStory);

    const modal = document.getElementById("picture_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <section className="pl-4 absolute right-0 left-0 top-96">
        <div className="carousel space-x-4 p-4 h-64">
          {MY_STORY.map((myStory) => {
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

      <MyStoryModal selectedStory={selectedStory} />
    </>
  );
}
