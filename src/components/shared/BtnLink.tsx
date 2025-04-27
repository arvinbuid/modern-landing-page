interface BtnLinkProps {
    text: string,
    href: string,
    className?: string
}

const BtnLink = ({ text, href, className = "" }: BtnLinkProps) => {
    return (
        <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border-0 hover:bg-violet-700 transition-colors dark:bg-violet-600 cursor-pointer ${className}`}>
            <span className="relative z-10 text-white">{text}</span>
        </a>
    )
}

export default BtnLink