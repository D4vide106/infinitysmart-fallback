# InfinitySmart Network — Fallback Gateway

Pagina di emergenza ultra-minimale ed elegante per **InfinitySmart Network**.

## ?? Pubblicazione su GitHub Pages

1. Inizializza o crea la nuova repo su GitHub:
   `ash
   cd " f:\Computer - Davide\ContentCreator\Progetti\Assets Projects\MC\Infinity Smart\Plugins\InfinitySmart-Plugins\InfinitySmartPlugins\WebSite\infinitysmart-fallback\
 git init
 git add .
 git commit -m \Initial commit: ultra-minimal fallback page\
 git branch -M main
 git remote add origin https://github.com/d4vide106/infinitysmart-fallback.git
 git push -u origin main
 `
2. Vai su **Settings** -> **Pages** nel tuo repository GitHub:
 - **Source**: Deploy from a branch -> main / oot -> **Save**
 - **Custom domain**: down.infinitysmart.eu (già presente nel file CNAME) -> **Save**
 - Spunta **Enforce HTTPS**

## ?? Configurazione DNS Cloudflare

- **Tipo**: CNAME
- **Nome**: down
- **Target**: d4vide106.github.io
- **Proxy status**: DNS Only (grigio) inizialmente, poi puoi metterlo Arancione se vuoi.

## ? Failover Automatico (Opzionale)

Se vuoi che chi visita infinitysmart.eu veda questa pagina **automaticamente** quando il server web principale è offline (senza cambiare link):
- Incolla il codice di cloudflare-worker.js in un Cloudflare Worker gratuito.
- Aggiungi la rotta: *infinitysmart.eu/*.
