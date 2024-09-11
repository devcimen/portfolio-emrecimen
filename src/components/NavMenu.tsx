// Navigation Menu
// This component contains the navigation menu for the website.

import { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import NavElement from "./NavElement";

const NavMenu: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Variants for hamburger bars
    const topBarVariants = {
        open: { rotate: 45, y: 0 },    // No movement on y-axis, rotates to 45 degrees
        closed: { rotate: 0, y: -8 },  // Moves up when closed to create the gap
    };

    const bottomBarVariants = {
        open: { rotate: -45, y: 0 },   // No movement on y-axis, rotates to -45 degrees
        closed: { rotate: 0, y: 8 },   // Moves down when closed to create the gap
    };

    // Variants for the menu container and menu items
    const menuVariants = {
        open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        closed: { opacity: 0, x: "-100%", transition: { duration: 0.5 } }
    };

    const itemVariants = {
        open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        closed: { opacity: 0, x: "-20px", transition: { duration: 0.3 } }
    };

    return (
        <>
            {/* Hamburger Menu Icon */}
            <div onClick={toggleMenu} className="relative w-8 h-8 cursor-pointer z-50">
                {/* Top Bar */}
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 transform -translate-y-2"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={topBarVariants}
                    transition={{ duration: 0.75 }}
                />
                {/* Bottom Bar */}
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 transform translate-y-2"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={bottomBarVariants}
                    transition={{ duration: 0.75 }}
                />
            </div>


            {/* Navigation Menu */}
            <motion.nav
                className="fixed left-0 w-full h-full bg-gray-000 z-40 flex flex-col"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <motion.ul className="space-y-10 text-white text-2xl mx-6 mt-16">
                    <NavElement
                        href="/projects"
                        text="Selected Projects"
                        variants={itemVariants}
                        onClick={toggleMenu}
                    />
                    <NavElement
                        href="/photography"
                        text="Photography"
                        variants={itemVariants}
                        onClick={toggleMenu}
                    />
                    <NavElement
                        href="/book-reviews"
                        text="Book Reviews"
                        variants={itemVariants}
                        onClick={toggleMenu}
                    />
                    <NavElement
                        href="/blog"
                        text="Blog"
                        variants={itemVariants}
                        onClick={toggleMenu}
                    />
                    <NavElement
                        href="/about"
                        text="About"
                        variants={itemVariants}
                        onClick={toggleMenu}
                    />
                </motion.ul>
            </motion.nav>
        </>
    );
};

export default NavMenu;
