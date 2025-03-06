import { motion } from "motion/react";
import { PiHexagonThin } from "react-icons/pi";
import { fadeIn } from "../../framerMotion/variants";

const HeroImg = () => {
    return (
        <div className="flex items-center justify-center">
            <motion.div className="flex items-center justify-center h-full" variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <img src="/images/matin-portfolio4.png" alt="hero Image" className="max-w-[650px] relative left-8 top-5 opacity-90 h-auto" />
                <div className="absolute flex items-center justify-center -z-10 animate-pulse">
                    <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
                </div>
            </motion.div>
        </div>
    )
}

export default HeroImg