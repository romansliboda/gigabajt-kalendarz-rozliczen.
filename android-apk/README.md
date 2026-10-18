# GB — Kalendarz rozliczeń (Android TEST)

To projekt Android zawierający **niezmienione pliki WEB v2.6** w `app/src/main/assets/`.

## Jak uzyskać APK na GitHub
1. Utwórz **osobne repozytorium**, np. `gigabajt-kalendarz-android` (nie nadpisuj repozytorium WEB ani Gigabajt CMR).
2. Rozpakuj ZIP i wgraj **zawartość folderu** do głównego katalogu repozytorium, wraz z ukrytym katalogiem `.github`.
3. Otwórz kartę **Actions** > **Zbuduj APK Android** > **Run workflow** (lub poczekaj na automatyczny build po push na `main`).
4. Po zakończeniu pobierz artefakt **GB-Kalendarz-Rozliczen-APK-TEST**, rozpakuj i zainstaluj `app-debug.apk` na telefonie.

APK to testowy wariant debug, niepodpisany kluczem produkcyjnym. Android może wymagać zezwolenia na instalację z nieznanych źródeł.

## Codespaces
GitHub: **Code > Codespaces > Create codespace**. Możesz edytować projekt; APK najłatwiej budować w Actions.

## Ważne ograniczenia
- Danych z wersji przeglądarkowej nie przenosi się automatycznie do aplikacji Android (inny magazyn WebView). Zachowaj kopię danych przed zmianą.
- Funkcja drukowania/zapisu PDF oparta na `window.print()` może wymagać osobnej obsługi w Android WebView. Nie została jeszcze przetestowana.
- To projekt testowy; działanie APK na telefonie i pełna zgodność wszystkich funkcji wymagają testów po zbudowaniu.
