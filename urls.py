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
    (r'^daw-remote-hd/$', 'daw_remote_hd'),
    (r'^daw-remote-hd/docs/$', 'drh_docs'),
    (r'^daw-remote-hd/videos/$', 'drh_videos'),
    (r'^pro-tuner/$', 'pro_tuner'),
    (r'^string-tuner/$', 'string_tuner'),
    (r'^instuner/$', 'instuner'),
    (r'^daw-remote/$', 'daw_remote'),
    (r'^pro-metronome/$', 'pro_metronome'),
    (r'^ukulele/$', 'ukulele'),
)
