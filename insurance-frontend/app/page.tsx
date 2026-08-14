const features = [
  {
    number: "01",
    title: "Tell us about yourself",
    description:
      "Enter a few profile details such as age, BMI, smoking status, dependents and region.",
  },
  {
    number: "02",
    title: "AI analyzes your profile",
    description:
      "Our trained machine learning model processes your information and identifies relevant patterns.",
  },
  {
    number: "03",
    title: "Get your estimate",
    description:
      "Receive an estimated medical insurance charge in seconds through our prediction engine.",
  },
];

const profileFeatures = [
  ["Age", "32 years"],
  ["BMI", "27.4"],
  ["Gender", "Male"],
  ["Children", "1 dependent"],
  ["Smoking", "Non-smoker"],
  ["Region", "Southeast"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#111111]">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
              <span className="text-lg">✦</span>
            </div>

            <span className="text-xl font-semibold tracking-[-0.04em]">
              InsureAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-black/60 md:flex">
            <a
              href="#how-it-works"
              className="transition hover:text-black"
            >
              How it works
            </a>

            <a href="#features" className="transition hover:text-black">
              Features
            </a>

            <a href="#model" className="transition hover:text-black">
              Model
            </a>

            <a href="#about" className="transition hover:text-black">
              About
            </a>
          </div>

          {/* CTA */}
          <a
            href="/predict"
            className="rounded-full bg-[#f4c453] px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-[#eab746]"
          >
            Predict Cost <span className="ml-1">↗</span>
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative">
        {/* Decorative background */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d7c1ff]/30 blur-3xl" />

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          {/* Hero copy */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-black/60">
              <span className="h-2 w-2 rounded-full bg-[#f4c453]" />
              AI-POWERED INSURANCE ESTIMATION
            </div>

            <h1 className="max-w-4xl text-[clamp(3.5rem,7vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.075em]">
              A smarter way to estimate your{" "}
              <span className="relative inline-block">
                insurance cost.
                <span className="absolute -bottom-2 left-1 h-3 w-[92%] rounded-full bg-[#f4c453]/70" />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/55">
              InsureAI uses machine learning to estimate medical insurance
              charges from your personal profile — simply, quickly and
              transparently.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/predict"
                className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-black/85"
              >
                Predict My Cost <span className="ml-2">→</span>
              </a>

              <a
                href="#how-it-works"
                className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-black/30"
              >
                How it works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-black/45">
              <span>✓ Machine learning powered</span>
              <span>✓ Instant estimation</span>
              <span>✓ Profile based</span>
            </div>
          </div>

          {/* ================= PREDICTION VISUAL ================= */}
          <div className="relative mx-auto w-full max-w-[540px]">
            {/* Floating card */}
            <div className="absolute -right-3 -top-8 z-20 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-xl shadow-black/5">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-black/40">
                MODEL STATUS
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold">
                  Ready to predict
                </span>
              </div>
            </div>

            {/* Main dashboard */}
            <div className="rounded-[32px] bg-[#0b0b0c] p-3 shadow-2xl shadow-black/20">
              <div className="rounded-[25px] bg-[#151518] p-7 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-[0.18em] text-white/40">
                      INSUREAI
                    </p>

                    <p className="mt-2 text-sm text-white/60">
                      AI cost estimation
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4c453] text-black">
                    ✦
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm text-white/40">
                    Estimated charges
                  </p>

                  <div className="mt-2 text-5xl font-medium tracking-[-0.06em] sm:text-6xl">
                    $4,722
                    <span className="text-white/40">.12</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="text-white/60">
                      Estimated from your profile
                    </span>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="mt-10 flex h-24 items-end gap-2">
                  {[28, 42, 35, 56, 48, 72, 63, 82, 70, 91, 76, 95].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-[#f4c453]/80"
                        style={{ height: `${height}%` }}
                      />
                    ),
                  )}
                </div>

                {/* Profile */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    ["Age", "32"],
                    ["BMI", "27.4"],
                    ["Smoking", "No"],
                    ["Region", "Southeast"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-xs text-white/35">{label}</p>

                      <p className="mt-2 text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Small floating AI badge */}
            <div className="absolute -bottom-8 -left-7 rounded-2xl bg-[#c9a4ff] px-5 py-4 shadow-xl">
              <p className="text-xs font-semibold text-black/50">
                POWERED BY
              </p>

              <p className="mt-1 text-sm font-semibold">
                Random Forest ML
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-black/10 lg:grid-cols-4">
          {[
            ["6", "Profile inputs"],
            ["ML", "Prediction engine"],
            ["Fast", "API inference"],
            ["1-click", "Cost estimation"],
          ].map(([value, label]) => (
            <div key={label} className="px-6 py-10 lg:px-10">
              <p className="text-3xl font-medium tracking-[-0.05em]">
                {value}
              </p>

              <p className="mt-2 text-sm text-black/45">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-black/40">
              HOW IT WORKS
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.06em] lg:text-6xl">
              From your profile to an estimate in seconds.
            </h2>
          </div>

          <div className="grid gap-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-[28px] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-black/30">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-black/50">
                      {feature.description}
                    </p>
                  </div>

                  <div className="ml-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition group-hover:rotate-45 sm:flex">
                    ↗
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section
        id="features"
        className="bg-black px-6 py-28 text-white lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] text-white/40">
                YOUR PROFILE
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.06em] lg:text-6xl">
                Simple inputs.
                <br />
                Meaningful prediction.
              </h2>

              <p className="mt-7 max-w-md leading-7 text-white/45">
                InsureAI considers several profile attributes to generate an
                estimated medical insurance charge.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {profileFeatures.map(([label, value], index) => (
                <div
                  key={label}
                  className={`min-h-[180px] rounded-[26px] p-6 ${
                    index === 1
                      ? "bg-[#f4c453] text-black"
                      : index === 4
                        ? "bg-[#c9a4ff] text-black"
                        : "bg-white/[0.07] text-white"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.14em] opacity-50">
                    {label.toUpperCase()}
                  </p>

                  <p className="mt-12 text-xl font-medium tracking-[-0.03em]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODEL ================= */}
      <section
        id="model"
        className="bg-[#f7f5ef] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[36px] bg-[#e8e0d1] p-8 sm:p-12 lg:p-16">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold tracking-[0.15em] text-black/40">
                  THE PREDICTION ENGINE
                </p>

                <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.06em] lg:text-6xl">
                  Machine learning behind a simple experience.
                </h2>

                <p className="mt-7 max-w-lg leading-7 text-black/55">
                  A trained Random Forest regression model powers the
                  prediction while FastAPI handles real-time inference between
                  the model and the frontend.
                </p>

                <a
                  href="/predict"
                  className="mt-8 inline-flex rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
                >
                  Try the model →
                </a>
              </div>

              <div className="rounded-[28px] bg-[#0b0b0c] p-7 text-white">
                <div className="space-y-3">
                  {[
                    ["01", "User profile"],
                    ["02", "Feature processing"],
                    ["03", "Random Forest model"],
                    ["04", "FastAPI inference"],
                    ["05", "Estimated charges"],
                  ].map(([number, title], index) => (
                    <div key={number}>
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <span className="text-xs text-white/30">
                          {number}
                        </span>

                        <span className="text-sm font-medium">
                          {title}
                        </span>

                        {index < 4 && (
                          <span className="ml-auto text-white/25">
                            ↓
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section
        id="about"
        className="px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] text-black/40">
                WHY INSUREAI
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.06em] lg:text-6xl">
                Insurance estimation, without the complexity.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[26px] bg-[#f4c453] p-7">
                <div className="text-3xl">⚡</div>

                <h3 className="mt-16 text-xl font-medium">
                  Instant
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  Get a prediction without manually calculating your profile.
                </p>
              </div>

              <div className="rounded-[26px] bg-[#c9a4ff] p-7">
                <div className="text-3xl">✦</div>

                <h3 className="mt-16 text-xl font-medium">
                  AI powered
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  Predictions are generated using a trained ML model.
                </p>
              </div>

              <div className="rounded-[26px] bg-black p-7 text-white">
                <div className="text-3xl">◌</div>

                <h3 className="mt-16 text-xl font-medium">
                  Transparent
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Understand the profile factors used for your estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-black px-7 py-20 text-center text-white sm:px-12">
          <p className="text-sm font-semibold tracking-[0.15em] text-white/40">
            READY TO ESTIMATE?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
            Curious what your insurance cost could look like?
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-white/45">
            Enter your profile and get an AI-powered estimate in seconds.
          </p>

          <a
            href="/predict"
            className="mt-9 inline-flex rounded-full bg-[#f4c453] px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffd66d]"
          >
            Predict My Cost →
          </a>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="rounded-2xl border border-black/10 bg-white p-5 text-sm leading-6 text-black/45">
          <strong className="text-black/70">
            Disclaimer:
          </strong>{" "}
          InsureAI provides machine-learning-based estimates for educational
          and informational purposes only. Predictions are not official
          insurance quotes and should not be considered financial, medical, or
          insurance advice.
        </div>
      </section>

      {/* ================= FOOTER ================= */}
<footer className="bg-black text-white">
  <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-24 lg:px-10">
    {/* Footer Content */}
    <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
      
      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
            ✦
          </div>

          <span className="text-2xl font-bold tracking-tight">
            InsureAI
          </span>
        </div>

        <p className="mt-7 max-w-md text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
          AI-powered insurance cost estimation built to make medical
          insurance predictions simpler, faster, and more transparent.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex gap-3">
          <a
            href="https://github.com/Mr-Suraj1/Insurance-Cost-Prediction-Model"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xs font-medium transition hover:border-white hover:bg-white hover:text-black"
          >
            GH
          </a>

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm transition hover:border-white hover:bg-white hover:text-black"
          >
            in
          </a>

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm transition hover:border-white hover:bg-white hover:text-black"
          >
            X
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
        
        {/* Product */}
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            Product
          </p>

          <div className="space-y-5 text-sm text-white/60">
            <a
              href="/predict"
              className="block transition hover:text-white"
            >
              Predict Cost
            </a>

            <a
              href="#how-it-works"
              className="block transition hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#features"
              className="block transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#model"
              className="block transition hover:text-white"
            >
              Model
            </a>
          </div>
        </div>

        {/* Project */}
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            Project
          </p>

          <div className="space-y-5 text-sm text-white/60">
            <a
              href="#about"
              className="block transition hover:text-white"
            >
              About InsureAI
            </a>

            <a
              href="#model"
              className="block transition hover:text-white"
            >
              Technology
            </a>

            <a
              href="https://github.com/Mr-Suraj1/Insurance-Cost-Prediction-Model"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://github.com/Mr-Suraj1/Insurance-Cost-Prediction-Model"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Connect */}
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            Connect
          </p>

          <div className="space-y-5 text-sm text-white/60">
            <a
              href="https://github.com/Mr-Suraj1"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              Developer
            </a>

            <a
              href="https://github.com/Mr-Suraj1/Insurance-Cost-Prediction-Model"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              Source Code
            </a>

            <a
              href="https://github.com/Mr-Suraj1"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-20 border-t border-white/10" />

    {/* Giant Brand Text */}
    <div className="relative mt-12 overflow-hidden">
      <div className="select-none whitespace-nowrap text-center text-[clamp(5rem,15vw,14rem)] font-black leading-[0.75] tracking-[-0.09em] text-white/[0.045]">
        InsureAI
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © 2026 InsureAI. All rights reserved.
      </p>

      <div className="flex flex-wrap gap-4">
        <span>Next.js</span>
        <span>•</span>
        <span>FastAPI</span>
        <span>•</span>
        <span>Machine Learning</span>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}