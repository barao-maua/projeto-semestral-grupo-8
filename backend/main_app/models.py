from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_nutricionista = models.BooleanField(default=False)
    def __str__(self):
        return self.username

class TipoRefeicao(models.Model):
    nome = models.CharField(max_length=100)
    def __str__(self):
        return self.nome

class Refeicao(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    tipo_refeicao = models.ForeignKey(TipoRefeicao, on_delete=models.CASCADE)
    horario = models.TimeField()
    data = models.DateField(auto_now_add=True)
    descricao = models.TextField()
    def __str__(self):
        return f"{self.tipo_refeicao.nome} - {self.horario}"

class Alimento(models.Model):
    refeicao = models.ForeignKey(
        Refeicao,
        related_name='alimentos',
        on_delete=models.CASCADE,
        null=True,  
        blank=True
    )
    nome = models.CharField(max_length=100, default="Alimento")
    quantidade = models.CharField(max_length=50, default="1")
    unidade = models.CharField(max_length=50, default="g")

    def __str__(self):
        return self.nome


class Substituicao(models.Model):
    alimento_original = models.ForeignKey(
        Alimento,
        related_name='substitutos',
        on_delete=models.CASCADE,
        null=True,  # permite nulo para migração
        blank=True
    )
    opcao = models.CharField(max_length=100, default="Substituto")
    quantidade = models.CharField(max_length=50, default="1")
    unidade = models.CharField(max_length=50, default="g")

    def __str__(self):
        return f"Substituição para {self.alimento_original.nome if self.alimento_original else '---'}"


class Orientacao(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    descricao = models.TextField()
    def __str__(self):
        return f"Orientação para {self.usuario.username}"

class Suplementacao(models.Model):
    orientacao = models.OneToOneField(Orientacao, on_delete=models.CASCADE, related_name='suplementacoes')
    descricao = models.TextField()
    def __str__(self):
        return "Sugestão de Suplementação"

class ConsumoAgua(models.Model):
    orientacao = models.OneToOneField(Orientacao, on_delete=models.CASCADE, related_name='consumo_agua')
    descricao = models.TextField()
    def __str__(self):
        return "Consumo de água diário"
