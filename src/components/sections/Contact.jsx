import { useId, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiArrowUpRight, HiCheckCircle, HiExclamationTriangle } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "../../data/profile.js";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./Contact.module.css";

const SERVICE_ID = "service_e2sbfi5";
const TEMPLATE_ID = "template_ybjdyod";
const PUBLIC_KEY = "Jex7CmoNVzlb1zQ35";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
	const errors = {};
	if (!name.trim()) errors.name = "Please enter your name.";
	if (!email.trim()) errors.email = "Please enter your email address.";
	else if (!EMAIL_RE.test(email.trim())) errors.email = "That doesn't look like an email address.";
	if (!message.trim()) errors.message = "Please write a message.";
	else if (message.trim().length < 10) errors.message = "A little more detail would help.";
	return errors;
}

const EMPTY = { name: "", email: "", message: "" };

export default function Contact() {
	const [values, setValues] = useState(EMPTY);
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error
	const formRef = useRef(null);
	const ids = useId();

	const fieldId = (n) => `${ids}-${n}`;
	const errorId = (n) => `${ids}-${n}-error`;

	const setField = (name, value) => {
		setValues((v) => ({ ...v, [name]: value }));
		if (touched[name]) {
			setErrors(validate({ ...values, [name]: value }));
		}
	};

	const onBlur = (name) => {
		setTouched((t) => ({ ...t, [name]: true }));
		setErrors(validate(values));
	};

	async function onSubmit(e) {
		e.preventDefault();
		const found = validate(values);
		setErrors(found);
		setTouched({ name: true, email: true, message: true });

		if (Object.keys(found).length > 0) {
			/* Move focus to the first problem so keyboard and screen-reader
			   users are taken to it rather than left guessing. */
			formRef.current?.querySelector(`[aria-invalid="true"]`)?.focus();
			return;
		}

		setStatus("sending");
		try {
			await emailjs.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{
					from_name: values.name,
					from_email: values.email,
					message: values.message,
				},
				PUBLIC_KEY
			);
			setStatus("sent");
			setValues(EMPTY);
			setTouched({});
		} catch {
			setStatus("error");
		}
	}

	const invalid = (n) => Boolean(touched[n] && errors[n]);
	const sending = status === "sending";

	return (
		<Section
			id="contact"
			eyebrow="Contact"
			title="Let’s talk"
			lede={`${profile.availability}. I'm in ${profile.location} (${profile.timezone}), which overlaps the Australian working day.`}
		>
			<div className={styles.layout}>
				<Reveal className={styles.formWrap}>
					<form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
						<div className={styles.field}>
							<label htmlFor={fieldId("name")}>Name</label>
							<input
								id={fieldId("name")}
								name="name"
								type="text"
								autoComplete="name"
								value={values.name}
								onChange={(e) => setField("name", e.target.value)}
								onBlur={() => onBlur("name")}
								aria-invalid={invalid("name")}
								aria-describedby={invalid("name") ? errorId("name") : undefined}
								disabled={sending}
							/>
							{invalid("name") && (
								<p className={styles.error} id={errorId("name")}>
									{errors.name}
								</p>
							)}
						</div>

						<div className={styles.field}>
							<label htmlFor={fieldId("email")}>Email</label>
							<input
								id={fieldId("email")}
								name="email"
								type="email"
								autoComplete="email"
								value={values.email}
								onChange={(e) => setField("email", e.target.value)}
								onBlur={() => onBlur("email")}
								aria-invalid={invalid("email")}
								aria-describedby={invalid("email") ? errorId("email") : undefined}
								disabled={sending}
							/>
							{invalid("email") && (
								<p className={styles.error} id={errorId("email")}>
									{errors.email}
								</p>
							)}
						</div>

						<div className={styles.field}>
							<label htmlFor={fieldId("message")}>Message</label>
							<textarea
								id={fieldId("message")}
								name="message"
								rows="5"
								value={values.message}
								onChange={(e) => setField("message", e.target.value)}
								onBlur={() => onBlur("message")}
								aria-invalid={invalid("message")}
								aria-describedby={invalid("message") ? errorId("message") : undefined}
								disabled={sending}
							/>
							{invalid("message") && (
								<p className={styles.error} id={errorId("message")}>
									{errors.message}
								</p>
							)}
						</div>

						<button type="submit" className={styles.submit} disabled={sending}>
							{sending ? "Sending…" : "Send message"}
							{!sending && <HiArrowUpRight aria-hidden="true" />}
						</button>

						{/* Announced to screen readers without stealing focus. The old
						    build used window.alert() for both outcomes. */}
						<p
							className={`${styles.status} ${status === "error" ? styles.statusError : ""} ${
								status === "sent" ? styles.statusSent : ""
							}`}
							role="status"
							aria-live="polite"
						>
							{status === "sent" && (
								<>
									<HiCheckCircle aria-hidden="true" />
									Thanks — that’s sent. I’ll get back to you shortly.
								</>
							)}
							{status === "error" && (
								<>
									<HiExclamationTriangle aria-hidden="true" />
									That didn’t send. Email me directly at {profile.email}.
								</>
							)}
						</p>
					</form>
				</Reveal>

				<Reveal index={1} className={styles.aside}>
					<h3 className={styles.asideTitle}>Or reach me directly</h3>
					<ul className={styles.channels}>
						<li>
							<a href={`mailto:${profile.email}`} className={styles.channel}>
								<span className={styles.channelLabel}>Email</span>
								<span className={styles.channelValue}>{profile.email}</span>
							</a>
						</li>
						<li>
							<a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={styles.channel}>
								<span className={styles.channelLabel}>
									<FaLinkedinIn aria-hidden="true" /> LinkedIn
								</span>
								<span className={styles.channelValue}>anushka-madushanka</span>
							</a>
						</li>
						<li>
							<a href={profile.links.github} target="_blank" rel="noreferrer" className={styles.channel}>
								<span className={styles.channelLabel}>
									<FaGithub aria-hidden="true" /> GitHub
								</span>
								<span className={styles.channelValue}>AnushkaMadushanka</span>
							</a>
						</li>
					</ul>

					<a href={profile.links.cv} target="_blank" rel="noreferrer" className={styles.cv}>
						Download résumé (PDF)
						<HiArrowUpRight aria-hidden="true" />
					</a>
				</Reveal>
			</div>
		</Section>
	);
}
