import Hero from "../components/sections/Hero.jsx";
import Work from "../components/sections/Work.jsx";
import CurrentBuild from "../components/sections/CurrentBuild.jsx";
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
			    work, then social proof. The game leads the personal group
			    because it is far stronger than the other side projects. */}
			<Hero />
			<Work />
			<Experience />
			<CurrentBuild />
			<Projects />
			<Testimonials />
			<Contact />
		</>
	);
}
