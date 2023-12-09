import { motion, useInView } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
// import Waving from "../../assets/waving.png";
import styles from "./contact.module.css";
import Waving from "./waving";
import { useRef } from "react";

const contactSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email address").required("Email is required"),
	message: Yup.string().required("Message is required"),
});

function Contact() {
	const ref = useRef(null)
	const isInView = useInView(ref)

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: contactSchema,
		onSubmit: (values) => {
			emailjs
				.send(
					"service_e2sbfi5",
					"template_ybjdyod",
					{
						from_name: values.name,
						from_email: values.email,
						message: values.message,
					},
					"Jex7CmoNVzlb1zQ35"
				)
				.then(
					() => {
						alert("Message sent successfully!");
					},
					() => {
						alert("Error sending message");
					}
				);
		},
	});
	return (
		<div ref={ref} className={styles.container} id="contact">
			<motion.div
				className={styles.formContainer}
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
				<h1>Get In Touch</h1>
				<p>Have a question or want to work together?</p>
				<form className={styles.form} onSubmit={formik.handleSubmit}>
					<div className={styles.formGroup}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
						/>
						{formik.touched.name && formik.errors.name ? (
							<div className={styles.error}>{formik.errors.name}</div>
						) : null}
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className={styles.error}>{formik.errors.email}</div>
						) : null}
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.message}
						/>
						{formik.touched.message && formik.errors.message ? (
							<div className={styles.error}>{formik.errors.message}</div>
						) : null}
					</div>
					<button type="submit" className={styles.formButton}>
						Submit
					</button>
				</form>
			</motion.div>
			<motion.div
				className={styles.hero}
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
				{isInView && <Waving />}
			</motion.div>
		</div>
	);
}

export default Contact;
