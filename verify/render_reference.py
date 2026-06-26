#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Render the legacy Django templates to static reference HTML (the ground truth the
Astro migration must reproduce). Uses the repo's own templates + data rendered by
Django's real template engine. Desktop variant (no device.iphone/ipad).
"""
import os
import django
from django.conf import settings

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGINAL = os.path.join(ROOT, "original")
TEMPLATES_DIR = os.path.join(ORIGINAL, "templates")
OUT = os.path.join(ROOT, "verify", "reference")

settings.configure(
    DEBUG=False,
    INSTALLED_APPS=["django.contrib.contenttypes", "django.contrib.auth"],
    DATABASES={"default": {"ENGINE": "django.db.backends.sqlite3", "NAME": ":memory:"}},
    TEMPLATES=[{
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [TEMPLATES_DIR],
        "APP_DIRS": False,
        "OPTIONS": {"string_if_invalid": "", "context_processors": []},
    }],
)
django.setup()

# --- Load the legacy page data verbatim from original/mainweb/models.py --------
data_ns = {"__name__": "mainweb_models"}
with open(os.path.join(ORIGINAL, "mainweb", "models.py"), "rb") as f:
    exec(compile(f.read().decode("utf-8"), "models.py", "exec"), data_ns)

# sitemap.py (imported by views.py in production) mutates applist, adding each
# app's `kw`/`mdesc` (used by base.html's <head> meta). Apply the same mutations
# so the reference matches production. Strip its `from mainweb.models import *`
# line and run the rest against the namespace that already holds applist.
with open(os.path.join(ORIGINAL, "mainweb", "sitemap.py"), "rb") as f:
    sitemap_src = "\n".join(
        ln for ln in f.read().decode("utf-8").splitlines()
        if "from mainweb.models import" not in ln
    )
exec(compile(sitemap_src, "sitemap.py", "exec"), data_ns)
urlset = data_ns["urlset"]

applist = data_ns["applist"]
indexApps = data_ns["indexApps"]
indexAppsMobile = data_ns["indexAppsMobile"]
ukeApps = data_ns["ukeApps"]
appsMenu = data_ns["appsMenu"]
PressCovers = data_ns["PressCovers"]
PressItems = data_ns["PressItems"]

# Mobile (iPhone) device + request context — the home view serves home-mobile.html
# to iPhone UAs at /. me carries the 3 hardcoded home reviews.
DEVICE_IPHONE = {"iphone": "iphone8", "classes": "iphone8"}
REQUEST_MOBILE = {"user_agent": {"is_mobile": True, "is_tablet": False}}
HOME_ME = {"reviews": [
    "Really great app - everything you need as a bass player! Useful, inspiring and handy!",
    "The first tuner that I have found in the App Store that can tune my bass guitar!!!!",
    "Everything you will need to get inspired to practice playing and writing music. Tons of scales, chords, and chord progressions. I really like the interactive fretboard, it has opened my eyes to new melodies. I get stuck from time to time relying on finger patterns instead of using my ears, but I am thinking and playing in a whole new creative way thanks to this app. I would recommend this to beginners, as well as experienced shredders alike.",
]}

from django.template.loader import render_to_string

DEVICE = {"baseline": "baseline", "classes": "baseline"}
BASE = {"products": appsMenu, "device": DEVICE}


def lt(aid):
    """loadtemplate context: me + base."""
    return dict(BASE, me=applist[aid])


def general():
    """loadtemplateGeneral default context."""
    return dict(BASE, apps=list(applist.values()))


def press_ctx():
    return dict(BASE, apps=applist, covers=PressCovers, kits=PressItems)


def drh(nav, subnav):
    return dict(BASE, nav=nav, subnav=subnav)


# (output-relative-path, template, context). Mirrors urls.py for the desktop site.
PAGES = [
    ("index.html", "home2.html", dict(BASE, appList=indexApps, ukeApps=ukeApps)),
    # Mobile home (iPhone variant served at / by UA).
    ("m/index.html", "home-mobile.html",
     dict(BASE, appList=indexAppsMobile, ukeApps=ukeApps, me=HOME_ME,
          device=DEVICE_IPHONE, request=REQUEST_MOBILE)),
    # App landing pages (loadtemplate, me=applist[aid])
    ("pro-metronome/index.html", "pro-metronome2.html", lt("pm")),
    ("pro-metronome/edu/index.html", "pro-metronome-for-education.html", lt("pme")),
    ("instuner/index.html", "instuner.html", lt("instuner")),
    ("guitar-master/index.html", "guitar-master.html", lt("gm")),
    ("bass-toolkit/index.html", "bass-toolkit.html", lt("bt")),
    ("pro-tuner/index.html", "pro-tuner.html", lt("pt")),
    ("string-tuner/index.html", "string-tuner.html", lt("st")),
    ("drum-loops/index.html", "drumloops.html", lt("dl")),
    ("chordtunes/index.html", "chordtunes.html", lt("chordtunes")),
    ("daw-remote/index.html", "daw-remote.html", lt("daw")),
    ("daw-remote-hd/index.html", "daw-remote-hd.html", lt("dawhd")),
    ("ukulele-toolkit/index.html", "ukulele-toolkit.html", lt("ut")),
    ("iuke/index.html", "iuke2.html", lt("iuke")),
    ("uke101/index.html", "uke101.html", lt("uke101")),
    ("ukechords/index.html", "ukechords.html", lt("ukechords")),
    ("ukehero/index.html", "ukehero.html", lt("ukehero")),
    ("uketube/index.html", "uketube.html", lt("uketube")),
    ("iuke/privacy-policy/index.html", "iuke-privacy-policy.html", lt("iuke")),
    ("iuke/terms/index.html", "iuke-terms.html", lt("iuke")),
    # DAW Remote HD subpages (custom views: nav/subnav)
    ("daw-remote-hd/docs/index.html", "drh-docs.html", drh("drh", "drh-docs")),
    ("daw-remote-hd/videos/index.html", "drh-videos.html", drh("drh", "drh-videos")),
    ("daw-remote-hd/faq/index.html", "drh-faq.html", drh("drh", "drh-faq")),
    ("daw-remote-hd/bonjour/index.html", "drh-bonjour.html", drh("drh", "drh-faq")),
    ("daw-remote-hd/rtpmidi/index.html", "drh-rtpmidi.html", drh("drh", "drh-faq")),
    ("drum-tuner/index.html", "drum-tuner.html", drh("drh", "drh")),
    # General pages
    ("jobs/index.html", "hiring.html", general()),
    ("about/index.html", "press.html", press_ctx()),
    ("imprint/index.html", "imprint.html", general()),
    ("smtm/index.html", "showmethemoney.html", dict(BASE, appitems=list(applist.values()))),
    ("chord-cloud/agreement/index.html", "chord-cloud-agreement.html", general()),
    # Error page
    ("404.html", "404.html", general()),
    # SEO (non-HTML; emitted for parity, copied into public/)
    ("robots.txt", "robots.txt", general()),
    ("sitemap.xml", "sitemap.xml", dict(BASE, urlset=urlset)),
]


DEVICE_IPAD = {"ipad": "ipad", "classes": "ipad"}
REQUEST_TABLET = {"user_agent": {"is_mobile": False, "is_tablet": True}}

# Device-variant references: same template at iPad / iPhone device context (loads the
# device CSS the original served by UA). Output under verify/reference-device/.
DEVICE_PAGES = [
    ("ipad__pro-metronome", "pro-metronome2.html", dict(lt("pm"), device=DEVICE_IPAD, request=REQUEST_TABLET)),
    ("iphone__pro-metronome", "pro-metronome2.html", dict(lt("pm"), device=DEVICE_IPHONE, request=REQUEST_MOBILE)),
    ("ipad__instuner", "instuner.html", dict(lt("instuner"), device=DEVICE_IPAD, request=REQUEST_TABLET)),
    ("iphone__instuner", "instuner.html", dict(lt("instuner"), device=DEVICE_IPHONE, request=REQUEST_MOBILE)),
    ("ipad__guitar-master", "guitar-master.html", dict(lt("gm"), device=DEVICE_IPAD, request=REQUEST_TABLET)),
    ("ipad__home", "home2.html", dict(BASE, appList=indexApps, ukeApps=ukeApps, device=DEVICE_IPAD, request=REQUEST_TABLET)),
]


def main():
    ok, fail = 0, 0
    OUT_DEV = os.path.join(ROOT, "verify", "reference-device")
    for label, template, ctx in DEVICE_PAGES:
        try:
            html = render_to_string(template, ctx)
        except Exception as e:
            print("FAIL device %-22s %s" % (label, type(e).__name__ + ': ' + str(e)[:80])); fail += 1; continue
        dest = os.path.join(OUT_DEV, label, "index.html")
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "w", encoding="utf-8") as fh:
            fh.write(html)
        ok += 1
    for rel, template, ctx in PAGES:
        try:
            html = render_to_string(template, ctx)
        except Exception as e:
            print("FAIL %-34s %s: %s" % (rel, template, type(e).__name__ + ': ' + str(e)[:90]))
            fail += 1
            continue
        dest = os.path.join(OUT, rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "w", encoding="utf-8") as fh:
            fh.write(html)
        ok += 1
    print("rendered %d ok, %d failed" % (ok, fail))


if __name__ == "__main__":
    main()
