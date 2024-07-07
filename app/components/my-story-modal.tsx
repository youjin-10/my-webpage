import Image from "next/image";
import { MY_STORY } from "@/app/constants";

type MyStoryModalProps = {
  selectedStory: (typeof MY_STORY)[0] | null;
  mRef: React.Ref<HTMLDialogElement>;
};

export default function MyStoryModal({
  selectedStory,
  mRef,
}: MyStoryModalProps) {
  if (!selectedStory) return null;

  return (
    <dialog
      id="picture_modal"
      ref={mRef}
      className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-h-[80%]">
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
