import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { game } from "../../data/game.js";
import { gameCards } from "../../data/games.js";
import { profile } from "../../data/profile.js";
import Reveal from "../ui/Reveal.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import styles from "./Games.module.css";

/* The three highlights worth stopping on, pulled forward from the case study
   so the section says something specific rather than "I'm making a game". */
const HIGHLIGHTS = [
	{
		title: "A voice built from formants, not recordings",
		text: "The antagonist speaks through a source-filter synthesizer: a glottal pulse through cascaded Klatt resonators. No audio assets at all, and any line can be written the day it's needed.",
	},
	{
		title: "An AI that asks the combat system what would happen",
		text: "The opponent scores moves against a side-effect-free forecast of a real exchange, so damage rules live in exactly one place.",
	},
	{
		title: "A run persisted as two strings",
		text: "The map is a seeded layered DAG. Rather than serialise the graph, it stores the seed and the visited path and regenerates the rest.",
	},
];

/**
 * All six games in one band, so they read as a practice rather than as clutter
 * scattered through the side-projects grid. Scales of Faith leads with the full
 * showcase treatment, because it is far and away the most involved of them.
 */
export default function Games() {
	return (
		<section id="games" aria-labelledby="games-heading" className={styles.section}>
			<div className="container">
				<Reveal className={styles.head}>
					{/* Not "Built for myself": that belongs to the projects section
					    below, and two identical eyebrows read as a copy-paste slip. */}
					<p className={styles.eyebrow}>Solo, in Unity</p>
					<h2 id="games-heading" className={styles.title}>
						Games
					</h2>
					<p className={styles.lede}>
						Six Unity games: one in active development, two you can play in the
						browser right now, and three built to a game jam deadline. All of them
						are on{" "}
						<a href={profile.links.itch} target="_blank" rel="noreferrer">
							itch.io
						</a>
						.
					</p>
				</Reveal>

				{/* --- featured: the flagship --------------------------------- */}
				<Reveal className={styles.featured}>
					<p className={styles.status}>
						<span className={styles.pulse} aria-hidden="true" />
						Currently building
					</p>
					<h3 className={styles.featuredName}>
						<Link to={`/work/${game.slug}`}>{game.name}</Link>
					</h3>
					<p className={styles.featuredLede}>{game.summary}</p>

					<div className={styles.showcase}>
						<Link to={`/work/${game.slug}`} className={styles.shot}>
							<img
								src={game.image}
								alt="A match of Scales of Faith in progress, with guards deployed in their lanes around a coin at the centre of the table"
								width="1280"
								height="720"
								loading="lazy"
								decoding="async"
							/>
						</Link>

						<div className={styles.aside}>
							<ul className={styles.facts}>
								{game.caseStudy.facts.slice(0, 3).map((fact) => (
									<li key={fact.label}>
										<span className={styles.factLabel}>{fact.label}</span>
										<span className={styles.factValue}>{fact.value}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<ul className={styles.highlights}>
						{HIGHLIGHTS.map((h) => (
							<li key={h.title} className={styles.highlight}>
								<h4>{h.title}</h4>
								<p>{h.text}</p>
							</li>
						))}
					</ul>

					<Link to={`/work/${game.slug}`} className={styles.moreLink}>
						Read how it&#39;s built
						<HiArrowRight aria-hidden="true" />
					</Link>
				</Reveal>

				{/* --- the rest ----------------------------------------------- */}
				<div className={styles.grid}>
					{gameCards.map((card, i) => (
						<ProjectCard key={card.name} project={card} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
