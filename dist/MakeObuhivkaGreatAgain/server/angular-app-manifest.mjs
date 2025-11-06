
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
    'index.csr.html': {size: 4247, hash: 'f133eba907530cee64b52b00a41130036430f1249ac5333be89f84bb3d46c7f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '6656d9a3c7b51c00861675bdb964fa4b9737042ffe680f56a2125867d6978703', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23870, hash: 'e2827d7ffef42b33dd26e31b8b9fd4b644dc02dbbd3134a4433a48b088e7c1ec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ATVF5II6.css': {size: 3593, hash: 'ycmJyKfPeiA', text: () => import('./assets-chunks/styles-ATVF5II6_css.mjs').then(m => m.default)}
  },
};
