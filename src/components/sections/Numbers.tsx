import Container from "../shared/Container"

const Numbers = () => {
    return (
        <section className="relative mt-12 md:mt-16">
            <Container className="flex justify-center items-center">
                <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg space-y-4 md:space-y-0
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4">
                    <div className="text-center px-5">
                        <h2 className="text-heading-1 font-semibold text-xl sm:text-2xl md:text-4xl">100 +</h2>
                        <p className="text-md text-heading-3 mt-2">Models Deployed</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="text-heading-1 font-semibold text-xl sm:text-2xl md:text-4xl">99.9%</h2>
                        <p className="text-md text-heading-3 mt-2">Uptime Guarantee</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="text-heading-1 font-semibold text-xl sm:text-2xl md:text-4xl">60K +</h2>
                        <p className="text-md text-heading-3 mt-2">Users Worldwide</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="text-heading-1 font-semibold text-xl sm:text-2xl md:text-4xl">50 +</h2>
                        <p className="text-md text-heading-3 mt-2">Enterprise Clients</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Numbers