from mainweb.models import *
from django.shortcuts import render_to_response, get_object_or_404
from django.template import TemplateDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import HttpResponse,HttpResponseRedirect, HttpResponsePermanentRedirect


def index(request):
    return render_to_response('index.html')

def drh(request):
    return render_to_response('daw-remote-hd.html')
