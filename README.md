# Application de Localisation par Adresse IP

Cette application ReactJS permet d'obtenir la localisation d'un utilisateur à partir de son adresse IP en utilisant l'API ipbase-js.

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Usage](#usage)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo

2. Installez les dépendances :

npm install
# ou
yarn install
```

## Usage

1. Créez un fichier .env à la racine de votre projet et ajoutez votre clé API ipbase-js :

```bash
REACT_APP_IPBASE_API_KEY=your_api_key_here
```

2. Démarrez l'application :

```bash
npm start
# ou
yarn start
```

3. Ouvrez votre navigateur et allez à l'adresse http://localhost:3000 pour voir l'application en action.

## Fonctionnalités

* Récupération de la localisation basée sur l'adresse IP
* Affichage des informations de localisation (pays, région, ville, etc.)

## Technologies Utilisées

* [React](https://www.reactjs.org)
* [ipbase-js](https://www.ipbase.com)

