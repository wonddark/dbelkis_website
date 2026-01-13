import React from "react";
import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";
import Card from "@/components/Card";

const reviews = [
  {
    id: 1,
    author: "Jean Claude",
    date: "Jan 2026",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc" +
      " vulputate libero et velit interdum, ac aliquet odio mattis. Class" +
      " aptent taciti sociosqu ad litora torquent per conubia nostra, per" +
      " inceptos himenaeos.",
  },
  {
    id: 2,
    author: "Jean Claude",
    date: "Jan 2026",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc" +
      " vulputate libero et velit interdum, ac aliquet odio mattis. Class" +
      " aptent taciti sociosqu ad litora torquent per conubia nostra, per" +
      " inceptos himenaeos.",
  },
  {
    id: 3,
    author: "Jean Claude",
    date: "Jan 2026",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc" +
      " vulputate libero et velit interdum, ac aliquet odio mattis. Class" +
      " aptent taciti sociosqu ad litora torquent per conubia nostra, per" +
      " inceptos himenaeos.",
  },
  {
    id: 4,
    author: "Jean Claude",
    date: "Jan 2026",
    content:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc" +
      " vulputate libero et velit interdum, ac aliquet odio mattis. Class" +
      " aptent taciti sociosqu ad litora torquent per conubia nostra, per" +
      " inceptos himenaeos.",
  },
];

function ReviewsSection() {
  return (
    <SectionContainer>
      <SectionTitle title="A Customer Success Story" />
      <div className="flex gap-3 overflow-x-auto py-1">
        {reviews.map((review) => (
          <Card key={review.id}>
            <div className="flex flex-col items-center gap-1">
              <div className="5 flex flex-col items-center gap-0">
                <div className="size-6 rounded-full bg-green-600" />
                <span className="text-[10px] text-body2">
                  {review.author} - {review.date}
                </span>
              </div>
              <span className="text-xs text-accent">★★★★★</span>
            </div>
            <p className="line-clamp-4 text-[13px] italic">{review.content}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ReviewsSection;
