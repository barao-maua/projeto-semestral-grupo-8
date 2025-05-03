from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import get_user_model

from .models import TipoRefeicao, Refeicao, Orientacao, Suplementacao, ConsumoAgua
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
    permission_classes = [AllowAny]  # ✅ necessário para o form

class TipoRefeicaoViewSet(viewsets.ModelViewSet):
    queryset = TipoRefeicao.objects.all()
    serializer_class = TipoRefeicaoSerializer
    permission_classes = [AllowAny]  # ✅ necessário para o form

class RefeicaoViewSet(viewsets.ModelViewSet):
    queryset = Refeicao.objects.all()
    serializer_class = RefeicaoSerializer
    permission_classes = [IsAuthenticated]

class OrientacaoViewSet(viewsets.ModelViewSet):
    queryset = Orientacao.objects.all()
    serializer_class = OrientacaoSerializer
    permission_classes = [IsAuthenticated]

class SuplementacaoViewSet(viewsets.ModelViewSet):
    queryset = Suplementacao.objects.all()
    serializer_class = SuplementacaoSerializer
    permission_classes = [IsAuthenticated]

class ConsumoAguaViewSet(viewsets.ModelViewSet):
    queryset = ConsumoAgua.objects.all()
    serializer_class = ConsumoAguaSerializer
    permission_classes = [IsAuthenticated]
