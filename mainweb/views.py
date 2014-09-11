from mainweb.models import *
from django.shortcuts import render, render_to_response, get_object_or_404
from django.template import TemplateDoesNotExist, RequestContext
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import HttpResponse,HttpResponseRedirect, HttpResponsePermanentRedirect

from httplib import *
from django.template.loader import render_to_string


from django.template.response import TemplateResponse


def decorator(view):
    def wrapper(request, *args, **kwargs):
        r = view(request, *args, **kwargs)
        r.context_data = {'products': appsMenu,'apps':applist}
        return r.render()
    return wrapper

'''def render_with_pars(request, *args, **kwargs):
    if len(args) == 2:
        context = {"products":appsMenu}
        obj = args[1]
        obj['products'] = appsMenu
        args[1] = obj
    return render(request,*args,**kwargs)
'''

def render_with_pars(request, *args, **kwargs):
    """
    Returns a HttpResponse whose content is filled with the result of calling
    django.template.loader.render_to_string() with the passed arguments.
    Uses a RequestContext by default.
    """
    httpresponse_kwargs = {
        'content_type': kwargs.pop('content_type', None),
        'status': kwargs.pop('status', None),
    }

    if 'context_instance' in kwargs:
        context_instance = kwargs.pop('context_instance')
        if kwargs.get('current_app', None):
            raise ValueError('If you provide a context_instance you must '
                             'set its current_app before calling render()')
    else:
        current_app = kwargs.pop('current_app', None)
        context_instance = RequestContext(request, current_app=current_app)

    args[1]['products'] = appsMenu
    kwargs['context_instance'] = context_instance

    return HttpResponse(render_to_string(*args, **kwargs),
                        **httpresponse_kwargs)


def home(request):
    return render_with_pars(request, 'home2.html',{"appList":indexApps,"ukeApps":ukeApps})


def drum_tuner(request):
    return render_with_pars(request, 'drum-tuner.html', {"nav": "drh", "subnav": "drh"})

def daw_remote_hd(request):
    return render_with_pars(request, 'daw-remote-hd.html', {"nav": "drh", "subnav": "drh"})

def drh_docs(request):
    return render_with_pars(request, 'drh-docs.html', {"nav": "drh", "subnav": "drh-docs"})

def drh_videos(request):
    return render_with_pars(request, 'drh-videos.html', {"nav": "drh", "subnav": "drh-videos"})

