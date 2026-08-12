const SHOTS = "/work/scales-of-faith";

/**
 * Scales of Faith: solo game project, in active development.
 *
 * Everything here comes from the project's public README. The repository is
 * private; nothing about the implementation beyond what that document already
 * discloses belongs on a public site.
 */
export const game = {
	slug: "scales-of-faith",
	name: "Scales of Faith",
	company: "Solo project",
	year: "In development",
	summary:
		"A psychological-horror tabletop card battler built solo in Unity 6. You play cards across a cursed table against a soul-collecting clown, and the currency you wager is the time you have left to live.",
	contribution:
		"Sole developer: design, engineering, technical art and audio implementation. ~14,200 lines of gameplay C# across 58 scripts, plus custom HLSL shaders and editor tooling.",
	outcomes: ["Unity 6 · URP · C#", "Playable demo"],
	stack: ["Unity 6", "C#", "HLSL", "URP", "DSP audio"],
	image: `${SHOTS}/match-board.webp`,
	imageSize: [1280, 720],
	href: null,
	featured: true,

	caseStudy: {
		facts: [
			{ label: "Role", value: "Sole developer: design, engineering, technical art, audio" },
			{ label: "Engine", value: "Unity 6 (6000.3.11f1), URP, C#" },
			{ label: "Scope", value: "~14,200 lines of gameplay C# across 58 scripts" },
			{ label: "Status", value: "Playable demo: full match loop, run map, tutorial and menus" },
		],
		lede: "A card battler where the currency is the time you have left to live. A real clock ticks down while the game is open and persists between sessions. Win a match and it grows, lose and it's gone permanently.",
		metrics: [],

		sections: [
			{
				heading: "What it is",
				body: [
					"A 1-v-1 card battler played entirely on one table. Each match opens by wagering part of your remaining lifespan. The opponent matches your stake; win and it grows, lose and it's gone for good. Between matches you climb a branching, seeded run map whose stops (a shop, a slot machine, deck-editing rituals) are all priced in that same currency.",
					"Combat is positional rather than arithmetic: cards merge into Guards that occupy lanes, and lane control decides who can reach whose King.",
				],
			},
			{
				heading: "A procedural voice synthesizer for the antagonist",
				body: [
					"The Collector talks constantly through the tutorial, which meant either recording hundreds of lines or generating them. I wrote a source-filter formant synthesizer that speaks his dialogue procedurally.",
					'It\'s the standard source-filter model of speech, which is why it reads as a mouth rather than a synth. The source is a Rosenberg glottal pulse with per-cycle jitter and a breath of noise. The jitter matters, because a mathematically steady pulse always reads as an oscillator rather than a throat. The filter is a chain of cascaded Klatt resonators, and their frequencies are the vowel: F1/F2 near 730/1090 Hz is an "ah", 270/2290 is an "ee", and nothing else distinguishes them. Sliding those frequencies across a syllable produces a diphthong; a short shaped noise burst in front produces a consonant.',
					"The parameters are physical rather than musical. `fundamental` sets pitch, but `tractScale` sets the length of the throat. Dropping it to 0.85 makes the speaker sound physically large, which is a completely different effect from lowering the pitch, where you just sound slowed down.",
					"The whole syllable bank is built from nothing at startup, so the character has a voice with zero audio assets: no recording pipeline, no per-line cost, and any line can be written the day it's needed.",
				],
			},
			{
				heading: "Adaptive music that never restarts",
				body: [
					"Music is vertically layered: every layer is a stem of the same piece at the same tempo and loop length, and all of them start together against a single AudioSettings.dspTime DSP clock, looping forever in sync. Changing the music never starts or stops a source. It only fades each layer's target volume, so transitions always land musically, with no seam and no re-sync drift.",
					"Layer targets come from two inputs: a bitmask of which game states the layer is active in, scaled by a live tension value. Strings swell as a King's health drops, without any explicit transition being authored.",
				],
			},
			{
				heading: "An AI that plans against a simulator",
				body: [
					"The opponent shares the player's build phase and repeatedly executes the highest-scoring legal action until nothing clears a threshold. What makes the scoring meaningful is a side-effect-free forecast of what one exchange would do to both Kings right now.",
					"That let me keep one authoritative combat implementation and have the AI ask it questions rather than re-deriving damage rules in a second place, which is where this kind of code usually rots. The AI reasons about real exposure (that a deployed Guard pulls the enemy King off its own King, that a lane left empty is a direct line to the throat) rather than following a script.",
					"Three difficulty modes are built from the same legal-move enumeration: Random picks blindly, Greedy only builds the wall, Heuristic also shields and buffs where it counts.",
				],
			},
			{
				heading: "Tiny persistence via seeded generation",
				body: [
					"The run map is a Slay-the-Spire-style layered DAG. Rather than serialising the graph, I persist only the seed plus the visited path, and regenerating from the seed always reproduces an identical graph. The whole run state is a couple of strings.",
					"The class holding it never touches the scene: it owns the graph and the player's position, while a separate controller renders tokens, paths and dissolves. That split is what let the map's 3D presentation be reworked without touching run logic.",
				],
			},
			{
				heading: "Almost no conventional interface",
				body: [
					"The wager panel is a contract on the table, the shop is cards laid out in front of you, and settings are the only real canvas in the game. Matches literally conjure their space: props and both Kings dissolve in once a stake is locked, and dissolve out when a King dies, leaving an empty table for a beat before the result.",
					"That's driven by two custom HLSL shaders, a dissolve and an ember effect, exposed through a stateless VFX utility of plain coroutines, so the between-match deck rituals play the pixel-identical burn that in-match merges do instead of reimplementing the look.",
				],
			},
			{
				heading: "Single-scene architecture",
				body: [
					"Menu, run map, matches and all four rest stops live in one scene, and nothing loads or unloads. Singletons and cross-references stay valid throughout, which removed an entire category of lifecycle bugs and made transitions instant.",
					"The tutorial hangs off a static signal hub: gameplay raises one-line events at moments worth commenting on, the guide subscribes only while a tutorial is active, and with no subscribers each raise is a null check. Normal matches pay nothing for tutorial support being present.",
				],
			},
			{
				heading: "Decisions I'd defend",
				body: [
					"Kings cannot be healed. Healing made rounds drag and drained the pressure out of a match. Permanent damage means every round pushes toward an ending.",
					'There is no "wager nothing". A minimum stake is always enforced, because a card game you can play risk-free isn\'t about temptation, and temptation is the entire point.',
					"The clock can't kill you. The lifespan drain floors just above zero, so sitting and thinking is always free; only a losing wager can empty it. The ticking applies pressure, it doesn't punish deliberation. Punishing thinking in a strategy game would be self-defeating.",
					"Strategy first, horror second. The game has to be fun and readable with the atmosphere stripped away. The horror raises the stakes; it isn't a substitute for the game underneath.",
				],
			},
		],

		gallery: [
			{
				src: `${SHOTS}/wager.webp`,
				size: [1280, 720],
				alt: "The wager panel, a contract on the table offering stakes of 6 months, 1 year, 2 years or 5 years of lifespan",
			},
			{
				src: `${SHOTS}/run-map.webp`,
				size: [1280, 720],
				alt: "The run map laid out on the table as carved hexagonal tokens joined by red paths, the Collector looming behind",
			},
			{
				src: `${SHOTS}/shop.webp`,
				size: [1280, 720],
				alt: "The shop, with ten cards laid out across the table, each priced in lifespan",
			},
			{
				src: `${SHOTS}/slots.webp`,
				size: [1280, 720],
				alt: "A slot machine sitting on the table, each pull costing lifespan",
			},
			{
				src: `${SHOTS}/card-removal.webp`,
				size: [1280, 720],
				alt: "Card removal, with the whole deck fanned out across the table and up to three cards selectable to burn",
			},
		],

		note: {
			label: "Source",
			text: "Private repository. The game is in active development, and I'm happy to walk through the code in an interview.",
		},

		credits:
			"Low-poly character and environment art from Synty Studios packs; UI from the Alebardium Bloodlines UI kit. Design, code and everything else by me.",
	},
};
