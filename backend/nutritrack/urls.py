from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from main_app.views import (
    UserViewSet,
    TipoRefeicaoViewSet,
    RefeicaoViewSet,
    OrientacaoViewSet,
    SuplementacaoViewSet,
    ConsumoAguaViewSet,
)


router = DefaultRouter()
router.register(r'usuarios', UserViewSet, basename='usuario')
router.register(r'tipos-refeicao', TipoRefeicaoViewSet, basename='tiporef')
router.register(r'refeicoes', RefeicaoViewSet, basename='refeicao')
router.register(r'orientacoes', OrientacaoViewSet, basename='orientacao')
router.register(r'suplementacoes', SuplementacaoViewSet, basename='suplementacao')
router.register(r'consumo-agua', ConsumoAguaViewSet, basename='consumoagua')

urlpatterns = [
    path('', lambda request: HttpResponse(
        "<h2>✅ NutriTrack API ativa</h2><p>• Admin: <code>/admin</code><br>• API: <code>/api/</code><br>• Token: <code>/api/token/</code></p>"
    )),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)), 
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
