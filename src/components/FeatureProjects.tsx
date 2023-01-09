/* eslint-disable @next/next/no-img-element */
import { projects } from "../data/projects"

type Props = {}

const FeatureProjects = (props: Props) => {
    return (
        <section className=" bg-gray-light">
            <div className="md:mx-10 lg:mx-40 py-20">
                <h2 className="text-6xl font-semibold tracking-wide text-primary-dark">Featured projects</h2>
                <h3 className="text-gray text-2xl py-4 max-w-[35rem]">Some of the latest and greatest projects from us here at Kin Home.</h3>
                <div className="flex gap-5 flex-col my-10 md:flex-row">
                    {projects.map((item) => {
                        return (
                            <div key={item.name} className='relative px-5 md:px-0'>
                                <img src={item.img} alt={item.name} className='md:h-[450px] md:w-[380px] h-full w-full rounded-md' />
                                <div className="absolute top-5 left-10 md:top-10 font-semibold">
                                    <p className="tracking-widest text-gray">{item.title}</p>
                                    <p className="text-primary text-xl">{item.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="flex mx-auto border-[3.5px] font-bold text-base rounded-2xl border-primary-dark px-4 py-2 my-8 hover:bg-primary-dark hover:text-backlight">View All Projects</button>
            </div>
        </section>
    )
}

export default FeatureProjects