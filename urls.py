import os
from django.conf.urls.defaults import patterns, include, url
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

    (r'^daw-remote-hd/$', 'daw_remote_hd'),
    (r'^daw-remote-hd/docs/$', 'drh_docs'),
    (r'^daw-remote-hd/videos/$', 'drh_videos'),
    (r'^daw-remote-hd/faq/$', 'drh_faq'),
    (r'^pro-tuner/$', 'pro_tuner'),
    (r'^string-tuner/$', 'string_tuner'),
    (r'^instuner/$', 'instuner'),
    (r'^daw-remote/$', 'daw_remote'),
    (r'^pro-metronome/$', 'pro_metronome'),
    (r'^ukulele/$', 'ukulele'),

    (r'^(?i)daw-remote-hd/network/$', 'drh_network'),
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
)
