import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';
import { FaBars } from "react-icons/fa";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo.svg";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
	const [percentage, setPercentage] = useState(false);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const getScrollPercent = useCallback(() => {
		var h = document.documentElement, 
			b = document.body,
			st = 'scrollTop',
			sh = 'scrollHeight';
		return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
	}, [])

	const handleScroll = useCallback(() => {
		setPercentage(getScrollPercent());
	}, [setPercentage, getScrollPercent]);

	useEffect(() => {
		document.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	const scrolled = percentage > 1;

	const strokeDasharray = 2 * 3.14 * 20;
	const strokeDashoffset = strokeDasharray * ((100 - percentage) / 100);

	const menuItems = (
		<>
			<motion.li
				initial={{ opacity: 0, y: -20, height: 0 }}
				whileInView={{ opacity: 1, y: 0, height: "auto" }}
				exit={{ opacity: 0, y: -20, height: 0, transition: { delay: 0.3 } }}
			>
				<HashLink smooth  to="/#about" className={styles.navLink}>
					About
				</HashLink>
			</motion.li>
			<motion.li
				initial={{ opacity: 0, y: -20, height: 0 }}
				whileInView={{ opacity: 1, y: 0, height: "auto", transition: { delay: 0.1 } }}
				exit={{ opacity: 0, y: -20, height: 0, transition: { delay: 0.2 } }}
			>
				<HashLink smooth  to="/#projects" className={styles.navLink}>
					Projects
				</HashLink>
			</motion.li>
			<motion.li
				initial={{ opacity: 0, y: -20, height: 0 }}
				whileInView={{ opacity: 1, y: 0, height: "auto", transition: { delay: 0.2 } }}
				exit={{ opacity: 0, y: -20, height: 0, transition: { delay: 0.1 } }}
			>
				<HashLink smooth  to="/#testimonials" className={styles.navLink}>
					Testimonials
				</HashLink>
			</motion.li>
			<motion.li
				initial={{ opacity: 0, y: -20, height: 0 }}
				whileInView={{ opacity: 1, y: 0, height: "auto", transition: { delay: 0.3 } }}
				exit={{ opacity: 0, y: -20, height: 0 }}
			>
				<HashLink smooth  to="/#contact" className={styles.navLink}>
					Contact
				</HashLink>
			</motion.li>
		</>
	);

	return (
		<>
			<div className={scrolled || hamburgerOpen ? styles.containerDark : styles.container}>
				<nav className={styles.navbar} role="navigation">
					<Link to="/" className={styles.logoLink}>
						<img src={Logo} alt="logo" />
					</Link>

					<ul className={styles.navLinks}>
						<input
							className={styles.hamburgerCheckbox}
							type="checkbox"
							id="checkbox_toggle"
							onChange={(e) => {
								setHamburgerOpen(e.target.checked);
							}}
						/>
						<label htmlFor="checkbox_toggle" className={styles.hamburger}>
							{hamburgerOpen ? <AiOutlineClose /> : <FaBars />}
						</label>
						<div className={styles.menu}>{menuItems}</div>
						<AnimatePresence>
							{hamburgerOpen && <div className={styles.menuMobile}>{menuItems}</div>}
						</AnimatePresence>
					</ul>
				</nav>
			</div>
			<AnimatePresence initial={false}>
				{scrolled && (
					<motion.button
						className={styles.scrollButton}
						onClick={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.5 }}
					>
						<svg
							width="60"
							height="60"
							viewBox="-7.5 -7.5 75 75"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							style={{
								transform: "rotate(-90deg)",
							}}
						>
							<circle
								r="20"
								cx="30"
								cy="30"
								fill="transparent"
								stroke="#1e1e1e"
								strokeWidth="2"
								strokeDasharray={strokeDasharray}
								strokeDashoffset="0"
							></circle>
							<circle
								r="20"
								cx="30"
								cy="30"
								stroke="#00eeff"
								strokeWidth="2"
								strokeLinecap="round"
								strokeDashoffset={strokeDashoffset}
								fill="transparent"
								strokeDasharray={strokeDasharray}
							></circle>
						</svg>
						<AiOutlineArrowUp />
					</motion.button>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navigation;
