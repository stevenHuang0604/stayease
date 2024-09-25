import SectionTitle from "../../ui/SectionTitle";
import users from "../../utils/users";
import TestimonialItem from "./TestimonialItem";

function Testimonials() {
  const groupUsers = [users.slice(0, 3), users.slice(3, 7), users.slice(7, 10)];

  return (
    <section className="bg-violet-50 px-16 py-16">
      <div className="flex flex-col gap-10">
        <SectionTitle>User feedback</SectionTitle>
        <p className="font-lg mx-auto max-w-[65%] text-center text-xl font-light text-slate-600">
          Hear from travelers who've experienced the StayEase difference. Their
          stories showcase how we're transforming the way people book and enjoy
          their accommodations.
        </p>
        <div className="grid grid-cols-3 gap-8">
          {groupUsers.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-8">
              {group.map((user) => (
                <TestimonialItem
                  name={user.name}
                  feedback={user.feedback}
                  title={user.title}
                  avatar={user.avatar}
                  key={self.crypto.randomUUID()}
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
