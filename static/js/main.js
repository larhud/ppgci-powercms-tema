document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "pt-br",
  });
  calendar.render();
});

document.addEventListener("DOMContentLoaded", function () {
  const languageOptions = document.querySelectorAll(".language-option");
  const selectedLanguageSpan = document.getElementById("selectedLanguage");

  // Define o idioma padrão como Português
  let savedLanguage = localStorage.getItem("selectedLanguage") || "pt";
  const selectedOption = document.querySelector(
    `[data-lang="${savedLanguage}"]`
  );
  if (selectedOption) {
    selectedLanguageSpan.innerHTML = selectedOption.innerHTML;
  }

  // Atualiza a seleção ao clicar
  languageOptions.forEach((option) => {
    option.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedText = this.innerHTML;
      selectedLanguageSpan.innerHTML = selectedText;

      // Salva a escolha do usuário no localStorage
      localStorage.setItem("selectedLanguage", this.dataset.lang);
    });
  });
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
