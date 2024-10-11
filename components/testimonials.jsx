import { feedback } from "@/data";
import { FeedbackCard } from "./card";

export default function Testimonials() {
  return (
    <div className="bg-white p-3 md:p-8 lg:p-[100px] w-full">
      <Feedback />
    </div>
  );
}

export function Feedback() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {feedback.map((item) => (
        <FeedbackCard
          key={item.name}
          image={item.image}
          name={item.name}
          job={item.job}
          message={item.message}
        />
      ))}
    </div>
  );
}
