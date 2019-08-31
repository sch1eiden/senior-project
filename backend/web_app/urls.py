from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^', views.ListGarbage.as_view()),
    url(r'^<int:pk>/', views.DetailGarbage.as_view()),
]
