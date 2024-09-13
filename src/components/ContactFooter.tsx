// Footer
// Its a footer component that contains the contact information

import { FC } from "react";
import { delay, motion } from "framer-motion";
import { animationConfig, animationConfigSplit, animationConfigText } from "@/utils/animationConfig";

const ContactFooter: FC = () => {
    return (
        <>
            <motion.footer
                className="flex flex-col my-14 mx-6 px-4 py-4 bg-gray-000 rounded-lg border-2 border-gray-100"
                {...animationConfigText}
            >
                {/* <div className="mb-2">
                    <motion.p
                        className="text-l font-semibold text-gray-FFF mb-2"
                        {...animationConfigText}
                    >
                        You want to work together?
                    </motion.p>
                    <motion.p
                        className="text-base text-gray-300"
                        {...animationConfigText}
                    >
                        Feel free to contact me
                    </motion.p>
                </div> */}

                <motion.div
                    className="flex justify-between space-x-8 font-extralight text-gray-FFF mb-4"
                    {...animationConfig}
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
                    className="w-full h-0.5 bg-gray-100 px"
                    {...animationConfigSplit}
                />
                <motion.div
                    className="text-gray-600 text-xs mt-4 text-blur-xs flex justify-center items-center"
                    {...animationConfigText}
                >
                    © 2024 EMRE CIMEN all rights reserved
                </motion.div>
            </motion.footer>
        </>
    );
};

export default ContactFooter;