import Header from "@/components/Header";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { animationConfigProjectCard, animationConfigText } from "@/utils/animationConfig";

const sets = [
    {
        id: "ritim-002",
        title: "ritim 002",
        subtitle: "latincore",
        date: "03-2026",
        description: "Latincore inspired set with a mix of cumbia, reggaeton, and dembow.",
        embedUrl:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2284757168&color=%23242526&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
    {
        id: "ritim-001",
        title: "ritim 001",
        subtitle: "bouncy",
        date: "02-2026",
        description: "Bouncy and energetic techno mix.",
        embedUrl:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2258736509&color=%23242526&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    },
];

const Music: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-gray-000 text-gray-FFF">
            <Header />

            <section className="flex-1 px-6 py-5 lg:px-10 lg:py-10">
                <motion.div {...animationConfigText} className="mb-10">
                    <p className="mb-2 text-sm uppercase tracking-[0.25em] text-gray-300">EMOŞ</p>
                    <h1 className="mb-4 text-4xl lg:text-6xl ">ritim</h1>
                    <p className="max-w-2xl text-sm leading-6 text-gray-800 lg:text-base">
                        groove-driven techno
                        <br /> fast rhythms, late hours
                    </p>
                </motion.div>

                <motion.div
                    {...animationConfigProjectCard}
                    className="grid grid-cols-1 gap-6"
                >
                    {sets.map((set) => (
                        <article
                            key={set.id}
                            className="rounded-2xl border border-gray-FFF/10 bg-gray-FFF/5 p-4 backdrop-blur-sm lg:p-6"
                        >
                            <div className="mb-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-gray-FFF/40">{set.date}</p>
                                <h2 className="mt-2 text-2xl font-semibold">
                                    {set.title}
                                    <span className="ml-2 text-gray-FFF/50">- {set.subtitle}</span>
                                </h2>
                                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-FFF/70">
                                    {set.description}
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-xl">
                                <iframe
                                    title={set.title}
                                    width="100%"
                                    height="300"
                                    allow="autoplay"
                                    src={set.embedUrl}
                                />
                            </div>
                        </article>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Music;