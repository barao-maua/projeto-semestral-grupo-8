from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import (
    User, Refeicao, Suplementacao, ConsumoAgua,
    Orientacao, TipoRefeicao, Alimento, Substituicao
)

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

class SubstituicaoInline(admin.TabularInline):
    model = Substituicao
    extra = 1
    fk_name = "alimento_original"

@admin.register(Alimento)
class AlimentoAdmin(admin.ModelAdmin):
    list_display = ['nome', 'quantidade', 'unidade']
    inlines = [SubstituicaoInline]

@admin.register(Substituicao)
class SubstituicaoAdmin(admin.ModelAdmin):
    list_display = ['alimento_original', 'opcao', 'quantidade', 'unidade']

admin.site.register(TipoRefeicao)
admin.site.register(Refeicao)
admin.site.register(Suplementacao)
admin.site.register(ConsumoAgua)
admin.site.register(Orientacao)
