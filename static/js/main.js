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
      title: "Reunião de Equipe",
      start: "2025-05-01",
      allDay: true,
      extendedProps: {
        description: "Discussão sobre o projeto X.",
      },
    },
    {
      title: "Entrega do Relatório",
      start: "2025-05-01",
      allDay: true,
      extendedProps: {
        description: "Prazo final para envio do relatório mensal.",
        link: "https://example.com/relatorio",
      },
    },
    {
      title: "Aniversário do João",
      start: "2025-05-02",
      allDay: true,
      extendedProps: {
        description: "Comemoração do aniversário do João.",
        link: "https://example.com/joao-aniversario",
      },
    },
    {
      title: "Aniversário do João",
      start: "2025-05-30",
      allDay: true,
      extendedProps: {
        description: "Comemoração do aniversário do João.",
        link: "https://example.com/joao-aniversario",
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
