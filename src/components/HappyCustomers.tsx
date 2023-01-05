import Image from "next/legacy/image"

type Props = {}
Image
const HappyCustomers = () => {
    return(
        <section className="h-screen w-screen">
            <Image src='/roof.jpeg' alt="happy customers" layout="fill" />
        </section>
    )
}

export default HappyCustomers