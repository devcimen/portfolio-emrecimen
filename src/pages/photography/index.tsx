// Photography page
// Lists all photography projects

import DomeGallery from "@/components/DomeGallery";
import Header from "@/components/Header";
import { GetStaticProps, NextPage } from "next";
import fs from "fs";
import path from "path";

import cloudinary from "@/utils/cloudinary";
import { animationConfigDomeGallery, animationConfigProjectCard, animationConfigText } from "@/utils/animationConfig";
import { motion } from "framer-motion";

type PhotographyProps = {
    images: { src: string; alt?: string }[];
};

const Photography: NextPage<PhotographyProps> = ({ images }) => {
    const hasImages = images && images.length > 0;
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <section className="flex-1 text-gray-800 lg:px-6 lg:py-10 px-6 py-5 overflow-hidden">
                <motion.h1 className="text-4xl mb-6" {...animationConfigText}>Photography</motion.h1>
                <motion.div className="w-full h-full" {...animationConfigDomeGallery}>
                    {!hasImages ? (
                        <div className="w-full h-full grid place-items-center">
                            <div className="w-64 h-64 rounded-3xl bg-gray-700 animate-pulse" />
                        </div>
                    ) : (
                        <DomeGallery
                            images={images}
                            fit={1.2}
                            grayscale={false}
                            overlayBlurColor="#242526"
                            segments={24}
                            dragSensitivity={30}
                        />
                    )}

                </motion.div>
            </section>
        </div>
    );
};

export default Photography;

export const getStaticProps: GetStaticProps<PhotographyProps> = async () => {
    const res = await cloudinary.search
        .expression('folder:"portfolio"')
        .sort_by("public_id", "desc")
        .max_results(500)
        .execute();

    const images =
        res.resources?.map((r: any) => ({
            src: r.secure_url as string,
            alt:
                (r.context?.custom?.alt as string | undefined) ??
                (r.public_id as string),
        })) ?? [];

    return {
        props: { images },
        revalidate: 60 * 60,
    };
};