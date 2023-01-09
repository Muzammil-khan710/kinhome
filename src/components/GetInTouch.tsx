type Props = {}

const GetInTouch = (props: Props) => {
    return (
        <section className="bg-gray-dark justify-between flex flex-wrap flex-col md:flex-row items-center px-8  py-10 md:py-24  md:px-40">
            <div>
                <p className="tracking-widest font-medium text-gray ">Get In Touch</p>
                <h2 className="text-6xl max-w-[40rem] font-semibold tracking-tight text-primary-dark">Think we would be a good fit for your solar solution?</h2>
            </div>
            <button className="w-fit flex self-end border-[3.5px] font-bold text-base rounded-2xl border-primary-dark px-4 py-2 my-8 hover:bg-primary-dark hover:text-backlight">Lets Get Started</button>
        </section>
    )
}

export default GetInTouch