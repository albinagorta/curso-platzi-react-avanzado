"# curso-platzi-react-avanzado"


echo "# curso-platzi-react-avanzado" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/albinagorta/curso-platzi-react-avanzado.git
git push -u origin main



Paso 1: Vamos a clonar el repositorio desde github.com/midudev/curso-platzi-react-avanzado usando git clone URL_DEL_REPO en nuestra consola.
Paso 2: Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con: npm i webpack wepack-cli --save-dev.
Paso 3: Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un console.log('Empezamos el curso!').
Paso 4: Crearemos en el root de nuestro proyecto un archivo webpack.config.js el cual tendrá toda la configuración de webpack
Paso 5: Instalaremos html-webpack-plugin con: npm i html-webpack-plugin --save-dev.
Paso 6: Instalaremos webpack-dev-server con: npm i webpack-dev-server --save-dev.
Paso 7: Añadiremos un nuevo script llamado dev en nuestro package.json: "dev": "webpack serve".
Paso 8: En esta clase vamos a configurar React instalando las dependencias "npm i react react-dom" y Babel para poder transpilar código jsx a JavaScript Vanilla con: "npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev"
paso 9:Vamos a instalar StandardJS como dependencia de desarrollo con: npm i standard --save-dev. StandardJS nos va a servir de Linter para una mejor escritura de JavaScript/React.
Agregaremos un nuevo script en nuestro package.json: ""lint"": ""standard"".
Ahora vamos a ignorar aquellos archivos que no queremos que el Linter arregle, añadiremos en nuestro package.json lo siguiente:














