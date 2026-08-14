"use client"

import React, { useState } from "react";

export default function PredictionForm() {
  const [age, setAge] = useState<number>(35);
  const [bmi, setBmi] = useState<number>(27.5);
  const [gender, setGender] = useState<string>("female");
  const [children, setChildren] = useState<number>(0);
  const [smoker, setSmoker] = useState<string>("no");
  const [region, setRegion] = useState<string>("southeast");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const payload = {
        age: Number(age),
        gender,
        bmi: Number(bmi),
        children: Number(children),
        smoker,
        region,
      };

      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Prediction request failed");
      }

      const data = await res.json();
      // backend returns { predicted_charges: number }
      if (data && typeof data.predicted_charges === "number") {
        setResult(data.predicted_charges);
      } else if (data && typeof data.predicted_cost === "number") {
        // fallback key
        setResult(data.predicted_cost);
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (err: any) {
      setError("We couldn't generate an estimate right now. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="rounded-[28px] border border-black/6 bg-white p-6 shadow-sm">
        <div className="mb-4">
          <p className="text-xs font-semibold tracking-[0.14em] text-black/40">Your profile</p>
          <p className="mt-1 text-sm text-black/60">Tell us a little about yourself.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex w-full flex-col gap-2">
            <span className="text-xs text-black/60">Age</span>
            <input
              type="number"
              min={0}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="h-11 rounded-[12px] border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f4c453]/40"
              required
            />
          </label>

          <label className="flex w-full flex-col gap-2">
            <span className="text-xs text-black/60">BMI</span>
            <input
              type="number"
              step="0.1"
              min={0}
              value={bmi}
              onChange={(e) => setBmi(Number(e.target.value))}
              className="h-11 rounded-[12px] border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f4c453]/40"
              required
            />
          </label>

          <label className="flex w-full flex-col gap-2">
            <span className="text-xs text-black/60">Gender</span>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="h-11 rounded-[12px] border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f4c453]/40"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>

          <label className="flex w-full flex-col gap-2">
            <span className="text-xs text-black/60">Children</span>
            <input
              type="number"
              min={0}
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="h-11 rounded-[12px] border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f4c453]/40"
            />
          </label>

          <label className="flex w-full flex-col gap-2">
            <span className="text-xs text-black/60">Smoking</span>
            <select
              value={smoker}
              onChange={(e) => setSmoker(e.target.value)}
              className="h-11 rounded-[12px] border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f4c453]/40"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>

          <label className="flex w-full flex-col gap-2">
            <span className="text-xs text-black/60">Region</span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="h-11 rounded-[12px] border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f4c453]/40"
            >
              <option value="southeast">Southeast</option>
              <option value="southwest">Southwest</option>
              <option value="northeast">Northeast</option>
              <option value="northwest">Northwest</option>
            </select>
          </label>

          {/* disclaimer */}
          <div className="sm:col-span-2 mt-2 text-xs text-black/50">
            Estimated charges are for informational purposes only and are not a quote or financial advice.
          </div>

          {/* button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition ${loading ? "opacity-60" : "hover:-translate-y-0.5"}`}
            >
              {loading ? "Calculating..." : "Predict my cost →"}
            </button>
          </div>
        </form>

        {/* Error */}
        {error && <div className="mt-3 text-sm text-rose-600">{error}</div>}

        {/* Result */}
        {result !== null && (
          <div className="mt-4 rounded-[12px] border border-black/5 bg-white p-4">
            <p className="text-xs font-semibold tracking-[0.12em] text-black/40">ESTIMATED ANNUAL CHARGE</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold text-[#111]">${result.toFixed(0)}</div>
                <div className="mt-1 text-xs text-black/50">Prediction ready</div>
              </div>

              <div className="text-sm">
                <button
                  onClick={() => setResult(null)}
                  className="rounded-full px-3 py-1 text-sm font-medium text-black/60"
                >
                  Edit profile
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs text-black/50">Based on the profile information you provided.</p>
          </div>
        )}
      </div>
    </div>
  );
}
