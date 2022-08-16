# Challenge SBS -

## Consigna :

> Un cliente quiere una web para mostrarle a su público una lista de precios. La misma debe estar formada por un contenedor flexible de no menos de 2 x 3 con cards que muestre una imagen, el ID, un Título, precio y una breve descripción, con un botón que levante un modal mostrando toda la información.
> A esta web la denominamos WEB A, y a modo de ejemplo debe contener un side menu colapsable.-
>
> Por cuestiones que se desconocen, y el cliente es inflexible, quiere tener en otra web, de ahora en adelante se llama WEB B, el ABM de productos, donde muestra una lista de precios de productos en una grilla (son los mismos que se muestran en la card de la WEB A), con las típicas acciones en la última columna de Editar / Borrar.
> Aquí también se dan de alta los productos, vale la aclaración.
>
> El objetivo es que la WEB-A se actualice automáticamente cuando hay un cambio en la tabla de la DB - sin que el usuario deba refrescar manualmente desde el front end en la WEB A.
>
> Alta/Baja/Modificación de los productos, sólo puede realizarse desde la WEB-B.

## Tecnologías utilizadas:

- Type Script.
- React
- React Toolkit
- GraphQL Client
- Node Js
- MongoDB
- GraphQL Server
- Socket.io

## BoilerPlate:

El boilerplate cuenta con tres carpetas: `api` , `client_A` y `client_B`. En estas carpetas estará el código del back-end y el front-end respectivamente.

El contenido de `client` fue creado usando: Create React App --tem.

##### Objetivos de la App:

Usuario:

- Listar productos
- Buscar productos

Administrador:

- Crear nuevos productos
- Editar productos (descripcion, nombre, etc)
- Borrar productos

## Intrucciones para descargar/correr el proyecto:

git clone : https://github.com/Elevattd/Challenge_SBS

- Dentro de la consola, ir a client*A/ y hacer npm install -> npm start \_Previamente crear variable de entorno para conectar con GraphQl*
- Dentro de la consola, ir a Client*B y hacer npm install -> npm start \_Previamente crear variable de entorno para conectar con GraphQl*
- Dentro de la consola, ir a api / y hacer npm install -> npm run dev

## Deploy:

- Cliente A : https://challenge-sbs-a.vercel.app/
- Cliente B : https://challenge-sbs-b.vercel.app/

### Contacto:

-marianoo.14.md@gmail.com

- https://www.linkedin.com/in/mariano-dunand/
