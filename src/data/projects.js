const GH = "https://github.com/AnushkaMadushanka";

/**
 * Game jam entries, as recorded on each game's itch.io page.
 *
 * The theme matters more than the jam's name: it's the constraint the design
 * had to answer, so a card that names it explains why the game is shaped the
 * way it is rather than just claiming a badge.
 */
const jams = {
	gmtk2022: {
		name: "GMTK Game Jam 2022",
		theme: "Roll of the Dice",
		note: "48 hours, 6,013 entries",
		href: "https://itch.io/jam/gmtk-jam-2022",
	},
	gameName: {
		name: "$5K GameName Game Jam",
		theme: "Invincible",
		note: "343 entries",
		href: "https://itch.io/jam/game-name-game-jam-1",
	},
	honeydew: {
		name: "GameDevNetwork: Honeydew Jam",
		theme: "Where is Everybody?",
		href: "https://itch.io/jam/gamedevnetwork-honeydew-jam",
	},
};

/**
 * Things built outside work. Ordered by how much they demonstrate. Each card
 * links straight to the repo, where the README carries the full write-up.
 */
export const projects = [
	{
		name: "Hotfixed to Death",
		blurb:
			"A first-person boss fight against a live-service dev team: win a round and they ship a hotfix aimed at you. The patch notes are real — every line is one of 24 modifiers rolled from a tiered pool, written into a live serialised field, and compounding across all ten rounds.",
		jam: jams.gameName,
		tags: ["Unity 6", "C#", "URP", "Game design", "WebGL"],
		image: "/work/hotfixed-to-death/minions.webp",
		/* Private repo — the card links to the case study here instead. */
		repo: null,
		page: "/work/hotfixed-to-death",
		demo: "https://anushka-madushanka.itch.io/hotfixed-to-death",
		demoLabel: "Play on itch.io",
	},
	{
		name: "Ape Dansala",
		blurb:
			"A Vesak dansala served under pressure — three minutes to give away free soda and ice cream on a Sri Lankan street, from a tray that holds one kind of item at a time. Global leaderboard on Unity Gaming Services, with anonymous sign-in and a Cloud Code name registry.",
		tags: ["Unity 6", "C#", "Unity Gaming Services", "URP", "WebGL"],
		image: "/work/ape-dansala/main-menu.webp",
		repo: null,
		page: "/work/ape-dansala",
		demo: "https://anushka-madushanka.itch.io/ape-dansala",
		demoLabel: "Play on itch.io",
	},
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
		name: "Ludo Shooter",
		blurb:
			"A wave shooter where reloading rolls a dice — and whatever face it lands on rewrites the rules of the fight. Tying the roll to reloading made the theme a decision rather than a coin flip: you choose when to gamble.",
		jam: jams.gmtk2022,
		tags: ["Unity", "C#", "URP", "Game design"],
		image: "/projects/ludo-shooter.webp",
		repo: `${GH}/ludo-shooter`,
		demo: "https://anushka-madushanka.itch.io/ludo-shooter",
		demoLabel: "Download on itch.io",
	},
	{
		name: "Operation Alone",
		blurb:
			"Top-down zombie shooter set in a maze that's different every time — Hunt-and-Kill generation with NavMesh-driven AI. You are the only survivor of a city-wide infection, working through the sewers alone.",
		jam: jams.honeydew,
		tags: ["Unity", "C#", "Procedural generation", "NavMesh"],
		image: "/projects/operation-alone.webp",
		repo: `${GH}/Operation-Alone`,
		demo: "https://anushka-madushanka.itch.io/operation-alone",
		demoLabel: "Download on itch.io",
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
		name: "Nightmarescape",
		blurb:
			"First-person endless runner for mobile, built in Unity with URP and shipped to Google Play.",
		tags: ["Unity", "C#", "URP", "Android"],
		image: "/projects/nightmarescape.webp",
		repo: `${GH}/nightmarescape`,
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
