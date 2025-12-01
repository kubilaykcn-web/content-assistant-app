"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InterestsPage() {
  const router = useRouter();

  const interestsList = [
    "Eğitici",
    "Eğlendirci",
    "Müzik",
    "Masal",
  ];

  const [selected, setSelected] = useState([]);

  const toggleInterest = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleNext = () => {
    console.log("Selected interests:", selected);
    router.push("/summary"); // sıradaki sayfa
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6 text-center">
        
        {/* Görsel */}
        <div className="flex justify-center mb-6">
          <Image
            src="/kids-illustration.png"
            width={110}
            height={110}
            alt="interests"
            className="rounded-full"
          />
        </div>

        <h1 className="text-2xl font-semibold mb-4 leading-tight">
          Çocuğunuzun ilgi<br />alanları neler?
        </h1>

        {/* İlgi alanı seçenekleri */}
        <div className="grid grid-cols-2 gap-3 my-6">
          {interestsList.map((item) => (
            <button
              key={item}
              onClick={() => toggleInterest(item)}
              className={`py-3 rounded-xl border text-lg transition ${
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
          onClick={handleNext}
          className={`w-full py-4 rounded-2xl text-lg font-medium transition ${
            selected.length > 0
              ? "bg-orange-300 text-black"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Devam Et
        </button>
      </div>
    </div>
  );
}
