import Button from "../shared/Button"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"

const CTA = () => {
    return (
        <section className="pb-20 relative">
            <Container>
                <div className="relative rounded-2xl overflow-hidden">
                    <div className="relative z-10 py-8 md:py-10 px-6 md:px-8 max-w-xl md:max-w-2xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading-1">Quick start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">own AI</span> Business</h1>
                        <Paragraph className="mt-5">
                            Built for startups, powered by AI
                            Move faster, work smarter, and scale effortlessly with AI-driven tools designed for growing teams.
                        </Paragraph>

                        {/* Cards */}
                        <div>
                            <Button className="text-white mt-10 md:mt-8 hover:scale-105 transition-transform">Get in touch</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CTA