import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";
import shared from "../../shared/shared.module.css";
import styles from "./testimonials.module.css";

const testimonials = [
	{
		name: "Punsisi Kaludewa",
		job_title: "Software Engineer at iPay Sri Lanka",
		testimonial:
			"I had the pleasure of working with Anushka on diverse projects spanning machine learning and computer vision. Anushka is an outstanding full-stack developer, showcasing a remarkable blend of creative skills and technical expertise. His talent is matched only by his adeptness in teamwork and time management. When Anushka commits to something, he demonstrates remarkable determination to see it through to completion. I highly recommend him as a skilled full-stack developer.",
		avatar: "https://media.licdn.com/dms/image/D5603AQGUoM_EhalXQQ/profile-displayphoto-shrink_100_100/0/1693922575012?e=1708560000&v=beta&t=HFN3FPmedW8js0Leoau5FmAHepFRGrDD1IriEtE_AbY",
	},
	{
		name: "Thilini Pabasara",
		job_title: "Digital Developer at MiHCM",
		testimonial:
			"I've had the privilege of collaborating closely with Anushka on various data science and server-side projects, and I can confidently attest to his exceptional skills as a full-stack developer. Anushka seamlessly blends technical expertise in both front-end and back-end development, consistently delivering high-quality solutions. What truly sets Anushka apart is not only his technical proficiency but also his excellent teamwork. His collaborative approach and strong problem-solving skills make him a valuable asset to any team. I highly recommend Anushka for their outstanding contributions and dedication to excellence in software development.",
		avatar: "https://media.licdn.com/dms/image/D5603AQGH70rPR0p4IQ/profile-displayphoto-shrink_100_100/0/1699802180034?e=1708560000&v=beta&t=-OBXaTUXFhh6sgtJqk62qAJtH9wH_MV8xG0WxaQj9Bk",
	},
	{
		name: "Hiruni Silva",
		job_title: "Software Engineer at IFS",
		testimonial:
			"I had the privilege of collaborating with Anushka on both data science and server-side projects. Anushka is a highly skilled full-stack developer who consistently demonstrates a deep understanding of complex technical concepts. His proficiency in problem-solving and attention to detail were key factors in the success of our projects. Anushka's commitment to delivering high-quality solutions and his ability to work seamlessly across different aspects of development make him an invaluable asset to any team. I wholeheartedly recommend Anushka for his expertise, professionalism, and collaborative spirit.",
		avatar: "https://media.licdn.com/dms/image/D4E03AQEnDHZn_5SdHw/profile-displayphoto-shrink_100_100/0/1701072103315?e=1708560000&v=beta&t=k8Btv0lvkNGdJBvrUpkVuq_IDTcMKLOCrr0vRhu00bA",
	},
	{
		name: "Shamal Iroshan",
		job_title: "UI/UX Designer at MiHCM",
		testimonial:
			"It has been a pleasure collaborating closely with Anushka, who truly stands out as an exceptional full-stack developer.  Anushka doesn't just know the ins and outs of both front-end and back-end work; he's also impressively quick at picking up new things. His ability to swiftly grasp new concepts and incorporate them into our projects has been remarkable. Anushka's supportiveness within the team has created an environment where everyone feels encouraged to share ideas and grow together. I highly recommend Anushka for his dynamic skills, fast learning, and the positive impact he brings to any software development team.I had the pleasure of working with Anushka on diverse projects spanning machine learning and computer vision. Anushka is an outstanding full-stack developer, showcasing a remarkable blend of creative skills and technical expertise. His talent is matched only by his adeptness in teamwork and time management. When Anushka commits to something, he demonstrates remarkable determination to see it through to completion. I highly recommend him as a skilled full-stack developer.",
		avatar: "https://media.licdn.com/dms/image/C4D03AQE4Gduqnrlthg/profile-displayphoto-shrink_100_100/0/1652815152698?e=1708560000&v=beta&t=FTQxi-tUHTBgJ3mVPUSG8LiKPARzRdrS3lo3aU2JuVE",
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
				What Others Say
			</motion.h1>
			<div className={styles.testimonials}>
				{showArray.map((testimonial, index) => (
					<motion.div
						key={index}
						className={styles.testimonialCard}
						initial={{ opacity: 0, x: index % 2 == 0 ? 20 : -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className={styles.testimonialText}>
							<div className={styles.icon}>
								<ImQuotesLeft />
							</div>
							<p>{testimonial.testimonial}</p>
						</div>
						<div className={styles.testimonialInfo}>
							<div className={styles.avatar}>
								<img
									src={testimonial.avatar}
									alt={testimonial.name}
									loading="lazy"
								/>
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
