import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import styles from "./Header.module.css";

/* `route: true` means a real page, and only those get an active state. The rest
   are in-page anchors that ScrollRestoration resolves, from any route. */
const NAV = [
	{ label: "Work", to: "/#work" },
	{ label: "Experience", to: "/#experience" },
	{ label: "Game", to: "/#game" },
	{ label: "Projects", to: "/#projects" },
	{ label: "About", to: "/about", route: true },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const panelId = useId();
	const toggleRef = useRef(null);
	const location = useLocation();

	/* Passive listener, and we only touch state when the boolean actually
	   flips, not on every scroll event. */
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	/* Close on navigation. Adjusting state during render is React's documented
	   pattern for reacting to a changed prop. An effect here would cause a
	   second render pass on every route change. */
	const [lastKey, setLastKey] = useState(location.key);
	if (location.key !== lastKey) {
		setLastKey(location.key);
		setOpen(false);
	}

	/* Escape closes and returns focus to the button that opened it. */
	const close = useCallback(() => {
		setOpen(false);
		toggleRef.current?.focus();
	}, []);

	useEffect(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") close();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open, close]);

	/* Lock the page behind the open panel without the layout shift that
	   `overflow: hidden` alone causes on desktop scrollbars. */
	useEffect(() => {
		if (!open) return;
		const { body } = document;
		const gap = window.innerWidth - document.documentElement.clientWidth;
		const prev = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
		body.style.overflow = "hidden";
		if (gap > 0) body.style.paddingRight = `${gap}px`;
		return () => {
			body.style.overflow = prev.overflow;
			body.style.paddingRight = prev.paddingRight;
		};
	}, [open]);

	return (
		<header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
			<div className={`container ${styles.bar}`}>
				<Link to="/" className={styles.brand} aria-label="Anushka Madushanka, home">
					<img src="/logo.svg" alt="" width="40" height="40" />
					<span className={styles.brandName}>Anushka</span>
				</Link>

				<nav className={styles.desktopNav} aria-label="Main">
					<ul className={styles.navList}>
						{NAV.map((item) =>
							item.route ? (
								<li key={item.to}>
									<NavLink
										to={item.to}
										className={({ isActive }) =>
											`${styles.navLink} ${isActive ? styles.active : ""}`
										}
									>
										{item.label}
									</NavLink>
								</li>
							) : (
								<li key={item.to}>
									<Link to={item.to} className={styles.navLink}>
										{item.label}
									</Link>
								</li>
							)
						)}
					</ul>
					<Link className={styles.cta} to="/#contact">
						Get in touch
					</Link>
				</nav>

				{/* A real button: focusable, announced, and toggleable by keyboard.
				    The old build used a display:none checkbox, which put the menu
				    outside the tab order entirely. */}
				<button
					ref={toggleRef}
					type="button"
					className={styles.toggle}
					aria-expanded={open}
					aria-controls={panelId}
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <HiXMark aria-hidden="true" /> : <HiBars3 aria-hidden="true" />}
				</button>
			</div>

			{/* Always mounted so it can transition both ways in CSS, and hidden
			    from assistive tech and the tab order while closed. */}
			<div id={panelId} className={styles.panel} data-open={open} inert={!open || undefined}>
				<nav aria-label="Mobile">
					<ul className={styles.panelList}>
						{NAV.map((item) => (
							<li key={item.to}>
								<Link to={item.to} className={styles.panelLink}>
									{item.label}
								</Link>
							</li>
						))}
						<li>
							<Link to="/#contact" className={styles.panelCta}>
								Get in touch
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
