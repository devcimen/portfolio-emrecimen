// Footer
// Its a footer component that contains the contact information

import { FC } from "react";
import { motion } from "framer-motion";

const ContactFooter: FC = () => {
    return (
        <>
            <motion.div
                className="w-full h-0.5 bg-gray-100 mb-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />

            <motion.footer
                className="flex flex-col mb-6 px-4 py-8 bg-gray-000 rounded-lg border-2 border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="mb-8">
                    <motion.p
                        className="text-l font-semibold text-gray-FFF mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        You want to work together?
                    </motion.p>
                    <motion.p
                        className="text-base text-gray-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Feel free to contact me via my socials
                    </motion.p>
                </div>

                <motion.div
                    className="flex justify-between space-x-8 font-extralight text-gray-FFF"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <a href="https://github.com/devcimen" className="hover:underline">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/emre-cimen-980257234/" className="hover:underline">
                        LinkedIn
                    </a>
                    <a href="mailto:emre.cimen07@gmail.com" className="hover:underline">
                        Email
                    </a>
                </motion.div>

                <motion.div
                    className="text-gray-600 text-xs mt-8 text-blur-xs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    © 2024 EMRE CIMEN all rights reserved
                </motion.div>
            </motion.footer>
        </>
    );
};

export default ContactFooter;