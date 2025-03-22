from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("Bem-vindo ao NutriTrack!")

def sobre(request):
    return HttpResponse("Página em construção")