def drh_faq(request):
    return render_with_pars(request, 'drh-faq.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_rtpmidi(request):
    return render_with_pars(request, 'drh-rtpmidi.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_bonjour(request):
    return render_with_pars(request, 'drh-bonjour.html', {"nav": "drh", "subnav": "drh-faq"})

def drh_network(request):
    return render_with_pars(request, 'drh-network.html', {"nav": "drh", "subnav": "drh-faq"})

def chordtunes(request):
    return render_with_pars(request, 'chordtunes.html', {"nav": "ct"})

def pro_tuner(request):
    return render_with_pars(request, 'pro-tuner.html', {"nav": "pt"})

def string_tuner(request):
    return render_with_pars(request, 'string-tuner.html', {"nav": "st"})

def instuner(request):
    return render_with_pars(request, 'instuner.html', {"nav": "it"})

def daw_remote(request):
    return render_with_pars(request, 'daw-remote.html', {"nav": "dr"})


def pro_metronome(request):
    return render_with_pars(request, 'pro-metronome.html', {"nav": "pm"})


def press(request):
    return render_with_pars(request, 'press.html', {"nav": "pm","pressApps":pressApps})

def guitar_toolkit(request):
    return render_with_pars(request, 'guitartoolkit.html', {"nav": "gt"})

def ukulele(request):
    return render_with_pars(request, 'ukulele.html', {"nav": "ut"})




def loadtemplate(request, template,aid):
    if aid == None:
        me = {}
    else:
        me = applist[aid]
    return render_with_pars(request, template,{"me":me})


def loadtemplateGeneral(request, template):
    return render_with_pars(request, template,{})


def showMeTheMoney(request,template):
    return render_with_pars(request, template,{"appitems":applist.values()})

def hiring_cn(request):
    conn = HTTPConnection("ezse.com")
    conn.request("GET","/appdownloads")
    r1 = conn.getresponse()
    if r1.status == 200:
        rsp = r1.read()
    return render_with_pars(request, 'hiring.html',{"downloads":"4.3M+"})


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






#For Press
applist = {
    "pm":{"mid":"pm","name":"Pro Metronome", "id":"477960671", "iphone":True, "iPad": True, "icon":"prometronome.png", "href":"/pro-metronome/","desc":"","aurl":"eumpm"},
    "instuner":{"mid":"instuner","name":"insTuner", "id":"528923171", "iphone":True, "iPad": True, "icon":"instuner.png", "href":"/instuner/","desc":"","aurl":"eumit"},
    "instunerlite":{"mid":"instunerlite","name":"insTuner Lite", "id":"603425027", "iphone":True, "iPad": True, "icon":"instuner.png", "href":"/instuner/","desc":"insTuner Lite","aurl":"eumitl"},
    "gm":{"mid":"gm","name":"Guitar Master", "id":"723205500", "iphone":True, "iPad": True, "icon":"guitarmaster.png", "href":"/guitar-master/","desc":"","aurl":"eumgt"},
    "ut":{"mid":"ut","name":"Ukulele Toolkit", "id":"581273909", "iphone":True, "iPad": False, "icon":"ukuleletoolkit.png", "href":"/ukulele-toolkit/","desc":"Everything A Uker Needs","aurl":"eumut"},
    "uke101":{"mid":"uke101","name":"Uke101", "id":"887173705", "iphone":True, "iPad": True, "icon":"uke101.png", "href":"/uke101/","desc":"Learn to Play Ukulele With Lessons, Games& Songs","aurl":"eumuke101"},
    "ukechords":{"mid":"ukechords","name":"UkeChords", "id":"899874539", "iphone":True, "iPad": True, "icon":"ukechords.png", "href":"/ukechords/","desc":"Uke Chords With Real Fingering Positions","aurl":"eumuc"},
    "iuke":{"mid":"iuke","name":"iUke", "id":"591760977", "iphone":True, "iPad": True, "icon":"iuke.png", "href":"/iuke/","desc":"The Interactive Ukulele Songbook","aurl":"eumiuke"},
    "chordtunes":{"mid":"chordtunes","name":"Chordtunes", "id":"643809129", "iphone":False, "iPad": True, "icon":"chordtunes.png", "href":"/chordtunes/","desc":"Read, Create And Share Ukulele Chord Sheets","aurl":"eumct"},
    "bt":{"mid":"bt","name":"Bass Toolkit", "id":"893031248", "iphone":True, "iPad": True, "icon":"basstoolkit.png", "href":"/bass-toolkit/","desc":"","aurl":"eumbt"},
    "st":{"mid":"st","name":"String Tuner", "id":"501971515", "iphone":True, "iPad": True, "icon":"stringtuner.png", "href":"/string-tuner/","desc":"","aurl":"eumst"},
    "pt":{"mid":"pt","name":"Pro Tuner", "id":"483114184", "iphone":True, "iPad": True, "icon":"protuner.png", "href":"/pro-tuner/","desc":"","aurl":"eumpt"},
    "daw":{"mid":"daw","name":"DAW Remote", "id":"435417441", "iphone":True, "iPad": False, "icon":"dawremote.png", "href":"/daw-remote/","desc":"","aurl":""},
    "dawhd":{"mid":"dawhd","name":"DAW Remote HD", "id":"501974930", "iphone":False, "iPad": True, "icon":"dawremotehd.png", "href":"/daw-remote-hd/","desc":"","aurl":""},

    "ukehero":{"mid":"ukehero","name":"UkeHero", "id":"904614073", "iphone":True, "iPad": True, "icon":"ukehero.png", "href":"/ukehero/","desc":"Play Your iPhone Like A Real Ukulele","aurl":"eumuh"},
    "uketube":{"mid":"uketube","name":"UkeTube", "id":"906939462", "iphone":True, "iPad": True, "icon":"uketube.png", "href":"/uketube/","desc":"Learn to Play the Ukulele Using YouTube","aurl":"eumut"},
    "dl":{"mid":"dl","name":"Drum Loops", "id":"896614439", "iphone":True, "iPad": True, "icon":"drumloops.png", "href":"/drum-loops/","desc":"Beats, Rhythms and Grooves","aurl":"eumdl"},
    "pc":{"mid":"pc","name":"Piano Handbook", "id":"902368085", "iphone":True, "iPad": True, "icon":"pianochords.png", "href":"/piano-handbook/","desc":"","aurl":"eumpc"},
}

indexApps = [
applist["pm"],
applist["instuner"],
applist["gm"],
applist["bt"],
applist["dl"],
applist["st"],
applist["dawhd"],
applist["ut"],
applist["iuke"],
applist["ukehero"],
applist["uke101"],
applist["ukechords"],
applist["uketube"],
applist["chordtunes"],

]

pressApps =[
applist["pm"],
applist["instuner"],
applist["gm"],
applist["bt"],
applist["dl"],
applist["pc"],
applist["ut"],
applist["iuke"],
applist["ukehero"],
applist["uke101"],
applist["ukechords"],
applist["chordtunes"],
]
#Press Link
applist["pm"]["pl"] = "http://dropbox.com/test/"
applist["uke101"]["pl"] = "https://www.dropbox.com/sh/h16am5vrut0rfqa/AACTrAe-rdtFqNGdANKCwmVIa/Uke101"


appsMenu = [
    {"title":"For Daily Practice","items":[applist["pm"],applist["instuner"],applist["gm"],applist["bt"],applist["dl"],]},
    {"title":"For Ukulele Players","items":[applist["ut"],applist["iuke"],applist["ukehero"],applist["uke101"],applist["ukechords"],applist["uketube"],applist["chordtunes"],]},
    {"title":"More","items":[applist["pt"],applist["st"],applist["daw"],applist["dawhd"],]},
]

ukeApps = [
applist["ut"],
applist["iuke"],
applist["ukehero"],
applist["uke101"],
applist["ukechords"],
applist["uketube"],
applist["chordtunes"],
]

#User Reviews
applist["ut"]["reviews"] = [
    "I've been using this app for as long as I can remember. It's an amazing app and definitely the best Metronome app I've found so far!!	",
    "Has all the features I could have wanted and plenty more besides. Works like a hot damn. Excellent value!",
    "Having a metronome everywhere I go is extremely helpful. When I'm in the band room it's great to have, this way I don't have to carry a metronome in my case",
    "Many great things about this app but the best by far is the ease of using the app. It's very simple to use unlike many other metronome apps",
    "I first learn to play songs by playing to them, but if it wasn't for this app back a year ago I would have never learned the chords and theory I did with this app. This app is the only app that had such a sincerely built approach to the ukulele. Try it because you will not be disappointed.",
    "I have used several tuning applications with my iPhone and this is the best one I have ever used. It's accurate and very fast.",
    ]

applist["pm"]["reviews"] = [
    "I've been using this app for as long as I can remember. It's an amazing app and definitely the best Metronome app I've found so far!!	",
    "Has all the features I could have wanted and plenty more besides. Works like a hot damn. Excellent value!",
    "Having a metronome everywhere I go is extremely helpful. When I'm in the band room it's great to have, this way I don't have to carry a metronome in my case",
    "Many great things about this app but the best by far is the ease of using the app. It's very simple to use unlike many other metronome apps",
    "I first learn to play songs by playing to them, but if it wasn't for this app back a year ago I would have never learned the chords and theory I did with this app. This app is the only app that had such a sincerely built approach to the ukulele. Try it because you will not be disappointed.",
    "I have used several tuning applications with my iPhone and this is the best one I have ever used. It's accurate and very fast.",
    ]

applist["gm"]["reviews"] = [
    "I've been using this app for as long as I can remember. It's an amazing app and definitely the best Metronome app I've found so far!!	",
    "Has all the features I could have wanted and plenty more besides. Works like a hot damn. Excellent value!",
    "Having a metronome everywhere I go is extremely helpful. When I'm in the band room it's great to have, this way I don't have to carry a metronome in my case",
    "Many great things about this app but the best by far is the ease of using the app. It's very simple to use unlike many other metronome apps",
    "I first learn to play songs by playing to them, but if it wasn't for this app back a year ago I would have never learned the chords and theory I did with this app. This app is the only app that had such a sincerely built approach to the ukulele. Try it because you will not be disappointed.",
    "I have used several tuning applications with my iPhone and this is the best one I have ever used. It's accurate and very fast.",
    ]

for appkey in applist.keys():
    item = applist[appkey]
    item["storeurl"] = "http://itunes.apple.com/app/id" + item["id"] + "?ls=1&mt=8&at=11lt4f&ct=eumwebsite"
