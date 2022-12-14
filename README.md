# Módulo 3:  Ejercicio de evaluación final👩🏻‍💻 

Trabajo realizado por la alumna [María Elena Arocena López](https://github.com/marocena26) durante la evaluación final del Módulo 3: React. 

En este repositorio podreis encontrar los ficheros generados en la realización de la **Evaluación final del Módulo 3 - Promo Radia**. 

> **NOTA:** Enlace directo al poyecto pulsando **[aquí](https://beta.adalab.es/modulo-3-evaluacion-final-marocena26/)**

## Rick & Morty - character finder! 👽🛸 

¡Bienvenido a la página web de **Rick & Morty - character finder**! Si estás interesado en conocer el universo de Rick & Morty estás en el lugar correcto.

En este repositorio os presentamos una página web **sencilla, intuitiva y adaptada a cualquier tipo de dispositivo** (mócil, tablet y PC) para que podáis echarle un vistazo en cualquier momento. Maquetada y desarrollada con HTML, Sass y React JS, en ella encontraréis un listado detallado de algunos de los personajes de **Rick & Morty**.

### 1. Listado de personajes 👾

Lo primero que encontraréis al acceder a nuestra página web será un **listado de personajes** de **Rick & Morty** ordenados alfabéticamente. Nos hemos servido de la siguiente [API](https://rickandmortyapi.com/documentation/#get-all-characters) para poder obtener la información sobre los primeros 20 personajes de la serie. En la tarjeta veremos los siguientes datos sobre cada uno de ellos: 

- **Foto**
- **Nombre**
- **Especie**

![image](https://user-images.githubusercontent.com/113302094/207608674-2cbcddad-6c8a-40ea-a8ef-74d3b1ab3d9f.png)

### 2. Filtrado de personajes 🌈

Ahora que ya tenemos el listado de personajes en pantalla, podremos buscar nuestros favoritos utilizando distintos tipos de filtro:

- **Nombre**: no importa si lo escribes en minúsculas o mayúsculas, la web está programada para entender que ambas son igual de válidas. En cambio, si buscas un personaje que **no existe**, recibirás un mensaje de **error** para avisarte.

![image](https://user-images.githubusercontent.com/113302094/207609108-96e91580-a5a8-402f-a5f6-637dc762a1c3.png)

- **Especie**: con nuestro filtro podrás seleccionar qué personajes quieres que aparezcan por pantalla: si los **Human 👨🏻** o los **Alien 👽**

![image](https://user-images.githubusercontent.com/113302094/207609255-ef84eb59-69ef-478c-af48-f237d1b5bb8f.png)

- **Estado**: selecciona el estado de tus personajes entre todas las opciones de la lista.

![image](https://user-images.githubusercontent.com/113302094/207609423-38daa1c4-5c33-4726-b2ff-c3ed2d95b2e0.png)

Asimismo, la página web cuenta con un **botón de reset** para borrar todos los filtros.

Además, toda la **información** obtenida de los filtros quedará registrada en el **Almacenamiento Local** de tu dispositivo para que puedas volver a tu búsqueda anterior siempre que quieras sin perder la información.

![image](https://user-images.githubusercontent.com/113302094/207610447-f1df6fcf-fbda-4433-b9a0-d0c126feec6a.png)

### 3. Detalle de los personajes 📋

Siempre que quieras saber más acerca de algún personaje en concreto, solo tendrás que hacer **clic en su imagen para acceder a una ficha completa** del mismo.

![image](https://user-images.githubusercontent.com/113302094/207611074-609d80b3-7c14-49fc-831a-a023787b5871.png)

Una de las particularidades de estas tarjetas es que la **URL del detalle de personaje es compartible**, es decir, que si visitamos esa URL directamente en el navegador podremos ver el detalle del personaje. De la misma manera, si el usuario navega a una **URL inexistente**, recibirá otro mensaje de error avisándole de que la dirección **no es correcta**.

![image](https://user-images.githubusercontent.com/113302094/207612499-2fbe436d-8077-477e-92e3-d388380d8004.png)


## Materiales utilizados ⚛️: 

Para llevar a cabo el desarrollo de este ejercicio se han empleado los siguientes materiales:
- Creación de un repositorio desde **GitHub Classroom.**
- Una **plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas: React - Web starter kit**.

### Pasos que se han seguido para arrancar el proyecto🔌:

1. **Creación del repositorio desde GitHub Classroom.**
2. **Copiamos todos los ficheros** del Starter kit en la carpeta raíz del repositorio.
3. Desde la carpeta raíz del repositorio **instalamos las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Pasos a seguir para utilizar este proyecto en vuestro ordenador💾:

> **NOTA:** Este proyecto se ha realizado utilizando React.

#### Pasos a seguir cada vez que se quiere arrancar un proyecto desde cero:

- Clona este repositorio en tu ordenador.
- Ábrelo en tu editor de código.
- Abre una terminal e instala las dependencias locales ejecutando en la terminal de comando. A contionuación os dejo las que he utilizado para arrancar mi proyecto:

```bash
npm install 
npm install node-sass
npm install react-router-dom
npm install prop-types
```

#### Pasos para arrancar el proyecto:

**El proyecto hay que arrancarlo cada vez que nos pongamoss a programar**, para ello ejecutaremos el comando:

```bash
npm start
```

Después de ejecutar `npm start` ya podemos empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente 💫 .


## Feedback✨:

Cualquier aportación será bien recibida, ¡Muchas gracias! 😉.
