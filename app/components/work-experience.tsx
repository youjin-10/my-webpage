import { Briefcase, MapPin } from "lucide-react";

export default function WorkExperience() {
  return (
    <section className="mb-24 max-w-xl">
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
          <div className="flex items-center gap-0.5 text-gray-500">
            <MapPin size={11} />
            <span className="text-xs">Seoul, South Korea</span>
          </div>
          <div className="text-base-content mt-1">Frontend Developer</div>
        </li>
        <li className="mb-4">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Trediy</div>
            <div className="text-sm text-gray-500">July 2021 - Dec 2021</div>
          </div>
          <div className="flex items-center gap-0.5 text-gray-500">
            <MapPin size={11} />
            <span className="text-xs">Seoul, South Korea</span>
          </div>
          <div className="text-base-content mt-1">Frontend Developer</div>
        </li>
        <li className="mb-4">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Hakyung Software</div>
            <div className="text-sm text-gray-500">Nov 2018 - Dec 2019</div>
          </div>
          <div className="flex items-center gap-0.5 text-gray-500">
            <MapPin size={11} />
            <span className="text-xs">Seoul, South Korea</span>
          </div>
          <div className="text-base-content mt-1">Web Developer</div>
        </li>
      </ul>

      <div className="mb-12 text-sm text-base-content border border-dashed p-3 rounded-xl">
        My resume is{" "}
        <a
          href="https://drive.google.com/file/d/10e7KYOD2bSTcJ9uqPw_At-2V6JeKVVVx/view?usp=sharing"
          target="_blank"
          className="link link-accent">
          here
        </a>
        .
      </div>
    </section>
  );
}
