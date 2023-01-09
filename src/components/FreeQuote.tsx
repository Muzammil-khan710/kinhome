/* eslint-disable @next/next/no-img-element */
type Props = {}

const FreeQuote = (props: Props) => {
    return (
        <section className="flex flex-col items-center text-center">
            <div className="mx-8 my-24 ">
                <h2 className="font-semibold text-5xl tracking-wide">How much does it cost?</h2>
                <h3 className="text-3xl tracking-wide text-gray py-10">Most customers save money every month by going solar with Kin Home.</h3>
                <button className="border-[3.5px] font-bold text-base rounded-2xl border-primary-dark px-4 py-2 my-6 hover:bg-primary-dark hover:text-backlight">Get a Free Quote</button>
            </div>
            <img src="/couple.png" alt="couple dance" className="w-full md:h-[600px] object-cover object-center" />
        </section>
    )
}

export default FreeQuote