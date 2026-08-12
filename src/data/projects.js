const GH = "https://github.com/AnushkaMadushanka";

/**
 * Things built outside work. Ordered by how much they demonstrate. Each card
 * links straight to the repo, where the README carries the full write-up.
 */
export const projects = [
	{
		name: "Markerless Motion Capture",
		blurb:
			"Turns ordinary video into Blender-ready 3D animation. A two-autoencoder Keras ensemble trained on Human3.6M lifts 17-joint 2D pose to 3D at 77.6 mm MPJPE, served from Flask behind a Node, Postgres and S3 job pipeline.",
		tags: ["Python", "TensorFlow", "Keras", "Flask", "Node.js", "PostgreSQL"],
		image: "/projects/mocap.webp",
		repo: `${GH}/mocap-hpe`,
		demo: "https://www.youtube.com/watch?v=rZU_7MSCpr0",
		demoLabel: "Watch demo",
	},
	{
		name: "auto-extension-reloader",
		blurb:
			"Published npm webpack plugin that reloads a Chrome extension the moment the build lands, and surfaces build state in the toolbar. Built for the ShopShare extension, then released.",
		tags: ["webpack", "npm package", "Chrome Extensions", "Socket.IO"],
		image: "/projects/aer.webp",
		repo: `${GH}/auto-extension-reloader`,
		demo: "https://www.npmjs.com/package/auto-extension-reloader",
		demoLabel: "View on npm",
	},
	{
		name: "SL News",
		blurb:
			"A Sinhala-language Android reader aggregating five Sri Lankan broadcasters into one feed. No broadcaster publishes an API, so the backend is a Puppeteer scraper with request interception and single-flight caching.",
		tags: ["React Native", "Node.js", "Puppeteer", "Firebase"],
		/* Landscape composite of three framed screens. A single tall phone
		   screenshot cover-cropped into the card's 16:10 slot showed nothing
		   but its status bar. */
		image: "/work/slnews/hero.webp",
		repo: `${GH}/slnews`,
		demo: null,
	},
	{
		name: "SQL Dummy Data Generator",
		blurb:
			"Fills any SQL Server table with realistic test data: reads your schema, respects foreign keys, then bulk-inserts or exports .sql.",
		tags: ["C#", "WPF", ".NET", "SQL Server"],
		image: "/projects/sql_dummy.webp",
		repo: `${GH}/SQL-Dummy-Data-Generator`,
		demo: "https://www.youtube.com/watch?v=b3AlZ1YqNBw",
		demoLabel: "Watch demo",
	},
	{
		name: "Virtual Showroom",
		blurb:
			"Build a 3D art gallery in the browser, then walk through it. Recast compiled to WebAssembly bakes a navmesh in a web worker from geometry the user assembled seconds earlier, so guided tours can path between pieces.",
		tags: ["three.js", "WebAssembly", "Web Workers", "React", "Node.js"],
		image: null,
		repo: `${GH}/virtual-showroom`,
		demo: null,
	},
	{
		name: "Audio Visualisation",
		blurb:
			"Two real-time music visualisers in Unity, driven by an FFT spectrum split into logarithmic bands that moves geometry and light.",
		tags: ["Unity", "C#", "FFT", "Shaders"],
		image: "/projects/audio-visualization.webp",
		repo: `${GH}/Audio-Visualization`,
		demo: "https://www.youtube.com/watch?v=NCvmuG4uP6A",
		demoLabel: "Watch demo",
	},
	{
		name: "Q&A Forum",
		blurb:
			"A Stack Overflow-style forum with three-state voting, accepted answers and reputation derived on read rather than stored.",
		tags: ["PHP", "CodeIgniter", "MySQL"],
		image: "/projects/cw-forum.webp",
		repo: `${GH}/cw-forum`,
		demo: "https://www.youtube.com/watch?v=GWy1kGbydBM",
		demoLabel: "Watch demo",
	},
];
