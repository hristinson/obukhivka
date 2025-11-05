
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
    'index.csr.html': {size: 4247, hash: 'd3ebf1f21b9e3aad34c794e11acdc487d64f06b3e8a16ec2cdd4ad695fb98eb5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '5022b35d96fe033562815fa35a30983d2b1055f0cd9a32c0dc5fff913c388a18', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24601, hash: '426bc985935c18aaea8cfef05ae2e0d851504a59b310dd76589a435d92288dcb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ATVF5II6.css': {size: 3593, hash: 'ycmJyKfPeiA', text: () => import('./assets-chunks/styles-ATVF5II6_css.mjs').then(m => m.default)}
  },
};
