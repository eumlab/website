#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.db import models
from mainweb.models import *
# Create your models here.

urlset = [
    {"location":"http://eumlab.com/", "changefreq":"daily","priority":"1.0","lastmod":"2014-12-25"}
]

def addurl(url,modify,priority,changefreq="daily"):
    urlset.append({"location":"http://eumlab.com"+url, "changefreq":changefreq,"priority":priority,"lastmod":modify})


#Major Apps
addurl(applist["pm"]["href"],"2014-12-25",0.9)
addurl(applist["pm"]["href"]+"edu/","2014-12-25",0.7)
addurl(applist["iuke"]["href"],"2014-12-25",0.9)
addurl(applist["ut"]["href"],"2014-12-25",0.9)
addurl(applist["gm"]["href"],"2014-12-25",0.9)
addurl(applist["instuner"]["href"],"2014-12-25",0.9)
addurl(applist["dawhd"]["href"],"2014-12-25",0.9)

#Root URL
addurl("/about/","2014-12-25",0.89)
addurl("/jobs/","2014-12-25",0.89)
urlset.append({"location":"http://support.eumlab.com", "changefreq":"daily","priority":0.89,"lastmod":"2014-12-25"})
urlset.append({"location":"http://blog.eumlab.com", "changefreq":"daily","priority":0.89,"lastmod":"2014-12-25"})


#2nd Line Apps
addurl(applist["ukechords"]["href"],"2014-12-25",0.75)
addurl(applist["dl"]["href"],"2014-12-25",0.75)
addurl(applist["chordtunes"]["href"],"2014-12-25",0.75)
addurl(applist["pt"]["href"],"2014-12-25",0.75)
addurl(applist["pc"]["href"],"2014-12-25",0.75)
addurl(applist["ukehero"]["href"],"2014-12-25",0.75)
addurl(applist["uketube"]["href"],"2014-12-25",0.75)
addurl(applist["uke101"]["href"],"2014-12-25",0.75)
addurl(applist["bt"]["href"],"2014-12-25",0.75)
addurl(applist["daw"]["href"],"2014-12-25",0.75)

#Sub pages
addurl(applist["dawhd"]["href"]+"videos/","2014-12-25",0.7)
addurl(applist["dawhd"]["href"]+"docs/","2014-12-25",0.7)


#Not Important
addurl("/imprint/","2014-12-25",0.5)



#############################
### END URL
#############################


#>>>>>>>>>>>>>>>>>
# SEO
#>>>>>>>>>>>>>>>>>

#commen keywords
cKeys = ", tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student"

kwList = {
    "pm":{"kw":"metronome, free, pro metronome, beat, boss, boss db-90, db-90, db90, dr. beat, tool, rhythm, drummer, polyrhythms, education, subdivision, learn, eumlab, eum, tempo, tempo app, guitar, ukulele, discount"},
    "pme":{"kw":"metronome, free, pro metronome, beat, education, licence, volume licencing, rhythm, drummer, polyrhythms, subdivision, learn, eumlab, eum, tempo, tempo app, guitar, ukulele, discount"},
    "instuner":{"kw":"tuner, guitar tuner, tune a guitar, tuning a guitar, tune ukulele, saxophone, violin, viola, cello, tone generator, guitar tuna, cleartune, online guitar tuner"},
    "instunerlite":{"kw":""},
    "gm":{"kw":"guitar master, guitar toolkit, agile, tuner, metronome ,scale, chords, chord, chord diagram, chord progression, drum loops, jam, pentatonic, strum, strums, strumming pattern, guitar tuner"},
    "ut":{"kw":"ukulele toolkit, guitar toolkit, ukulele, over the rainbow, ukulele tuner, uketuner, ukutuner, ukulele tabs, tuner, metronome ,scale, chords, chord, chord diagram, chord progression, drum loops, jam, pentatonic, strum, strums, strumming pattern"},
    "uke101":{"kw":"ukulele, uke101, learn ukulele, chord, chord sheet , play ukulele, tuner, 4 chords songs, ukulele underground, ukulele tricks, video, lesson, "},
    "ukechords":{"kw":"ukulele, chord, chords, chord diagram, fingering, finger, photo, c chord, Bb"},
    "iuke":{"kw":"ukulele, chords, sheet, ukeoke, lyrics, over the rainbow, hey soul, tabs"},
    "chordtunes":{"kw":"chords, chord sheet, song writer, write song, ukulele, guitar, mandolin"},
    "bt":{"kw":"bass toolkit, guitar toolkit, agile, tuner, bass tuner, metronome ,scale, chords, chord, chord diagram, chord progression, drum loops, jam, pentatonic, strum, strums, strumming pattern, tune bass"},
    "st":{"kw":"violin, viola, tuner, cello, tune violin, tune viola, tune cello"},
    "pt":{"kw":"pro tuner, tuner, guitar tuner, tune a guitar, tuning a guitar, tune ukulele, saxophone, violin, viola, cello, tone generator, guitar tuna, cleartune, online guitar tuner"},
    "daw":{"kw":"daw remote, logic, pro tools, cubase, live, controller, control, wireless, ac97, logic remote, remote, studio, mackie, osc, mixer"},
    "dawhd":{"kw":"daw remote hd, daw remote, logic, pro tools, cubase, live, controller, control, wireless, ac97, logic remote, remote, studio, control surface, mackie, osc, mixer"},

    "ukehero":{"kw":"ukulele, instrument, virtual instrument, real ukulele, guitar hero, real guitar, futulele"},
    "uketube":{"kw":"ukulele, cover, youtube, tutorial, hey soul, over the rainbow, somewhere over, learn ukulele, play ukulele, uke"},
    "dl":{"kw":"drum loops, drum, drum pattern, drum machine, jam, jamplay, jam along"},
    "pc":{"kw":"piano, chord, chord sheet, scale, handbook, i real pro, irealpro, irealb, i real b"},
}



