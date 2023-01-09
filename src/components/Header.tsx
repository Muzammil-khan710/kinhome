import { Transition } from "@headlessui/react"
import Image from "next/legacy/image"
import Link from "next/link"
import { useState, Fragment } from "react"
import { navData } from "../data/nav"

type Props = {

}

const Header = (props: Props) => {

    const [isShowing, setIsShowing] = useState(false)

    return (
        <header className="flex justify-between px-10 lg:px-40 gap-10 items-center h-32 shadow-navshadow z-20  fixed top-0 bg-white w-full">
            <Link href={'#'}>
                <Image src='/logo.png' alt='logo' height={115} width={220} />
            </Link>
            <ul className="hidden lg:flex gap-8 text-primary-dark hover:text-primary items-center font-medium">
                {navData.map((item, i) => {
                    return (
                        <li key={item.name} className={i === navData.length - 1 ? 'px-4 py-3 bg-primary-dark text-backlight rounded-2xl hover:opacity-80' : ''}>
                            <Link href={item.href} >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <button className="lg:hidden" onClick={() => setIsShowing((isShowing) => !isShowing)}>
                <Image src='/ham.png' height={20} width={20} className='inline-block lg:hidden cursor-pointer' alt='mob-menu' />
            </button>
            <Transition 
                appear
                as={Fragment}
                show={isShowing}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100 "
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0 "
            >
                <ul className="absolute top-32 left-0 bg-backdark w-full flex lg:hidden flex-col gap-8 px-10 text-white py-10 items-center font-medium">
                {navData.map((item, i) => {
                    return (
                        <li key={item.name} className={i === navData.length - 1 ? 'px-4 py-3 bg-primary-dark text-backlight rounded-2xl hover:opacity-80' : ''}>
                            <Link href={item.href} >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </Transition>
        </header>
    )
}

export default Header