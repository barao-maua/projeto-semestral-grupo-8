from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    TipoRefeicaoViewSet,
    RefeicaoViewSet,
    OrientacaoViewSet,
    SuplementacaoViewSet,
    ConsumoAguaViewSet
)

router = DefaultRouter()
router.register(r'usuarios', UserViewSet)
router.register(r'tipos-refeicao', TipoRefeicaoViewSet)
router.register(r'refeicoes', RefeicaoViewSet)
router.register(r'orientacoes', OrientacaoViewSet)
router.register(r'suplementacoes', SuplementacaoViewSet)
router.register(r'consumo-agua', ConsumoAguaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
