import Hero from "../components/sections/Hero.jsx";
import Work from "../components/sections/Work.jsx";
import Experience from "../components/sections/Experience.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Contact from "../components/sections/Contact.jsx";
import { profile } from "../data/profile.js";

export default function Home() {
	return (
		<>
			{/* React 19 hoists these into <head>, so each route gets its own
			    metadata without a helmet library. */}
			<title>Anushka Madushanka — Senior Full-Stack Engineer</title>
			<meta name="description" content={profile.summary} />
			<link rel="canonical" href={`${profile.site}/`} />

			<Hero />
			<Work />
			<Experience />
			<Projects />
			<Testimonials />
			<Contact />
		</>
	);
}
