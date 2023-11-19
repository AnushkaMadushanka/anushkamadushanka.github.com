import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";
import shared from "../../shared/shared.module.css";
import styles from "./testimonials.module.css";

const testimonials = [
	{
		name: "Sarah Johnson",
		job_title: "CEO at TechSolutions Inc.",
		testimonial:
			"Anushka's expertise as a full stack developer has been invaluable to our projects. His attention to detail and problem-solving skills consistently deliver high-quality solutions.",
		avatar: "https://i.pravatar.cc/300?img=1",
	},
	{
		name: "Michael Lee",
		job_title: "Software Engineer at XYZ Tech",
		testimonial:
			"Working alongside Anushka has been a pleasure. His proficiency in both front-end and back-end development makes him an asset to any team. He's dedicated and always delivers exceptional results.",
		avatar: "https://i.pravatar.cc/300?img=2",
	},
	{
		name: "Emily Patel",
		job_title: "Project Manager at ABC Innovations",
		testimonial:
			"Anushka's commitment to understanding our project's requirements and delivering scalable solutions has been remarkable. His technical proficiency and collaborative approach significantly contributed to our project's success.",
		avatar: "https://i.pravatar.cc/300?img=3",
	},
	{
		name: "Javier Rodriguez",
		job_title: "CTO at Digital Nexus",
		testimonial:
			"Anushka's skill set as a full stack developer is impressive. His ability to adapt to new technologies and swiftly resolve complex issues demonstrates his exceptional capabilities in the field.",
		avatar: "https://i.pravatar.cc/300?img=4",
	},
	{
		name: "Priya Gupta",
		job_title: "Lead Developer at SoftwareXpert",
		testimonial:
			"Anushka's proficiency across the full stack spectrum is commendable. His innovative solutions and reliable code have been instrumental in enhancing our product's performance and functionality.",
		avatar: "https://i.pravatar.cc/300?img=5",
	},
];

function Testimonials() {
    const [count, setCount] = useState(3);
    const showArray = testimonials.slice(0, count);
	return (
		<div className={styles.container} id="testimonials">
			<motion.h1
				className={styles.header}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Testimonials
			</motion.h1>
			<div className={styles.testimonials}>
				{showArray.map((testimonial, index) => (
					<motion.div
						key={index}
						className={styles.testimonialCard}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<div className={styles.testimonialText}>
							<div className={styles.icon}>
								<ImQuotesLeft />
							</div>
							<p>{testimonial.testimonial}</p>
						</div>
						<div className={styles.testimonialInfo}>
							<div className={styles.avatar}>
								<img src={testimonial.avatar} alt={testimonial.name} />
							</div>
							<div className={styles.info}>
								<h2>{testimonial.name}</h2>
								<p>{testimonial.job_title}</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
			{count < testimonials.length && (
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

export default Testimonials;
