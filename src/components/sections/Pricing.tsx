import { pricingPlans } from "../../utils/pricing-plans"

import Button from "../shared/Button"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import Title from "../shared/Title"

const Pricing = () => {
    return (
        <section id="pricing">
            <Container className="text-center">
                <Title>Pricing</Title>
                <Paragraph className="mt-5">Choose a plan that's right for your business</Paragraph>


                {/* Pricing Plans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {pricingPlans.map((plan, key) => (
                        <div key={key} className="relative w-full group">
                            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                                <div className="bg-box-bg rounded-3xl flex flex-col shadow-lg shadow-box-shadow p-8 h-full relative">
                                    {plan.bestValue && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white font-bold uppercase bg-primary rounded-full bg-gradient-to-r from-blue-600 to-violet-600 tracking-wider">
                                            Best Value
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-semibold text-heading-1">
                                        {plan.name}
                                    </h3>
                                    <p className="mt-4 text-4xl font-bold text-heading-1">
                                        {plan.price}
                                    </p>
                                    <ul className="mt-5 text-white text-left flex flex-col space-y-3">
                                        {plan.features.map((feature, keyFeature) => (
                                            <li key={keyFeature} className="flex items-center gap-2">
                                                <span className="text-primary">✅ </span>
                                                <span>{feature} </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8">
                                        <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">
                                            Choose Plan
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Pricing