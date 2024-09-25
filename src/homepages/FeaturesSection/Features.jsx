import FeatureItem from "./FeatureItem";
import SectionTitle from "../../ui/SectionTitle";
import features from "../../utils/features";

function Features() {
  return (
    <div className="bg-violet-100 px-16 py-16">
      <div className="flex flex-col gap-10">
        <SectionTitle>Our Best Features</SectionTitle>
        <p className="font-lg mx-auto max-w-[65%] text-center text-xl font-light text-slate-600">
          Discover the unique features that make StayEase your perfect travel
          companion. From smart searches to personalized recommendations, we've
          got your journey covered.
        </p>
        <ul className="grid-cols-auto-fit grid gap-4">
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
    </div>
  );
}

export default Features;
