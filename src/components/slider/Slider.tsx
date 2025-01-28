import React, {useRef} from "react";
import {ISlide} from "@/shared/data-slider";

interface Props {
    slides: ISlide[];
    currentSlideIndex: number;
    setCurrentSlideIndex: (index: (prevIndex: number) => number) => void

}

export const Slider = (
    {
        slides,
        currentSlideIndex,
        setCurrentSlideIndex
    }: Props) => {

    const startX = useRef(0);
    const endX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => startX.current = e.touches[0].clientX;
    const handleTouchMove = (e: React.TouchEvent) => endX.current = e.touches[0].clientX;

    const handleTouchEnd = () => {
        const distance = startX.current - endX.current;

        if (distance > 50) {
            // Swipe left
            setCurrentSlideIndex((prevIndex: number) => Math.min(prevIndex + 1, slides.length - 1));
        } else if (distance < -50) {
            // Swipe right
            setCurrentSlideIndex((prevIndex: number) => Math.max(prevIndex - 1, 0));
        }
    }
    return (
        <div className="w-full h-screen flex gap-4 overflow-hidden"
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

