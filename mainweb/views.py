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

    me = {}
    me["reviews"]=[
    "Really great app - everything you need as a bass player! Useful, inspiring and handy!",
    "The first tuner that I have found in the App Store that can tune my bass guitar!!!!",
        "Everything you will need to get inspired to practice playing and writing music. Tons of scales, chords, and chord progressions. I really like the interactive fretboard, it has opened my eyes to new melodies. I get stuck from time to time relying on finger patterns instead of using my ears, but I am thinking and playing in a whole new creative way thanks to this app. I would recommend this to beginners, as well as experienced shredders alike.",

    ]

    if 'iPhone' in request.META["HTTP_USER_AGENT"]:
        return render_with_pars(request, 'home-mobile.html',{"appList":indexAppsMobile,"ukeApps":ukeApps,"me":me})
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
    if template == 'press.html':
        return render_with_pars(request, template,{"apps":applist,'covers':PressCovers,'kits':PressItems})

    return render_with_pars(request, template,{"apps":applist.values()})


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

