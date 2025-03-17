from django import template
from cms.models import Menu

register = template.Library()


@register.inclusion_tag("includes/menu.html", takes_context=True)
def render_menu(context, parent=None):    
    menu_items = Menu.objects.filter(is_active=True, parent=parent)
    menu_itens_pk = []
    for menu in menu_items:
        if menu.have_perm(context.get('request').user):
            menu_itens_pk.append(menu.pk)
            
    return {
        'request': context.get('request', None),
        'menu_items': Menu.objects.filter(pk__in=menu_itens_pk).order_by('tree_id'),
    }
   