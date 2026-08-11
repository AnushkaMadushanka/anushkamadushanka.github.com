import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiArrowUpRight, HiPlus } from "react-icons/hi2";
import { projects } from "../../data/projects.js";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./Projects.module.css";

const INITIAL = 6;

/** Fallback for repos with no screenshot — initials over the accent wash,
 *  which reads as deliberate rather than as a missing image. */
function Placeholder({ name }) {
	const initials = name
		.split(/\s+/)
		.slice(0, 2)
		.map((w) => w[0])
		.join("")
		.toUpperCase();
	return (
		<div className={styles.placeholder} aria-hidden="true">
			<span>{initials}</span>
		</div>
	);
}

function Card({ project, index }) {
	return (
		<Reveal as="article" index={index % 3} className={styles.card}>
			<div className={styles.media}>
				{project.image ? (
					<img
						src={project.image}
						alt={`${project.name} screenshot`}
						loading="lazy"
						decoding="async"
						width="640"
						height="400"
					/>
				) : (
					<Placeholder name={project.name} />
				)}
			</div>

			<div className={styles.body}>
				<h3 className={styles.name}>{project.name}</h3>
				<p className={styles.blurb}>{project.blurb}</p>

				<ul className={styles.tags}>
					{project.tags.map((t) => (
						<li key={t}>{t}</li>
					))}
				</ul>

				<div className={styles.links}>
					<a
						href={project.repo}
						target="_blank"
						rel="noreferrer"
						className={styles.repoLink}
					>
						<FaGithub aria-hidden="true" />
						<span>
							Code<span className="visually-hidden"> for {project.name} on GitHub</span>
						</span>
					</a>
					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noreferrer"
							className={styles.demoLink}
						>
							<span>
								{project.demoLabel}
								<span className="visually-hidden"> — {project.name}</span>
							</span>
							<HiArrowUpRight aria-hidden="true" />
						</a>
					)}
				</div>
			</div>
		</Reveal>
	);
}

export default function Projects() {
	const [expanded, setExpanded] = useState(false);
	const visible = expanded ? projects : projects.slice(0, INITIAL);
	const remaining = projects.length - INITIAL;

	return (
		<Section
			id="projects"
			eyebrow="Built for myself"
			title="Side projects and open source"
			lede="Computer vision, WebAssembly, scrapers and a few Unity games. Every card links to the repo, where the README carries the full write-up."
		>
			<div className={styles.grid}>
				{visible.map((project, i) => (
					<Card key={project.repo} project={project} index={i} />
				))}
			</div>

			{!expanded && remaining > 0 && (
				<div className={styles.moreWrap}>
					<button type="button" className={styles.more} onClick={() => setExpanded(true)}>
						<HiPlus aria-hidden="true" />
						Show {remaining} more {remaining === 1 ? "project" : "projects"}
					</button>
				</div>
			)}
		</Section>
	);
}
