#!/bin/bash
# ============================================
# TWEADUP - INSTALLATION AUTOMATIQUE
# ============================================

echo "============================================"
echo "  TWEADUP - INSTALLATION AUTOMATIQUE"
echo "============================================"
echo ""

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "[ERREUR] Node.js n'est pas installé !"
    echo "Téléchargez-le sur : https://nodejs.org"
    exit 1
fi

echo "[1/4] Installation des dépendances..."
npm install
if [ $? -ne 0 ]; then
    echo "[ERREUR] npm install a échoué"
    exit 1
fi

echo ""
echo "[2/4] Démarrage du serveur..."
echo "Le serveur va démarrer et créer automatiquement les tables."
echo ""
read -p "Appuyez sur Entrée pour démarrer..."

# Lancer le serveur
npm start
