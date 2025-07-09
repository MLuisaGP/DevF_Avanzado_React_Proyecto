## Instalacion de dependencias
* Instalar React form hook y yup
    ```
    npm install react-hook-form @hookform/resolvers yup
    ```
* Instalar Tailwind CSS
    ```
    npm install -D tailwindcss@3 autoprefixer
    npm tailwindcss init
    ```
    Recordar de agregar la carpeta postcss.config.js
    ```js
    // postcss.config.js
    export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    }
    ```
    Y tener en el tailwind.config.js
    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```
    En el css intex.css agregar las correspondientes importaciones
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
