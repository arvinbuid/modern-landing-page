import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import Title from "../shared/Title"

const AboutUs = () => {
    return (
        <section id="about-us">
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
                {/* Image */}
                <div className="w-full md:w-5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img
                            src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt='About Our Mission'
                            className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                        />
                    </div>
                </div>

                {/* Mission */}
                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col space-y-5">
                    <Title>About Our Mission</Title>
                    <Paragraph>We are on a mission to redefine what's possible, using AI to power bold ideas, disrupt industries, and build a smarter, faster, and more connected world. We believe that innovation thrives when intelligence meets action. Through our cutting-edge AI solutions, we empower businesses to move beyond limits, unlocking new opportunities, driving transformation, and shaping the future with confidence.</Paragraph>
                </div>
            </Container>
        </section>
    )
}

export default AboutUs