import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="2" text="Mobile Apps" />
      </div>
      <p className="text-center">
        With 1 year of experience wireframing and designing dynamic and
        user-friendly mobile and web applications and also 6 months of
        experience building mobile apps with flutter.
      </p>
      <ExperienceInfo number="" text="" />
    </div>
  );
};

export default ExperienceTopLeft;
