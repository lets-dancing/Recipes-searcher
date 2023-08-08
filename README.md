# Приложение Recipes searcher 
 
Данное приложение разработано с использованием React и позволяет искать рецепты блюд по заданным ингредиентам. 
 
## Установка и запуск 
 
1. Клонируйте репозиторий на локальную машину. 
2. Установите зависимости с помощью команды  npm install . 
3. Запустите приложение с помощью команды  npm start . 
 
## Описание файлов 
 
### App.js
javascript
import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent'

// Код компонента App

export default App;
Главный компонент приложения. Отвечает за поиск рецептов и отображение результатов. 
 
### MyRecipesComponent.js
javascript
import { useState } from "react";

// Код компонента MyRecipesComponent

export default MyRecipesComponent;
Компонент, отображающий информацию о найденных рецептах. 
 
## Используемые API 
 
Для получения рецептов используется [API Edamam](https://developer.edamam.com/edamam-docs-recipe-api). 
 
![Alt text](light.png)