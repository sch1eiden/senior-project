from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('bin/', views.ListBin.as_view(), name="bin"),
    path('bin/<int:pk>/', views.DetailBin.as_view()),
    path('location/', views.ListLocation.as_view(), name="location"),
    path('location/<int:pk>/', views.DetailLocation.as_view()),
    path('locate/', views.ListLocate.as_view(), name="locate"),
    path('locate/<int:pk>/', views.DetailLocate.as_view()),
    path('garbage/', views.ListGarbage.as_view(), name="garbage"),
    path('garbage/<int:pk>/', views.DetailGarbage.as_view()),
    path('contain/', views.ListContain.as_view(), name="contain"),
    path('contain/<int:pk>/', views.DetailContain.as_view()),
    path('maid/', views.ListMaid.as_view(), name="maid"),
    path('maid/<int:pk>/', views.DetailMaid.as_view()),
    path('responsible/', views.ListResponsible.as_view(), name="responsible"),
    path('responsible/<int:pk>/', views.DetailResponsible.as_view()),
    path('registeredUser/', views.ListRegisteredUser.as_view(), name="registeredUser"),
    path('registeredUser/<int:pk>/', views.DetailRegisteredUser.as_view()),
    path('register/', views.ListRegister.as_view(), name="register"),
    path('register/<int:pk>/', views.DetailRegister.as_view()),
    path('message/', views.ListMessage.as_view(), name="message"),
    path('message/<int:pk>/', views.DetailMessage.as_view()),
    path('send/', views.ListSend.as_view(), name="send"),
    path('send/<int:pk>/', views.DetailSend.as_view()),
]
