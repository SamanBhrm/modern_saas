
const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28 lg:pb-32 lg:pt-36"
    >
      {/* Background glow */}
      <div className="ambient-glow pointer-events-none absolute left-1/2 top-10 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Hero content */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            Meet the future of productivity
            <span aria-hidden="true"> ✨</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl">
            Work smarter.
            <br />
            <span className="animated-gradient bg-gradient-to-r from-violet-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              Build faster.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Bring your team, projects, and ideas together in one powerful
            workspace. NovaFlow helps you do more with less effort.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
            >
              Start for free
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Explore features
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <span>✓ Free to get started</span>
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/30 via-blue-500/20 to-fuchsia-600/30 opacity-70 blur-xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d1a] shadow-2xl shadow-violet-950/40">
            {/* Fake browser bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-gray-500">app.novaflow.io</span>
              <span className="text-xs text-gray-500">•••</span>
            </div>

            <div className="grid min-h-[360px] md:grid-cols-[190px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 p-5 md:block">
                <div className="mb-8 flex items-center gap-2 font-bold text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-600">
                    N
                  </span>
                  NovaFlow
                </div>

                <p className="mb-3 text-xs uppercase tracking-wider text-gray-600">
                  Workspace
                </p>

                {["Overview", "My Projects", "Tasks", "Analytics"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`mb-2 rounded-lg px-3 py-2.5 text-sm ${
                        index === 0
                          ? "bg-violet-500/15 text-violet-300"
                          : "text-gray-500"
                      }`}
                    >
                      <span className="mr-2">
                        {["◈", "▦", "✓", "↗"][index]}
                      </span>
                      {item}
                    </div>
                  )
                )}
              </aside>

              {/* Dashboard main area */}
              <div className="p-5 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Monday, October 19</p>
                    <h2 className="mt-1 text-2xl font-bold text-white">
                      Welcome back, Alex 👋
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
                  >
                    + New project
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      label: "Total Projects",
                      value: "24",
                      change: "+12%",
                    },
                    {
                      label: "Tasks Completed",
                      value: "186",
                      change: "+18%",
                    },
                    {
                      label: "Productivity",
                      value: "94%",
                      change: "+8%",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="float-card rounded-xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <div className="mt-3 flex items-end justify-between gap-2">
                        <span className="text-3xl font-bold text-white">
                          {stat.value}
                        </span>
                        <span className="text-sm text-emerald-400">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity */}
                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">
                      Recent activity
                    </h3>
                    <span className="text-xs text-violet-300">View all →</span>
                  </div>

                  <div className="mt-5 space-y-5">
                    {[
                      {
                        title: "Website redesign",
                        detail: "Design team · 2 hours ago",
                        progress: "w-[85%]",
                        color: "bg-violet-500",
                      },
                      {
                        title: "Mobile app development",
                        detail: "Development team · 4 hours ago",
                        progress: "w-[60%]",
                        color: "bg-blue-500",
                      },
                      {
                        title: "Marketing campaign",
                        detail: "Marketing team · Yesterday",
                        progress: "w-[40%]",
                        color: "bg-fuchsia-500",
                      },
                    ].map((project) => (
                      <div
                        key={project.title}
                        className="grid gap-3 sm:grid-cols-[1fr_1.2fr] sm:items-center"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-200">
                            {project.title}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {project.detail}
                          </p>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <div
                            className={`h-full rounded-full ${project.color} ${project.progress}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-600">
            A better way to manage your work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
