
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Product Designer",
    initials: "AM",
    color: "from-violet-500 to-indigo-500",
    text: "NovaFlow completely changed how I organize my work. Everything feels faster, cleaner, and easier to manage.",
  },
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    initials: "SC",
    color: "from-blue-500 to-cyan-500",
    text: "The interface is beautiful and the workflow tools save our team so much time. It quickly became part of our daily routine.",
  },
  {
    name: "James Wilson",
    role: "Marketing Manager",
    initials: "JW",
    color: "from-fuchsia-500 to-violet-500",
    text: "Having our projects and analytics in one place makes collaboration much easier. The experience feels refreshingly simple.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-6 py-28"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Customer Stories
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Loved by teams that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              get things done
            </span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400 sm:text-lg">
            See how teams use NovaFlow to simplify their work
            and stay focused on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <Quote
                  size={30}
                  className="text-violet-400/40 transition-colors group-hover:text-violet-400"
                />
              </div>

              <p className="mb-8 min-h-28 leading-7 text-gray-300">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-sm font-bold text-white`}
                >
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-gray-400">
          <div>
            <span className="text-lg font-bold text-white">10k+</span>{" "}
            Happy Users
          </div>
          <div>
            <span className="text-lg font-bold text-white">4.9/5</span>{" "}
            Demo Rating
          </div>
          <div>
            <span className="text-lg font-bold text-white">24/7</span>{" "}
            Support
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
