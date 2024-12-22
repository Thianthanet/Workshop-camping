import  { DarkMode }  from "./DarkMode";
import DropdowmListMenu from "./DropdowmListMenu";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
    return (
        <nav>
            <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center">
                {/* Logo */}
                <Logo />
                {/* Search */}
                <Search />
                {/* DarkMode & Profile */}
                <div className="flex gap-4">
                    <DarkMode />
                    <DropdowmListMenu />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
