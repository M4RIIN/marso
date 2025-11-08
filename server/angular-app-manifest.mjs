
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 830, hash: 'e766433da00efd5095f270dd20806a9d41e726578e6e9f68c4a07cc0ca1df00b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: 'b29034974590227dec1d54405d10cdd602a1c3d46ce8619edaa6edb25ead8a2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11873, hash: '7338d2a96909f0e213bb41f67614bb3129b140b39d0c86608e2a621ede97dd6e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HGW5MDEM.css': {size: 196, hash: '6grc0pyBJ8E', text: () => import('./assets-chunks/styles-HGW5MDEM_css.mjs').then(m => m.default)}
  },
};