mdescList = {
    "pm":               "Pro Metronome app helps you both daily practice and stage performance. The features including subdivision, polyrhythm, rhythm trainer, preset and more.",
    "pme":              "Pro Metronome educational volume licensing, the tempo keeper for music school and class.",
    "instuner":         "insTuner app is a highly accurate chromatic tuner which helps you tune your guitar, bass, ukulele, violin, cello, woodwind instruments and more.",
    "instunerlite":     "",
    "gm":               "Guitar Master app is a collection of essential guitar tools, features including accurate tuner, metronome, chord diagram, scale, chord progressions and more.",
    "ut":               "Ukulele Toolkit app is a collection of essential ukulele tools, features including accurate tuner, metronome, chord diagram, scale, chord progressions and more.",
    "uke101":           "Uke101 app helps you learn how to play ukulele from tutorials, lessons, games and playing tracks",
    "ukechords":        "UkeChords app helps you learn ukulele chords with real fingering position photos.",
    "iuke":             "iUke app is an interactive ukulele song books which shows you chords along with the lyrics. You can learn, play ukulele and sing with it.",
    "chordtunes":       "Chordtunes app helps you write your guitar/ukulele/madolin chord sheets in no time. You can rapidly switch instruments, transpose chords and export to PDF.",
    "bt":               "Bass Toolkit app is a collection of essential bass tools, features including accurate tuner, metronome, chord apreggio, scale, chord progressions and more.",
    "st":               "String Tuner app is designed for violin, viola, cello and contrabass. It supports 3 musical temperaments including pure, pythagorean and 12 equal temperament.",
    "pt":               "Pro Tuner app is designed for tuning your guitar, ukulele, mandolin and other fretted instruments. It supports standard, open, dropped tunings.",
    "daw":              "DAW Remote app helps you control DAW softwares wirelessly (including Logic, Cubase, Pro Tools etc). You can loop, punch, jog on your iPhone",
    "dawhd":            "DAW Remote HD app helps you control DAW softwares wirelessly (including Logic, Cubase, Pro Tools etc). You can customize your control surface on your iPad.",

    "ukehero":          "UkeHero app is a virtual ukulele on your iPhone and iPad. With smart chords and smart strumming techs, it just like a real ukulele.",
    "uketube":          "UkeTube app helps you learn how to play ukulele by watching tutorials, covers, tricks on YouTube.",
    "dl":               "Drum Loops app just like a drum machine which plays drum loops for you. You can play instruments and jam along with it.",
    "pc":               "",
}


#Append cKeys

for ak in kwList.keys():
    item = kwList[ak]
    kw = item["kw"]
    mdesc = mdescList[ak]
    applist[ak]["kw"] = kw + cKeys
    applist[ak]["mdesc"] = mdesc






#############################
### END SEO
#############################