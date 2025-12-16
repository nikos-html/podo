# 🚂 Deploy PodoNova na Railway

## Krok 1: Przygotowanie
Wszystkie pliki konfiguracyjne są już gotowe:
- ✅ `railway.toml` - główna konfiguracja Railway
- ✅ `nixpacks.toml` - konfiguracja buildera
- ✅ `Dockerfile` - alternatywny sposób budowania
- ✅ `package.json` - skrypty build i start
- ✅ `start.sh` - skrypt startowy

## Krok 2: Deployment przez Railway Dashboard

### A. Z GitHuba (Polecane):

1. **Zaloguj się na Railway.app**
   - Idź na https://railway.app/
   - Zaloguj się przez GitHub

2. **Utwórz nowy projekt**
   - Kliknij "New Project"
   - Wybierz "Deploy from GitHub repo"
   - Wybierz swoje repozytorium PodoNova

3. **Railway automatycznie wykryje konfigurację**
   - Użyje `railway.toml` lub `Dockerfile`
   - Zbuduje frontend React
   - Uruchomi serwer serve

4. **Zmienne środowiskowe (opcjonalne)**
   - W Settings → Variables
   - Możesz dodać `PORT` (domyślnie Railway ustawi automatycznie)

5. **Deploy!**
   - Railway automatycznie:
     * Zainstaluje zależności (`yarn install`)
     * Zbuduje aplikację (`yarn build`)
     * Uruchomi serwer (`serve -s build`)
   - Po deployment dostaniesz URL: `https://twoja-aplikacja.up.railway.app`

### B. Jeśli Railway ma problemy (Troubleshooting):

#### Opcja 1: Użyj Dockerfile
1. W Railway Settings → "Build"
2. Włącz "Use Dockerfile"
3. Railway zbuduje obraz Docker i uruchomi

#### Opcja 2: Custom Build Command
W Railway Settings → "Build":
- **Build Command**: `cd frontend && yarn install && yarn build`
- **Start Command**: `npx serve -s frontend/build -l $PORT`

#### Opcja 3: Root-level build
W Railway Settings:
- **Build Command**: `yarn install && yarn build`
- **Start Command**: `yarn start`

## Krok 3: Po deployment

### Sprawdź logi:
```bash
# W Railway Dashboard → Deployments → View Logs
```

### Testuj aplikację:
```bash
curl https://twoja-aplikacja.up.railway.app
```

### Custom Domain (opcjonalnie):
1. Settings → Domains
2. Dodaj swoją domenę
3. Skonfiguruj DNS (CNAME do Railway)

## 🔧 Struktura projektu dla Railway

```
/app/
├── railway.toml          # Główna konfiguracja
├── nixpacks.toml         # Nixpacks build config
├── Dockerfile            # Docker build (backup)
├── package.json          # Root package.json ze skryptami
├── start.sh              # Skrypt startowy
└── frontend/             # Aplikacja React
    ├── package.json      # Frontend dependencies
    ├── src/              # Kod źródłowy
    └── public/           # Pliki statyczne
```

## ⚙️ Jak to działa:

1. **Railway wykrywa `railway.toml`**
2. **Nixpacks buduje projekt:**
   - Instaluje Node.js 18
   - Uruchamia `yarn install` w `frontend/`
   - Buduje aplikację: `yarn build`
3. **Uruchamia serwer:**
   - `serve -s frontend/build`
   - Nasłuchuje na porcie `$PORT` (Railway ustawia automatycznie)
4. **Gotowe!** Aplikacja działa na Railway

## 🚨 Problemy?

### Build fails:
- Sprawdź logi w Railway Dashboard
- Upewnij się, że wszystkie pliki są na GitHubie
- Sprawdź czy `frontend/package.json` istnieje

### App nie startuje:
- Sprawdź czy zmienna `PORT` jest ustawiona
- Zobacz logi Runtime

### 404 Error:
- Upewnij się, że `frontend/build` został utworzony
- Sprawdź Start Command

## 📞 Potrzebujesz pomocy?

Sprawdź logi Railway i prześlij błąd - pomogę rozwiązać problem!
