from django import template
from django.templatetags.static import static
from django.utils.safestring import mark_safe

register = template.Library()


@register.inclusion_tag('translate.html')
def google_translate_link(language, default="pt-BR", class_style=None, label="", image="", data_lang="", alt=""):
    return {
        "language": default,
        "type": "vertical",
        "mode": "default",
        "class": class_style,
        "target_language": language,
        "label": label,
        "image": f'img/{image}',
        "data_lang": data_lang,
        "alt": alt
    }
