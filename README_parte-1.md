# 📘 Clase 1 - Módulo 2: Formularios con React Hook Form y Validaciones Avanzadas

En esta clase comenzamos con el nuevo módulo enfocado en **formularios y validaciones en React**. Exploramos cómo usar la poderosa librería `react-hook-form` junto con `yup` para realizar validaciones robustas y estructuradas. También integramos estilos con Tailwind CSS.

## 🧠 Temas abordados

- ✅ Introducción a `react-hook-form`
- ✅ Validación de formularios con `yup` y `@hookform/resolvers`
- ✅ Manejo de errores y mensajes de validación personalizados
- ✅ Integración con Tailwind CSS para un diseño limpio y moderno

## 🚀 Objetivo de esta clase

Construir un formulario moderno de registro de usuarios con validación avanzada usando `react-hook-form` y `yup`, estilizado con Tailwind CSS.

Al finalizar esta clase, deberías ser capaz de:

- Crear formularios eficientes con `react-hook-form`
- Validar datos de entrada utilizando esquemas definidos con `yup`
- Mostrar mensajes de error personalizados
- Usar clases de Tailwind CSS para maquetar formularios responsivos

## 👨‍💻 Proyecto

Desarrollamos un **formulario de registro de usuarios**, en el cual:

- Se capturan nombre, correo, contraseña y confirmación
- Se aplican reglas de validación a cada campo
- Los errores se muestran con claridad al usuario
- Se estiliza completamente con Tailwind CSS

## 📦 Instalación de dependencias

### Instalar React Hook Form y Yup

```bash
npm install react-hook-form @hookform/resolvers yup
```

### Instalar Tailwind CSS

```bash
npm install -D tailwindcss@3 autoprefixer
npm tailwindcss init
```

### Configuración necesaria

Asegúrate de tener el archivo `postcss.config.js` con el siguiente contenido:

```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Y configura tu `tailwind.config.js` así:

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

En tu archivo `index.css` o `main.css`, importa las clases base de Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 💻 Autor

- Luisa Galaz - [@MLuisaGP](https://github.com/MLuisaGP)

## 📬 Contacto

¿Tienes preguntas o sugerencias?

- Email: luisagalazmp@gmail.com  
- LinkedIn: [linkedin.com/in/mc-maria-luisa-galaz-palma-9ab30a19a](https://linkedin.com/in/mc-maria-luisa-galaz-palma-9ab30a19a)
