import Image from "next/legacy/image"
import { process } from "../data/process"

/* eslint-disable @next/next/no-img-element */


type Props = {}

const OurProcess = (props: Props) => {
    return (
        <section className="text-center py-20">
            <img className="object-cover object-center h-[600px] w-full" src="/family.jpeg" alt="family image" />
            <h4 className="mt-20 tracking-widest font-medium text-gray ">OUR PROCESS</h4>
            <h2 className="text-5xl font-semibold my-6 text-primary-dark">How we do what we do.</h2>
            <div className="flex flex-wrap lg:gap-10 items-center justify-evenly">
                {process.map((item) => {
                    return (
                        <div key={item.title} className='lg:w-[300px]'>
                            <Image src={item.img} height={102} width={102} alt={item.title} />
                            <h4 className="text-primary text-lg my-3 font-semibold ">{item.title}</h4>
                            <p className="text-gray text-base my-3">{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default OurProcess