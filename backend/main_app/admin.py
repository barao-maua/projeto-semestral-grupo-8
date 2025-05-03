from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Refeicao, Suplementacao, ConsumoAgua, Orientacao, TipoRefeicao  # ⬅ adicionado

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    model = User
    list_display = ['username', 'email', 'is_nutricionista', 'is_staff', 'is_active']

    fieldsets = BaseUserAdmin.fieldsets + (
        (None, {'fields': ('is_nutricionista',)}),
    )

    add_fieldsets = BaseUserAdmin.add_fieldsets + (
        (None, {'fields': ('is_nutricionista',)}),
    )


admin.site.register(TipoRefeicao)  
admin.site.register(Refeicao)
admin.site.register(Suplementacao)
admin.site.register(ConsumoAgua)
admin.site.register(Orientacao)
