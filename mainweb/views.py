from mainweb.models import *
from django.shortcuts import render_to_response, get_object_or_404
from django.template import TemplateDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import HttpResponse,HttpResponseRedirect, HttpResponsePermanentRedirect


def index(request):
    return render_to_response('index.html')

def daw_remote_hd(request):
    return render_to_response('daw-remote-hd.html', {"nav": "drh"})

def pro_tuner(request):
    return render_to_response('pro-tuner.html', {"nav": "pt"})

def string_tuner(request):
    return render_to_response('string-tuner.html', {"nav": "st"})

def instuner(request):
    return render_to_response('instuner.html', {"nav": "it"})

def daw_remote(request):
    return render_to_response('daw-remote.html', {"nav": "dr"})

def pro_metronome(request):
    return render_to_response('pro-metronome.html', {"nav": "pm"})
