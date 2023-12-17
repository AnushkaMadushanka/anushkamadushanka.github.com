import Contact from "../../components/contact/contact";
import ExperienceBento from "../../components/experience-bento/experience-bento";
import Hero from "../../components/hero/hero";
import MyStory from "../../components/my-story/my-story";
import CompanyProjects from "../../components/projects/company-projects";
import PersonalProjects from "../../components/projects/personal-projects";
import Testimonials from "../../components/testimonials/testimonials";

function Home() {
	return (
		<>
			<Hero />
			<MyStory />
			<ExperienceBento />
			<CompanyProjects />
			<PersonalProjects />
			<Testimonials />
			<Contact />
		</>
	);
}

export default Home;
