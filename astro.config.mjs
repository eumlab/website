import { defineConfig } from 'astro/config';

// Static output. trailingSlash:'always' + directory format reproduce the legacy
// Django URLs exactly ( / and /pro-metronome/ ), and absolute /assets/* paths
// keep resolving against public/.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Do not let Astro inject its dev toolbar / scripts into the markup we compare.
  devToolbar: { enabled: false },

  // Legacy URL redirects, ported from the Django urls.py redirector() routes.
  // NOTE: '/index.html' -> '/' is intentionally NOT here: with format:'directory'
  // it collides with the home page's dist/index.html (ENOTDIR at build). It is
  // handled at the edge instead (Caddy: `redir /index.html / permanent`).
  redirects: {
    '/ukulele/': '/ukulele-toolkit/',
    '/guitar-toolkit/': '/guitar-master/',
    '/bonjour/': '/daw-remote-hd/bonjour/',
    '/rtpmidi/': '/daw-remote-hd/rtpmidi/',
    '/eum/string-tuner/': '/string-tuner/',
    '/eum/daw-remote.html': '/daw-remote/',
    '/daw-remote.html': '/daw-remote/',
    '/dawremote/': '/daw-remote/',
    '/eum/dawremote/': '/daw-remote/',
    '/tuner.html': '/pro-tuner/',
    '/metronome.html': '/pro-metronome/',
    '/midi-pad.html': '/',
    '/eum/': '/',
    '/eum/metronome.html': '/pro-metronome/',
    '/eum/midi-pad.html': '/',
    // External support-site redirects (DAW Remote HD network config, clip sensor).
    '/network/': 'http://support.eumlab.com/customer/portal/articles/958423-network-config',
    '/daw-remote-hd/network/': 'http://support.eumlab.com/customer/portal/articles/958423-network-config',
    '/clip-mic/': 'http://support.eumlab.com/customer/portal/articles/930136-about-clip-sensor',
  },
});
