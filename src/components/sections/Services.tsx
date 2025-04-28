import { services } from "../../utils/services"
import Service from "../cards/Service"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import Title from "../shared/Title"

const Services = () => {
    return (
        <section id="services">
            <Container className="space-y-10 md:space-y-12">
                {/* Title & Description */}
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <Title>Our AI Services</Title>
                    <Paragraph>Unlock the potential of our advanced machine learning, natural language processing, and analytics prediction. Our services include the following: </Paragraph>
                </div>

                {/* Services */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, key) => (
                        <Service key={key} title={service.title} description={service.description} icon={service.icon} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Services