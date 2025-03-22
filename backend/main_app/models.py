from django.db import models
from django.contrib.auth.models import AbstractUser

# Usuário personalizado
class User(AbstractUser):
    is_nutricionista = models.BooleanField(default=False)

    def __str__(self):
        return self.username


# Tipos de refeição (ex: Almoço, Jantar)
class TipoRefeicao(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


# Refeição cadastrada pelo nutricionista para o paciente
class Refeicao(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    tipo_refeicao = models.ForeignKey(TipoRefeicao, on_delete=models.CASCADE)
    horario = models.TimeField()
    data = models.DateField(auto_now_add=True)  # Data da refeição
    descricao = models.TextField()  # Exemplo: "Arroz, feijão, frango..."

    def __str__(self):
        return f"{self.tipo_refeicao.nome} - {self.horario}"


# Orientação nutricional geral (com suplemento e água)
class Orientacao(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    descricao = models.TextField()  # Alterado de texto_orientacao para descricao

    def __str__(self):
        return f"Orientação para {self.usuario.username}"


# Sugestão de suplementação (relacionada a uma orientação)
class Suplementacao(models.Model):
    orientacao = models.OneToOneField(Orientacao, on_delete=models.CASCADE, related_name='suplementacoes')
    descricao = models.TextField()  # Alterado de texto para descricao

    def __str__(self):
        return "Sugestão de Suplementação"


# Consumo de água diário (relacionado a uma orientação)
class ConsumoAgua(models.Model):
    orientacao = models.OneToOneField(Orientacao, on_delete=models.CASCADE, related_name='consumo_agua')
    descricao = models.TextField()  # Alterado de texto para descricao

    def __str__(self):
        return "Consumo de água diário"
