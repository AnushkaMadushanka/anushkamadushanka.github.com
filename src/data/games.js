const DANSALA = "/work/ape-dansala";
const HOTFIXED = "/work/hotfixed-to-death";

/**
 * Solo game projects that are finished enough to play.
 *
 * Both repositories are private, so like Scales of Faith these pages describe
 * design and architecture rather than code. Anything here is either already
 * visible in the published build or stated in the project's own README.
 *
 * Scales of Faith lives in game.js on its own: it is the flagship and gets a
 * whole section on the home page. These two are side projects with case
 * studies, which is a different weight.
 */
export const games = [
	{
		slug: "hotfixed-to-death",
		name: "Hotfixed to Death",
		company: "Solo project",
		year: "2026",
		summary:
			"A first-person boss fight against a live-service development team. Every time you win, the devs ship a hotfix, and every hotfix is aimed at you. Ten rounds, ten patches, and the patch notes are real balance changes running in the next fight.",
		contribution:
			"Sole developer: design, engineering, technical art and audio implementation. Built in Unity 6 on URP and published as a browser build.",
		outcomes: ["Unity 6 · URP · C#", "Playable in the browser"],
		stack: ["Unity 6", "C#", "URP", "Shader Graph", "WebGL"],
		image: `${HOTFIXED}/minions.webp`,
		imageSize: [1120, 630],
		links: [
			{
				href: "https://anushka-madushanka.itch.io/hotfixed-to-death",
				label: "Play it in the browser",
			},
		],

		caseStudy: {
			facts: [
				{ label: "Role", value: "Sole developer: design, engineering, technical art, audio" },
				{ label: "Engine", value: "Unity 6 (6000.3.11f1), URP, C#" },
				{ label: "Scope", value: "10 rounds, 5 stacking boss phases, 24 balance modifiers" },
				{ label: "Built for", value: '$5K GameName Game Jam, theme "Invincible", 343 entries' },
				{ label: "Status", value: "Playable: full run, death screen and ending are in" },
			],
			lede: "A boss fight where the game rewrites its own balance numbers against you between rounds. The joke only works if the patch notes are honest, so every line on the screen is a modifier that was rolled from a pool, written into a real serialised field, and is live in the next fight.",

			metrics: [
				{ value: "10", label: "Rounds, each with its own patch" },
				{ value: "24", label: "Modifiers in the balance pool" },
				{ value: "5", label: "Boss phases, stacking" },
				{ value: "4", label: "Tones the dev team degrades through" },
			],

			sections: [
				{
					heading: "What it is",
					body: [
						'You walk through a pair of blast doors into a sci-fi arena, and they seal behind you. The first boss has 50 HP and one attack, so killing it is easy. Then the patch notes come up: "We heard your feedback and made adjustments."',
						'The loop only goes one way: fight the boss, win, read the patch notes, and the boss comes back with your nerf already applied. The boss gains health, the laser charges faster, your sprint is "rebalanced per feedback", your magazine loses two rounds. Nothing is ever given back.',
					],
				},
				{
					heading: "Inverting the brief",
					body: [
						'It was built for the $5K GameName Game Jam, on the theme "Invincible". The obvious reading is a player who cannot be killed, and most of a jam\'s entries will take a theme at face value.',
						"This one runs it backwards. You start close to invincible (a boss with 50 HP and a single attack, against a player with full speed and a full magazine) and the game spends ten rounds taking that away from you, one patch at a time. The word ends up describing the thing you used to be.",
						"Framing it that way also solved the jam's real problem, which is scope. A game about escalating nerfs needs one arena, one boss and one weapon; all the content is in the numbers, and numbers are cheap to author under a deadline.",
					],
				},
				{
					heading: "Making the patch notes real",
					body: [
						"The whole conceit rests on the patches being real. A scriptable pool holds twenty-four modifier entries, and each one is a target system, the name of a serialised field on it, an operation, a value, a difficulty tier, a cap on how many times it can be drawn across a whole run, and the sentence shown on the patch notes screen.",
						'So "Sprint mechanics adjusted per feedback" is not flavour text sitting next to a hidden change. It is the display string attached to a 0.82× multiply on the player controller\'s running speed, and reading it means the nerf has already been written.',
						"Because a modifier is data rather than code, adding a new one to the run is a row in the pool rather than a branch in a difficulty function.",
					],
				},
				{
					heading: "Patches compound instead of re-rolling",
					body: [
						"The manager that owns the run survives the scene bounce between the arena and the patch notes, rolls each round's patches on a win, and keeps the full history.",
						"When the arena loads, the applier walks that entire history from the original defaults forward and folds every patch on in order before pushing the result into the live objects. Replaying the whole list rather than mutating in place is what makes round eight feel like round eight: it is every previous hotfix at once, and the numbers can never drift from the notes the player was shown.",
						"It also means a round can be re-entered from any state and land on exactly the same values, which made the thing debuggable.",
					],
				},
				{
					heading: "The roll only draws from what exists",
					body: [
						"Selection is gated in two directions. The minimum tier a modifier can be drawn from climbs every five rounds and the number of modifiers per patch climbs every three, so the pressure ramps without a hand-authored curve.",
						"More importantly, any modifier whose system has not unlocked yet is excluded from the roll: round two cannot nerf a shield that does not appear until round three. Without that, a third of the early patch notes would have described changes the player had no way to observe, and the joke dies the moment a patch note is about nothing.",
						'The patch\'s title is derived from whichever modifier was primary, which is why a health buff reads "Structural Overhaul" and an ammo nerf reads "Ammunition Economy".',
					],
				},
				{
					heading: "A boss generated at runtime",
					body: [
						"Five phases unlock across the ten rounds: a tracking laser, a shield with orbiting weak points, an orbital strike that marks the floor before it drops, deployable drones, proximity mines, and a barrage that sweeps the arena. Once unlocked, an attack is never taken away, and an attack manager shuffles the active set each cycle, so late rounds arrive in an order you cannot memorise.",
						"The shield, the weak points, the targeting rings, the beams, the mines and the barrage projectiles are all generated and animated at runtime rather than authored as prefabs. That was the only way one person could keep six attacks in play: a new attack is a script, not an art task.",
					],
				},
				{
					heading: "Writing the antagonist as a schedule",
					body: [
						'The other half of the joke is tone. The dev team\'s voice degrades on a fixed timetable: professional through rounds one to three, slightly annoyed through four to six, openly frustrated by seven ("at this point we\'re just nerfing things out of spite"), and defeated by nine ("our analytics show a 0% win rate. Perfectly balanced.").',
						'Each phase unlock gets its own hand-written note on top of the tone pool, so the shield arrives with an actual explanation of how to fight it. Dying renders the same screen as a fatal error report instead, with a randomly assembled incident write-up and your run stats. Survive all ten rounds and the deploy button changes to "We Give Up": the team cancels the roadmap, reassigns itself to a less stressful project, and asks you to please stop winning.',
					],
				},
				{
					heading: "Where it stops",
					body: [
						"Everything described here is in the published build. What is not in: a run does not persist between sessions, so quitting resets you to round one, and there is no leaderboard or run history.",
						"The real limit is that patches only ever move numbers. None of them changes a rule, which is the next place the idea has room to go: a hotfix that removes a mechanic outright would be far funnier than one that multiplies it by 0.82.",
					],
				},
			],

			gallery: [
				{
					src: `${HOTFIXED}/orbital.webp`,
					size: [1120, 630],
					alt: "The drone boss hovering in the arena while red targeting rings mark the floor ahead of an orbital strike",
				},
				{
					src: `${HOTFIXED}/barrage.webp`,
					size: [1120, 630],
					alt: "The boss firing a spread of blue projectiles across the arena floor toward the player",
				},
			],

			note: {
				label: "Source",
				text: "Private repository. The build is public and playable in the browser, and I'm happy to walk through the code in an interview.",
			},

			credits:
				'Low-poly environment art from Synty Studios; sci-fi doors by MASH Virtual; player controller and weapons from Infima Games\' Low Poly Shooter Pack; menu framework by SlimUI. Music "Cybernetic Boss Battle" by John Bartmann (CC-BY 4.0), sound effects from Freesound.org. Design, code and everything else by me.',
		},
	},

	{
		slug: "ape-dansala",
		name: "Ape Dansala",
		company: "Solo project",
		year: "2026",
		/* Kept to Latin script: this string is also the meta description and the
		   text on the cross-links, where the site's subset fonts have no Sinhala
		   and would fall back mid-sentence. The title appears in Sinhala on the
		   hero image, which is where it belongs anyway. */
		summary:
			"A Vesak dansala served under pressure. You run the free ice cream and soda stall on a suburban Sri Lankan street, with three minutes, one tray, and a queue that will not wait. Unity 6, with a global leaderboard.",
		contribution:
			"Sole developer: design, engineering and art integration, plus the Unity Gaming Services backend behind the global leaderboard. Published as a browser build.",
		outcomes: ["Unity 6 · URP · C#", "Global leaderboard"],
		stack: ["Unity 6", "C#", "URP", "Unity Gaming Services", "WebGL"],
		image: `${DANSALA}/main-menu.webp`,
		imageSize: [1280, 720],
		links: [
			{
				href: "https://anushka-madushanka.itch.io/ape-dansala",
				label: "Play it in the browser",
			},
		],

		caseStudy: {
			facts: [
				{ label: "Role", value: "Sole developer: design, engineering, art integration" },
				{ label: "Engine", value: "Unity 6 (6000.3.11f1), URP, C#" },
				{
					label: "Backend",
					value: "Unity Gaming Services: anonymous auth, leaderboards, Cloud Code",
				},
				{ label: "Status", value: "Playable: full round loop and global leaderboard are in" },
			],
			lede: "A dansala is the Sri Lankan Vesak tradition of giving food and drink away for free at the roadside. Nobody pays, nobody is a customer, and the line still forms. Somebody still has to carry the tray, and in this game that is you.",

			metrics: [
				{ value: "3 min", label: "Round length" },
				{ value: "6", label: "Live orders at once" },
				{ value: "30 s", label: "Patience per order" },
				{ value: "4", label: "Mood bands you get paid on" },
			],

			sections: [
				{
					heading: "One loop, three minutes",
					body: [
						"Fill the tray at the stall, find who is waiting, serve them before their patience runs out, run back. A round is three minutes, and then the street freezes and the stats come up.",
						"Cars drive in and queue along the road; pedestrians walk in and wait. Both place orders that mix sodas and ice cream, up to six live at once, and the spawner deliberately keeps at least one of each kind alive so the street never settles into one rhythm.",
					],
				},
				{
					heading: "The tray is the entire design",
					body: [
						"The tray holds one kind of item at a time: sodas or ice cream, never both. Swapping type replaces whatever was already on it.",
						"Nearly every order is a mix of the two, so nearly every order takes two trips, and the second trip is time somebody else spends going sour. That single constraint is what turns a fetch loop into a routing problem: which half of which order you serve first, and who you are willing to let cool down while you do it.",
						"It is one rule, and it generates the whole game. I tried the version where the tray holds anything, and there was nothing to think about.",
					],
				},
				{
					heading: "Paid on mood rather than volume",
					body: [
						"Every order carries a thirty-second patience timer, drawn as a ring on the order bubble. Serving pays on the band the ring is in when you arrive: ten points while they are still calm, down to two for someone already leaving. Let it hit zero and they walk, and it lands in the missed column.",
						"That scoring is the thing that makes the game about care rather than speed. Sprinting between three annoyed people for four points each is a worse run than keeping two people calm, so the optimal play is the same as the generous one, which felt like the right shape for a game about giving things away.",
					],
				},
				{
					heading: "Keeping the street readable past the edge of the screen",
					body: [
						"The street is bigger than the camera, so anyone waiting off-screen would be invisible until they left, which reads as the game cheating rather than as your mistake.",
						"Every waiting order that is off-camera gets a pooled edge-of-screen indicator carrying its face, its current patience fill and the colour of the band it is about to drop into. You can tell a calm green pip from a red one about to walk without turning the camera at all, so the decision about whether to chase them is a real one.",
					],
				},
				{
					heading: "Two order streams that behave differently",
					body: [
						"Cars are the interesting half. They drive in, queue at the stall, and a car boxed in behind another one waits before it even places its order, so the queue can stall on the car at the front and clearing that car releases the rest. They spin their wheels, snap to the ground and pitch their engine audio with speed.",
						"Pedestrians steer with local avoidance rather than following a navmesh, walking to a spot and settling there while parting around each other. Giving the two streams genuinely different movement is what stops the street from feeling like one spawner with two prefabs.",
					],
				},
				{
					heading: "A leaderboard that never blocks the game",
					body: [
						"Scores are global, backed by Unity Gaming Services. Anonymous sign-in on boot means there is no account to make; each finished round submits to the leaderboard with your display name attached as score metadata, and the menu pulls the top ten alongside your own best and rank.",
						"Names are claimed through a Cloud Code endpoint that keeps a name-to-player registry in Cloud Save and rejects one that is already taken, so the board does not fill up with duplicates.",
						"The important part is what happens when any of it fails. Offline, service down or project unlinked, it logs a warning and the game carries on. Nothing about a round depends on the network, which matters more than usual for a browser build that anyone can open from a link.",
					],
				},
				{
					heading: "Dressing it as an actual dansala",
					body: [
						"The tent carries Sinhala signage, the menu is lantern-lit for Vesak, and the speakers flanking the stall play Buddhist devotional karaoke tracks, the same ones that would actually be playing at a roadside dansala rather than generic arcade music.",
						"The speaker cabinets pulse to the live audio spectrum instead of to a canned animation, so the street's soundtrack is visibly coming from somewhere in the scene. It is a small thing, but it is the difference between a themed level and a place.",
					],
				},
				{
					heading: "One continuous shot into the game",
					body: [
						"The menu and the gameplay street are separate scenes, loaded additively and cross-faded into each other rather than hard-swapped. A Cinemachine blend carries the camera from the menu framing into the player's follow camera as the fade lifts.",
						"So pressing Play is one continuous move through the same space instead of a loading screen, and the tent you have been looking at behind the menu is the tent you walk up to.",
					],
				},
				{
					heading: "Where it stops",
					body: [
						"The full round loop, both order types, the tray system, the stats breakdown and the global leaderboard are all in the published build.",
						"Not in yet: difficulty does not ramp inside a round, since spawn rate and patience are flat for all three minutes, which makes the last minute easier than it should be. There are also only two servable items. The exclusive-name endpoint is written and deployed, but the client still saves names locally rather than calling it.",
					],
				},
			],

			gallery: [
				{
					src: `${DANSALA}/serving-cars.webp`,
					size: [1280, 720],
					alt: "Two cars queued in the road beside the dansala tent, each with an order bubble showing what they want",
				},
				{
					src: `${DANSALA}/stall.webp`,
					size: [1280, 720],
					alt: "The player carrying a full tray of sodas out to three cars waiting in the road, each with an order bubble",
				},
				{
					src: `${DANSALA}/tray-run.webp`,
					size: [1280, 720],
					alt: "Running a tray of sodas across the street toward two pedestrians waiting on the pavement",
				},
				{
					src: `${DANSALA}/orders-incoming.webp`,
					size: [1280, 720],
					alt: "A van and a pedestrian waiting at the far end of the street, with an off-screen mood indicator at the edge of the frame",
				},
			],

			note: {
				label: "Source",
				text: "Private repository. The build is public and playable in the browser, and I'm happy to walk through the code in an interview.",
			},

			credits:
				"Low-poly environment, vehicle and character art from Synty Studios; character controller from Unity's Starter Assets. Backing tracks on the stall speakers are karaoke versions of Danno Budunge, Buddhanu Bawena and Budunge Ama Dharme. Design, code and everything else by me.",
		},
	},
];
