from mainweb.models import *
from django.shortcuts import render, render_to_response, get_object_or_404
from django.template import TemplateDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import HttpResponse,HttpResponseRedirect, HttpResponsePermanentRedirect

from httplib import *

applist = {
    "pm":{"mid":"pm","name":"Pro Metronome", "id":"477960671", "iphone":True, "iPad": True, "icon":"prometronome.png", "href":"/pro-metronome/","desc":""},
    "instuner":{"mid":"instuner","name":"insTuner", "id":"528923171", "iphone":True, "iPad": True, "icon":"instuner.png", "href":"/instuner/","desc":""},
    "gm":{"mid":"gm","name":"Guitar Master", "id":"723205500", "iphone":True, "iPad": True, "icon":"guitarmaster.png", "href":"/guitar-master/","desc":""},
    "ut":{"mid":"ut","name":"Ukulele Toolkit", "id":"581273909", "iphone":True, "iPad": False, "icon":"ukuleletoolkit.png", "href":"/ukulele-toolkit/","desc":"Everything a Uker Needs"},
    "uke101":{"mid":"uke101","name":"Uke 101", "id":"887173705", "iphone":True, "iPad": True, "icon":"uke101.png", "href":"/uke101/","desc":"Learn to Play Ukulele from Lessons, Games& Songs"},
    "ukechords":{"mid":"ukechords","name":"Uke Chords", "id":"899874539", "iphone":True, "iPad": True, "icon":"ukechords.png", "href":"/uke-chords/","desc":"Uke Chords with Real Fingering Positions"},
    "iuke":{"mid":"iuke","name":"iUke", "id":"591760977", "iphone":True, "iPad": True, "icon":"iuke.png", "href":"/iuke/","desc":"Ukulele Interactive Songbook"},
    "chordtunes":{"mid":"chordtunes","name":"Chordtunes", "id":"643809129", "iphone":False, "iPad": True, "icon":"chordtunes.png", "href":"/chordtunes/","desc":"Create, Read and Share Ukulele Sheets"},
    "bt":{"mid":"bt","name":"Bass Toolkit", "id":"893031248", "iphone":True, "iPad": True, "icon":"basstoolkit.png", "href":"/bass-toolkit/","desc":""},
    "st":{"mid":"st","name":"String Tuner", "id":"501971515", "iphone":True, "iPad": True, "icon":"stringtuner.png", "href":"/string-tuner/","desc":""},
    "pt":{"mid":"pt","name":"Pro Tuner", "id":"483114184", "iphone":True, "iPad": True, "icon":"protuner.png", "href":"/pro-tuner/","desc":""},
    "daw":{"mid":"daw","name":"DAW Remote", "id":"435417441", "iphone":True, "iPad": False, "icon":"dawremote.png", "href":"/daw-remote/","desc":""},
    "dawhd":{"mid":"dawhd","name":"DAW Remote HD", "id":"501974930", "iphone":False, "iPad": True, "icon":"dawremotehd.png", "href":"/daw-remote-hd/","desc":""},

    "ukehero":{"mid":"ukehero","name":"Uke Hero", "id":"-", "iphone":True, "iPad": True, "icon":"ukehero.png", "href":"/-/","desc":"Play Your iPhone Like a Real Ukulele"},
    "uketube":{"mid":"uketube","name":"Uke Tube", "id":"-", "iphone":True, "iPad": True, "icon":"dawremotehd.png", "href":"/-/","desc":""},
    "dl":{"mid":"dl","name":"Drum Loops", "id":"-", "iphone":True, "iPad": True, "icon":"drumloops.png", "href":"/-/","desc":""},
    "pc":{"mid":"pc","name":"Piano Chords", "id":"-", "iphone":True, "iPad": True, "icon":"pianochords.png", "href":"/-/","desc":""},
}

indexApps = [
applist["pm"],
applist["instuner"],
applist["gm"],
applist["bt"],
applist["dl"],
applist["st"],
applist["pc"],
applist["ut"],
applist["iuke"],
applist["ukehero"],
applist["uke101"],
applist["ukechords"],
applist["chordtunes"],
applist["dawhd"],
]

appsMenu = [
    {"title":"For Daily Practice","items":[applist["pm"],applist["instuner"],applist["gm"],applist["bt"],applist["dl"],]},
    {"title":"For Ukulele Players","items":[applist["ut"],applist["iuke"],applist["ukehero"],applist["uke101"],applist["ukechords"],applist["uketube"],applist["chordtunes"],]},
    {"title":"More","items":[applist["pc"],applist["pt"],applist["st"],applist["daw"],applist["dawhd"],]},
]

ukeApps = [
applist["ut"],
applist["iuke"],
applist["ukehero"],
applist["uke101"],
applist["ukechords"],
#applist["uketube"],
applist["chordtunes"],
]

def home(request):
    return render(request, 'home2.html',{"appList":indexApps,"products":appsMenu,"ukeApps":ukeApps})


def drum_tuner(request):
    return render(request, 'drum-tuner.html', {"nav": "drh", "subnav": "drh"})

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
    return render(request, 'hiring-cn.html',{"downloads":"4.3M+"})


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

