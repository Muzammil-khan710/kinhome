/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { teamMembers } from "../data/team"

type Props = {}

const OurTeam = (props: Props) => {
    return (
        <section className="pl-10 lg:pl-40 py-20">
            <div className="flex flex-col md:flex-row">
                <div className="max-w-[20rem]">
                    <h2 className="text-5xl font-semibold text-backdark">Meet our team</h2>
                    <p className="text-gray text-base">
                        Meet some of the industries top tier talent. Since the beginning we have set out to not only have an unmatched customer experience but an unmatched employee experience as well. In doing so we&apos;ve attracted the best of the best and are continuing to build our team to ensure our customers always come first.
                    </p>
                    <button className="w-fit flex self-end border-[3.5px] font-bold text-base rounded-2xl border-primary-dark px-4 py-2 my-8 hover:bg-primary-dark hover:text-backlight">See team</button>
                </div>
                <div className="grid grid-cols-1 gap-6 md:gap-2 md:ml-2 mr-10 md:justify-items-center md:grid-cols-2 w-full ">
                    {teamMembers.map((item) => {
                        return (
                            <Link href={item.href} key={item.name} className='flex max-w-[275px] items-center gap-8 hover:opacity-80'>
                                <img src={item.img} alt={item.name} className='h-[80px] w-[80px] rounded-full object-cover border-[3px] border-gray-dark' />
                                <div className="flex flex-col font-medium">
                                    <span className="text-base font-bold text-backdark">{item.name}</span>
                                    <span className="text-gray text-sm">{item.post}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default OurTeam