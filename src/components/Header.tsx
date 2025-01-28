import Link from "next/link"
import {useState} from 'react';

export const Header = () => {
    const [isVisible, setIsVisibleOpen] = useState(false)

    return (
        <header className='w-full h-[60px] flex justify-between items-center mb-4 border-b px-4'>
            <Link href="https://stemps.ru/" className="flex justify-start items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="4" fill="#151515" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.6209 6.73702C12.8907 5.20224 9.38242 6.14199 7.78495 8.83601C6.18749 11.53 7.10576 14.9582 9.83598 16.4929L10.7157 16.9874L10.7157 22.0004L15.3671 22.0004C18.4781 22.0004 21 19.4784 21 16.3674C21 14.253 19.835 12.4107 18.1118 11.4473L19.5839 8.9648L15.6209 6.73702ZM18.1118 11.4473C17.2997 10.9933 16.3636 10.7345 15.3671 10.7345L10.7157 10.7345L10.7157 16.9874L13.799 18.7207L18.1118 11.4473Z" fill="#F3F3F3" />
                </svg>
                <strong className="uppercase">
                    stemps
                </strong>
            </Link>

        <div className={`flex justify-between items-center md:w-3/4 ${isVisible ? 'max-md:flex gap-2 px-2 py-2 absolute z-50 top-16 right-4 bg-gray-300 transition-all duration-500': 'max-md:invisible w-0'}`}
            >
                <nav>
                    <ul className="flex gap-4 items-center">
                        <li className="hover:text-red-500">
                            <Link href="/">О школе</Link>
                        </li>
                        <li className="hover:text-red-500">
                            <Link href="/">Курсы</Link>
                        </li>
                        <li className="hover:text-red-500">
                            <Link href="/"> Библиотека</Link>
                        </li>
                    </ul>
                </nav>

                <div className="cursor-pointer">
                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M9 0C6.79086 0 5 1.79086 5 4V12.963H0V15.037H5V24C5 26.2091 6.79086 28 9 28H26C28.2091 28 30 26.2091 30 24V4C30 1.79086 28.2091 0 26 0H9ZM5 15.037L19.0365 15.037L13.6597 20.5481L15.3188 22L23 14L15.3188 6L13.6597 7.45185L19.0365 12.963L5 12.963V15.037Z"
                              fill="black"/>
                    </svg>

                </div>
            </div>

            <button className="rounded text-white px-2 py-1     md:hidden bg-[#121212]"
                    onClick={() => setIsVisibleOpen(prevState => !prevState)}
            >Меню</button>

        </header>
    )
}
