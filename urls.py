from django.conf.urls import url
from django.http import JsonResponse
from django.utils.dateparse import parse_date

def events(request, date=None):
  events = [
    {
      "title": "Prazo Final dos Destaques Sucupira",
      "start": "2025-08-30",
      "allDay": True,
      "extendedProps": {
        "description": "Destaques Sucupira"
      }
    },
    {
      "title": "Submissão ENANCIB",
      "start": "2025-08-10",
      "allDay": True,
      "extendedProps": {
        "description": "Prazo final para submissão de artigos para o ENANCIB",
        "link": "https://enancib2025.ibict.br"
      }
    },
    {
      "title": "Defesa de Tese - João Teste",
      "start": "2025-09-15",
      "allDay": False,
      "extendedProps": {
        "description": "Defesa de tese de doutorado de João Teste",
        "local": "Auditório 2"
      }
    },
    {
      "title": "Reunião do Colegiado",
      "start": "2025-09-05",
      "allDay": False,
      "extendedProps": {
        "description": "Reunião mensal do colegiado do programa",
        "hora": "14:00"
      }
    },
    {
      "title": "Início do Semestre 2025.2",
      "start": "2025-08-01",
      "allDay": True,
      "extendedProps": {
        "description": "Aulas do semestre 2025.2 começam"
      }
    },
    {
      "title": "Workshop de Pesquisa",
      "start": "2025-09-20",
      "allDay": False,
      "extendedProps": {
        "description": "Workshop sobre metodologias de pesquisa",
        "link": "https://workshop2025.example.com"
      }
    }
  ]

  # Pega o parâmetro 'date' da query string (?date=2025-08-30)
  filter_date = request.GET.get('date')
  if filter_date:
    # Espera 'date' no formato 'YYYY-MM' (filtra por mês e ano)
    events = [e for e in events if e['start'][:7] == filter_date]

  return JsonResponse(data=events, safe=False)

urlpatterns = [
  url(r"^api/events/(?P<date>\d{4}-\d{2})$", events),
]