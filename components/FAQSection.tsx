import React from "react";
import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";

const faqs = [
  {
    id: 1,
    question: "What types of cleaning services do you offer?",
    answer:
      "We provide residential and commercial cleaning services, including regular cleaning, deep cleaning, move-in/move-out cleaning, office cleaning, and customized cleaning solutions based on your needs.",
  },
  {
    id: 2,
    question: "Do I need to provide cleaning supplies or equipment?",
    answer:
      "No. Our team arrives fully equipped with professional tools and high-quality cleaning products. If you prefer eco-friendly or specific products, please let us know in advance.",
  },
  {
    id: 3,
    question: "How can I book a cleaning service?",
    answer:
      "You can book online through our website, request a free quote, or contact us directly by phone or email. Our team will confirm the details and schedule a convenient time.",
  },
  {
    id: 4,
    question: "Can I choose a one-time cleaning or a recurring service?",
    answer:
      "Yes. We offer both one-time cleanings and recurring schedules (weekly, bi-weekly, or monthly), depending on your preferences.",
  },
  {
    id: 5,
    question: "How long does a cleaning session usually take?",
    answer:
      "The duration depends on the size of the space and the type of service requested. We provide an estimated time during the booking process.",
  },
  {
    id: 6,
    question: "How is the price calculated?",
    answer:
      "Pricing is based on factors such as property size, type of cleaning, level of detail required, and frequency. We provide transparent pricing with no hidden fees.",
  },
  {
    id: 7,
    question: "Are there any long-term contracts?",
    answer:
      "No. Our services are flexible, and you can modify or cancel your bookings at any time.",
  },
  {
    id: 8,
    question: "What payment methods do you accept?",
    answer:
      "We accept cash and major electronic payment methods. Specific options will be confirmed during booking.",
  },
  {
    id: 9,
    question: "Are your cleaners trained and insured?",
    answer:
      "Yes. All our staff are professionally trained, background-checked, and fully insured to ensure your safety and peace of mind.",
  },
  {
    id: 10,
    question: "Do I need to be present during the cleaning?",
    answer:
      "No. You can choose to be present or provide access instructions. Our team will treat your space with respect and confidentiality.",
  },
  {
    id: 11,
    question: "What if I’m not satisfied with the service?",
    answer:
      "Customer satisfaction is our priority. If you’re not satisfied, contact us within 24 hours and we’ll address the issue promptly.",
  },
  {
    id: 12,
    question: "Do you offer eco-friendly cleaning options?",
    answer:
      "Yes. Upon request, we can use environmentally friendly products that are safe for children and pets.",
  },
];

function FaqSection() {
  return (
    <SectionContainer>
      <SectionTitle title="Frequently Asked Questions" />
      <div className="flex flex-col gap-3">
        {faqs.map((faq) => (
          <div key={faq.id} className="flex flex-col gap-1">
            <input
              type="radio"
              name="faq"
              id={`check-${faq.id}`}
              hidden
              defaultChecked={faq.id === 1}
              className="peer"
            />
            <label
              htmlFor={`check-${faq.id}`}
              className="text-xs font-medium text-body2"
            >
              {faq.question}
            </label>
            <p className="hidden text-xs font-light text-body2 peer-checked:block">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default FaqSection;
