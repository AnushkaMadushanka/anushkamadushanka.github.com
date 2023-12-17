import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import shared from "../../shared/shared.module.css";
import styles from "./projects.module.css";

const projects = [
	{
		title: "SHOPRECORDER",
		description: "Easily create and upload Shopcast recordings to ShopShareTV. Use this extension to record your browser tab and create videos with shoppable content. Explore and watch recommended shoppable videos from the best creators and channels on ShopShareTV.",
		staticImageUrl: "/projects/shopcast-recorder.webp",
	},
	{
		title: "SHOPSHARE",
		description: "ShopShare connects stylists with their customers in an easy, interactive and scalable way.Shopshare reintroduces the ‘in-store’ feel to the overwhelming world of online shopping, which is populated by over 12 million retailers! Engage your clients through personal styling edits and earn money from their purchases.",
		staticImageUrl: "/projects/shopshare.webp",
	},
	{
		title: "SHOPCAST",
		description: "ShopCast makes online shopping more personal, more interactive and more fun! The result? Engaged customers that convert better and spend more.",
		staticImageUrl: "/projects/shopcast.webp",
	},
];

function CompanyProjects() {
	const [count, setCount] = useState(3);
	const showArray = projects.slice(0, count);
	return (
		<div className={styles.container} id="projects">
			<motion.h1
				className={styles.header}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Proffessional Projects
			</motion.h1>
			<div className={styles.projects}>
				{showArray.map((project, index) => (
					<motion.div
						key={index}
						className={styles.projectCard}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<div className={styles.main}>
							<div className={styles.projectImage}>
								<img
									src={project.staticImageUrl}
									alt={project.title}
									loading="lazy"
								/>
							</div>
							<div className={styles.projectInfo}>
								<h2>{project.title}</h2>
								<p>{project.description}</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
			{count < projects.length && (
				<button
					className={shared.primaryButton}
					onClick={() => {
						setCount(count + 3);
					}}
				>
					Load More <AiOutlineArrowRight />
				</button>
			)}
		</div>
	);
}

export default CompanyProjects;
