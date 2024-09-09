import { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

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
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 transform -translate-y-2" // Centers the top bar
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={topBarVariants}
                    transition={{ duration: 0.5 }}
                />
                {/* Bottom Bar */}
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 transform translate-y-2" // Centers the bottom bar
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={bottomBarVariants}
                    transition={{ duration: 0.5 }}
                />
            </div>


            {/* Navigation Menu */}
            <motion.nav
                className="fixed top-0 left-0 w-full h-full bg-gray-000 z-40 flex flex-col items-center justify-center"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <motion.ul className="space-y-10 text-white text-2xl">
                    <motion.li
                        className="hover:text-color-accent transition-colors duration-300"  // Hover effect
                        variants={itemVariants}
                        onClick={toggleMenu}
                    >
                        <Link href="/projects">Selected Projects</Link>
                    </motion.li>
                    <motion.li
                        className="hover:text-color-accent transition-colors duration-300"  // Hover effect
                        variants={itemVariants}
                        onClick={toggleMenu}
                    >
                        <Link href="/photography">Photography</Link>
                    </motion.li>
                    <motion.li
                        className="hover:text-color-accent transition-colors duration-300"  // Hover effect
                        variants={itemVariants}
                        onClick={toggleMenu}
                    >
                        <Link href="/book-reviews">Book Reviews</Link>
                    </motion.li>
                    <motion.li
                        className="hover:text-color-accent transition-colors duration-300"  // Hover effect
                        variants={itemVariants}
                        onClick={toggleMenu}
                    >
                        <Link href="/blog">Blog</Link>
                    </motion.li>
                    <motion.li
                        className="hover:text-color-accent transition-colors duration-300"  // Hover effect
                        variants={itemVariants}
                        onClick={toggleMenu}
                    >
                        <Link href="/about">About</Link>
                    </motion.li>
                </motion.ul>
            </motion.nav>
        </>
    );
};

export default NavMenu;
