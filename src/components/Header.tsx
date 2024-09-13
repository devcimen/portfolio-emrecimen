import { FC } from "react";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";
import { animationConfigHeader } from "@/utils/animationConfig";

// Header component
const Header: FC = () => {
    // Get current date
    const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}${date.getFullYear()}`;

    return (
        <motion.header
            className="flex justify-between items-center w-full py-4 sticky top-0 z-50 px-6"
            {...animationConfigHeader}
        >
            <motion.div
                className="text-xl font-semibold text-color-primary leading-6 tracking-tight text-blur-s"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {formattedDate}
            </motion.div>
            <motion.div
                className="text-white text-2xl font-semibold leading-6 tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <NavMenu />
            </motion.div>
        </motion.header>
    );
}

export default Header;