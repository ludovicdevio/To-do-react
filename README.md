# 📝 Todo React

Une application de gestion de tâches moderne construite avec React, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités

- 📋 Ajouter, modifier et supprimer des tâches
- 🎯 Système de priorités (Urgente, Moyenne, Basse)
- 🔍 Filtrage des tâches par priorité
- ✅ Sélection multiple de tâches
- 💾 Sauvegarde locale des données (localStorage)
- 🎨 Interface utilisateur moderne avec DaisyUI
- 📱 Design responsive

## 🚀 Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Typage statique pour JavaScript
- **Vite** - Outil de build et serveur de développement
- **Tailwind CSS** - Framework CSS utilitaire
- **DaisyUI** - Composants UI pour Tailwind CSS
- **Lucide React** - Icônes modernes
- **ESLint** - Linter pour maintenir la qualité du code
- **Husky** - Git hooks pour la qualité du code

## 📦 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/ludovicdevio/To-do-react.git
cd todo-react
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur et accédez à `http://localhost:5173`

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie la qualité du code avec ESLint

## 📂 Structure du projet

```
src/
├── App.tsx          # Composant principal de l'application
├── TodoItem.tsx     # Composant pour chaque tâche
├── main.tsx         # Point d'entrée de l'application
├── index.css        # Styles globaux
└── vite-env.d.ts    # Types pour Vite
```

## 🎯 Utilisation

1. **Ajouter une tâche** : Saisissez votre tâche dans le champ de texte, sélectionnez une priorité et cliquez sur "Ajouter"
2. **Filtrer les tâches** : Utilisez les boutons de filtre pour afficher les tâches par priorité
3. **Sélectionner des tâches** : Cochez les cases pour sélectionner une ou plusieurs tâches
4. **Supprimer des tâches** : Cliquez sur l'icône de corbeille pour supprimer une tâche

## 🔧 Configuration

Le projet utilise plusieurs fichiers de configuration :

- `vite.config.ts` - Configuration Vite
- `tailwind.config.js` - Configuration Tailwind CSS
- `eslint.config.js` - Configuration ESLint
- `tsconfig.json` - Configuration TypeScript

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Ludovic** - [ludovicdevio](https://github.com/ludovicdevio)

---

⭐ N'hésitez pas à mettre une étoile si ce projet vous a plu !