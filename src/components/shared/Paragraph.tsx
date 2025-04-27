interface ParagraphProps {
    children: React.ReactNode
    className?: string
}

const Paragraph = ({ children, className = "" }: ParagraphProps) => {
    return (
        <p className={`mx-auto text-heading-3 max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>{children}</p>
    )
}

export default Paragraph