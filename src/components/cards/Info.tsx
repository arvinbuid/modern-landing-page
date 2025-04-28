import Paragraph from "../shared/Paragraph"

interface InfoProps {
    title: string,
    description: string
    children: React.ReactNode
}

const Info = ({ title, description, children }: InfoProps) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden space-y-3">
            <div className="text-heading-1 bg-gray dark:bg-gray-950 p-3 rounded-xl w-max relative">{children}</div>
            <h2 className="text-heading-2 w-max relative font-semibold md:text-xl">{title}</h2>
            <Paragraph>{description}</Paragraph>
        </div>
    )
}

export default Info