const accordionBtns = document.querySelectorAll(".accordion__btn");

accordionBtns.forEach((btn) => {
	btn.addEventListener("click", function () {
		const panel = btn.nextElementSibling;
    const img = btn.lastElementChild;
		if (panel && panel.classList.contains("accordion__panel")) {
      panel.classList.toggle("active")
      if (panel.classList.contains("active")) {
        img.src = "./assets/images/icon-minus.svg"
        img.alt = "Minus Icon"
      } else {
        img.src = "./assets/images/icon-plus.svg"
        img.alt = "Plus Icon"
      }
		}
	});
});
