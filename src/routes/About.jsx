import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { profile, duration, yearsSince } from "../data/profile.js";
import { experience, education, skills } from "../data/experience.js";
import Reveal from "../components/ui/Reveal.jsx";
import useMeta from "../lib/useMeta.js";
import GradPhoto from "../assets/grad.webp";
import styles from "./About.module.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function label(iso) {
	if (!iso) return "Present";
	const [y, m] = iso.split("-").map(Number);
	return `${MONTHS[m - 1]} ${y}`;
}

export default function About() {
	/* Its own title, description and canonical. The old build pointed every
	   route at "/", which told search engines this page duplicated the home
	   page. */
	useMeta({
		title: `About — ${profile.name}`,
		description: `Background, experience and skills of ${profile.name}, a senior full-stack engineer with ${yearsSince()} years shipping production web and mobile products.`,
		path: "/about",
	});

	return (
		<>
			<div className={`container ${styles.page}`}>
				<Reveal className={styles.intro}>
					<p className={styles.eyebrow}>About</p>
					<h1 className={styles.title}>
						{yearsSince()} years building products people actually use
					</h1>
					<div className={styles.introGrid}>
						<div className={styles.bio}>
							<p>
								I’m a full-stack engineer based in {profile.location}. I’ve spent the
								last five years working remotely with Australian teams — three of them
								leading development at ShopShare.tv, and since 2024 building{" "}
								<strong>Uplist</strong>, the pre-market property app of Ray White,
								Australasia’s largest real estate group.
							</p>
							<p>
								What I like most is owning a product end to end. At ShopShare that
								meant the React frontend, the Node and GraphQL APIs, the PostgreSQL
								schema and the AWS infrastructure underneath — and the commercial side
								too, rebuilding billing into four tiers and integrating five affiliate
								networks so creators got paid properly for what their audiences bought.
							</p>
							<p>
								Outside work I build things that force me to learn something new: a
								markerless motion capture pipeline that lifts 2D pose to 3D animation,
								a browser 3D gallery that bakes navigation meshes in WebAssembly, a
								news aggregator held together by a Puppeteer scraper. Most of it is on{" "}
								<a href={profile.links.github} target="_blank" rel="noreferrer">
									GitHub
								</a>
								.
							</p>
							<p>
								I hold a B.Eng. (Hons) in Software Engineering, completed part-time
								while working full-time. {profile.availability} — if you’re building
								something interesting,{" "}
								<Link to="/#contact">I’d like to hear about it</Link>.
							</p>
						</div>
						<figure className={styles.photo}>
							<img
								src={GradPhoto}
								alt={`${profile.name} at his university graduation`}
								width="480"
								height="640"
								loading="lazy"
								decoding="async"
							/>
						</figure>
					</div>
				</Reveal>

				{/* --- experience ------------------------------------------------ */}
				<section className={styles.section} aria-labelledby="about-experience">
					<Reveal>
						<h2 id="about-experience" className={styles.sectionTitle}>
							Experience
						</h2>
					</Reveal>

					{experience.map((role, i) => (
						<Reveal key={role.company} index={i} className={styles.role}>
							<div className={styles.roleHead}>
								<h3>{role.role}</h3>
								<p className={styles.roleCompany}>
									{role.company} · {role.type} · {role.location}
								</p>
								<p className={styles.roleDates}>
									<time dateTime={role.start}>{label(role.start)}</time>
									{" — "}
									<time dateTime={role.end ?? undefined}>{label(role.end)}</time> ·{" "}
									{duration(role.start, role.end)}
								</p>
							</div>
							<ul className={styles.roleList}>
								{role.highlights.map((h) => (
									<li key={h}>{h}</li>
								))}
							</ul>
							<ul className={styles.chips}>
								{role.stack.map((s) => (
									<li key={s}>{s}</li>
								))}
							</ul>
						</Reveal>
					))}
				</section>

				{/* --- skills ---------------------------------------------------- */}
				<section className={styles.section} aria-labelledby="about-skills">
					<Reveal>
						<h2 id="about-skills" className={styles.sectionTitle}>
							Skills
						</h2>
					</Reveal>
					<div className={styles.skillGrid}>
						{skills.map((group, i) => (
							<Reveal key={group.group} index={i % 3} className={styles.skillGroup}>
								<h3>{group.group}</h3>
								<ul className={styles.chips}>
									{group.items.map((s) => (
										<li key={s}>{s}</li>
									))}
								</ul>
							</Reveal>
						))}
					</div>
				</section>

				{/* --- education ------------------------------------------------- */}
				<section className={styles.section} aria-labelledby="about-education">
					<Reveal>
						<h2 id="about-education" className={styles.sectionTitle}>
							Education
						</h2>
						<div className={styles.education}>
							<h3>{education.degree}</h3>
							<p className={styles.roleCompany}>
								{education.institution} · {education.affiliation}
							</p>
							<p className={styles.roleDates}>{education.year}</p>
							<p className={styles.eduNote}>{education.note}</p>
						</div>
					</Reveal>
				</section>

				<Reveal className={styles.cta}>
					<h2>Want the short version?</h2>
					<p>Everything above, on one page.</p>
					<a href={profile.links.cv} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
						Download résumé (PDF)
						<HiArrowUpRight aria-hidden="true" />
					</a>
				</Reveal>
			</div>
		</>
	);
}
