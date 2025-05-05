from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import get_user_model

from .models import (
    TipoRefeicao,
    Refeicao,
    Orientacao,
    Suplementacao,
    ConsumoAgua,
)
from .serializers import (
    UserSerializer,
    TipoRefeicaoSerializer,
    RefeicaoSerializer,
    OrientacaoSerializer,
    SuplementacaoSerializer,
    ConsumoAguaSerializer,
)

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class TipoRefeicaoViewSet(viewsets.ModelViewSet):
    queryset = TipoRefeicao.objects.all()
    serializer_class = TipoRefeicaoSerializer
    permission_classes = [AllowAny]


class RefeicaoViewSet(viewsets.ModelViewSet):
    serializer_class = RefeicaoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            Refeicao.objects
            .select_related("tipo_refeicao", "usuario")
            .prefetch_related("alimentos__substituicoes")
            .filter(usuario=self.request.user)
            .order_by("horario")
        )


class OrientacaoViewSet(viewsets.ModelViewSet):
    serializer_class = OrientacaoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            Orientacao.objects
            .filter(usuario=self.request.user)
            .prefetch_related("suplementacoes")
            .select_related("consumo_agua")
        )


class SuplementacaoViewSet(viewsets.ModelViewSet):
    serializer_class = SuplementacaoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Suplementacao.objects.select_related("orientacao")


class ConsumoAguaViewSet(viewsets.ModelViewSet):
    serializer_class = ConsumoAguaSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ConsumoAgua.objects.select_related("orientacao")
