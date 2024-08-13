$(document).ready(function () {
	const introParagraph = $("#intro-paragraph");
	if (introParagraph.length) {
		introParagraph.addClass("animate");
	}
	activateSection("home");
	showSection("about-section-intro", "introduction-button");
	$(
		"#language-section, #databases-section, #frameworks-section, #devops-section, #tools-section, #build-section, #cloud-section"
	).hide();
});

$(window).on("scroll", function () {
	const scrollPos = $(document).scrollTop();

	const sections = [
		"section-home",
		"section-about",
		"section-projects",
		"section-contact"
	];
	let currentSection = "";
	sections.forEach((id) => {
		const sectionOffset = $("#" + id).offset().top;
		const sectionHeight = $("#" + id).outerHeight();
		if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
			currentSection = id;
		}
	});
	if (currentSection) {
		activateSection(currentSection);
	}

	const windowHeight = $(window).height();
	const scrollSection = scrollPos + windowHeight;
	const minScroll = 0;
	const maxScroll = windowHeight * 4; // there are 4 sections
	const finalSectionStart = scrollPos * 4;
	if (scrollPos < minScroll) {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	if (maxScroll < scrollSection) {
		window.scrollTo({ top: scrollPos * 4, behavior: "smooth" });
	}
});

function activateSection(sectionId) {
	if (sectionId.startsWith("section-")) {
		sectionId = sectionId.slice("section-".length);
	}
	const sections = ["home", "about", "projects", "contact"];
	sections.forEach((id) => {
		const link = $("#" + id + "-link");
		if (link.length) {
			link.css("color", id === sectionId ? "#FF6F61" : "#000000");
		}
	});
}

function showSection(sectionId, buttonId) {
	$(
		"#about-section-intro, #language-section, #databases-section, #frameworks-section, #devops-section, #tools-section, #build-section, #cloud-section"
	).hide();
	$("#" + sectionId).show();
	$(
		"#introduction-button, #language-button, #databases-button, #frameworks-button, #devops-button, #tools-button, #build-button, #cloud-button"
	).css("color", "#000000");
	$("#" + buttonId).css("color", "#FF6F61");
}