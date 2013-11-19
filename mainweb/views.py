from mainweb.models import *
from django.shortcuts import render, render_to_response, get_object_or_404
from django.template import TemplateDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import HttpResponse,HttpResponseRedirect, HttpResponsePermanentRedirect

from httplib import *

def home(request):
    return render(request, 'home.html')

def daw_remote_hd(request):
    return render(request, 'daw-remote-hd.html', {"nav": "drh", "subnav": "drh"})

def drh_docs(request):
    return render(request, 'drh-docs.html', {"nav": "drh", "subnav": "drh-docs"})

def drh_videos(request):
    return render(request, 'drh-videos.html', {"nav": "drh", "subnav": "drh-videos"})

def drh_faq(request):
    return render(request, 'drh-faq.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_rtpmidi(request):
    return render(request, 'drh-rtpmidi.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_bonjour(request):
    return render(request, 'drh-bonjour.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_network(request):
    return render(request, 'drh-network.html', {"nav": "drh", "subnav": "drh-faq"})

def chordtunes(request):
    return render(request, 'chordtunes.html', {"nav": "ct"})

def pro_tuner(request):
    return render(request, 'pro-tuner.html', {"nav": "pt"})

def string_tuner(request):
    return render(request, 'string-tuner.html', {"nav": "st"})

def instuner(request):
    return render(request, 'instuner.html', {"nav": "it"})

def daw_remote(request):
    return render(request, 'daw-remote.html', {"nav": "dr"})

def pro_metronome(request):
    return render(request, 'pro-metronome.html', {"nav": "pm"})



def guitar_toolkit(request):
    return render(request, 'guitartoolkit.html', {"nav": "gt"})

def ukulele(request):
    return render(request, 'ukulele.html', {"nav": "ut"})

def hiring(request):

    return render(request, 'hiring.html')

def hiring_cn(request):
    conn = HTTPConnection("ezse.com")
    conn.request("GET","/appdownloads")
    r1 = conn.getresponse()
    if r1.status == 200:
        rsp = r1.read()
    return render(request, 'hiring-cn.html',{"downloads":rsp})


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

