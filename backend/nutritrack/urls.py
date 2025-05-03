from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    
    path('', lambda request: HttpResponse("<h2>NutriTrack API ativa</h2><p>Use /admin ou /api/</p>")),
    path('admin/', admin.site.urls),
    path('api/', include('main_app.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
