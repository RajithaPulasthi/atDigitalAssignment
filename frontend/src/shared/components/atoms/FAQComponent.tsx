import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const defaultFAQs: FAQ[] = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
];

const FAQComponent = () => {
  const [faqs] = useState(defaultFAQs);
  const [activeFAQ, setActiveFAQ] = useState("");

  const handleToggleFAQ = (question: string) => {
    if (activeFAQ === question) {
      setActiveFAQ("");
    } else {
      setActiveFAQ(question);
    }
  };

  return (
    <div className="xl:max-w-6xl mx-auto p-4 lg:p-6 m-10 font-inter">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 bg-accent1 w-full max-w-2xl mx-auto p-4  "
        >
          <button
            className="flex justify-between w-full text-left text-[22px] font-medium"
            onClick={() => handleToggleFAQ(faq.question)}
          >
            <span
              className={`${
                activeFAQ === faq.question ? "text-primary" : "text-textColor"
              }`}
            >
              {faq.question}
            </span>
            <span
              className={`text-lg ${
                activeFAQ === faq.question ? "text-red-500" : "text-gray-500"
              }`}
            >
              {activeFAQ === faq.question ? "-" : "+"}
            </span>
          </button>
          {activeFAQ === faq.question && (
            <p className="text-base mt-2 text-textColorLight font-normal">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
