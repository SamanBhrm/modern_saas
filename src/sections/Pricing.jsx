
import { Check, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started.",
    price: "0",
    period: "forever",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "Core integrations",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    description: "For people ready to grow.",
    price: "19",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Team collaboration",
    ],
    button: "Start Free Trial",
    featured: true,
  },
  {
    name: "Business",
    description: "For teams that need more.",
    price: "49",
    period: "per month",
    features: [
      "Everything in Pro",
      "Custom workflows",
      "Advanced permissions",
      "Dedicated support",
      "Custom reports",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Simple Pricing
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Plans that grow with{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              your ambitions
            </span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400 sm:text-lg">
            Start for free and upgrade whenever you are ready.
            No complicated plans, just what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-violet-500/60 bg-gradient-to-b from-violet-500/15 to-[#0d0d1a] shadow-[0_0_50px_-20px_rgba(139,92,246,0.45)] md:scale-105"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  <Sparkles size={14} />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    ${plan.price}
                  </span>

                  <span className="text-sm text-gray-400">
                    / {plan.period}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert(`${plan.name} plan selected!`)
                }
                className={`mb-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:brightness-110"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.button}
                <ArrowRight size={17} />
              </button>

              <div className="mb-5 text-sm font-medium text-white">
                What's included
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          These are demo prices for the project. No real payments are processed.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
