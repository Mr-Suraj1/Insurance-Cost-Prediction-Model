import Link from "next/link";
import PredictionForm from './components/PredictionForm';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#111111]">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
              <span className="text-lg">✦</span>
            </div>

            <span className="text-xl font-semibold tracking-[-0.04em]">
              InsureAI
            </span>
          </Link>

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
<section
  id="hero"
  className="relative overflow-hidden bg-[#f7f5ef]"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute left-[42%] top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d7c1ff]/20 blur-[110px]" />

  <div className="pointer-events-none absolute right-[-120px] top-[15%] h-[350px] w-[350px] rounded-full bg-[#f4c453]/10 blur-[100px]" />

  <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">

    {/* ================= LEFT ================= */}
    <div>

      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute h-full w-full animate-ping rounded-full bg-[#f4c453]/60" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-[#f4c453]" />
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
          AI-powered insurance estimation
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-[clamp(3.8rem,7vw,6.8rem)] font-medium leading-[0.88] tracking-[-0.075em]">
        A smarter way
        <br />
        to estimate your
        <br />

        <span className="relative inline-block">
          insurance cost.
          <span className="absolute -bottom-2 left-0 h-2.5 w-[94%] rounded-full bg-[#f4c453]/80 sm:-bottom-3 sm:h-3" />
        </span>
      </h1>

      {/* Description */}
      <p className="mt-9 max-w-xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
        InsureAI uses machine learning to estimate medical insurance
        charges from your personal profile — simply, quickly and
        transparently.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">

        <a
          href="/predict"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4c453] hover:text-black"
        >
          Predict My Cost

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-black/10">
            ↗
          </span>
        </a>

        <a
          href="#how-it-works"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-black/30"
        >
          How it works
          <span className="text-black/40">↓</span>
        </a>

      </div>

      {/* Trust points */}
      <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-black/45">

        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Machine learning powered
        </span>

        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Fast API inference
        </span>

        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Instant estimation
        </span>

      </div>
    </div>


    {/* ================= RIGHT ================= */}
    <div className="relative mx-auto w-full max-w-[550px]">

      {/* Model Status */}
      <div className="absolute -right-2 -top-7 z-20 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-xl shadow-black/5 sm:-right-5">

        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">
          Model status
        </p>

        <div className="mt-2 flex items-center gap-2">

          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/50" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>

          <span className="text-sm font-semibold">
            Ready to predict
          </span>

        </div>
      </div>


      {/* Main Dashboard */}
      <div className="rounded-[34px] bg-[#09090a] p-3 shadow-2xl shadow-black/20">

        <div className="rounded-[26px] bg-[#151518] p-7 text-white sm:p-8">

          {/* Dashboard header */}
          <div className="flex items-center justify-between">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                INSUREAI
              </p>

              <p className="mt-2 text-sm text-white/55">
                AI cost estimation
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c453] text-black shadow-lg shadow-[#f4c453]/10">
              ✦
            </div>

          </div>


          {/* Sample estimate */}
          <div className="mt-11">

            <div className="flex items-center justify-between">

              <p className="text-sm text-white/35">
                Sample estimate
              </p>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] font-medium uppercase tracking-wider text-white/35">
                Example
              </span>

            </div>

            <div className="mt-3 text-5xl font-medium tracking-[-0.06em] sm:text-6xl">
              $4,722
              <span className="text-white/25">.12</span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-white/45">

              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              Example prediction from a sample profile

            </div>

          </div>


          {/* Chart */}
          <div className="mt-10">

            <div className="flex h-24 items-end gap-2 sm:h-28">

              {[28, 42, 35, 56, 48, 72, 63, 82, 70, 91, 76, 95].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group flex flex-1 items-end"
                  >
                    <div
                      className="w-full rounded-t-md bg-[#f4c453]/70 transition-all duration-500 group-hover:bg-[#f4c453]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                )
              )}

            </div>

            <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.15em] text-white/20">
              <span>Profile</span>
              <span>Prediction</span>
            </div>

          </div>


          {/* Profile cards */}
          <div className="mt-8 grid grid-cols-2 gap-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]">
              <p className="text-[10px] uppercase tracking-wider text-white/30">
                Age
              </p>

              <p className="mt-2 text-lg font-medium">
                32
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]">
              <p className="text-[10px] uppercase tracking-wider text-white/30">
                BMI
              </p>

              <p className="mt-2 text-lg font-medium">
                27.4
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]">
              <p className="text-[10px] uppercase tracking-wider text-white/30">
                Smoking
              </p>

              <p className="mt-2 text-lg font-medium">
                No
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]">
              <p className="text-[10px] uppercase tracking-wider text-white/30">
                Region
              </p>

              <p className="mt-2 text-lg font-medium">
                Southeast
              </p>
            </div>

          </div>


          {/* Model footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">

            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Prediction engine
              </p>

              <p className="mt-1 text-xs font-medium text-white/65">
                Random Forest Regression
              </p>
            </div>

            <div className="rounded-full border border-[#f4c453]/20 bg-[#f4c453]/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-[#f4c453]">
              ML Powered
            </div>

          </div>

        </div>
      </div>


      {/* Floating AI card */}
      <div className="absolute -bottom-7 -left-5 hidden rounded-2xl bg-[#c9a4ff] px-5 py-4 shadow-xl shadow-black/10 sm:block">

        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45">
          Powered by
        </p>

        <p className="mt-1 text-sm font-semibold">
          Random Forest ML
        </p>

      </div>

    </div>
  </div>


  {/* ================= HERO BOTTOM INFO ================= */}
  <div className="relative mx-auto mt-14 max-w-7xl border-t border-black/10 px-6 pt-7 lg:px-10">

    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">

      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
          Engine
        </p>

        <p className="mt-2 text-sm font-semibold">
          Random Forest
        </p>
      </div>


      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
          Backend
        </p>

        <p className="mt-2 text-sm font-semibold">
          FastAPI
        </p>
      </div>


      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
          Inputs
        </p>

        <p className="mt-2 text-sm font-semibold">
          Profile factors
        </p>
      </div>


      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
          Output
        </p>

        <p className="mt-2 text-sm font-semibold">
          Estimated charges
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
        aria-labelledby="how-it-works-heading"
        className="relative overflow-hidden bg-[#f7f5ef] px-6 py-32 lg:px-10"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c9a4ff]/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#f4c453]/15 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
                HOW IT WORKS
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4c453]" aria-hidden="true" />
                <span className="text-sm font-medium text-black/50">Simple. Fast. ML-powered.</span>
              </div>
            </div>

            <div>
              <h2 id="how-it-works-heading" className="max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                From a few details
                <br />
                to a smarter
                <br />
                <span className="text-black/35">cost estimate.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/50">
                InsureAI turns a small set of personal profile inputs into an estimated medical insurance charge using a trained machine learning model.
              </p>
            </div>
          </div>

          {/* Process Cards */}
          <div className="mt-20 grid gap-4 lg:grid-cols-3" role="list" aria-label="How it works steps">

            {/* Card 01 */}
            <article role="listitem" aria-labelledby="how-step-1" className="group relative min-h-[430px] overflow-hidden rounded-[32px] bg-black p-8 text-white transition duration-500 hover:-translate-y-2">

              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-white/35">01</span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c453] text-xl text-black transition duration-500 group-hover:rotate-45" aria-hidden="true">→</div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">PROFILE</p>

                <h3 id="how-step-1" className="text-4xl font-medium leading-[0.95] tracking-[-0.05em]">Tell us<br />about yourself.</h3>

                <p className="mt-6 max-w-sm leading-7 text-white/45">Enter a few details such as age, BMI, gender, smoking status, dependents and region.</p>
              </div>

              {/* Decorative number */}
              <div className="pointer-events-none absolute -bottom-12 -right-5 text-[180px] font-bold leading-none text-white/[0.035]" aria-hidden="true">1</div>
            </article>

            {/* Card 02 */}
            <article role="listitem" aria-labelledby="how-step-2" className="group relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#f4c453] p-8 text-black transition duration-500 hover:-translate-y-2">

              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-black/40">02</span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-white transition duration-500 group-hover:rotate-45" aria-hidden="true">→</div>
              </div>

              {/* Fake AI visualization */}
              <div className="absolute right-8 top-28 flex items-end gap-2 opacity-25" aria-hidden="true">
                <div className="h-12 w-3 rounded-full bg-black" />
                <div className="h-20 w-3 rounded-full bg-black" />
                <div className="h-16 w-3 rounded-full bg-black" />
                <div className="h-28 w-3 rounded-full bg-black" />
                <div className="h-24 w-3 rounded-full bg-black" />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/45">MACHINE LEARNING</p>

                <h3 id="how-step-2" className="text-4xl font-medium leading-[0.95] tracking-[-0.05em]">AI analyzes<br />your profile.</h3>

                <p className="mt-6 max-w-sm leading-7 text-black/55">The trained Random Forest model processes your information and identifies patterns learned from insurance data.</p>
              </div>

              <div className="pointer-events-none absolute -bottom-12 -right-5 text-[180px] font-bold leading-none text-black/[0.06]" aria-hidden="true">2</div>
            </article>

            {/* Card 03 */}
            <article role="listitem" aria-labelledby="how-step-3" className="group relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#c9a4ff] p-8 text-black transition duration-500 hover:-translate-y-2">

              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-black/40">03</span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-white transition duration-500 group-hover:rotate-45" aria-hidden="true">→</div>
              </div>

              {/* Prediction visual */}
              <div className="absolute right-8 top-28 rounded-2xl border border-black/10 bg-white/40 px-5 py-4 backdrop-blur-sm" aria-hidden="true">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">ESTIMATED CHARGE</p>

                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">$4,722</p>

                <div className="mt-2 flex items-center gap-2 text-xs text-black/50">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Prediction ready
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/45">RESULT</p>

                <h3 id="how-step-3" className="text-4xl font-medium leading-[0.95] tracking-[-0.05em]">Get your<br />estimate.</h3>

                <p className="mt-6 max-w-sm leading-7 text-black/55">Receive an estimated medical insurance charge in seconds through the prediction engine.</p>
              </div>

              <div className="pointer-events-none absolute -bottom-12 -right-5 text-[180px] font-bold leading-none text-black/[0.06]" aria-hidden="true">3</div>
            </article>
          </div>

          {/* Bottom statement */}
          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-center">

            <p className="max-w-xl text-sm leading-6 text-black/45">Built with a FastAPI inference layer and a Random Forest regression model for fast, transparent predictions.</p>

            <a
              href="/predict"
              aria-label="Try the prediction"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1"
            >
              Try the prediction
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:rotate-45" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        aria-labelledby="features-heading"
        className="bg-[#f7f5ef] px-6 py-28 lg:px-10 text-black"
      >
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
                WHY INSUREAI
              </p>

              <h2 id="features-heading" className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                Built to make insurance cost estimation simpler.
              </h2>
            </div>

            <div>
              <p className="mt-2 max-w-md text-sm leading-7 text-black/60">
                InsureAI combines machine learning, a fast prediction API, and a simple interface to turn a few personal details into an estimated medical insurance charge.
              </p>
            </div>
          </div>

          {/* Feature cards — asymmetric premium layout */}
          <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-stretch">
            {/* Card 1 — AI-powered estimation (large) */}
            <article role="article" aria-labelledby="feat-1" className="lg:col-span-7 rounded-[28px] border border-black/5 bg-black text-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/40">01</span>
                  <h3 id="feat-1" className="mt-4 text-2xl font-semibold">AI-powered estimation</h3>
                </div>

                <div className="ml-auto flex items-center gap-3">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#f4c453]" aria-hidden="true" />
                  <span className="text-sm text-white/60">Fast • Reliable</span>
                </div>
              </div>

              <p className="mt-6 max-w-xl text-sm text-white/70">Get a fast estimate based on key profile factors using a trained machine learning model.</p>

              {/* Small prediction visual */}
              <div className="mt-6 flex items-center justify-between rounded-xl bg-white/6 p-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/40">Estimated charge</p>
                  <p className="mt-1 text-2xl font-semibold">$4,722</p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-white/40">Confidence</p>
                  <div className="mt-1 h-2 w-24 rounded-full bg-white/10">
                    <div className="h-2 w-14 rounded-full bg-[#f4c453]" />
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2 — Simple profile inputs */}
            <article role="article" aria-labelledby="feat-2" className="lg:col-span-5 rounded-[28px] border border-black/5 bg-[#f4c453] text-black p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-[0.18em] text-black/40">02</span>
                  <h3 id="feat-2" className="mt-4 text-2xl font-semibold">Simple profile inputs</h3>
                </div>

                <div className="ml-auto hidden items-center gap-3 sm:flex" aria-hidden="true">
                  <span className="text-sm text-black/60">Minimal</span>
                </div>
              </div>

              <p className="mt-6 max-w-lg text-sm text-black/70">Provide age, BMI, gender, dependents, smoking status, and region — nothing more.</p>

              {/* Profile chips visual */}
              <div className="mt-6 flex flex-wrap gap-3">
                {['Age','BMI','Gender','Smoking','Region'].map((chip) => (
                  <span key={chip} className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-2 text-sm font-medium">{chip}</span>
                ))}
              </div>
            </article>

            {/* Card 3 — Fast API inference */}
            <article role="article" aria-labelledby="feat-3" className="lg:col-span-5 rounded-[28px] border border-black/5 bg-[#c9a4ff] text-black p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-[0.18em] text-black/40">03</span>
                  <h3 id="feat-3" className="mt-4 text-2xl font-semibold">Fast API inference</h3>
                </div>

                <div className="ml-auto flex items-center gap-3" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-black/60">Online</span>
                </div>
              </div>

              <p className="mt-6 max-w-lg text-sm text-black/70">The FastAPI backend processes prediction requests quickly and keeps the frontend experience responsive.</p>

              <div className="mt-6 rounded-xl border border-black/10 bg-white/30 p-3">
                <p className="text-[10px] uppercase tracking-[0.12em] text-black/50">API STATUS</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-2" />
                    <span className="text-sm font-medium">Online</span>
                  </div>

                  <div className="text-right text-xs text-black/50">
                    <div>FastAPI</div>
                    <div className="mt-1 font-semibold">Prediction ready</div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 4 — Transparent results */}
            <article role="article" aria-labelledby="feat-4" className="lg:col-span-7 rounded-[28px] border border-black/10 bg-white text-black p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-[0.18em] text-black/40">04</span>
                  <h3 id="feat-4" className="mt-4 text-2xl font-semibold">Transparent results</h3>
                </div>

                <div className="ml-auto hidden items-center gap-3 sm:flex" aria-hidden="true">
                  <span className="text-sm text-black/60">Clear • Understandable</span>
                </div>
              </div>

              <p className="mt-6 max-w-lg text-sm text-black/70">See the estimated charge clearly, along with the profile factors used to generate the prediction.</p>

              <div className="mt-6 flex items-center justify-between rounded-xl border border-black/10 bg-[#fff] p-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-black/50">ESTIMATED CHARGE</p>
                  <p className="mt-1 text-2xl font-semibold">$4,722</p>
                </div>

                <div className="text-right text-sm text-black/50">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Prediction ready</span>
                  </div>

                  <div className="mt-2 text-xs text-black/40">Factors: age, BMI, smoking, dependents</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= MODEL / TECHNOLOGY ================= */}
      <section
        id="model"
        aria-labelledby="model-heading"
        className="bg-[#f7f5ef] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] bg-[#e8e0d1] p-6 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

              {/* Intro */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">THE TECHNOLOGY</p>

                <h2 id="model-heading" className="mt-4 text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">Built on a machine-learning pipeline designed for fast, clear estimates.</h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-black/60">InsureAI combines a trained Random Forest model with a FastAPI inference layer to turn six profile inputs into an estimated medical insurance charge.</p>

                <a href="/predict" className="mt-6 inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition transform duration-200 hover:-translate-y-1">Try the model <span className="text-white/80">→</span></a>
              </div>

              {/* Pipeline + cards */}
              <div className="flex flex-col gap-6">
                {/* Pipeline visual (editorial 2-column grid, compacted) */}
                <div className="w-full rounded-[24px] border border-black/5 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold tracking-[0.14em] text-black/40">MODEL PIPELINE</p>

                  <div className="mt-3 space-y-4">
                    {/* Row 1: 01 -> 02 */}
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
                      <div className="min-w-0 flex flex-col gap-1 rounded-sm p-1">
                        <span className="text-xs font-semibold tracking-[0.14em] text-black/40">01</span>
                        <h4 className="text-lg font-semibold">Profile inputs</h4>
                        <div className="mt-1 flex flex-wrap gap-2 text-xs">
                          {['Age','BMI','Gender','Children','Smoking','Region'].map((i)=> (
                            <span key={i} className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/50 px-2 py-0.5 text-xs">{i}</span>
                          ))}
                        </div>
                      </div>

                      <div className="min-w-0 flex flex-col gap-1 rounded-sm p-1">
                        <span className="text-xs font-semibold tracking-[0.14em] text-black/40">02</span>
                        <h4 className="text-lg font-semibold">Feature processing</h4>
                        <p className="mt-1 text-xs text-black/50">Structured model-ready inputs</p>
                      </div>
                    </div>

                    {/* Row 2: 03 -> 04 */}
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4 lg:items-start lg:pt-1 lg:border-t lg:border-black/5 lg:pt-4">
                      <div className="min-w-0 flex flex-col gap-1 rounded-sm p-1">
                        <span className="text-xs font-semibold tracking-[0.14em] text-black/40">03</span>
                        <h4 className="text-lg font-semibold">Random Forest</h4>
                        <p className="mt-1 text-xs text-black/50">Trained regression model</p>
                      </div>

                      <div className="min-w-0 flex flex-col gap-1 rounded-sm p-1">
                        <span className="text-xs font-semibold tracking-[0.14em] text-black/40">04</span>
                        <h4 className="text-lg font-semibold">FastAPI</h4>
                        <p className="mt-1 text-xs text-black/50">Prediction inference</p>
                      </div>
                    </div>

                    {/* Row 3: 05 full-width */}
                    <div className="min-w-0 rounded-sm border-t border-black/5 pt-3">
                      <div className="flex w-full items-center justify-between gap-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-semibold tracking-[0.14em] text-black/40">05</span>
                          <h4 className="text-lg font-semibold">Estimated charge</h4>
                          <span className="text-xs text-black/50">Example prediction</span>
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-semibold text-[#f4c453]">$4,722</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>


                {/* Bottom cards: Model & API */}
                <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
                  {/* API card (white) */}
                  <div className="order-1 rounded-[28px] border border-black/6 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.14em] text-black/40">FastAPI inference</p>
                          <h3 className="mt-2 text-lg font-semibold text-black">FastAPI inference</h3>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                          <span className="text-sm text-black/60">Online</span>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-black/60">The frontend sends profile data to FastAPI for low-latency model inference.</p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-black/50">
                      <div>
                        <div className="font-medium text-black">API</div>
                        <div className="mt-1">/predict</div>
                      </div>

                      <div>
                        <div className="font-medium text-black">STATUS</div>
                        <div className="mt-1">Prediction ready</div>
                      </div>
                    </div>
                  </div>

                  {/* Model card (black) */}
                  <div className="order-2 rounded-[28px] border border-black/6 bg-black p-4 text-white shadow-sm transition-transform duration-200 hover:-translate-y-1 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.14em] text-white/40">Random Forest</p>
                          <h3 className="mt-2 text-xl font-semibold">Random Forest Regression</h3>
                        </div>

                        <div className="hidden items-center gap-2 sm:flex">
                          <span className="inline-block h-3 w-3 rounded-full bg-[#f4c453]" aria-hidden="true" />
                          <span className="text-sm text-white/60">Model</span>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-white/70">Trained regression model used to estimate medical insurance charges from profile features.</p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/60">
                      <div>
                        <div className="font-medium text-white">MODEL</div>
                        <div className="mt-1">Random Forest</div>
                      </div>

                      <div>
                        <div className="font-medium text-white">INPUTS</div>
                        <div className="mt-1">6 features</div>
                      </div>

                      <div>
                        <div className="font-medium text-white">OUTPUT</div>
                        <div className="mt-1">Insurance charge</div>
                      </div>

                      <div />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREDICTION ================= */}
      <section id="prediction" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] text-black/40">GET YOUR ESTIMATE</p>

              <h2 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.06em] lg:text-5xl">
                See what your insurance could cost.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-black/60">
                Enter a few details about your profile and let our machine-learning model estimate your medical insurance charge.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-black/60">
                <div className="inline-flex items-center gap-2">● <span>ML powered</span></div>
                <div className="inline-flex items-center gap-2">● <span>Fast prediction</span></div>
                <div className="inline-flex items-center gap-2">● <span>6 profile inputs</span></div>
              </div>
            </div>

            <div>
              {/* Prediction form card (client component) */}
              <PredictionForm />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY INSUREAI ================= */}
      <section id="about" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] items-start">
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] text-black/40">WHY INSUREAI</p>

              <h2 className="mt-4 text-3xl font-semibold leading-[1.02] lg:text-4xl">
                Insurance estimates, made remarkably simple.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-black/60">
                InsureAI turns a few profile inputs into a fast, ML-powered estimate — clear, transparent, and ready in seconds.
              </p>

              <div className="mt-6 flex gap-4">
                <a href="#prediction" className="inline-flex items-center gap-3 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">Get my estimate →</a>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6 items-stretch">
                {/* Card 01 */}
                <div className="rounded-[20px] border border-black/6 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.12em] text-black/40">01</span>
                      <div className="inline-flex items-center rounded-full bg-[#f4c453]/10 px-2 py-1 text-xs text-[#f4c453]">FAST</div>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold">Instant</h3>

                    <p className="mt-2 text-sm text-black/60">Get a prediction in seconds without manually calculating your profile.</p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-black/50">
                    <div className="h-1 w-10 rounded-full bg-[#f4c453]" />
                    <div className="h-1 w-6 rounded-full bg-black/10" />
                    <div className="h-1 w-4 rounded-full bg-black/10" />
                  </div>
                </div>

                {/* Card 02 */}
                <div className="rounded-[20px] border border-black/6 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.12em] text-black/40">02</span>
                      <div className="inline-flex items-center rounded-full bg-[#c9a4ff]/10 px-2 py-1 text-xs text-[#7b61d6]">ML</div>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold">AI powered</h3>

                    <p className="mt-2 text-sm text-black/60">Predictions are generated using a trained machine-learning model.</p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-black/50">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-6 w-6 rounded-sm bg-black/5" />
                      <div className="h-6 w-6 rounded-sm bg-black/10" />
                      <div className="h-6 w-6 rounded-sm bg-black/5" />
                    </div>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="rounded-[20px] border border-black/6 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.12em] text-black/40">03</span>
                      <div className="inline-flex items-center rounded-full bg-black/5 px-2 py-1 text-xs text-black/60">VIEW</div>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold">Transparent</h3>

                    <p className="mt-2 text-sm text-black/60">See the profile factors used to generate your estimate.</p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-black/50">
                    <div className="flex gap-1">
                      <span className="inline-block h-2 w-6 rounded-full bg-black/10" />
                      <span className="inline-block h-2 w-4 rounded-full bg-black/10" />
                      <span className="inline-block h-2 w-8 rounded-full bg-black/10" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA (upgraded) ================= */}
      <section className="px-6 pb-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-6 overflow-hidden rounded-[32px] bg-black px-6 py-10 text-white sm:grid-cols-[1fr_auto] lg:px-8 lg:py-12">
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] text-white/40">READY TO SEE YOUR ESTIMATE?</p>

              <h2 className="mt-3 text-3xl font-semibold leading-[1.02] lg:text-4xl">Ready to see your estimate?</h2>

              <p className="mt-3 max-w-lg text-sm text-white/70">Enter your profile and let InsureAI do the math.</p>

              <div className="mt-6">
                <a href="/predict" className="inline-flex items-center gap-3 rounded-full bg-[#f4c453] px-6 py-3 text-sm font-semibold text-black">Get my estimate →</a>
              </div>
            </div>

            <div className="mt-4 sm:mt-0">
              <div className="rounded-[16px] border border-white/8 bg-white px-4 py-3 text-black">
                <p className="text-xs font-semibold tracking-[0.12em] text-black/40">ESTIMATED ANNUAL CHARGE</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold">$2,246</div>
                    <div className="mt-1 text-xs text-black/50">Prediction ready</div>
                  </div>

                  <div className="text-sm">
                    <button className="rounded-full px-3 py-1 text-sm font-medium text-black/60">Edit profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 pb-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[28px] bg-black px-8 py-14 text-white sm:py-20">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.15em] text-white/60">READY WHEN YOU ARE</p>

                <h2 className="mt-4 text-4xl font-medium leading-[1.02] lg:text-5xl">
                  Insurance costs don&apos;t have to be a guess.
                </h2>

                <p className="mt-4 max-w-xl text-sm text-white/70">
                  Get a quick, transparent estimate powered by machine learning and based on your personal profile.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
                  <span className="inline-flex items-center gap-2"><span className="text-[#f4c453]">●</span><span>6 profile inputs</span></span>
                  <span className="inline-flex items-center gap-2"><span className="text-[#f4c453]">●</span><span>ML powered</span></span>
                  <span className="inline-flex items-center gap-2"><span className="text-[#f4c453]">●</span><span>FastAPI inference</span></span>
                  <span className="inline-flex items-center gap-2"><span className="text-[#f4c453]">●</span><span>Instant estimate</span></span>
                </div>
              </div>

              <div>
                <a
                  href="#prediction"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm sm:w-auto"
                >
                  Try InsureAI →
                </a>
              </div>
            </div>
          </div>
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