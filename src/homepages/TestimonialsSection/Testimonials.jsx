import TestimonialItem from "./TestimonialItem";
import SectionTitle from "../../ui/SectionTitle";
import users from "../../utils/users";

function Testimonials() {
  const groupUsers = [users.slice(0, 3), users.slice(3, 7), users.slice(7, 10)];

  return (
    <section className="bg-violet-50 px-10 py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 dark:bg-violet-950">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
        <SectionTitle>Users feedback</SectionTitle>
        <p className="font-lg mx-auto max-w-[65%] text-center text-base font-light text-slate-600 md:text-lg lg:text-xl dark:text-slate-400">
          Hear from travelers who've experienced the StayEase difference. Their
          stories showcase how we're transforming the way people book and enjoy
          their accommodations.
        </p>
        <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-3 lg:grid-cols-testimonial">
          {groupUsers.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-8">
              {group.map((user, index) => (
                <TestimonialItem
                  name={user.name}
                  feedback={user.feedback}
                  title={user.title}
                  avatar={user.avatar}
                  key={`${groupIndex}-${index}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
