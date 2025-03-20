from django import template

register = template.Library()


@register.inclusion_tag('translate.html')
def google_translate_link(language, default="pt-BR", class_style=None, label="", data_lang=""):
    return {
        "language": default,
        "type": "vertical",
        "mode": "default",
        "class": class_style,
        "target_language": language,
        "label": label,
        "data_lang": data_lang
    }
