- [Demo-Vercel](https://react-buscador-peliculas-56msxzfny-prgm-code.vercel.app/).

Buscador de Películas con OmdbApi
Este proyecto es una aplicación web diseñada para buscar películas utilizando la API de OmdbApi. Se enfoca en proporcionar una experiencia de usuario fluida y eficiente, minimizando el sobre renderizado y optimizando las búsquedas a través de técnicas avanzadas de React.

Características Principales
Búsqueda de Películas: Permite a los usuarios buscar películas por título utilizando la API de OmdbApi.
Auto Search: Implementa una funcionalidad de búsqueda automática que inicia la búsqueda a medida que el usuario escribe, mejorando la interactividad.
Debounce: Utiliza la técnica de debounce para limitar las solicitudes de búsqueda y mejorar el rendimiento, evitando llamadas innecesarias a la API.
Ordenamiento de Resultados: Los usuarios pueden ordenar las películas encontradas según diferentes criterios, como año de lanzamiento o título.
Optimización de Renderizado: A través de useMemo y useCallback, se minimiza el sobre renderizado, asegurando que solo los componentes necesarios se actualicen durante la interacción del usuario.
Manejo de Referencias: Utiliza useRef para manejar referencias a elementos del DOM y valores que no provocan re-render al actualizarse.
Tecnologías y Herramientas Utilizadas
React: Para la construcción de la interfaz de usuario y la gestión del estado.
OmdbApi: Como fuente de datos para las búsquedas de películas.
Hooks Personalizados: Para encapsular la lógica de negocios y mejorar la reusabilidad del código.
Cómo Empezar
Para ejecutar este proyecto localmente, sigue estos pasos:

Clona el repositorio:

git clone [https://github.com/Prgm-code/react-buscador-peliculas.git](https://github.com/Prgm-code/react-buscador-peliculas.git)
Instala las dependencias:
Copy code
npm install

Configuración de la Clave API de OmdbApi
Para que la aplicación pueda realizar búsquedas de películas utilizando la API de OmdbApi, es necesario configurar una clave API válida. Sigue estos pasos para configurar tu clave API:

Obtener la Clave API:

Visita http://www.omdbapi.com/apikey.aspx para solicitar una clave API de OmdbApi.
Completa el formulario de registro y selecciona el nivel de acceso adecuado para tus necesidades.
Recibirás tu clave API por correo electrónico una vez que se procese tu solicitud.
Configurar la Clave API en tu Proyecto:

En la raíz de tu proyecto, crea un archivo denominado .env.
Agrega la siguiente línea al archivo .env, reemplazando TU_CLAVE_API con la clave API que recibiste:

Copy 
VITE_API_KEY_OMDBAPI=TU_CLAVE_API

Este archivo .env será leído por tu aplicación para utilizar la clave API en las solicitudes a la API de OmdbApi.
Inicia el servidor de desarrollo:
sql
Copy code
npm start
Visita http://localhost:3000 para ver la aplicación en acción.

Contribuciones
Las contribuciones son bienvenidas. Si tienes una sugerencia para mejorar esta aplicación, no dudes en abrir un issue o un pull request.

