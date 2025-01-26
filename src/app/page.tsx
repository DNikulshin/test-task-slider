'use client'
import { useState } from "react";
import { Header } from "@/components/Header";
import { Slider } from "@/components/slider/Slider";
import { Pagination } from "@/components/slider/Pagination";
import { sliders } from "@/shared/data-slider";


export default function Home() {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="w-full h-screen">
      <Header />
      <main>
        <section className="text-[#8977F3] mx-4 mb-2 md:border-b-2">
          <div className="py-2 flex justify-between max-md:flex-col">
            <h3 className="text-3xl max-md:w-full border-b pb-2 md:border-none">1.0</h3>
            <h3 className="w-3/4 text-3xl mb-4">Наши услуги</h3>
            <Pagination
              className="md:hidden flex gap-2"
              totalSlides={sliders.length}
              currentSlideIndex={currentSlideIndex}
              setCurrentSlideIndex={setCurrentSlideIndex}
            />
          </div>

        </section>

        <section className="px-4 py-2">
          <Slider
            currentSlideId={currentSlideIndex + 1}
            sliders={sliders}

          />
        </section>

      </main>
    </div>
  );
}
