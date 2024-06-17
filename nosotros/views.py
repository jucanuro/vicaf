from django.shortcuts import render

# Create your views here.
def nosotrosView(request):
    return render(request, 'nosotros.html')