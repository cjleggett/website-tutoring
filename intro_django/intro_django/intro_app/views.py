from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django import forms
from django.urls import reverse

items = [
    "Do Laundry",
    "Do homework",
    "Sweep floor"
]

class AddTaskForm(forms.Form):
    new_task = forms.CharField(label="New Task")

# Create your views here.
def index(request):
    return render(request, "intro_app/index.html")

def sayhello(request, name):
    return render(request, "intro_app/sayhello.html", {
        "name": name
    })

def todo(request):
    return render(request, "intro_app/todo.html", {
        "items": items,
        "form": AddTaskForm()
    })

def add_task(request):
    # Add task to list
    form = AddTaskForm(request.POST)

    if form.is_valid():
        task = form.cleaned_data["new_task"]
        items.append(task)


    return HttpResponseRedirect(reverse("todo"))