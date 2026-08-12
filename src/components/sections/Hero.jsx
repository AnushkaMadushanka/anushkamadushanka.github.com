import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowUpRight, HiOutlineDocumentText } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { profile, metrics } from "../../data/profile.js";
import useDeferredEnhancement from "../../lib/useDeferredEnhancement.js";
import useMediaQuery from "../../lib/useMediaQuery.js";
import AvatarBoundary from "../avatar/AvatarBoundary.jsx";
import styles from "./Hero.module.css";

const Avatar3D = lazy(() => import("../avatar/Avatar3D.jsx"));

/* If the model hasn't arrived by now, stop waiting and show the portrait on
   its own. Nothing on this site is allowed to spin forever. */
const MODEL_WAIT_TIMEOUT = 6000;

/*
 * Two portraits for two situations.
 *
 * `AVATAR_IMG` is the stylised avatar, and only makes sense as the backdrop
 * the WebGL head registers over. On its own it reads as a placeholder.
 * `PHOTO_IMG` is the real headshot, shown whenever the 3D isn't coming: a
 * touch device, reduced motion, low memory, Save-Data, or a model that
 * failed to load.
 */
const AVATAR_IMG = "/main_new.webp";
const PHOTO_IMG = "/portrait.webp";

/*
 * The entrance is a plain CSS keyframe sequence, staggered with a custom
 * property. Nothing above the fold waits on JavaScript, an IntersectionObserver
 * or a hydration pass to become visible. The previous build animated the
 * hero with `whileInView`, so the most important text on the site started at
 * opacity 0 and could be caught there.
 */
