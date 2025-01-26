'use client'

import { useState } from "react";
import { Header } from "@/components/Header";
import { Slider } from "@/components/slider/Slider";
import { Pagination } from "@/components/slider/Pagination";
import { slides } from "@/shared/data-slider";


export default function Home() {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="w-full h-screen">
      <Header />
      <main>
        <section className="text-main_color_text mx-4 mb-2 md:border-b-2">
          <div className="py-2 flex justify-between max-md:flex-col">
            <h3 className="text-3xl max-md:w-full border-b pb-2 mb-2 md:border-none">1.0</h3>
            <div className="flex gap-8 flex-col w-3/4 mb-4">
              <h3 className="text-3xl">Наши услуги</h3>
              <Pagination
                className="flex gap-2 transition-all duration-500 ease-in-out"
                totalSlides={slides.length}
                currentSlideIndex={currentSlideIndex}
                setCurrentSlideIndex={setCurrentSlideIndex}
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-2">
          <Slider
            currentSlideIndex={currentSlideIndex}
            slides={slides}
          />
        </section>

      </main>
    </div>
  );
}
