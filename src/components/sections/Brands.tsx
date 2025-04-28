import Container from "../shared/Container"
import Title from "../shared/Title"

const logos = [
    'discord',
    'openai',
    'paypal',
    'spotify',
    'youtube'
]

const Brands = () => {
    return (
        <section>
            <Container className="space-y-8">
                {/* Title */}
                <div className="text-center mx-auto max-w-3xl">
                    <Title>Trusted by Industry Leaders</Title>
                </div>

                {/* Company Image */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                    {logos.map((logo, key) => (
                        <div key={key} className="p-4 sm:p-5 bg-body rounded-xl group">
                            <img
                                src={`src/assets/logos/${logo}.png`}
                                alt={logo}
                                width="100"
                                height="60"
                                className="h-10 w-auto ease-linear duration-300 transition-all grayscale hover:!grayscale-0 hover:scale-105" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>

    )
}

export default Brands