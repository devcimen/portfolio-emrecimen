// Navigation Menu
// This component contains the navigation menu for the website.

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavElement from "./NavElement";

const NavMenu: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Prevent scrolling when the menu is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Variants for hamburger bars
    const topBarVariants = {
        open: { rotate: 45, y: 0 },
        closed: { rotate: 0, y: -8 },
    };

    const bottomBarVariants = {
        open: { rotate: -45, y: 0 },
        closed: { rotate: 0, y: 8 },
    };

    // Variants for the menu container and menu items
    const menuVariants = {
        open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        closed: { opacity: 0, y: "-100%", transition: { duration: 0.35 } },
    };

    const itemVariants = {
        open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        closed: { opacity: 0, y: "-20px", transition: { duration: 0.35 } },
    };

    return (
        <>
            {/* Hamburger Menu Icon */}
            <div onClick={toggleMenu} className="relative w-8 h-8 cursor-pointer z-50">
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform -translate-y-2"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={topBarVariants}
                    transition={{ duration: 0.75 }}
                />
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform translate-y-2"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={bottomBarVariants}
                    transition={{ duration: 0.75 }}
                />
            </div>

            {/* Navigation Menu */}
            <motion.nav
                className="fixed left-0 top-0 w-full h-full bg-gray-800 z-40 flex flex-col justify-end px-6 pb-12"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <motion.ul className="flex flex-col space-y-10">
                    <NavElement href="/" text="Projects" variants={itemVariants} isOpen={isOpen} onClick={toggleMenu} />
                    <NavElement href="/" text="Photography" variants={itemVariants} isOpen={isOpen} onClick={toggleMenu} />
                    <NavElement href="/" text="Book reviews" variants={itemVariants} isOpen={isOpen} onClick={toggleMenu} />
                    <NavElement href="/" text="Blog" variants={itemVariants} isOpen={isOpen} onClick={toggleMenu} />
                    <NavElement href="/#about" text="About" variants={itemVariants} isOpen={isOpen} onClick={toggleMenu} />
                </motion.ul>
            </motion.nav>
        </>
    );
};

export default NavMenu;
