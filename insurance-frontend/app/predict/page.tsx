import Link from "next/link";
import PredictionForm from "../components/PredictionForm";

export default function PredictPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#111111]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo/Back to home */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
              <span className="text-lg">✦</span>
            </div>
            <span className="text-xl font-semibold tracking-[-0.04em]">
              InsureAI
            </span>
          </Link>

          {/* Back button on right */}
          <Link href="/" className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:border-black/30">
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* Main section */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            {/* Left content */}
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] text-black/40">GET YOUR ESTIMATE</p>
              <h1 className="mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.06em] lg:text-5xl">
                See what your insurance could cost.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-black/60">
                Enter a few details about your profile and let our machine-learning model estimate your medical insurance charge.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-black/60">
                <div className="inline-flex items-center gap-2">● <span>ML powered</span></div>
                <div className="inline-flex items-center gap-2">● <span>Fast prediction</span></div>
                <div className="inline-flex items-center gap-2">● <span>6 profile inputs</span></div>
              </div>
            </div>

            {/* Right content - Form */}
            <div>
              <PredictionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer section */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="rounded-2xl border border-black/10 bg-white p-5 text-sm leading-6 text-black/45">
          <strong className="text-black/70">Disclaimer:</strong>{" "}
          InsureAI provides machine-learning-based estimates for educational and informational purposes only. 
          Predictions are not official insurance quotes and should not be considered financial, medical, or insurance advice.
        </div>
      </section>
    </main>
  );
}
