from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import TipoRefeicao, Refeicao, Orientacao, Suplementacao, ConsumoAgua

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'is_nutricionista']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            is_nutricionista=validated_data.get('is_nutricionista', False)
        )
        return user

class TipoRefeicaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoRefeicao
        fields = ['id', 'nome']

class RefeicaoSerializer(serializers.ModelSerializer):
    tipo_refeicao = TipoRefeicaoSerializer(read_only=True)
    tipo_refeicao_id = serializers.PrimaryKeyRelatedField(queryset=TipoRefeicao.objects.all(), source='tipo_refeicao', write_only=True)

    class Meta:
        model = Refeicao
        fields = ['id', 'usuario', 'horario', 'descricao', 'tipo_refeicao', 'tipo_refeicao_id']

class SuplementacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suplementacao
        fields = ['id', 'orientacao', 'texto']  # corrigido de 'descricao' para 'texto'

class ConsumoAguaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsumoAgua
        fields = ['id', 'orientacao', 'texto'] 
        
class OrientacaoSerializer(serializers.ModelSerializer):
    suplementacoes = SuplementacaoSerializer(many=True, read_only=True)
    consumo_agua = ConsumoAguaSerializer(read_only=True)

    class Meta:
        model = Orientacao
        fields = ['id', 'usuario', 'descricao', 'suplementacoes', 'consumo_agua']