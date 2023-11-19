import Contact from "../../components/contact/contact";
import ExperienceBento from "../../components/experience-bento/experience-bento";
import Hero from "../../components/hero/hero";
import MyStory from "../../components/my-story/my-story";
import Projects from "../../components/projects/projects";
import Testimonials from "../../components/testimonials/testimonials";

function Home() {
	return (
		<>
			<Hero />
			<MyStory />
			<ExperienceBento />
			<Projects />
			<Testimonials />
			<Contact />
		</>
	);
}

export default Home;
