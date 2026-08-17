/**
 * `photo` points at a local file. Drop a square image at that path and it
 * appears; until then the card falls back to initials, which is a deliberate
 * design rather than a broken image. Never hotlink a CDN for these: the
 * previous set were signed LinkedIn URLs that expired and 404'd for two years.
 */
export const testimonials = [
	{
		name: "Joel Inteman",
		title: "Lead Product Designer",
		company: "Ray White",
		photo: "/testimonials/joel-inteman.webp",
		quote:
			"I worked with Anushka for three years building SHOPSHARE, a startup I founded and we built from the ground up. When I moved to Ray White and an opportunity came up on UpList, I got him on board without a second thought. He takes on the entire stack, ships fast, and cares whether the thing is actually good rather than just finished. He is one of the best engineers I have worked with.",
	},
	{
		name: "Punsisi Kaludewa",
		title: "Software Engineer",
		company: "iPay Sri Lanka",
		photo: "/testimonials/punsisi-kaludewa.webp",
		quote:
			"I had the pleasure of working with Anushka on diverse projects spanning machine learning and computer vision. Anushka is an outstanding full-stack developer, showcasing a remarkable blend of creative skills and technical expertise. When Anushka commits to something, he demonstrates remarkable determination to see it through to completion.",
	},
	{
		name: "Thilini Pabasara",
		title: "Digital Developer",
		company: "MiHCM",
		photo: "/testimonials/thilini-pabasara.webp",
		quote:
			"I've collaborated closely with Anushka on various data science and server-side projects. He seamlessly blends technical expertise in both front-end and back-end development, consistently delivering high-quality solutions. What truly sets Anushka apart is not only his technical proficiency but also his excellent teamwork.",
	},
	{
		name: "Hiruni Silva",
		title: "Software Engineer",
		company: "IFS",
		photo: "/testimonials/hiruni-silva.webp",
		quote:
			"Anushka is a highly skilled full-stack developer who consistently demonstrates a deep understanding of complex technical concepts. His proficiency in problem-solving and attention to detail were key factors in the success of our projects.",
	},
	{
		name: "Shamal Iroshan",
		title: "UI/UX Designer",
		company: "MiHCM",
		photo: "/testimonials/shamal-iroshan.webp",
		quote:
			"Anushka doesn't just know the ins and outs of both front-end and back-end work; he's also impressively quick at picking up new things. His ability to swiftly grasp new concepts and incorporate them into our projects has been remarkable, and his supportiveness has created an environment where everyone feels encouraged to share ideas.",
	},
];
