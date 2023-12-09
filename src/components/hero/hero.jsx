/* eslint-disable react/no-unknown-property */
import { AiOutlineFilePdf, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import styles from "./hero.module.css";
import HeadOnly from "./Head_only";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

function Hero() {
	return (
		<div className={styles.container}>
			<div className={styles.background} />
			<div className={styles.content}>
				<div className={styles.avatarContainer}>
					<Canvas>
						<PerspectiveCamera makeDefault position={[0, 1.7, 0.66]} />
						<ambientLight intensity={2} color="#EFEFEF" />
						<HeadOnly />
					</Canvas>
					<div className={styles.avatarImgContainer}>
						<img
							width={379}
							height={403}
							className={styles.avatar}
							src="/main_new.webp"
							alt="avatar"
						/>
					</div>
				</div>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Anushka Madushanka
				</motion.h1>
				<motion.h2
					className={styles.subtitle}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<span className={styles.subtitleHighlight}>Full stack</span> Developer
				</motion.h2>
				<motion.div
					className={styles.btnContainer}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<motion.a
						href="/"
						target="_blank"
						aria-label="resume"
						className={styles.btn}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.9 }}
					>
						<AiOutlineFilePdf />
					</motion.a>
					<motion.a
						href="https://www.linkedin.com/in/anushka-madushanka/"
						target="_blank"
						aria-label="linkedin"
						className={styles.btn}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.9 }}
					>
						<AiFillLinkedin />
					</motion.a>
					<motion.a
						href="https://github.com/AnushkaMadushanka/"
						target="_blank"
						aria-label="github"
						className={styles.btn}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.9 }}
					>
						<AiFillGithub />
					</motion.a>
				</motion.div>
			</div>
		</div>
	);
}

export default Hero;
