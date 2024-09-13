export const animationConfig = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 2, ease: [0.6, 0.01, 0.1, 0.95], delay: 0.4 },
};

export const animationConfigText = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { 
        duration: 2,
        ease: [0.42, 0, 0.58, 1],
    },
};

export const animationConfigSplit = {
    initial: { scaleX: 0, transformOrigin: 'left' },
    whileInView: { scaleX: 1 },
    viewport: { once: true },
    transition: { duration: 2 },
};

export const animationConfigHeader = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 2, ease: [0.6, 0.01, 0.1, 0.95] },
};

export const animationConfigSkills = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 2, staggerChildren: 0.4 },
};

export const animationConfigHover = {
    whileHover: {
        scale: 1.05,
        backgroundColor: "#FFFFFF",
        color: "#242526",
        borderColor: "#242526",
        transition: { duration: 0.3 }
    }
};