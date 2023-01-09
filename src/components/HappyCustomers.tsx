type Props = {}

const HappyCustomers = () => {
    return (
        <section>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/roof.jpeg' alt="happy customers" id="image" className="md:h-[700px] w-full object-cover object-center" />
            <div className="text-base bg-backdark w-full  ">
                <div className=" max-w-[40rem]  md:mx-10 lg:mx-40 py-20 text-backlight">
                    <p className="tracking-widest text-sm font-bold">PRIOR CLIENTS</p>
                    <h2 className="text-5xl text-white font-bold">Happy customers. </h2>
                    <p className="py-2 font-semibold max-w-[35rem]">Great customer service! Kin is amazing! My sales rep was very informative and explained the complete process to me. I am so glad I decided to go with this company for my solar panels. Highly recommend. Thank you Kin!</p>
                </div>
            </div>
        </section>
    )
}

export default HappyCustomers