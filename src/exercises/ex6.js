// ex6.js

// Fonction pour trouver la valeur maximale dans un tableau de nombres
export const findMax = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null;
    }
    return Math.max(...arr);
  };


// Fonction pour supprimer les valeurs dupliquées d'un tableau
export const removeDuplicates = (arr) => {
    if (!Array.isArray(arr)) {
      return null;
    }
    return Array.from(new Set(arr));
  };


// Fonction pour vérifier si un tableau inclut une valeur spécifique
export const includesValue = (arr, value) => {
    if (!Array.isArray(arr)) {
      return false;
    }
    return arr.includes(value);
  };

// Fonction pour trier un tableau de nombres par ordre croissant
export const sortArray = (arr) => {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr.slice().sort((a, b) => a - b);
  };
  
  