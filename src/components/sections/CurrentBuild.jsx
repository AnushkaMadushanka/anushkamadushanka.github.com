import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { game } from "../../data/game.js";
import Reveal from "../ui/Reveal.jsx";
import styles from "./CurrentBuild.module.css";

/* The three highlights worth stopping on, pulled forward from the case study
   so the section says something specific rather than "I'm making a game". */
const HIGHLIGHTS = [
	{
		title: "A voice built from formants, not recordings",
		text: "The antagonist speaks through a source-filter synthesizer — a glottal pulse through cascaded Klatt resonators. Zero audio assets, any line writable the day it's needed.",
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

export default function CurrentBuild() {
	return (
		<section id="game" aria-labelledby="game-heading" className={styles.section}>
			<div className="container">
				<Reveal className={styles.head}>
					<p className={styles.eyebrow}>
						<span className={styles.pulse} aria-hidden="true" />
						Currently building
					</p>
					<h2 id="game-heading" className={styles.title}>
						{game.name}
					</h2>
					<p className={styles.lede}>{game.summary}</p>
				</Reveal>

				<Reveal className={styles.showcase}>
					<Link to={`/work/${game.slug}`} className={styles.shot}>
						<img
							src={game.image}
							alt="A match of Scales of Faith in progress — guards deployed in their lanes around a coin at the centre of the table"
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
				</Reveal>

				<ul className={styles.highlights}>
					{HIGHLIGHTS.map((h, i) => (
						<Reveal as="li" key={h.title} index={i} className={styles.highlight}>
							<h3>{h.title}</h3>
							<p>{h.text}</p>
						</Reveal>
					))}
				</ul>

				<Reveal className={styles.more}>
					<Link to={`/work/${game.slug}`} className={styles.moreLink}>
						Read how it&rsquo;s built
						<HiArrowRight aria-hidden="true" />
					</Link>
				</Reveal>
			</div>
		</section>
	);
}
