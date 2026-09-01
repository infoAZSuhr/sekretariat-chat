# AZS Intern – Team-Chat

Interner Team-Chat der Praxis, realtime über [Ably](https://ably.com/), als
statische Single-Page-App (`index.html`) gehostet über GitHub Pages:

- https://infoazsuhr.github.io/sekretariat-chat/

**Dieses Repo ist aktuell öffentlich, obwohl die App intern ist.** Zugriffsschutz
läuft ausschliesslich über einen manuell eingegebenen Ably-API-Key (wird lokal
im Browser gespeichert, steht nicht im Quellcode) — es gibt keine Benutzer-Logins.

## Funktionen

- Ein gemeinsamer Hauptkanal (`#Sekretariat`) für alle
- Private, isolierte Kanäle **U1** und **U2** zwischen Untersuchungszimmer und
  Sekretariat (Nachrichten aus U1 sind für U2 nicht sichtbar und umgekehrt) —
  Rolle wird einmalig nach dem Verbinden gewählt, per Geräte-`localStorage`
  gemerkt, über "Zimmer wechseln" änderbar
- Auftragsregister (Task-Karten mit Status pending/confirmed/done)
- @-Mentions, Datei-Anhänge, Emoji-Reaktionen, Browser-Benachrichtigungen

## Hosting / Deploy

Kein Build-Schritt — einfach auf `main` pushen, GitHub Pages liefert direkt
aus dem Repo-Root (`index.html`). Voraussetzung: Repo-Settings → Pages →
Source = `main` Branch, Folder = `/ (root)`.

## Wichtig: kein öffentliches Embed mehr

Frühere Versionen dieses Repos hosteten zusätzlich ein Website-Besucher-Chat-
Widget (`embed.js`, per `<script>`-Tag auf augenzentrum-suhr.ch eingebunden,
Firebase/Firestore-Backend). Dieses Widget existiert hier **nicht mehr** —
`index.html` ist seit dem Umbau auf den internen Ably-Chat der interne Team-
Chat, nicht mehr das Besucher-Widget. `embed.js` wurde entfernt, weil es bei
erneuter Einbindung auf der Website ein Iframe mit dem **internen** Chat
(inkl. Login-Bildschirm) öffentlich sichtbar gemacht hätte.

Falls ein Website-Chat für Besucher wieder gebraucht wird, braucht das ein
eigenes, neues Widget/Repo — nicht dieses hier wiederverwenden.
