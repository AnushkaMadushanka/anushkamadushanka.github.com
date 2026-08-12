import Hero from "../components/sections/Hero.jsx";
import Work from "../components/sections/Work.jsx";
import Games from "../components/sections/Games.jsx";
import Experience from "../components/sections/Experience.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Contact from "../components/sections/Contact.jsx";
import Divider from "../components/ui/Divider.jsx";
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
			{/* Only this boundary gets one. Every other section transition has
			    content hard against both sides of the gap; the hero is the one
			    place where the space reads as empty rather than as rhythm. */}
			<Divider />
			<Work />
			<Experience />
			<Games />
			<Projects />
			<Testimonials />
			<Contact />
		</>
	);
}