export default function Hero() {
	/* The portrait only appears in the two-column layout. Rendering it
	   conditionally rather than hiding it in CSS means a phone never fetches
	   the image, since `display: none` does not reliably prevent an <img> load. */
	const showPortrait = useMediaQuery("(min-width: 1024px)");
	/* `eligible` is known on the first render; `ready` only after idle. The
	   reveal below has to key off `eligible`, or the portrait would show, then
	   hide again the moment the model actually started loading. */
	const { eligible: expects3D, ready: show3D } = useDeferredEnhancement();

	const [modelSettled, setModelSettled] = useState(false);
	const [fellBack, setFellBack] = useState(false);

	const onModelReady = useCallback(() => setModelSettled(true), []);
	/* Latched: once we've committed to the photo we stay there, so a model
	   that turns up late can't swap the portrait out from under the reader. */
	const fallBack = useCallback(() => setFellBack(true), []);

	/* Anything that means "no 3D" (ineligible device, load failure, or taking
	   too long) shows the photo instead of the avatar backdrop, which on its
	   own just looks like a placeholder waiting for something. */
	const use3D = expects3D && !fellBack;
	const portraitSrc = use3D ? AVATAR_IMG : PHOTO_IMG;

	/* Tracked by src so switching portraits re-arms the loading state. */
	const [loadedSrc, setLoadedSrc] = useState(null);
	const imgLoaded = loadedSrc === portraitSrc;

	/* A cached image can finish before React attaches onLoad, so the ref
	   catches that case; onLoad covers the normal one. Records `portraitSrc`
	   rather than the element's own src, which resolves to an absolute URL and
	   would never match. */
	const imgRef = useCallback(
		(el) => {
			if (el?.complete && el.naturalWidth > 0) setLoadedSrc(portraitSrc);
		},
		[portraitSrc]
	);

	/*
	 * Image and model are revealed together, so the head never appears over a
	 * blank frame or vice versa. Without the 3D, the photo reveals as soon as
	 * it has decoded.
	 */
	const waitingOnModel = use3D && !modelSettled;
	const revealed = imgLoaded && !waitingOnModel;

	/* Cleanup clears the timer the moment the model settles, so this only ever
	   fires when the model genuinely hasn't arrived. */
	useEffect(() => {
		if (!showPortrait || !use3D || modelSettled) return;
		const timer = setTimeout(fallBack, MODEL_WAIT_TIMEOUT);
		return () => clearTimeout(timer);
	}, [showPortrait, use3D, modelSettled, fallBack]);

	return (
        <section className={styles.hero} aria-labelledby="hero-heading">
            <div className={styles.glow} aria-hidden="true" />

            <div className={`container ${styles.inner}`}>
                <div className={styles.copy}>
                    {/* <p className={styles.availability} style={{ "--i": 0 }}>
                        <span className={styles.dot} aria-hidden="true" />
                        {profile.availability}
                    </p> */}

                    <h1 id="hero-heading" className={styles.name} style={{ "--i": 1 }}>
                        {profile.name}
                    </h1>

                    <p className={styles.role} style={{ "--i": 2 }}>
                        {profile.role}
                    </p>

                    <p className={styles.tagline} style={{ "--i": 3 }}>
                        {profile.tagline}
                    </p>

                    {/* The second slot went to "See the work", which pointed at the
                        very next section, already reachable by the nav and by
                        simply scrolling. The résumé is the thing a hiring manager
                        actually came for, so it takes the slot instead. */}
                    <div className={styles.actions} style={{ "--i": 4 }}>
                        <Link to="/#contact" className={styles.primary}>
                            Get in touch
                            <HiArrowUpRight aria-hidden="true" />
                        </Link>
                        <a
                            href={profile.links.cv}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.secondary}
                        >
                            Download résumé
                            <HiOutlineDocumentText aria-hidden="true" />
                        </a>
                    </div>

                    <ul className={styles.socials} style={{ "--i": 5 }}>
                        <li>
                            <a
                                href={profile.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.iconLink}
                            >
                                <FaGithub aria-hidden="true" />
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href={profile.links.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.iconLink}
                            >
                                <FaLinkedinIn aria-hidden="true" />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Two independent gates, deliberately: the portrait follows the
                    layout breakpoint, the WebGL head follows device capability.
                    Tying the image to the capability check would strand it for
                    reduced-motion or low-memory visitors on desktop, and pop it
                    in after idle for everyone else. */}
                {showPortrait && (
                    <div className={styles.portrait} style={{ "--i": 2 }}>
                        <div className={styles.portraitFrame}>
                            {/* Spinner holds the frame until everything is ready. */}
                            {!revealed && (
                                <span
                                    className={styles.portraitLoader}
                                    role="status"
                                    aria-label="Loading portrait"
                                >
                                    <span className={styles.spinner} aria-hidden="true" />
                                </span>
                            )}

                            <div
                                className={`${styles.portraitMedia} ${revealed ? styles.portraitMediaReady : ""}`}
                            >
                                <img
                                    key={portraitSrc}
                                    ref={imgRef}
                                    src={portraitSrc}
                                    alt={`${profile.name}, ${profile.role}`}
                                    width="379"
                                    height="403"
                                    fetchPriority="high"
                                    className={use3D ? styles.portraitImg : styles.portraitPhoto}
                                    onLoad={() => setLoadedSrc(portraitSrc)}
                                    onError={() => setLoadedSrc(portraitSrc)}
                                />
                                {show3D && use3D && (
                                    <AvatarBoundary onError={fallBack}>
                                        <Suspense fallback={null}>
                                            <Avatar3D
                                                className={styles.canvas}
                                                onReady={onModelReady}
                                            />
                                        </Suspense>
                                    </AvatarBoundary>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="container">
                <ul className={styles.metrics} style={{ "--i": 6 }}>
                    {metrics.map((m) => (
                        <li key={m.label} className={styles.metric}>
                            <span className={styles.metricValue}>
                                {m.prefix}
                                {m.value}
                                {m.suffix}
                            </span>
                            <span className={styles.metricLabel}>{m.label}</span>
                            <span className={styles.metricDetail}>{m.detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
