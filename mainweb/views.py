from mainweb.models import *
from django.shortcuts import render_to_response, get_object_or_404
from django.template import TemplateDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import HttpResponse,HttpResponseRedirect, HttpResponsePermanentRedirect


def home(request):
    return render_to_response('home.html')

def daw_remote_hd(request):
    return render_to_response('daw-remote-hd.html', {"nav": "drh", "subnav": "drh"})

def drh_docs(request):
    return render_to_response('drh-docs.html', {"nav": "drh", "subnav": "drh-docs"})

def drh_videos(request):
    return render_to_response('drh-videos.html', {"nav": "drh", "subnav": "drh-videos"})

def drh_faq(request):
    return render_to_response('drh-faq.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_rtpmidi(request):
    return render_to_response('drh-rtpmidi.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_bonjour(request):
    return render_to_response('drh-bonjour.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_network(request):
    return render_to_response('drh-network.html', {"nav": "drh", "subnav": "drh-faq"})


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

def ukulele(request):
    return render_to_response('ukulele.html', {"nav": "ut"})

def hiring(request):
    return render_to_response('hiring.html')

def redirector(request,where,isp=True):
    if isp:
        return HttpResponsePermanentRedirect(where)
    else:
        return HttpResponseRedirect(where)

def redirector_with_hash(request,where,hash,isp=True):
    if isp:
        return HttpResponsePermanentRedirect(where+"#"+hash)
    else:
        return HttpResponseRedirect(where+"#"+hash)

