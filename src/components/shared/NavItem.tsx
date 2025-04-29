interface NavItemProps {
    href: string
    text: string
    className?: string
}

const NavItem = ({ href, text, className }: NavItemProps) => {
    return (
        <li>
            <a href={href} className={`duration-300 font-medium ease-linear hover:text-primary ${className}`}>
                {text}
            </a>
        </li>
    )
}

export default NavItem