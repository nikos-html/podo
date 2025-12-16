# 📋 Zmiany do commit na GitHub dla Railway

## Nowe pliki dodane:

1. **railway.toml** - Główna konfiguracja Railway
2. **nixpacks.toml** - Konfiguracja Nixpacks builder
3. **Dockerfile** - Docker build configuration
4. **package.json** (root) - Skrypty build i start
5. **start.sh** - Skrypt startowy
6. **.dockerignore** - Pliki ignorowane przez Docker
7. **RAILWAY_DEPLOYMENT.md** - Instrukcje deployment

## Komendy Git:

```bash
# Sprawdź status
git status

# Dodaj wszystkie nowe pliki
git add railway.toml nixpacks.toml Dockerfile package.json start.sh .dockerignore RAILWAY_DEPLOYMENT.md

# Commit
git commit -m "Add Railway deployment configuration"

# Push
git push origin main
```

## Po push na GitHub:

1. Idź na https://railway.app
2. Kliknij "New Project"
3. Wybierz "Deploy from GitHub repo"
4. Wybierz swoje repo
5. Railway automatycznie:
   - Wykryje konfigurację
   - Zbuduje frontend
   - Wdroży aplikację
6. Dostaniesz URL typu: `https://podonova.up.railway.app`

## Debugging Railway:

### Jeśli build się nie powiedzie:
- Sprawdź logi w Railway Dashboard → Deployments
- Upewnij się że wszystkie pliki są na GitHubie

### Jeśli potrzebujesz zmienić build:
Railway Settings → "Deployment":
- Build Command: `cd frontend && yarn install && yarn build`
- Start Command: `npx serve -s frontend/build -l $PORT`

## ✅ Gotowe!

Wszystko jest skonfigurowane i przetestowane. Push to na GitHub i deploy na Railway!
