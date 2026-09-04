"use client";

import { useMemo, useState } from "react";
import { org } from "@/data/site";
import { Arrow } from "./ui";

type Cause = {
  key: string;
  label: string;
  unitCost: number;
  unitName: string;
  unitPlural: string;
  note: string;
};

const causes: Cause[] = [
  {
    key: "camp",
    label: "Medical camps and clinics",
    unitCost: 600,
    unitName: "patient seen and medicated",
    unitPlural: "patients seen and medicated",
    note: "Consultation, diagnosis and a full course of medicine at a rural camp.",
  },
  {
    key: "ration",
    label: "Food parcels",
    unitCost: 12000,
    unitName: "family fed for a month",
    unitPlural: "families fed for a month",
    note: "A month of staple food for a displaced household, built around what can be cooked in a shelter.",
  },
  {
    key: "winter",
    label: "Winter packages",
    unitCost: 9000,
    unitName: "household kept warm",
    unitPlural: "households kept warm",
    note: "A heavy quilt, blankets and warm clothing sized for the children in the family.",
  },
  {
    key: "water",
    label: "Water for Life",
    unitCost: 45000,
    unitName: "tanker delivered",
    unitPlural: "tankers delivered",
    note: "Drinking water trucked into a Gaza displacement camp with no functioning mains.",
  },
];

const presets = [3000, 9000, 25000, 50000];

const money = (n: number) => `PKR ${n.toLocaleString("en-PK")}`;

export function DonationPlanner() {
  const [causeKey, setCauseKey] = useState(causes[0].key);
  const [amount, setAmount] = useState(9000);
  const [custom, setCustom] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const cause = causes.find((c) => c.key === causeKey)!;

  const units = useMemo(() => Math.floor(amount / cause.unitCost), [amount, cause.unitCost]);

  const message = useMemo(
    () =>
      encodeURIComponent(
        `Assalamu alaikum. I would like to donate ${money(amount)} towards ${cause.label}. Please confirm the transfer details.`,
      ),
    [amount, cause.label],
  );

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Chooser */}
      <div className="rounded-2xl bg-white p-7 ring-1 ring-line lg:col-span-7 lg:p-9">
        <fieldset>
          <legend className="font-display text-[1.15rem] font-extrabold text-navy-800">
            Choose where it goes
          </legend>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {causes.map((c) => {
              const on = c.key === causeKey;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCauseKey(c.key)}
                  aria-pressed={on}
                  className={`rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                    on
                      ? "border-blue-brand bg-blue-soft"
                      : "border-line hover:border-navy-300"
                  }`}
                >
                  <span className="block font-display text-[0.98rem] font-bold text-navy-800">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block text-[0.82rem] text-slate-muted">
                    {money(c.unitCost)} per {c.unitName}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-8">
          <legend className="font-display text-[1.15rem] font-extrabold text-navy-800">
            Choose an amount
          </legend>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {presets.map((p) => {
              const on = amount === p && custom === "";
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setAmount(p);
                    setCustom("");
                  }}
                  aria-pressed={on}
                  className={`rounded-full px-6 py-3 font-display text-[0.95rem] font-bold transition-all duration-300 ${
                    on
                      ? "bg-[#046BD2] text-white shadow-sm"
                      : "bg-slate-100 text-[#334155] hover:bg-blue-50 hover:text-[#046BD2]"
                  }`}
                >
                  {money(p)}
                </button>
              );
            })}
          </div>

          <label className="mt-4 block">
            <span className="sr-only">Custom amount in Pakistani rupees</span>
            <div className="flex items-center gap-3 rounded-xl border-2 border-line px-4 py-3 transition-colors focus-within:border-blue-brand">
              <span className="font-display text-[0.9rem] font-bold text-slate-muted">PKR</span>
              <input
                type="number"
                min={100}
                step={100}
                inputMode="numeric"
                placeholder="Another amount"
                value={custom}
                onChange={(e) => {
                  const raw = e.target.value;
                  setCustom(raw);
                  const n = Number(raw);
                  if (Number.isFinite(n) && n > 0) setAmount(n);
                }}
                className="w-full bg-transparent font-display text-[1.05rem] font-bold text-navy-800 outline-none"
              />
            </div>
          </label>
        </fieldset>
      </div>

      {/* Result */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-[#F0F7FF] to-white p-7 shadow-soft lg:col-span-5 lg:p-9">
        <p className="font-display text-[0.98rem] font-bold text-[#046BD2]">
          {money(amount)} towards {cause.label.toLowerCase()}
        </p>

        <p className="mt-6 font-display text-[3.4rem] leading-none font-extrabold text-[#003475]">
          {units.toLocaleString("en-GB")}
        </p>
        <p className="mt-2 font-display text-[1.1rem] font-bold text-[#003475]">
          {units === 1 ? cause.unitName : cause.unitPlural}
        </p>
        <p className="mt-4 text-[0.93rem] leading-relaxed text-[#334155]">{cause.note}</p>

        {units === 0 && (
          <p className="mt-4 rounded-xl bg-blue-50/80 p-4 text-[0.88rem] leading-relaxed text-[#334155]">
            This amount is below one full unit for this programme. It is still used, pooled with
            other gifts, and it still counts.
          </p>
        )}

        <a
          href={`${org.whatsapp}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#046BD2] px-7 py-4 font-display font-bold text-white shadow-[0_8px_20px_rgba(4,107,210,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003475]"
        >
          Arrange this donation
          <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <div className="mt-7 space-y-3 border-t border-white/12 pt-6">
          {[
            { k: "Account title", v: org.bank.title },
            { k: "IBAN", v: org.bank.iban },
            { k: "Account number", v: org.bank.account },
          ].map((row) => (
            <div key={row.k} className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[0.85rem] text-navy-300">{row.k}</p>
                <p className="mt-0.5 text-[0.88rem] font-semibold break-all text-white">{row.v}</p>
              </div>
              <button
                type="button"
                onClick={() => copy(row.v, row.k)}
                className="shrink-0 rounded-full border border-white/25 px-3.5 py-1.5 font-display text-[0.75rem] font-bold text-white transition-colors hover:bg-white/10"
              >
                {copied === row.k ? "Copied" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
