const wrapper = $(".wrapper");
const container = $(".container");

gsap.to(container, {
	x: () => -(container.outerWidth() - wrapper.outerWidth()),
	ease: "none",
	scrollTrigger: {
		trigger: ".wrapper",
		start: "top top",
		end: () => `+=${container.outerWidth() - wrapper.outerWidth()}`,
		scrub: true,
		pin: true,
		anticipatePin: 1,
		invalidateOnRefresh: true,
	},
});
