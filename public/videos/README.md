# Dossier Vidéos

Placez vos vidéos de présentation de projets dans ce dossier.

## Comment ajouter une vidéo à un projet

1. Copiez votre fichier vidéo (format MP4 recommandé) dans ce dossier
   Exemple: `workflow-timing.mp4`

2. Dans `src/App.jsx`, mettez à jour le projet correspondant :

```javascript
{
  id: 1,
  title: 'Workflow Timing',
  // ... autres propriétés
  videoUrl: '/videos/workflow-timing.mp4',  // Ajoutez cette ligne
  videoPoster: '/videos/workflow-timing-poster.jpg',  // Optionnel : image de couverture
  // ...
}
```

## Formats recommandés

- **Vidéo** : MP4 (H.264)
- **Résolution** : 1920x1080 (Full HD) ou 1280x720 (HD)
- **Taille** : Essayez de garder les fichiers sous 50MB pour un chargement rapide

## Création d'une image poster (optionnel)

Vous pouvez créer une image qui s'affiche avant le lancement de la vidéo.
Placez-la également dans ce dossier et référencez-la dans `videoPoster`.
