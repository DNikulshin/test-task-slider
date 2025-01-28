import { pagination } from '@/shared/data-slider'
import React from 'react'

interface Props {
    className: string
    totalSlides: number
    setCurrentSlideIndex: (index: number) => void
    currentSlideIndex: number
}

export const Pagination = ({
   className,
   totalSlides,
   currentSlideIndex,
   setCurrentSlideIndex
}: Props) => {

    return (
        <div
            className={className}
        >
            {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    onClick={() => setCurrentSlideIndex(index)}
                    className='cursor-pointer'
                >
                    {currentSlideIndex === index
                        ? pagination.active
                        : pagination.svg
                    }
                </span>
            ))}
        </div>
    )
}
