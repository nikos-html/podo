# 🚂 RAILWAY DEPLOYMENT - PodoNova

## ✅ Co zostało naprawione:

1. **Usunięto Dockerfile** (Railway preferuje Nixpacks dla Node.js)
2. **Zaktualizowano nixpacks.toml** - poprawiona konfiguracja build
3. **Zaktualizowano railway.toml** - uproszczona konfiguracja

## 📋 Pliki do push na GitHub:

```bash
# Te pliki MUSZĄ być na GitHubie:
railway.toml
nixpacks.toml
package.json (root)
start.sh
.dockerignore
```

## 🚀 Instrukcje krok po kroku:

### 1. Push na GitHub

```bash
# Status
git status

# Dodaj pliki
git add railway.toml nixpacks.toml package.json start.sh .dockerignore

# Usuń Dockerfile jeśli był
git rm Dockerfile || true

# Commit
git commit -m "Add Railway Nixpacks deployment config"

# Push
git push origin main
```

### 2. Deploy na Railway

1. **Otwórz Railway**: https://railway.app/
2. **Zaloguj się** przez GitHub
3. **Nowy projekt**: 
   - Kliknij "New Project"
   - Wybierz "Deploy from GitHub repo"
   - Znajdź i wybierz swoje repo PodoNova
   
4. **Railway automatycznie**:
   ✅ Wykryje `nixpacks.toml`
   ✅ Zainstaluje Node.js 18 + Yarn
   ✅ Uruchomi `cd frontend && yarn install`
   ✅ Zbuduje `cd frontend && yarn build`
   ✅ Uruchomi `serve -s frontend/build`

5. **Dostaniesz URL**: `https://podonova-production-xxxx.up.railway.app`

## 🔧 Troubleshooting

### Jeśli build nadal failuje:

#### Option A: Ręczne ustawienia w Railway Dashboard

1. Kliknij na projekt → **Settings**
2. Idź do sekcji **"Build"**
3. Ustaw:
   - **Build Command**: `cd frontend && yarn install && yarn build`
   - **Start Command**: `npx serve -s frontend/build -l $PORT`
4. **Redeploy**

#### Option B: Ustaw zmienne środowiskowe

W Settings → **Variables**, dodaj:
```
NODE_VERSION=18
```

#### Option C: Debug logs

W Railway Dashboard → **Deployments** → kliknij na ostatni build
Sprawdź logi i wyślij mi błąd jeśli coś nie działa

## ✅ Weryfikacja po deployment

```bash
# Test URL
curl https://twoja-aplikacja.up.railway.app

# Powinno zwrócić HTML strony PodoNova
```

## 📝 Uwagi

- Railway **automatycznie wykrywa Nixpacks** jeśli jest `nixpacks.toml`
- **Port jest ustawiany automatycznie** przez Railway ($PORT)
- **Build trwa ~2-3 minuty** przy pierwszym deployment
- **Auto-deploy** włącza się automatycznie dla głównej gałęzi

## 🎉 Gotowe!

Po push na GitHub i wybraniu repo w Railway, wszystko powinno zadziałać automatycznie!
