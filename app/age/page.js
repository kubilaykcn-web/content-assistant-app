"use client";

import Image from "next/image";
import { useState } from "react";

export default function AgePage() {
  const [selected, setSelected] = useState(null);

  const ageRanges = ["0-3", "3-5", "5-8", "8-10"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6 text-center">
        
        {/* Çocuk görseli */}
        <div className="flex justify-center mb-6">
          <Image
            src="/kids-illustration.png"
            width={130}
            height={130}
            alt="child"
            className="rounded-full"
          />
        </div>

        <h1 className="text-2xl font-semibold mb-4 leading-tight">
          Çocuğunuz<br />kaç yaşında
        </h1>

        {/* Yaş aralığı butonları */}
        <div className="grid grid-cols-2 gap-4 my-6">
          {ageRanges.map((age) => (
            <button
              key={age}
              onClick={() => setSelected(age)}
              className={`py-4 rounded-xl border text-lg transition ${
                selected === age
                  ? "bg-orange-200 border-orange-400"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              {age}
            </button>
          ))}
        </div>

        {/* Devam Et */}
        <button
          disabled={!selected}
          className={`w-full py-4 rounded-2xl text-lg font-medium transition ${
            selected
              ? "bg-orange-200 text-black"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={() => {
            // Şimdilik sadece console.log yapalım
            console.log("Selected age:", selected);
          }}
        >
          Devam et
        </button>
      </div>
    </div>
  );
}
