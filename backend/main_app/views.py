from django.http import HttpResponse

def home(request):
    return HttpResponse("NutriTrack está funcionando!")