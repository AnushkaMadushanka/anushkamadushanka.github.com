import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import GradPhoto from "../../assets/grad.jpg";
import sharedStyles from "../../shared/shared.module.css";
import styles from "./my-story.module.css";
import { Link } from "react-router-dom";

function MyStory() {
	return (
		<div className={styles.container} id="about">
			<motion.div
				className={styles.avatar}
				initial={{
					x: -100,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{ duration: 0.5 }}
			>
				<img src={GradPhoto} alt="avatar" />
			</motion.div>
			<motion.div
				className={styles.content}
				initial={{
					x: 100,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{ duration: 0.5 }}
			>
				<h2>My Story</h2>
				<p>
					I am a skilled software engineer specializing in{" "}
					<span>desktop, web, and game development.</span> I have excellent
					problem-solving abilities, a passion for learning, and a commitment to
					delivering exceptional outcomes. I write clean, efficient, and well-organized
					code that adheres to industry best practices.
				</p>
				<Link to="/about">
					<motion.a
						className={sharedStyles.primaryButton}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.95 }}
					>
						Learn More <AiOutlineArrowRight />
					</motion.a>
				</Link>
			</motion.div>
		</div>
	);
}

export default MyStory;
