import FeatureItem from "./FeatureItem";
import SectionTitle from "../../ui/SectionTitle";
import features from "../../utils/features";

function Features() {
  return (
    <section
      className="bg-violet-100 px-10 py-10 md:px-12 md:py-12 lg:px-16 lg:py-16"
      id="features"
    >
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
        <SectionTitle>Our Best Features</SectionTitle>
        <p className="font-lg mx-auto max-w-[65%] text-center text-base font-light text-slate-600 md:text-lg lg:text-xl">
          Discover the unique features that make StayEase your perfect travel
          companion. From smart searches to personalized recommendations, we've
          got your journey covered.
        </p>
        <ul className="grid grid-cols-auto-fit gap-4">
          {features.map((feature) => (
            <FeatureItem
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              key={feature.key}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
