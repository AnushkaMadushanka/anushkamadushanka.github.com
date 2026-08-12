import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { projects } from "../../data/projects.js";
import { profile } from "../../data/profile.js";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import styles from "./Projects.module.css";

const INITIAL = 6;

export default function Projects() {
	const [expanded, setExpanded] = useState(false);
	const visible = expanded ? projects : projects.slice(0, INITIAL);
	const remaining = projects.length - INITIAL;

	return (
		<Section
			id="projects"
			eyebrow="Built for myself"
			title="Side projects and open source"
			lede={
				<>
					Computer vision, WebAssembly, a published npm plugin and a scraper or two.
					Every repo here is public, and each README carries the full write-up. The
					games live{" "}
					<a href="#games">in their own section above</a>, and everything playable is
					on{" "}
					<a href={profile.links.itch} target="_blank" rel="noreferrer">
						itch.io
					</a>
					.
				</>
			}
		>
			<div className={styles.grid}>
				{visible.map((project, i) => (
					<ProjectCard key={project.name} project={project} index={i} />
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
