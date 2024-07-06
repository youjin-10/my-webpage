import CopyButton from "@/app/components/ui/copy-button";
import { MY_EMAIL } from "@/app/constants";

export default function AboutMeBrief() {
  return (
    <section className="mb-96">
      <h1 className="text-3xl font-bold mb-4">Youjin Lee</h1>
      <p className="max-w-xl leading-7 mb-4">
        I am a dedicated frontend developer with a background in international
        business, leveraging my experience in communication and problem-solving
        to create user-friendly interfaces that make a positive impact.
      </p>
      <p>
        If you would like to get in touch, send me an email
        <span>({MY_EMAIL})</span>
        <CopyButton textToCopy={MY_EMAIL} />
      </p>
    </section>
  );
}
