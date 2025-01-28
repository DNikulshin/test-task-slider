import React from "react";
import { ISlide } from "@/shared/data-slider";
import {touchSlide} from '@/shared/hooks/touch-slide';

interface Props {
    slides: ISlide[];
    currentSlideIndex: number;
    setCurrentSlideIndex: (index: number) => void

}

export const Slider = (
    {
        slides,
        currentSlideIndex,
        setCurrentSlideIndex
    }: Props) => {

    const {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    } = touchSlide(currentSlideIndex,  setCurrentSlideIndex)

    return (
        <div className="w-full flex gap-4 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
            <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentSlideIndex * (100 / slides.length)}%)`
                }}
            >
                {slides.map(slide => {
                    return (
                        <div
                            key={slide.id}
                            className="flex gap-4 shrink-0 justify-between flex-col bg-bg_slider_card px-4 py-4 rounded sm:h-[212px] w-[358px] md:w-[412px] h-[256px]"
                        >
                            <div className="flex gap-4 md:flex-col justify-between">
                                <div>{slide.logo}</div>
                                <h3 className="text-2xl md:text-3xl">{slide.title}</h3>
                            </div>
                            <div className="font-medium md:hidden">{slide.description}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

