import Container from "../shared/Container"
import logo from "../../assets/icon.svg"
import { navItems } from "../../utils/navItems"
import NavItem from "../shared/NavItem"

const Footer = () => {
    return (
        <footer className="relative pt-15 rounded-t-3xl bg-box-bg">
            <Container className="pb-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                        <span className="text-lg font-semibold text-heading-1">LOGO</span>
                    </div>

                    {/* Footer Links */}
                    <ul className="text-heading-1 flex flex-col gap-x-0 md:flex-row md:gap-x-4 gap-y-3 md:gap-y-0 mt-3 md:mt-0 text-md">
                        {navItems.map((item, key) => (
                            <NavItem href={item.href} text={item.text} key={key} className="hover:text-violet-600 transition-colors" />
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer