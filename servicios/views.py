from django.shortcuts import render

# Create your views here.
def serviciosView(request):
    return render(request, 'servicios.html')