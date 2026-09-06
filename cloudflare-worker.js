/**
 * Cloudflare Worker: Failover Gateway for InfinitySmart
 * 
 * Se il server web principale risponde con errore (502, 503, 504, 521, 522, 523)
 * o timeout, questo Worker intercetta la richiesta e mostra la pagina di emergenza minimale
 * caricata su GitHub Pages (down.infinitysmart.eu).
 */
export default {
  async fetch(request, env, ctx) {
    try {
      const response = await fetch(request);

      // Se il server del sito risponde con codice di errore server
      if ([502, 503, 504, 521, 522, 523].includes(response.status)) {
        return await fetch( https://down.infinitysmart.eu/);
      }

      return response;
    } catch (err) {
      // In caso di mancata risposta o connessione rifiutata dal server
      return await fetch(https://down.infinitysmart.eu/);
    }
  }
};
