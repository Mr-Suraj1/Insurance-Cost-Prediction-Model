"use client";

import { useState } from "react";

export default function Home() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState("");
  const [children, setChildren] = useState("");
  const [smoker, setSmoker] = useState("no");
  const [region, setRegion] = useState("southeast");

  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    setError("");
    setPrediction(null);

    if (!age || !bmi || !children) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: Number(age),
          gender,
          bmi: Number(bmi),
          children: Number(children),
          smoker,
          region,
        }),
      });

      if (!response.ok) {
        throw new Error("Prediction failed");
      }

      const data = await response.json();

      setPrediction(data.predicted_charges);
    } catch (err) {
      setError(
        "Unable to connect to the prediction server. Make sure FastAPI is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const getBmiCategory = () => {
    const value = Number(bmi);

    if (!value) return "—";
    if (value < 18.5) return "Underweight";
    if (value < 25) return "Normal";
    if (value < 30) return "Overweight";

    return "Obese";
  };

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 font-bold">
              IA
            </div>

            <span className="text-xl font-semibold tracking-tight">
              Insure<span className="text-blue-400">AI</span>
            </span>
          </div>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#predict" className="transition hover:text-white">
              Predict
            </a>

            <a href="#how" className="transition hover:text-white">
              How it works
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </div>

          <div className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400">
            ML Powered
          </div>

        </div>
      </nav>


      {/* Hero */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 text-center">

          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            ✨ AI-powered insurance estimation
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Know your insurance cost
            <span className="block text-blue-400">
              before it surprises you.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Get an instant estimate of your medical insurance charges
            using a machine learning model trained on real insurance data.
          </p>

        </div>
      </section>


      {/* Predictor */}
      <section id="predict" className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">

            <div className="mb-8">
              <p className="text-sm font-medium text-blue-400">
                YOUR PROFILE
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Tell us about yourself
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your information to calculate an estimated insurance
                cost.
              </p>
            </div>


            <div className="grid gap-6 sm:grid-cols-2">

              {/* Age */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Age
                </label>

                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="e.g. 32"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
                />
              </div>


              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Gender
                </label>

                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-400"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>


              {/* BMI */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  BMI
                </label>

                <input
                  type="number"
                  step="0.1"
                  value={bmi}
                  onChange={(e) => setBmi(e.target.value)}
                  placeholder="e.g. 27.4"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Category: {getBmiCategory()}
                </p>
              </div>


              {/* Children */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Children
                </label>

                <input
                  type="number"
                  min="0"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  placeholder="e.g. 1"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
                />
              </div>


              {/* Smoker */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Smoking status
                </label>

                <select
                  value={smoker}
                  onChange={(e) => setSmoker(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-400"
                >
                  <option value="no">Non-smoker</option>
                  <option value="yes">Smoker</option>
                </select>
              </div>


              {/* Region */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Region
                </label>

                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-400"
                >
                  <option value="northeast">Northeast</option>
                  <option value="northwest">Northwest</option>
                  <option value="southeast">Southeast</option>
                  <option value="southwest">Southwest</option>
                </select>
              </div>

            </div>


            {error && (
              <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}


            <button
              onClick={handlePredict}
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Calculating..." : "✨ Predict Insurance Cost"}
            </button>

          </div>


          {/* Result */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">

            <div className="flex h-full flex-col">

              <p className="text-sm font-medium text-blue-400">
                PREDICTION
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Estimated insurance cost
              </h2>


              {prediction === null ? (

                <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">

                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl">
                    ✨
                  </div>

                  <p className="text-lg font-medium text-gray-300">
                    Your prediction will appear here
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    Fill out your profile and click the prediction button to
                    get your estimated insurance charges.
                  </p>

                </div>

              ) : (

                <div className="flex flex-1 flex-col justify-center">

                  <p className="text-sm text-gray-500">
                    Estimated charges
                  </p>

                  <div className="mt-3 text-6xl font-bold tracking-tight text-white">
                    ${prediction.toLocaleString()}
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    Estimated medical insurance charges
                  </p>


                  <div className="mt-10 grid gap-3 sm:grid-cols-2">

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs text-gray-500">
                        BMI
                      </p>

                      <p className="mt-1 font-medium">
                        {bmi}
                      </p>

                      <p className="mt-1 text-xs text-blue-400">
                        {getBmiCategory()}
                      </p>
                    </div>


                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs text-gray-500">
                        Smoking
                      </p>

                      <p className="mt-1 font-medium">
                        {smoker === "yes" ? "Smoker" : "Non-smoker"}
                      </p>
                    </div>


                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs text-gray-500">
                        Age
                      </p>

                      <p className="mt-1 font-medium">
                        {age} years
                      </p>
                    </div>


                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs text-gray-500">
                        Region
                      </p>

                      <p className="mt-1 font-medium capitalize">
                        {region}
                      </p>
                    </div>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>
      </section>


      {/* How it works */}
      <section
        id="how"
        className="border-t border-white/10 bg-white/[0.02]"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <p className="text-sm font-medium text-blue-400">
              HOW IT WORKS
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              From your profile to a prediction
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl">01</div>

              <h3 className="mt-5 text-lg font-semibold">
                Enter your details
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Provide basic information such as age, BMI, smoking status,
                children and region.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl">02</div>

              <h3 className="mt-5 text-lg font-semibold">
                ML model analyzes
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Our Random Forest model processes your information and
                identifies important patterns.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl">03</div>

              <h3 className="mt-5 text-lg font-semibold">
                Get your estimate
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Receive an instant estimated insurance charge based on the
                model prediction.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer
        id="about"
        className="border-t border-white/10 px-6 py-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 InsureAI. Machine Learning Insurance Predictor.
          </p>

          <p>
            Built with Next.js + FastAPI + Random Forest
          </p>

        </div>
      </footer>

    </main>
  );
}