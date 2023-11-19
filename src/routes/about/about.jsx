import { motion } from "framer-motion";
import Waving from "../../components/contact/waving";
import styles from "./about.module.css";

function About() {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<motion.div
					className={styles.hero}
					initial={{
						x: -100,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					transition={{ duration: 0.5 }}
				>
					<Waving lookRight />
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
					<h2>My Story</h2>
					<p>
						Hi, I’m Anushka Madushanka, a full stack developer with over 6 years of
						experience in the industry. I’m passionate about creating web and mobile
						applications that are user-friendly, scalable, and secure. I have a
						bachelor’s degree in computer software engineering from the University of
						Westminster and a strong knowledge of various programming languages and
						frameworks, such as NodeJs, SQL, MongoDB, C#, JavaScript, Angular, and
						ReactJs. I also have expertise in HTML and CSS and can hand-code a given
						design into pixel-perfect CSS.
						<br />
						<br /> I have worked on several projects for different clients, ranging from
						social commerce platforms to live video conferencing apps to indoor
						navigation systems.
						<br />
						<br /> You can check out more of my projects on my GitHub profile. I’m
						always eager to learn new technologies and take on new challenges. I’m also
						open to new opportunities and collaborations. If you are interested in
						working with me or have any questions, feel free to contact me through my
						LinkedIn profile or email me at anushka.madushanka@gmail.com. I look forward
						to hearing from you. Thank you for visiting my portfolio website.
					</p>
				</motion.div>
			</div>
			<div className={styles.section}>
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
					<p>
						Software Engineer (Full Stack Developer) Bourke Technologies · Full-time Sep
						2017 - Jan 2021 · 3 yrs 5 mos
						<ul>
							<li>
								Shopshare.tv - social commerce platform for shoppers to get help,
								guidance, and inspiration as they shop online. <br />
								Technologies: React, NodeJs, GraphQL, AWS, PostgreSQL, Sequalize
							</li>
							<li>
								Shopcast.tv - Widget that shows up on online shopping sites to get
								help, guidance on specific products.
								<br />
								Technologies: React (NextJS), NodeJs, GraphQL, AWS, PostgreSQL,
								Sequalize
							</li>
							<li>
								Hospital Communication System - Live video conferencing app to use
								inside hospitals for better. communication.
								<br />
								Technologies: React Native, .NET WEB API, Genie, Microsoft SQL
								Server
							</li>
							<li>
								Bunnings- Indoor navigation system for supermarkets.
								<br />
								Technologies: Angular, .NET WEB API, Genie, Microsoft SQL Server,
								Unity
							</li>
							<li>
								Burgercafe - POS system and admin panel for managing your products.
								<br />
								Technologies: .NET MVC, Genie, Microsoft SQL Server, WPF, Firebase
							</li>
							<li>
								Buckingham Tea - Tea e-commerce website
								<br />
								Technologies: Angular, .NET WEB API, Genie, Microsoft SQL Server,
								Stripe Payment APIs, Firebase
							</li>
						</ul>
						Lead Web Developer ShopShareTV - Customised Shopping Videos · Full-time Jan
						2021 - Present · 2 yrs 7 mos
					</p>
				</motion.div>
				<motion.div
					className={styles.hero}
					initial={{
						x: -100,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					transition={{ duration: 0.5 }}
				>
					<Waving lookRight />
				</motion.div>
			</div>
		</div>
	);
}

export default About;
