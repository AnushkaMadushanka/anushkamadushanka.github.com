import { motion } from "framer-motion";
import styles from "./about.module.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../context";

function About() {
	const { loading } = useContext(LoadingContext);
	const [width, setWidth] = useState(0);
	useEffect(() => {
		function handleResize() {
			setWidth(0);
			setWidth(document.documentElement.clientWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setWidth(document.documentElement.clientWidth);
		}, 0);
	}, [loading]);

	const getTimeFormat = useCallback((year, month) => {
		let now = new Date();
		let nowYear = now.getFullYear();
		let nowMonth = now.getMonth() + 1;
		let diffYear = nowYear - year;
		let diffMonth = nowMonth - month;
		if (diffMonth < 0) {
			diffYear--;
			diffMonth += 12;
		}
		if (diffYear > 0) {
			if (diffMonth > 0) {
				return `${diffYear} yrs ${diffMonth} mos`;
			} else {
				return `${diffYear} yrs`;
			}
		} else {
			return `${diffMonth} mos`;
		}
	}, []);

	return (
		<>
			{!window.matchMedia("(prefers-reduced-motion: reduce)").matches && (
				<div
					style={{
						width: width,
					}}
					className={styles.sidescroller}
				>
					<div className={styles.sidescrollerContent}>
						{[...Array(11)].map((_, index) => (
							<img
								width={211}
								height={374}
								key={index}
								src={`/aiimages/${index + 1}.webp`}
								alt=""
							/>
						))}
						{[...Array(11)].map((_, index) => (
							<img
								width={211}
								height={374}
								key={index}
								src={`/aiimages/${index + 1}.webp`}
								alt=""
							/>
						))}
					</div>
				</div>
			)}
			<div className={styles.container}>
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
						Hi, I’m Anushka Madushanka, a full stack developer with over{" "}
						{new Date().getFullYear() - 2017 + (new Date().getMonth() - 8 < 0 ? -1 : 0)}
						+ years of experience in the industry. I’m passionate about creating web and
						mobile applications that are user-friendly, scalable, and secure. I have a
						bachelor’s degree in computer software engineering from the University of
						Westminster and a strong knowledge of various programming languages and
						frameworks, such as{" "}
						<span>NodeJs, SQL, MongoDB, C#, JavaScript, Angular, and ReactJs.</span> I
						also have expertise in HTML and CSS and can hand-code a given design into
						pixel-perfect CSS.
						<br />
						<br /> I have worked on several projects for different clients, ranging from
						social commerce platforms to live video conferencing apps to indoor
						navigation systems.
						<br />
						<br /> You can check out more of my projects on my{" "}
						<a
							href="https://github.com/AnushkaMadushanka/"
							target="_blank"
							rel="noreferrer"
						>
							GitHub profile
						</a>
						. I’m always eager to learn new technologies and take on new challenges. I’m
						also open to new opportunities and collaborations. If you are interested in
						working with me or have any questions, feel free to contact me through my{" "}
						<a
							href="https://www.linkedin.com/in/anushka-madushanka/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn profile
						</a>{" "}
						or email me at{" "}
						<a href="mailto:anushkamadushanka1998@gmail.com">
							anushkamadushanka1998@gmail.com
						</a>
						. I look forward to hearing from you. Thank you for visiting my portfolio
						website.
					</p>
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
					<h2>Experience</h2>
					<div className={styles.expSection}>
						<div className={styles.expHeading}>
							<h3>Software Engineer (Full Stack Developer)</h3>
							<p>Bourke Technologies</p>
							<span>Sep 2017 - Jan 2021 · 3 yrs 5 mos</span>
						</div>
						<ul className={styles.expList}>
							<li>
								<h4>Hospital Communication System</h4>
								<p>
									Live video conferencing app to use inside hospitals for better.
									communication.
								</p>
								<div className={styles.technologies}>
									<span>React Native</span>
									<span>.NET WEB API</span>
									<span>Genie</span>
									<span>Microsoft SQL Server</span>
								</div>
							</li>
							<li>
								<h4>Bunnings</h4>
								<p>Indoor navigation system for supermarkets.</p>
								<div className={styles.technologies}>
									<span>Angular</span>
									<span>.NET WEB API</span>
									<span>Genie</span>
									<span>Microsoft SQL Server</span>
									<span>Unity</span>
								</div>
							</li>
							<li>
								<h4>Burgercafe</h4>
								<p>POS system and admin panel for managing your products.</p>
								<div className={styles.technologies}>
									<span>.NET MVC</span>
									<span>Genie</span>
									<span>Microsoft SQL Server</span>
									<span>WPF</span>
									<span>Firebase</span>
								</div>
							</li>
							<li>
								<h4>Buckingham Tea</h4>
								<p>Tea e-commerce website</p>
								<div className={styles.technologies}>
									<span>Angular</span>
									<span>.NET WEB API</span>
									<span>Genie</span>
									<span>Microsoft SQL Server</span>
									<span>Stripe Payment APIs</span>
									<span>Firebase</span>
								</div>
							</li>
						</ul>
					</div>

					<div className={styles.expSection}>
						<div className={styles.expHeading}>
							<h3>Lead Web Developer</h3>
							<p>ShopShareTV - Customised Shopping Videos</p>
							<span>Jan 2021 - Present · {getTimeFormat(2021, 1)}</span>
						</div>
						<ul className={styles.expList}>
							<li>
								<h4>Shopshare.tv</h4>
								<p>
									social commerce platform for shoppers to get help, guidance, and
									inspiration as they shop online.
								</p>
								<div className={styles.technologies}>
									<span>React</span>
									<span>NodeJs</span>
									<span>GraphQL</span>
									<span>AWS</span>
									<span>PostgreSQL</span>
									<span>Sequalize</span>
								</div>
							</li>
							<li>
								<h4>Shopcast.tv</h4>
								<p>
									Widget that shows up on online shopping sites to get help,
									guidance on specific products.
								</p>
								<div className={styles.technologies}>
									<span>React</span>
									<span>NodeJs</span>
									<span>GraphQL</span>
									<span>AWS</span>
									<span>PostgreSQL</span>
									<span>Sequalize</span>
								</div>
							</li>
						</ul>
					</div>
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
					<h2>Education</h2>
					<div className={styles.expSection}>
						<div className={styles.expHeading}>
							<h3>B.Eng. (Hons) Software Engineering</h3>
							<p>
								Informatics Institute of Technology (LK) Affiliated with University
								of Westminster (UK)
							</p>
							<span>2018 - 2023</span>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default About;
