import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { profile } from "../../data/profile.js";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.inner}`}>
				<div className={styles.brandBlock}>
					<Link to="/" className={styles.brand}>
						<img src="/logo.svg" alt="" width="32" height="32" />
						<span>{profile.name}</span>
					</Link>
					<p className={styles.blurb}>
						{profile.role} · {profile.location} ({profile.timezone})
					</p>
				</div>

				<nav className={styles.nav} aria-label="Footer">
					<ul>
						<li>
							<Link to="/#work">Work</Link>
						</li>
						<li>
							<Link to="/#experience">Experience</Link>
						</li>
						<li>
							<Link to="/#projects">Projects</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/#contact">Contact</Link>
						</li>
					</ul>
				</nav>

				<ul className={styles.socials}>
					<li>
						<a
							href={profile.links.github}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub profile"
						>
							<FaGithub aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href={profile.links.linkedin}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn profile"
						>
							<FaLinkedinIn aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href={profile.links.cv}
							target="_blank"
							rel="noreferrer"
							aria-label="Download résumé as PDF"
						>
							<HiOutlineDocumentText aria-hidden="true" />
						</a>
					</li>
				</ul>
			</div>

			<div className={`container ${styles.legal}`}>
				<p>© {new Date().getFullYear()} {profile.name}</p>
				<p>
					Built with React and three.js.{" "}
					<a
						href="https://github.com/AnushkaMadushanka/anushkamadushanka.github.com"
						target="_blank"
						rel="noreferrer"
					>
						Source on GitHub
					</a>
				</p>
			</div>
		</footer>
	);
}
