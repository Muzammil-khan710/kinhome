import Image from "next/legacy/image"
import { useEffect, useState } from "react"

type Props = {}

const Footer = (props: Props) => {

    const [openChat, setOpenChat] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setOpenChat(true)
        }, 3000);
    }, [])

    return (
        <footer className=" px-8  py-10 md:py-24 md:px-40 bg-gray-light">
            <div className="flex flex-col w-fit mx-auto md:mx-0">
                <Image src='/logo.png' alt='logo' height={115} width={220} />
                <p>All rights reserved Kin Home, inc.</p>
            </div>
            {openChat &&
                <button className="fixed bottom-10 right-4 shadow-floatbtn bg-chat h-20 w-20 rounded-full">
                    <Image src='/float.svg' height={30} width={30} alt='chat with us' className="fixed" />
                </button>
            }
        </footer>
    )
}

export default Footer