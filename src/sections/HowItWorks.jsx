
import { ArrowDown, ArrowRight, Check, MousePointer2, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer2,
    title: "Create Your Account",
    description:
      "Sign up in seconds and get access to your personalized workspace.",
    details: ["Quick setup", "No complex configuration"],
  },
  {
    number: "02",
    icon: Settings2,
    title: "Customize Your Workflow",
    description:
      "Choose your tools, adjust your settings, and make the platform yours.",
    details: ["Flexible settings", "Easy integrations"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "Start working smarter, track your progress, and reach your goals.",
    details: ["Track performance", "Improve productivity"],
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Simple Process
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Up and running in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              three steps
            </span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400 sm:text-lg">
            Get started easily and transform the way you work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="group h-full rounded-2xl border border-white/10 bg-[#0d0d1a]/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_60px_-25px_rgba(99,102,241,0.3)]">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={27} />
                    </div>

                    <span className="text-4xl font-bold text-white/10">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mb-7 leading-7 text-gray-400">
                    {step.description}
                  </p>

                  <div className="space-y-3 border-t border-white/10 pt-5">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <Check size={16} className="text-violet-400" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={22}
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-violet-400 md:block"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
