import Hero from "../components/sections/Hero.jsx";
import Work from "../components/sections/Work.jsx";
import Games from "../components/sections/Games.jsx";
import Experience from "../components/sections/Experience.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Contact from "../components/sections/Contact.jsx";
import { profile } from "../data/profile.js";
import useMeta from "../lib/useMeta.js";

export default function Home() {
	useMeta({
		title: `${profile.name} - ${profile.role}`,
		description: profile.summary,
		path: "/",
	});

	return (
		<>
			{/* Commercial evidence and career history together, then personal
			    work, then social proof. Games are grouped into one band ahead of
			    the smaller engineering projects; six together read as a practice,
			    where interleaved they read as clutter. */}
			<Hero />
			<Work />
			<Experience />
			<Games />
			<Projects />
			<Testimonials />
			<Contact />
		</>
	);
}
