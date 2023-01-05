/* eslint-disable @next/next/no-img-element */
import Image from "next/legacy/image"
import Link from "next/link"
import { useState } from "react"
import { navData } from "../data/nav"

type Props = {

}

const Header = (props: Props) => {

    const [openMob, setOpenMob] = useState(false)

    return (
        <header className="flex justify-around items-center h-32 shadow-nav z-20  px-8 fixed top-0 bg-white w-full">
            <Link href={'#'}>
                <Image src='/logo.png' alt='logo' height={115} width={220}/>
            </Link>
            <ul className="hidden md:flex gap-8 text-primary-dark hover:text-primary items-center font-medium">
                {navData.map((item, i) => {
                    return(
                        <li key={item.name} className={ i === navData.length-1 ? 'px-4 py-3 bg-primary-dark text-backlight rounded-2xl hover:opacity-80' : ''}>
                            <Link href={item.href} >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <img src='/ham.png' height={20} width={20} className='inline-block md:hidden cursor-pointer'  alt='mob-menu' />
        </header>
    )
}

export default Header