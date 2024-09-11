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
    onClick: () => void;
}

const NavElement: FC<NavElementProps> = ({ href, text, variants, onClick  }) => {
    return (
        <motion.li
            className="relative group transition-colors duration-300"
            variants={variants}
            onClick={onClick}
        >
            <Link href={href}>
                <div className="block w-full mb-1 text-gray-FFF text-2xl">
                    {text}
                </div>
            </Link>
            {/* Underline */}
            <div className="w-full h-0.5 bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:scale-x-100 transition-transform origin-left transform scale-x-0 duration-1000" />
        </motion.li>
    );
}

export default NavElement;