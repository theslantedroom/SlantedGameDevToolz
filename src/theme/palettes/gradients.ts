import { colors } from "./colors";

export const gradients = {
	mainDark: {
		background: `linear-gradient(90deg, ${colors.azureBlue} 0%, ${colors.darkestBlue} 100%)`,
	},
	mainLight: {
		background: `linear-gradient(90deg, ${colors.azureBlue} 0%, ${colors.seashell} 100%)`,
	},
	seaSalt: {
		background: "linear-gradient(90deg, #182848 0%, #4b6cb7 100%)",
	},
	nightSky: {
		backgroundImage:
			"linear-gradient(to bottom, #051937, #001a2a, #001717, #001005, #050600)",
	},
	nightSkyX: {
		backgroundImage:
			"linear-gradient(to right, #000612, #000817, #010a1b, #010b1f, #010d23, #010d23, #010d23, #010d23, #010b1f, #010a1b, #000817, #000612)",
	},
	roster: {
		backgroundImage:
			"linear-gradient(to right, rgba(0, 6, 18, 0.5), rgba(0, 8, 23, 0.5), rgba(1, 10, 27, 0.5), rgba(1, 11, 31, 0.5), rgba(1, 13, 35, 0.5), rgba(1, 13, 35, 0.5), rgba(1, 13, 35, 0.5), rgba(1, 13, 35, 0.5), rgba(1, 11, 31, 0.5), rgba(1, 10, 27, 0.5), rgba(0, 8, 23, 0.5), rgba(0, 6, 18, 0.5))",
	},

	heavyRain: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
	slickCarbon: `linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply`,
	brown: `linear-gradient(90deg, #976e00 0%, #9f761f 30%, #8c6d2e 70%, #976e00 100%)`,
	blood: "linear-gradient(90deg, #660000 0%, #cc0000 100%)",
	red: "linear-gradient(270deg, #cc0000 0%, #af0000 100%)",
	oceanDark: "linear-gradient(90deg, rgba(0,0,142,1) 0%, rgba(0,9,255,1) 100%)",
	guard: "linear-gradient(to left, #575757, #848484)",
	deathMeter:
		"linear-gradient(90deg, rgba(191,7,7,1) 0%, rgba(253,119,29,1) 74%, rgba(184,178,0,1) 100%)",
	grey: `linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(96,96,97,1) 69%, rgba(78,79,79,1) 100%)`,
	gold: `linear-gradient(90deg, #FCF6BA 0%, #B38728 30%, #BF953F 70%, #FBF5B7 100%)`,
	energy: `linear-gradient(to left, #0016f8, #bf0000)`,
	counter: "linear-gradient(316deg, #3e187a 0%, #994ecc 74%)",
	none: "",
};

export const backgroundImageGradient =
	"linear-gradient(to bottom, #000e24, #001029, #00112f, #001234, #001339)";
