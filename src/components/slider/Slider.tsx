import { ISlide } from "@/shared/data-slider"

interface Props {
    sliders: ISlide[]
    currentSlideId: number
}

export const Slider = ({ currentSlideId, sliders }: Props) => {
    console.log(currentSlideId, 'currentSlideId')
    return (

        <div className="w-full flex overflow-hidden gap-4">
            {sliders.map(slide => {
                return (
                    <div
                        key={slide.id}
                        className="flex gap-4 shrink-0 justify-between flex-col bg-[#FAFAFA] px-4 py-4 rounded md:h-[212px] w-[358px] lg:w-[412px] h-[256px] "
                    >
                        <div className="flex gap-4 md:flex-col justify-between">
                            <div>{slide.logo}</div>
                            <h3 className="text-2xl md:text-3xl">{slide.title}</h3>
                        </div>
                        <div className="font-medium md:hidden">{slide.description}</div>
                    </div>

                )
            })}
        </div>

    )

}