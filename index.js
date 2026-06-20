export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Redirigir HTTP a HTTPS con 301
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    
    // Servir tus archivos estáticos (HTML, CSS, JS)
    return env.ASSETS.fetch(request);
  }
};
