
import {Zap,BarChart3,ShieldCheck,Sparkles,Users,Workflow,} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience incredible speed and optimize your workflow with powerful tools.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Track your performance with real-time insights and beautiful analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Keep your data protected with reliable security and privacy controls.",
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    description:
      "Automate repetitive tasks and focus on the work that matters most.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Bring your team together and collaborate seamlessly in one workspace.",
  },
  {
    icon: Workflow,
    title: "Easy Integration",
    description:
      "Connect your favorite tools and build a smoother workflow.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Powerful Features
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              work smarter
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg">
            Powerful tools designed to help you save time, improve
            productivity, and achieve more every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.06]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-500/20">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
