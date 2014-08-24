import os
from django.conf.urls import patterns, url, include
from django.conf import settings

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'eumlab.views.home', name='home'),
    # url(r'^eumlab/', include('eumlab.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    (r'^payload/(?P<path>.*)$', 'django.views.static.serve', {'document_root': os.path.join(settings.ROOT_PATH, 'payload')}),
    (r'^pkg/(?P<path>.*)$', 'django.views.static.serve', {'document_root': os.path.join(settings.ROOT_PATH, 'pkg')}),
)

urlpatterns += patterns('',
    (r'^assets/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.ASSETS_ROOT}),
)

urlpatterns += patterns('mainweb.views',
    (r'^$', 'home'),
    (r'^(?i)index.html$',"redirector",{"where":"/"}),

#General Page
    (r'^hiring/$', 'loadtemplateGeneral', {'template':'hiring.html'}),
    (r'^press/$', 'loadtemplateGeneral', {'template':'press.html'}),
    (r'^imprint/$', 'loadtemplateGeneral', {'template':'imprint.html'}),
    (r'^contact/$', 'loadtemplateGeneral', {'template':'contact.html'}),
    (r'^smtm/$', 'showMeTheMoney', {'template':'showmethemoney.html'}),

#Apps:
    (r'^iuke/$', 'loadtemplate', {'template':'iuke.html','aid':'iuke'}),
    (r'^drum-loops/$',  'loadtemplate', {'template':'drumloops.html','aid':'dl'}),
    (r'^piano-chords/$', 'loadtemplate', {'template':'pianochords.html','aid':'pc'}),
    (r'^pro-metronome/$', 'loadtemplate', {'template':'pro-metronome.html','aid':'pm'}),
    (r'^uketube/$', 'loadtemplate', {'template':'uketube.html','aid':'uketube'}),
    (r'^ukechords/$', 'loadtemplate', {'template':'ukechords.html','aid':'ukechords'}),



    (r'^daw-remote-hd/$', 'daw_remote_hd'),
    (r'^daw-remote-hd/docs/$', 'drh_docs'),
    (r'^daw-remote-hd/videos/$', 'drh_videos'),
    (r'^daw-remote-hd/faq/$', 'drh_faq'),
    (r'^pro-tuner/$', 'pro_tuner'),
    (r'^string-tuner/$', 'string_tuner'),
    (r'^instuner/$', 'instuner'),
    (r'^daw-remote/$', 'daw_remote'),
    (r'^chordtunes/$', 'chordtunes'),
    (r'^ukulele-toolkit/$', 'ukulele'),

    (r'^ukulele/$',"redirector",{"where":"/ukulele-toolkit/"}),

    (r'^guitar-master/$', 'guitar_toolkit'),
    (r'^drum-tuner/$', 'drum_tuner'),
    #(r'^hiring/$', 'hiring'),

    (r'^contact/$', 'contact'),

    (r'^guitar-toolkit/$', 'redirector',{"where":"/guitar-master/"}),

    #(r'^(?i)daw-remote-hd/network/$', 'drh_network'),
    (r'^(?i)daw-remote-hd/network/$',"redirector",{"where":"http://support.eumlab.com/customer/portal/articles/958423-network-config"}),
    (r'^(?i)daw-remote-hd/bonjour/$', 'drh_bonjour'),
    (r'^(?i)daw-remote-hd/rtpmidi/$', 'drh_rtpmidi'),

    (r'^(?i)network/$',"redirector",{"where":"/daw-remote-hd/network/"}),
    (r'^(?i)bonjour/$',"redirector",{"where":"/daw-remote-hd/bonjour/"}),
    (r'^(?i)rtpmidi/$',"redirector",{"where":"/daw-remote-hd/rtpmidi/"}),

    (r'^(?i)eum/string-tuner/$',"redirector",{"where":"/string-tuner/"}),

    (r'^(?i)eum/daw-remote.html$',"redirector",{"where":"/daw-remote/"}),
    (r'^(?i)daw-remote.html$',"redirector",{"where":"/daw-remote/"}),
    (r'^(?i)/daw-remote/$',"redirector",{"where":"/daw-remote/"}),
    (r'^(?i)/dawremote/$',"redirector",{"where":"/daw-remote/"}),
    (r'^(?i)eum/dawremote/$',"redirector",{"where":"/daw-remote/"}),
    (r'^(?i)daw-remote$',"redirector",{"where":"/daw-remote/"}),
    (r'^(?i)dawremote$',"redirector",{"where":"/daw-remote/"}),

    (r'^(?i)tuner.html$',"redirector",{"where":"/pro-tuner/"}),
    (r'^(?i)metronome.html$',"redirector",{"where":"/pro-metronome/"}),
    (r'^(?i)midi-pad.html$',"redirector",{"where":"/"}),

    (r'^(?i)eum/$',"redirector",{"where":"/"}),
    (r'^(?i)eum/metronome.html$',"redirector",{"where":"/pro-metronome/"}),
    (r'^(?i)eum/midi-pad.html$',"redirector",{"where":"/"}),

    (r'^(?i)clip-mic/$',"redirector",{"where":"http://support.eumlab.com/customer/portal/articles/930136-about-clip-sensor"}),
)
