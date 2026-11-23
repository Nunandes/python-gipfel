# Python Gipfel 🏔️

Python lernen als Spiel: 30 Aufgaben in 10 Levels – vom Basislager (435 m) bis zum Gipfel (2128 m).
Der Code läuft direkt im Browser (echtes Python via [Pyodide](https://pyodide.org)), ohne Installation.

## Spielen
**https://nunandes.github.io/python-gipfel/**

Auf dem iPhone in Safari öffnen → Teilen → «Zum Home-Bildschirm». Danach startet sie wie eine App und funktioniert nach dem ersten Laden auch offline.

## Inhalte
| Level | Thema |
|---|---|
| 1 | print, Variablen, Rechnen |
| 2 | Strings, f-Strings, Slicing |
| 3 | if / elif / else |
| 4 | Schleifen |
| 5 | Listen |
| 6 | Funktionen |
| 7 | Dictionaries |
| 8 | Comprehensions |
| 9 | Klassen & Vererbung |
| 10 | Rekursion, Generatoren, Dekoratoren |

## Punkte
- Aufgabe: 10 × Level, Quiz: 5 × Level
- Tipp: −30 %, jeder Fehlversuch: −10 % (max. −50 %), Lösung anzeigen: 0 Punkte
- Ränge: Neuling → Tüftler → Coder → Pythonista → Profi → Gipfelstürmer

Der Fortschritt wird lokal im Browser gespeichert (localStorage).

## Neue Aufgaben hinzufügen
Alle Aufgaben stehen in `index.html` im Array `LEVELS`. Eine Code-Aufgabe braucht `title`, `text`, `test` (Python-asserts; `_out` = Ausgabe, `_code` = dein Code), `hint` und `sol`; optional `setup` und `start`.
Nach Änderungen in `sw.js` die `VERSION` hochzählen, damit die App auf dem iPhone aktualisiert.
