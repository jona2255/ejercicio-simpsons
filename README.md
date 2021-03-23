# App personajes de Los Simpsons

Aquí tienes una app React sólo con una maqueta (con Bootstrap ya cargado). El listado de personajes que ves es falso, tendrás que programar la app para que el usuario pueda ir creando personajes desde el formulario y que vayan apareciendo en el listado de abajo. El mensaje "Hay un total de 3 personajes" tiene que reflejar el número real de personajes que hay.

Crea las variables de estado que creas necesarias, teniendo en cuenta que tanto los personajes como la función para añadir un personaje tienen que estar en un Context.

La lista de edades es fija, es la que ves en el HTML del select y puedes dejarla así.

## Fase 1: sin imagen

Tienes que dividir la interfaz en componentes. Además de App, tiene que haber:
- un componente para el formulario
- un componente para el total de personajes
- un componente para el listado de personajes
- un componente para <ins>cada</ins> personaje

Cuando el usuario envíe el formulario:
- Primero se debe comprobar que no exista ya en el listado un personaje con el mismo nombre y apellido. Si existe, no ocurrirá nada.
- Si no existe, se debe añadir el nuevo personaje a la lista de personajes.

## Fase 2: con GIF
Cada personaje debe tener un GIF asociado. Cuando el usuario envíe el formulario de nuevo personaje, la app se conectará a la API de [Giphy](https://api.giphy.com/) para buscar un GIF aleatorio del personaje. Si la API no devuelve ninguna imagen, el nuevo personaje llevará la imagen genérica (img/nubes.jpg). Si la API devuelve una imagen, el nuevo personaje llevará dicha imagen.

El endpoint para pedir los datos es `https://api.giphy.com/v1/gifs/random?api_key=TUAPIKEY&tag=NOMBREYAPELLIDOSDELPERSONAJE`. Recuerda que el nombre y apellidos del personaje se lo tienes que enviar codificado con `encodeURI()`.
En la respuesta de la API verás una propiedad `images`, dentro de ésta una propiedad `original`, y dentro de ésta una propiedad `url`, que es donde está la imagen que debes usar.
