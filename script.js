$(document).ready(function () {
   const introParagraph = $("#intro-paragraph");
   if (introParagraph.length) {
      introParagraph.addClass("animate");
   }

   activateSection("home");
   showSection("about-section-intro", "introduction-button");

   const sections = [
      "#language-section",
      "#databases-section",
      "#frameworks-section",
      "#devops-section",
      "#tools-section",
      "#build-section",
      "#cloud-section"
   ];
   $(sections.join(", ")).hide();

   // code snippet taken from: https://stackoverflow.com/a/21995961
   const eTop = $("body").offset().top;
   $(document).scrollTop(eTop);
   const eHeight = $("body").height();
   const eBottom = eTop + eHeight - $(window).height();

   $(document).on("scroll", function () {
      const scrollPos = $(document).scrollTop();

      let currentSection = "";
      const sectionIds = [
         "section-home",
         "section-about",
         "section-projects",
         "section-contact"
      ];

      sectionIds.forEach((id) => {
         const sectionOffset = $("#" + id).offset().top;
         const sectionHeight = $("#" + id).outerHeight();

         if (
            scrollPos >= sectionOffset &&
            scrollPos < sectionOffset + sectionHeight
         ) {
            currentSection = id;
         }
      });

      if (currentSection) {
         activateSection(currentSection);
      }

      const windowScrollTop = $(window).scrollTop();
      if (windowScrollTop < eTop) {
         $(document).scrollTop(eTop);
      } else if (windowScrollTop > eBottom) {
         $(document).scrollTop(eBottom);
      }
   });
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
   const sections = [
      "#about-section-intro",
      "#language-section",
      "#databases-section",
      "#frameworks-section",
      "#devops-section",
      "#tools-section",
      "#build-section",
      "#cloud-section"
   ];
   $(sections.join(", ")).hide();
   $("#" + sectionId).show();

   const buttons = [
      "#introduction-button",
      "#language-button",
      "#databases-button",
      "#frameworks-button",
      "#devops-button",
      "#tools-button",
      "#build-button",
      "#cloud-button"
   ];
   $(buttons.join(", ")).css("color", "#000000");
   $("#" + buttonId).css("color", "#FF6F61");
}
