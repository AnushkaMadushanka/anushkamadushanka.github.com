import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./experience-bento.module.css";
import { Link } from "react-router-dom";

function ExperienceBento() {
	const variants = {
		rest: { scale: 0.8 },
		inView: { scale: 1 },
	}
	const animations = (delay) => ({
		transition: { type: 'spring', duration: 0.8, delay: delay },
		variants: variants,
	});
	return (
		<motion.div className={styles.container}
			initial="rest"
			whileInView="inView"
		>
			<motion.div className={styles.bento1} {...animations(0.1)}>
				<h2>
					6<span>+</span>
				</h2>
				<p>Seasoned Expertise</p>
			</motion.div>
			<motion.div className={styles.bento2} {...animations(0.2)}>
				<h2>2</h2>
				<p>Companies</p>
			</motion.div>
			<motion.div className={styles.bento3} {...animations(0)}>
				<div className={styles.company}>
					<h2>Software Engineer (Full Stack Developer)</h2>
					<p>Bourke Technologies · Full-time</p>
					<p>Sep 2017 - Jan 2021 · 3 yrs 5 mos</p>
				</div>
				<hr className={styles.divider} />
				<div className={styles.company}>
					<h2>Lead Web Developer</h2>
					<p>ShopShareTV · Full-time</p>
					<p>Jan 2021 - Present · 2 yrs 7 mos</p>
				</div>
			</motion.div>
			<motion.div className={styles.bento4} {...animations(0.3)}>
				<p>
					B.Eng. (Hons) Software Engineering
					<br /> Informatics Institute of Technology (LK) Affiliated with University of
					Westminster (UK) <br />
					2018 - 2023
				</p>
			</motion.div>
			<Link to="/about" className={styles.bento5}>
				Experience <AiOutlineArrowRight />
			</Link>
		</motion.div>
	);
}

export default ExperienceBento;
