
import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const questions = [
  {
    question: "What is NovaFlow?",
    answer:
      "NovaFlow is a productivity platform designed to help individuals and teams organize projects, track progress, and work more efficiently.",
  },
  {
    question: "Can I use NovaFlow for free?",
    answer:
      "Yes! You can start with our free plan and explore the core features before deciding whether to upgrade.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription whenever you want. There are no long-term commitments in this demo.",
  },
  {
    question: "Is NovaFlow suitable for teams?",
    answer:
      "Yes. NovaFlow is designed for individuals, startups, and teams that want to organize their work in one place.",
  },
  {
    question: "Do I need technical knowledge to get started?",
    answer:
      "Not at all. The interface is designed to be simple and intuitive, so you can get started without coding skills.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <MessageCircle size={16} />
            FAQ
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Got questions?
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              We've got answers.
            </span>
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-gray-400">
            Everything you need to know about NovaFlow.
            Can't find what you're looking for? Get in touch
            with our team.
          </p>

          <a
            href="mailto:hello@novaflow.example"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-500/40 hover:bg-white/10"
          >
            Contact Support
          </a>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-violet-500/40 bg-violet-500/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="font-medium text-white">
                    {item.question}
                  </span>

                  <span className="shrink-0 text-violet-400">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-gray-400 sm:px-6 sm:pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
