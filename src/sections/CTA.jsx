
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/20 via-[#111024] to-blue-600/20 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            Your next chapter starts here
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to transform the way you work?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-400 sm:text-lg">
            Join the next generation of productive teams.
            Start exploring NovaFlow today.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:brightness-110"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Free to start · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
