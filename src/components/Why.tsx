type Props = {}

const WhyComp = (props: Props) => {
    return (
        <section className="text-primary ml-4 lg:flex-row flex-col flex lg:gap-12 my-20 justify-center">
            <h2 className="text-5xl lg:mr-20 font-semibold self-start md:sticky top-[130px] ">Why?</h2>
            <div className="container text-base max-w-lg">
                <p className="my-2">
                    <strong>Drastically reduces or even eliminates your electric bills.</strong> Electricity costs can make up a large portion of your monthly expenses. With a solar panel system, you’ll generate free power for your system’s entire 25+ year lifespan. Even if you don’t produce 100 percent of the energy you consume, solar still reduces your utility bills, meaning you’ll save a lot of money.
                </p>
                <p className="my-2">
                    <strong>Going solar helps avoid rising energy costs.</strong> Every year, electricity prices continue to increase throughout the country. By investing in a solar energy system now, you can lock-in the price you pay for electricity today in order to protect against future increases in electricity costs.
                </p>
                <p className="my-2">
                    <strong>Going solar increases your property value.</strong> This one’s easy: homes with solar sell for more than homes without. And when you consider that solar allows you to reduce or eliminate electricity bills, it’s easy to understand why wouldn’t you rather live somewhere without monthly utility bills?
                </p>
                <p className="my-2">
                    <strong>Going solar nets you a great return on your investment.</strong> At the end of the day, solar is one of the best investments you can make. The average American solar purchaser sees a return on their investment (ROI) of 20 percent or more, with most solar panel systems paying for themselves multiple times over the course of their decades-long lifetime. Try getting that ROI from stocks!
                </p>
            </div>
        </section>
    )
}

export default WhyComp