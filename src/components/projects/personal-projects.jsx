import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import shared from "../../shared/shared.module.css";
import styles from "./projects.module.css";

const projects = [
	{
		title: "Ludo Shooter",
		description:
			"A wave-based shooter where you have to destroy the board pieces coming to kill you. But every time you reload, the dice will roll and add a random modifier to your game",
		githubLink: "https://github.com/AnushkaMadushanka/ludo-shooter",
		staticImageUrl: "/projects/ludo_shooter.webp",
		releaseLink: "https://anushka-madushanka.itch.io/ludo-shooter",
		youtubeSource: "https://youtu.be/VAIWMgyLycM",
	},
	{
		title: "Nightmarescape",
		description:
			"The First Person Endless Runner where you can test your reflexes as you try to escape from the creature that is following you through the tunnels",
		githubLink: "https://github.com/AnushkaMadushanka/nightmarescape",
		staticImageUrl: "/projects/nightmarescape.webp",
		releaseLink: "https://play.google.com/store/apps/details?id=com.anushka.nightmarescape",
		youtubeSource: "https://www.youtube.com/watch/b6FQ_OjQ8X0",
	},
	{
		title: "Operation Alone",
		description:
			"A top-down shooter game about finding your way out through tunnels filled with zombies",
		githubLink: "https://github.com/AnushkaMadushanka/Operation-Alone",
		staticImageUrl: "/projects/operation_alone.webp",
		releaseLink: "https://anushka-madushanka.itch.io/operation-alone",
		youtubeSource: "https://www.youtube.com/watch/b6FQ_OjQ8X0",
	},
	{
		title: "MoCap using HPE",
		description:
			"A low-cost vision based motion capture system using 3D human pose estimation that will accept a video with human motion and process that human motion into a 3D animation that can be used in their preferred 3d program such as Blender, 3Ds Max",
		githubLink: "https://github.com/AnushkaMadushanka/mocap-hpe",
		staticImageUrl: "/projects/mocap_hpe.webp",
		youtubeSource: "https://www.youtube.com/watch?v=rZU_7MSCpr0",
		releaseLink: "https://www.youtube.com/watch?v=rZU_7MSCpr0",
	},
	{
		title: "Simple Forum using CodeIgniter",
		description:
			"A simple forum application developed using CodeIgniter framework. This is a simple forum application that allows users to most of the basic forum functionalities.",
		githubLink: "https://github.com/AnushkaMadushanka/cw-forum",
		staticImageUrl: "/projects/forum.webp",
		youtubeSource: "https://youtu.be/GWy1kGbydBM",
		releaseLink: "https://youtu.be/GWy1kGbydBM",
	},
	{
		title: "SQL Dummy Data Generator",
		description:
			"A C# program that creates dummy data for your SQL databases. With few clicks you can create sample databases with data for your specific needs",
		staticImageUrl: "/projects/sql_dummy.webp",
		githubLink: "https://github.com/AnushkaMadushanka/SQL-Dummy-Data-Generator",
		releaseLink: "https://github.com/AnushkaMadushanka/SQL-Dummy-Data-Generator/releases",
		youtubeSource: "https://www.youtube.com/watch/b3AlZ1YqNBw",
	},
	{
		title: "Auto Extension Reloader",
		description:
			"This plugin allows developers to see the current status of the building process of their specific extension. get notification when the status change and it will reload the extension after a build",
		githubLink: "https://github.com/AnushkaMadushanka/auto-extension-reloader",
		releaseLink: "https://www.npmjs.com/package/auto-extension-reloader",
		staticImageUrl: "/projects/aer.webp",
		youtubeSource: "https://www.youtube.com/watch/gczjrjCIrVU",
	},
	{
		title: "Audio Visualization Project #1",
		description: "Testing the broads of audio visualization in unity 3d",
		githubLink: "https://github.com/AnushkaMadushanka/Audio-Visualization",
		staticImageUrl: "/projects/avp1.webp",
		releaseLink: "https://www.youtube.com/watch?v=NCvmuG4uP6A",
		youtubeSource: "https://www.youtube.com/watch/NCvmuG4uP6A",
	},
	{
		title: "Audio Visualization Project #2",
		description: "Testing the broads of audio visualization in unity 3d",
		staticImageUrl: "/projects/avp2.webp",
		githubLink: "https://github.com/AnushkaMadushanka/Audio-Visualization",
		releaseLink: "https://www.youtube.com/watch?v=ll_8dB-HIwE",
		youtubeSource: "https://www.youtube.com/watch/ll_8dB-HIwE",
	},
];

function PersonalProjects() {
	const [count, setCount] = useState(3);
	const showArray = projects.slice(0, count);
	return (
		<div className={styles.container}>
			<motion.h1
				className={styles.header}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Passion Projects
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
						<div className={styles.projectLinks}>
							<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
								Github <AiOutlineArrowRight />
							</a>
							<a href={project.releaseLink} target="_blank" rel="noopener noreferrer">
								Demo <AiOutlineArrowRight />
							</a>
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

export default PersonalProjects;
