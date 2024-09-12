// Navigation Element
// This component is responsible for rendering the navigation elements that make up the navigation menu.
// It is a child component of NavMenu and is responsible for rendering the individual navigation elements that make up the navigation menu.

import { FC } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

// Navigation Element Props
interface NavElementProps {
    href: string;
    text: string;
    variants: any;
    isOpen: boolean;
    onClick: () => void;
}

const NavElement: FC<NavElementProps> = ({ href, text, variants, isOpen, onClick }) => {
    return (
        <motion.li
            className="relative group transition-colors duration-300"
            whileHover={{
                scale: 1,
                transition: {
                    duration: 0.5
                },
                x: 10,
                y: -1
            }}
            variants={variants}
            onClick={onClick}
        >
            <Link href={href}>
                <div className="block w-full mb-4 text-gray-300 text-3xl group-hover:text-gray-100 transition duration-300">
                    {text}
                </div>
            </Link>
            {/* Underline */}
            <motion.div
                className="w-full h-0.5 bg-gray-300 transition-transform origin-left transform"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isOpen ? 1 : 0 }}
                transition={{ duration: 2 }}
            />
        </motion.li>
    );
}

export default NavElement;