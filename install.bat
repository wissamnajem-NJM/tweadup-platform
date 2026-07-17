@echo off
chcp 65001 >nul
title Tweadup - Installation Automatique
echo ============================================
echo   TWEADUP - INSTALLATION AUTOMATIQUE
echo ============================================
echo.

:: Vérifier Node.js
node -v >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Node.js n'est pas installé !
    echo Téléchargez-le sur : https://nodejs.org
    pause
    exit /b
)

echo [1/4] Installation des dépendances...
call npm install
if errorlevel 1 (
    echo [ERREUR] npm install a échoué
    pause
    exit /b
)

echo.
echo [2/4] Demarrage du serveur...
echo Le serveur va demarrer et creer automatiquement les tables.
echo.
echo Appuyez sur une touche pour demarrer...
pause >nul

:: Lancer le serveur
npm start
