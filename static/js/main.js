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

var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
  timeZone: "America/Sao_Paulo",
  initialView: "dayGridMonth",
  locale: "pt-br",
  themeSystem: "standard",
  headerToolbar: {
    left: "prev",
    center: "title",
    right: "next",
  },
  events: [
    {
      title: "Prazo Final dos Destaques Sucupira",
      start: "2025-04-30",
      allDay: true,
      extendedProps: {
        description: "Destaques Sucupira",
      },
    },
    {
      title: "Submissão ENANCIB",
      start: "2025-05-10",
      allDay: true,
      extendedProps: {
        description: "Prazo final para submissão de artigos para o ENANCIB",
        link: "https://enancib2025.ibict.br",
      },
    },
    {
      title: "ENANCIB",
      start: "2025-11-03",
      end: "2025-11-07",
      allDay: true,
      extendedProps: {
        description: "ENANCIB",
        link: "https://enancib2025.ibict.br",
      },
    },
  ],
  eventDisplay: "background",
  dayMaxEventRows: 10,
  eventDidMount: function (info) {
    const allEvents = info.view.calendar.getEvents();
    const targetDate = info.event.startStr;
    const sameDayEvents = allEvents.filter(
      (event) => event.startStr === targetDate
    );

    const tooltipContent = `
      <div style="min-width: 200px; padding: 10px">
        ${sameDayEvents
          .map(
            (e) =>
              `<div style="margin-bottom:4px;">
            <strong>${e.title}</strong><br>
            ${e.extendedProps.description || "Sem descrição."}<br>
            ${
              e.extendedProps.link
                ? `<a href="${e.extendedProps.link}" target="_blank">Ver mais</a>`
                : ""
            }
          </div>`
          )
          .join(
            '<div style="border-top:1px solid #ccc; margin:10px 0;"></div>'
          )}
      </div>
    `;

    tippy(info.el, {
      content: tooltipContent,
      allowHTML: true,
      interactive: true,
      placement: "bottom",
      theme: "light",
      animation: "scale-subtle",
      delay: 0,
    });
  },
});
calendar.render();

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
