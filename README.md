ANIMATE ECOMMERCE APP

La aplicacion que se muestra en el presente repositorio consiste en un sitio de ventas confeccionado a modo de ejemplo para el curso llevado a cabo por CODER HOUSE durante el primer trimestre del 2021

Components

En la carpeta components podemos encontrar todos los componentes utilizados en el proyecto. Cada uno de ellos es clave para el correcto funcionamiento de la aplicacion y los mismos se encuentran impresos de las Screens

-Cart Widget : Esta constituido por un icono de carrito importado desde MaterialUI
-Footer: Como su nombre lo indica esta constituido por el footer de la aplicacion
-Item: En este componente se dibuja al item correspondiente a la card dentro de itemList
-ItemCount: Es un componente fundamental, se encarga de indicar las cantidades el item que se compraran y es aqui donde dicho item se guarda en el contexto para poder ser usado globalmente
-ItemDetail: Vista personalizada del item que se selecciono desde ItemList
-ItemList: En este componente se mapean todos los items contenidos en nuestra base de datos
-Navbar: Este componente guarda la configuracion de nuestra barra de navegacion

Containers

En esta carpeta se guardan las screens de nuestro proyecto. Tenemos 3:

ItemListContainers: Vista del home de nuestra aplicacion
ItemDetailContainer: Vista detallada del producto seleccionado
CartContainer: Vista de nuestro carrito de compras, donde se puede tomar la decision de llevar a cabo la compra

Context

En esta carpeta se encuentran los archivos que se encargan de configurar el contexto de nuestra aplicacion. Lo que permite poder utilizar datos y funciones de forma global

Firebase

Guarda la configuracion con Firebase. Firebase nos permite contar con una base de datos dinamica, la cual podemos solicitar y modificar por medio de promesas. Lo anterior resulta sumamente util ya que posibila que la pagina se vuelva mas dinamica y se actulice a tiempo real. Asimismo, el sitio se encuentra en linea gracias a su hosting

MaterialUI

Durante el proyecto se hizo uso en multiples ocasiones de materialUI para hacernos de iconos que mejoren la estatica de la misma

API MERCADOPAGO

El proyecto cuenta con el funcionamiento de la api de mercadopago. Es gracias a la misma que llegado al ultimo paso del proceso de compra, por medio de una peticion del tipo POST, nos devuelve un enlace que nos pertite dirigirnos a su pasarella de pago y concretar la orden creada.
