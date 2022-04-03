from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "intro_app/index.html")

def sayhello(request, name):
    return render(request, "intro_app/sayhello.html", {
        "name": name
    })