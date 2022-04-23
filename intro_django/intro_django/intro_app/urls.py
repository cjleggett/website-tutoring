from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("todo", views.todo, name="todo"),
    path("add_task", views.add_task, name="add_task"),
    path("<str:name>", views.sayhello, name="sayhello")
]