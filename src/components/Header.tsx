import { FC } from "react";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";

// Header component
const Header: FC = () => {
    // Get current date
    const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}${date.getFullYear()}`;

    return (
        <motion.header
            className="flex justify-between items-center w-full px-6 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="text-xl font-semibold text-color-primary leading-6 tracking-tight text-blur-s"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {formattedDate}
            </motion.div>
            {/* Placeholder navigation menu */}
            <motion.div
                className="text-white text-2xl font-semibold leading-6 tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {/* Placeholder icon, replace this with the actual hamburger menu later */}
                <NavMenu />
            </motion.div>
        </motion.header>
    );
}

export default Header;