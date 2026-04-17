const allPanels = Array.from(document.querySelectorAll(".panel"));
const allAccordion = Array.from(document.querySelectorAll(".accordion"));
const expandAccordion = (elem) => {
  let activePanel = elem.parentElement.nextElementSibling;
  if (!elem.parentElement.classList.contains("active")) {
    elem.parentElement.classList.add("active");
    if (
      activePanel.id != "skill-panel" &&
      document.querySelector("#skill-panel")
    ) {
      let skillBars = Array.from(document.querySelectorAll("#skill-percent"));
      skillBars.forEach((elem) => {
        elem.style.width = "0";
      });
    }
    activePanel.style.maxHeight = activePanel.scrollHeight + "px";
  } else {
    elem.parentElement.classList.remove("active");
    activePanel.style.maxHeight = null;
  }
};


