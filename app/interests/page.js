"use client";

import Image from "next/image";
import { useState } from "react";

export default function InterestsPage() {
  const [selected, setSelected] = useState([]);
  const interests = ["Eğitici", "Eğlendirici", "Müzik", "Masal"];

  const toggleSelect = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6 text-center">
        
        {/* Üst Görsel */}
        <div className="flex justify-center mb-6">
          <Image
            src="/kids-illustration.png"
            width={130}
            height={130}
            alt="child"
            className="rounded-full"
          />
        </div>

        {/* Başlık */}
        <h1 className="text-2xl font-semibold mb-4 leading-tight">
          Çocuğunuzun<br />ilgi alanları neler?
        </h1>

        {/* İlgi alanları butonları */}
        <div className="grid grid-cols-2 gap-4 my-6">
          {interests.map((item) => (
            <button
              key={item}
              onClick={() => toggleSelect(item)}
              className={`py-4 rounded-xl border text-lg transition ${
                selected.includes(item)
                  ? "bg-orange-200 border-orange-400"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Devam Et */}
        <button
          disabled={selected.length === 0}
          className={`w-full py-4 rounded-2xl text-lg font-medium transition ${
            selected.length > 0
              ? "bg-orange-200 text-black"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={() => console.log("Selected interests:", selected)}
        >
          Devam et
        </button>

      </div>
    </div>
  );
}
