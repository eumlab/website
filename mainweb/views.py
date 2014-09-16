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






#For Press
applist = {
    "pm":{"mid":"pm","name":"Pro Metronome", "id":"477960671", "iphone":True, "iPad": True, "icon":"prometronome.png", "href":"/pro-metronome/","desc":"The best metronome app. Period.","aurl":"eumpm"},
    "instuner":{"mid":"instuner","name":"insTuner", "id":"528923171", "iphone":True, "iPad": True, "icon":"instuner.png", "href":"/instuner/","desc":"The professional chromatic tuner","aurl":"eumit"},
    "instunerlite":{"mid":"instunerlite","name":"insTuner Lite", "id":"603425027", "iphone":True, "iPad": True, "icon":"instuner.png", "href":"/instuner/","desc":"insTuner Lite","aurl":"eumitl"},
    "gm":{"mid":"gm","name":"Guitar Master", "id":"723205500", "iphone":True, "iPad": True, "icon":"guitarmaster.png", "href":"/guitar-master/","desc":"Everything a guitarist needs right in your pocket","aurl":"eumgt"},
    "ut":{"mid":"ut","name":"Ukulele Toolkit", "id":"581273909", "iphone":True, "iPad": False, "icon":"ukuleletoolkit.png", "href":"/ukulele-toolkit/","desc":"Everything a uke player needs","aurl":"eumut"},
    "uke101":{"mid":"uke101","name":"Uke101", "id":"887173705", "iphone":True, "iPad": True, "icon":"uke101.png", "href":"/uke101/","desc":"Everything a uke player needs","aurl":"eumuke101"},
    "ukechords":{"mid":"ukechords","name":"UkeChords", "id":"899874539", "iphone":True, "iPad": True, "icon":"ukechords.png", "href":"/ukechords/","desc":"Learn uke chords with real fingering positions","aurl":"eumuc"},
    "iuke":{"mid":"iuke","name":"iUke", "id":"591760977", "iphone":True, "iPad": True, "icon":"iuke.png", "href":"/iuke/","desc":"The ukulele songbook","aurl":"eumiuke"},
    "chordtunes":{"mid":"chordtunes","name":"Chordtunes", "id":"643809129", "iphone":False, "iPad": True, "icon":"chordtunes.png", "href":"/chordtunes/","desc":"The easy chord sheet creator","aurl":"eumct"},
    "bt":{"mid":"bt","name":"Bass Toolkit", "id":"893031248", "iphone":True, "iPad": True, "icon":"basstoolkit.png", "href":"/bass-toolkit/","desc":"Everything a bass player needs right in your pocket.","aurl":"eumbt"},
    "st":{"mid":"st","name":"String Tuner", "id":"501971515", "iphone":True, "iPad": True, "icon":"stringtuner.png", "href":"/string-tuner/","desc":"Tune your strings in no minute","aurl":"eumst"},
    "pt":{"mid":"pt","name":"Pro Tuner", "id":"483114184", "iphone":True, "iPad": True, "icon":"protuner.png", "href":"/pro-tuner/","desc":"","aurl":"eumpt"},
    "daw":{"mid":"daw","name":"DAW Remote", "id":"435417441", "iphone":True, "iPad": False, "icon":"dawremote.png", "href":"/daw-remote/","desc":"Control your DAW remotely","aurl":""},
    "dawhd":{"mid":"dawhd","name":"DAW Remote HD", "id":"501974930", "iphone":False, "iPad": True, "icon":"dawremotehd.png", "href":"/daw-remote-hd/","desc":"","aurl":""},

    "ukehero":{"mid":"ukehero","name":"UkeHero", "id":"904614073", "iphone":True, "iPad": True, "icon":"ukehero.png", "href":"/ukehero/","desc":"Turn your iPhone into a virtual ukulele","aurl":"eumuh"},
    "uketube":{"mid":"uketube","name":"UkeTube", "id":"906939462", "iphone":True, "iPad": True, "icon":"uketube.png", "href":"/uketube/","desc":"Learn the ukulele using YouTube","aurl":"eumut"},
    "dl":{"mid":"dl","name":"Drum Loops", "id":"918808966", "iphone":True, "iPad": True, "icon":"drumloops.png", "href":"/drum-loops/","desc":"Beats, Rhythms and Grooves","aurl":"eumdl"},
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
indexAppsMobile = [
applist["pm"],
applist["instuner"],
applist["gm"],
applist["bt"],
applist["dl"],
applist["ut"],
applist["iuke"],
applist["ukehero"],
applist["uke101"],
applist["ukechords"],
applist["uketube"],
applist["chordtunes"],
applist["st"],
applist["daw"],
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
    "Lots of cool features, like different tempos and subdivisions, that are usually only found on the more expensive standalone metronomes. I use this app for practicing and teaching, and love that if I have my phone (and who doesn't usually have their phone on them these days?), I have a metronome.",
    "I never really purchase the full version of any app, but in this case, I found my experience with Pro Metronome to be so beneficial to my practicing and, on top of that, so convenient, versatile, and easy to use that I bought the full version merely to show my support for those who developed the app...",
    "I never wanted to use the $30 metronome I purchased years ago. It bothered me more than helped me. This app is amazing and I can't wait to turn it on while I am practicing....",
    "This metronome does everything I need, and everything I could have ever asked for. The interface is marvelous and I love it. The developers really listen to their audience, and this is probably the best metronome on the App Store. Completely steady with a ton of options for beat, even polyrhythms, presets, and flashing screen! Don't waste your time with lesser programs, this app is amazing.",
    "This app is one of the best app I downloaded. I was very skeptical at first, but I'm totally glad with the choice I made. It never crashes, it has different tones, and it keeps running until you want it stopped. I didn't realize that i can practice odd meter until I got this app. I was stunned. This app is so much better than $20 guitar center metronomes. Take my word and you won't regret.",
    "I've used interval timers, I used etc, etc...And this app actually will continue on the background when other apps are running (See SETTINGS and scroll to the 'Metronome' app at the bottom of the main screen where further settings are for most apps). YEAH, thank you.",
    "I study jazz drumset in college, and I do not own an actual metronome because this app is perfect. You can use odd time signatures, omit beats, and change the placement or tone of the accent. Super simple interface, and a very easy to use tap function makes it easy to find the tempo of whatever you're playing. Download it!!!",
#    "I love this app and I have use this app to when I am playing the drums. Recently I have changed from an iPad to a samsung tablet and I have searched for something similar and there is no app that is not even close to it. So if please you could make this app to the google play store I would totally buy it because it's awesome!",
    "I am in my fourth year playing flute, and I take private lessons. My real metronome is dying and it's very annoying :P. most metronome apps out there are either terrible or you have to pay $3. This is free, no adds, you can change the time signature, the sound of the beats, which gets the strongest beat, and the speed. SIMPLY AMAZING!!! MUST DOWNLOAD THIS!!!!",
    "I bought a TAMA metronome for $90 about three years ago, and while that was a great purchase, this little app blows it away. There are a lot of apps out there that charge more and provide less. These guys could charge $10 and it'd still be a bargain.",
    ]

applist["gm"]["reviews"] = [
    "THIS APP IS A GIFT FROM GOD. It has literally everything you need to tune up your guitar skills. Shows you like every scale imaginable lol and tons of drum loops to practice over and literally everything (with pro version). Do not hesitate to get the pro version it is so worth it If you are committed and ready to take your guitar to the next level. Turn up!!",
    "Everything you will need to get inspired to practice playing and writing music. Tons of scales, chords, and chord progressions. I really like the interactive fretboard, it has opened my eyes to new melodies. I get stuck from time to time relying on finger patterns instead of using my ears, but I am thinking and playing in a whole new creative way thanks to this app. I would recommend this to beginners, as well as experienced shredders alike.",
    "I own the toolkit and I like it but this app it's higher quality on all of it features as soon as I try it I just wanted to pay for it I love it so cool and complete to make get the best out of your practice.",
    "I have been using this app for a while and it is simply astounding way better tuning than any other app and is extremely easy to use simply an amazing app",
    "This app rock my socks. Best few dollars I've ever spent on an app. Crazy helpful, super versatile and looks pretty too. I don't go anywhere with out a great tuner now. :) if your even an armature guitarist, this app will help you learn a lot.",
    "The metronome, tuner and chord finder are super easy to use. Tuner's accurate and metronome interface is quite beautiful and elegant in its simplicity. Great job EUM!",
    "Very versatile app,covers all bases. I'm just learning guitar and having a tough time,this app is the best starting point for leads and chord learning. I can see this used at every level I achieve.",
    "This app is worth many times its price. The number of tools is great and the amount of data is outstanding. All chord diagrams are live so they play when touched, there are lists of songs which use the progressions. Every type of scale imaginable for each key is diagrammed on a fretboard that can be tapped anywhere and will play the note. There's also of course a tuner and a metronome for rhythm patterns. Super work!",
    "This app is the essential guide for any guitarist from beginner to pro...This app has it all with a simple interface which is easy to use and understand. And the cherry on the cake this app is a great price.",
    "this app is absolutely brilliant and the most powerful of its kind! chord library, scale library, tuner, metronome (a GREAT one!!), beautiful UI and UX, this is the one! money well spent!!",
    "The best app I've used for guitar stuff, the progression section is great, tuner is bang on and I love the inclusion of the circle of fifths",
    ]

applist["bt"]["reviews"] = [
    "Really great app - everything you need as a bass player! Useful, inspiring and handy!",
    "The first tuner that I have found in the App Store that can tune my bass guitar!!!!",
       ]


for appkey in applist.keys():
    item = applist[appkey]
    item["storeurl"] = "http://itunes.apple.com/app/id" + item["id"] + "?ls=1&mt=8&at=11lt4f&ct=eumwebsite"
