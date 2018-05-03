(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,a,r){e.exports=r.p+"assets/img/diagrama-caso-de-uso.804daa7f.svg"},51:function(e,a,r){e.exports=r.p+"assets/img/diagrama-de-clases-uml.33245e7d.svg"},52:function(e,a,r){e.exports=r.p+"assets/img/diagrama-entidad-relacion-der.f2342e0b.jpg"},53:function(e,a,r){e.exports=r.p+"assets/img/logo.4b0b84c1.jpg"},54:function(e,a,r){"use strict";r.r(a);var t=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"proyecto-delivery-plan-111mil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proyecto-delivery-plan-111mil","aria-hidden":"true"}},[e._v("#")]),e._v(" PROYECTO DELIVERY - PLAN 111MIL")]),t("p",[t("img",{attrs:{src:r(53),alt:""}})]),t("h2",{attrs:{id:"introduccion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduccion","aria-hidden":"true"}},[e._v("#")]),e._v(" INTRODUCCIÓN")]),t("p",[e._v("En el siguiente documento se desarrolla las características esenciales de un sistema de información correspondiente al dominio de Caso Práctico Nº2 - Pizzeria en el marco del Plan111.")]),t("p",[e._v("Estas características comprenden la definición de los "),t("a",{attrs:{href:"#objetivos"}},[e._v("objetivos")]),e._v(", "),t("a",{attrs:{href:"#limite"}},[e._v("límites")]),e._v(", "),t("a",{attrs:{href:"#alcances"}},[e._v("alcances del sistema")]),e._v(", los "),t("a",{attrs:{href:"#procesos-que-se-llevan-a-cabo"}},[e._v("procesos que se llevan a cabo")]),e._v(" dentro del mismo, su "),t("a",{attrs:{href:"#arquitectura-de-software"}},[e._v("arquitectura de software")]),e._v(", "),t("a",{attrs:{href:"#tecnologias-aplicadas"}},[e._v("tecnologías aplicadas")]),e._v(" en el desarrollo, definición de la estructuras de la base de datos a través del "),t("a",{attrs:{href:"#diagrama-de-entidad-relacion-der"}},[e._v("diagrama de entidad-relación")]),e._v(", la "),t("a",{attrs:{href:"#diagrama-de-clases-uml"}},[e._v("diagramación del modelo")]),e._v(" del sistema en lenguaje de modelado unificado (UML), "),t("a",{attrs:{href:"#diagrama-casos-de-usos-use-case"}},[e._v("diagrama de casos de uso")]),e._v(" y "),t("a",{attrs:{href:"#"}},[e._v("máquina de estado")]),e._v(".\nPara la obtención de datos necesarios se utilizó el dominio de negocio aportado por el Plan111 como base añadiendo el proceso de Delivery.")]),t("h3",{attrs:{id:"dominio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dominio","aria-hidden":"true"}},[e._v("#")]),e._v(" Dominio")]),t("p",[e._v("A continuación se detalla el enunciado para conocer el dominio con el cual se trabajará.")]),t("p",[e._v("Una "),t("code",[e._v("pizzería")]),e._v(" de la ciudad ofrece a sus "),t("code",[e._v("clientes")]),e._v(" una amplia "),t("code",[e._v("variedad de pizzas")]),e._v(" de fabricación propia, de "),t("code",[e._v("varios tamaños (8, 10 y 12 porciones)")]),e._v(". Los clientes tienen a disposición un menú que describe para cada una de las "),t("code",[e._v("variedades")]),e._v(", el "),t("code",[e._v("nombre")]),e._v(", los "),t("code",[e._v("ingredientes")]),e._v(" y el "),t("code",[e._v("precio")]),e._v(" según el "),t("code",[e._v("tamaño")]),e._v(" y el "),t("code",[e._v("tipo (a la piedra, a la parrilla, de molde)")]),e._v(" de la "),t("code",[e._v("pizza")]),e._v(". Los clientes realizan sus pedidos en el mostrador o por teléfono.")]),t("p",[e._v("El "),t("code",[e._v("pedido")]),e._v(" debe contener el "),t("code",[e._v("nombre del cliente")]),e._v(", para llamarlo cuando su pedido está listo; la "),t("code",[e._v("cantidad de pizzas")]),e._v(", el "),t("code",[e._v("tamaño")]),e._v(", la "),t("code",[e._v("variedad")]),e._v(", la "),t("code",[e._v("fecha del pedido")]),e._v(", la "),t("code",[e._v("hora")]),e._v(" en la que el pedido debe entregarse y la "),t("code",[e._v("demora estimada")]),e._v(" informada al cliente.")]),t("p",[e._v("El pedido va a la cocina y cuando está preparado se informa al que lo tomó para que se genere la "),t("code",[e._v("factura")]),e._v(" correspondiente y se le entregue el pedido al cliente.")]),t("p",[e._v("Esta empresa también cuenta con el servicio de delivery, cuando se toma dicho pedido (puede ser telefónico) deberán solicitarse datos extras como "),t("code",[e._v("direccion")]),e._v(" y "),t("code",[e._v("número de teléfono")]),e._v(". Con los datos solicitados, el pedido será entregado al "),t("code",[e._v("personal de entrega")]),e._v(" para poder efectuar la entrega requerida por el cliente.")]),t("p",[e._v("El dueño de la pizzería ha manifestado la necesidad de acceder al menos a la siguiente información:")]),t("ul",[t("li",[e._v("Variedades y tipos de pizzas más pedidas por los clientes.")]),t("li",[e._v("Ingresos (recaudaciones) por períodos de tiempo.")]),t("li",[e._v("Pedidos (cantidad y monto) por períodos de tiempo.")]),t("li",[e._v("Barrios donde más se realizan entregas de pedidos.")]),t("li",[e._v("Mejorar la información entregada al cadete para realizar los viajes.")])]),t("h2",{attrs:{id:"desarrollo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#desarrollo","aria-hidden":"true"}},[e._v("#")]),e._v(" DESARROLLO")]),t("h3",{attrs:{id:"procesos-que-se-llevan-a-cabo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#procesos-que-se-llevan-a-cabo","aria-hidden":"true"}},[e._v("#")]),e._v(" Procesos que se llevan a cabo")]),t("p",[e._v("El sistema prestará soporte a los siguientes procesos que se llevan a cabo dentro de la organización:")]),t("ul",[t("li",[t("p",[t("strong",[e._v("Pedido")]),e._v(": Cada pedido es generado por el cliente cuando éste los solicita teniendo a disposición un menú que describe para cada uno la variedad, nombre, ingredientes, precio y tipo de pizza que desee. Luego de que el cliente realiza la elección se despacha el pedido hacia la cocina, previamente registrado cliente, menues elegidos y fecha. Además se notifica al cliente la demora estimada del pedido.")])]),t("li",[t("p",[t("strong",[e._v("Confección de Menú")]),e._v(": La confección del menú para ofrecer a los clientes se establecen en base al tipo de pizza, la variedad y tamaño de la misma.")])]),t("li",[t("p",[t("strong",[e._v("Envíos a domicilio (Delivery)")]),e._v(": En el supuesto que la entrega del pedido sea a domicilio, se le pedirá al cliente que informe su domicilio y número de teléfono para realizar la entrega. Se deberá tener en cuenta que el personal de entrega podrá llevar más de un pedido por viaje. El coste de este envío estará determinado por medio de un cálculo según la distancia que se encuentre el domicilio del negocio con respecto a la del cliente.")])])]),t("h2",{attrs:{id:"limite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limite","aria-hidden":"true"}},[e._v("#")]),e._v(" LÍMITE")]),t("h3",{attrs:{id:"el-limite-de-este-sistema-es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#el-limite-de-este-sistema-es","aria-hidden":"true"}},[e._v("#")]),e._v(" El límite de este sistema es:")]),t("p",[e._v("Desde la confección de menues y pedido realizado por el cliente, hasta la emisión de informes con la información de las recaudaciones variedades y tipos de pizzas más solicitados y pedidos solicitados, junto con las zonas o barrios donde se realizan más entregas y tiempos de entregas.")]),t("h2",{attrs:{id:"propiedades-del-sistema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#propiedades-del-sistema","aria-hidden":"true"}},[e._v("#")]),e._v(" PROPIEDADES DEL SISTEMA")]),t("h3",{attrs:{id:"objetivos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objetivos","aria-hidden":"true"}},[e._v("#")]),e._v(" Objetivos")]),t("ul",[t("li",[e._v("Brindar soporte en la gestión de los pedidos de la Pizzería.")]),t("li",[e._v("Proveer información de los procesos que abarca.")])]),t("h3",{attrs:{id:"alcances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alcances","aria-hidden":"true"}},[e._v("#")]),e._v(" Alcances")]),t("ul",[t("li",[t("p",[e._v("Atender la consulta del cliente (telefónica o personal) por el empleado.")])]),t("li",[t("p",[e._v("Buscar el/los menues que el cliente solicita por el empleado.")])]),t("li",[t("p",[e._v("Si el cliente esta dentro del local, entregar el/los menues al cliente por el empleado.")])]),t("li",[t("p",[e._v("Gestionar Registrar el pedido.")])]),t("li",[t("p",[e._v("Si el pedido fue solicitado con entrega a domicilio, cargar el mismo en el vehiculo de deliveri por el empleado.")])]),t("li",[t("p",[e._v("Asignar el pedido a un PersonaldeEntrega para que se realize la entrega.")])]),t("li",[t("p",[e._v("Registrar los menues que se ofrecen a los clientes.\nRealizar informes con la información solicitada por el dueño de la organización.")])]),t("li",[t("p",[e._v("Registrar datos del Personal de Entrega junto con sus vehiculos.")])]),t("li",[t("p",[e._v("Registrar datos del cliente (se usara el telefono como identificacion principal), con domicilio detallando ciudad, barrio, calle y altura.")])]),t("li",[t("p",[e._v("El sistema debera ofrecer una hoja de ruta recomendada para entregarle o sugerirle al Personal de entrega y asi optimizar tiempo y calidad de servicio.")])])]),t("h2",{attrs:{id:"arquitectura-de-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arquitectura-de-software","aria-hidden":"true"}},[e._v("#")]),e._v(" ARQUITECTURA DE SOFTWARE")]),t("p",[e._v("Se define una arquitectura "),t("code",[e._v("CLIENTE - SERVIDOR")]),e._v(" desktop – arquitectura en capas.")]),t("h3",{attrs:{id:"aplicacion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aplicacion","aria-hidden":"true"}},[e._v("#")]),e._v(" Aplicación:")]),t("p",[e._v("Se utiliza el patrón para organizar la implementación de este sistema complejo en capas de servicios auto contenidas, para logar un sistema mantenible, de bajo acoplamiento, adaptable y escalable.")]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("CAPA DE PRESENTACIÓN")]),t("p",[e._v("Vista Desktop")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("CAPA LÓGICA DE NEGOCIOS")]),t("p",[e._v("Controladores")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("CAPA DE PERSISTENCIA")]),t("p",[e._v("ORM - Hibernate")])]),t("h3",{attrs:{id:"motivaciones"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivaciones","aria-hidden":"true"}},[e._v("#")]),e._v(" Motivaciones:")]),t("p",[e._v("Reutilización de servicios brindados por la interfaz brindada por cada capa. Mejorar la portabilidad. Los cambios de hardware, del sistema operativo y todo lo que afecta solamente a una capa, se pueden modificar sin alterar al resto de las capas.")]),t("h2",{attrs:{id:"tecnologias-aplicadas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tecnologias-aplicadas","aria-hidden":"true"}},[e._v("#")]),e._v(" TECNOLOGÍAS APLICADAS")]),t("ul",[t("li",[t("p",[e._v("Lenguaje de Desarrollo: "),t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java con JDK versión 8.0")])])]),t("li",[t("p",[e._v("Entorno de desarrollo:")]),t("ul",[t("li",[t("a",{attrs:{href:"http://www.oracle.com/technetwork/es/java/javase/downloads/jdk-netbeans-jsp-3413139-esa.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netbeans IDE versión 8.2")])]),t("li",[t("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intellij IDEA 2018")])])])]),t("li",[t("p",[e._v("ORM: "),t("a",{attrs:{href:"http://hibernate.org/orm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hibernate versión 5.2")])])]),t("li",[t("p",[e._v("Sistema gestor de base de datos: "),t("a",{attrs:{href:"https://dev.mysql.com/downloads/windows/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL versión 8.0")])])]),t("li",[t("p",[e._v("Modelado del sistema: UML versión 2.0 "),t("a",{attrs:{href:"http://staruml.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("StarUML")])])]),t("li",[t("p",[e._v("Sistema de Control de Versiones: "),t("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git")])])]),t("li",[t("p",[e._v("Gestor de Repositorios: "),t("a",{attrs:{href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Desktop")])])]),t("li",[t("p",[e._v("Generación de reportes: "),t("a",{attrs:{href:"https://community.jaspersoft.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jasper Reports - Ireport Versión 5.2")])])]),t("li",[t("p",[e._v("Project Object Model (POM): "),t("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven")])])])]),t("h2",{attrs:{id:"diagrama-de-entidad-relacion-der"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diagrama-de-entidad-relacion-der","aria-hidden":"true"}},[e._v("#")]),e._v(" DIAGRAMA DE ENTIDAD-RELACIÓN (DER)")]),t("p",[t("img",{attrs:{src:r(52),alt:""}})]),t("h2",{attrs:{id:"diagrama-de-clases-uml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diagrama-de-clases-uml","aria-hidden":"true"}},[e._v("#")]),e._v(" DIAGRAMA DE CLASES (UML)")]),t("p",[t("img",{attrs:{src:r(51),alt:""}})]),t("h2",{attrs:{id:"diagrama-casos-de-usos-use-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diagrama-casos-de-usos-use-case","aria-hidden":"true"}},[e._v("#")]),e._v(" DIAGRAMA CASOS DE USOS (USE CASE)")]),t("p",[t("img",{attrs:{src:r(50),alt:""}})]),t("h2",{attrs:{id:"historial-de-versiones"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#historial-de-versiones","aria-hidden":"true"}},[e._v("#")]),e._v(" HISTORIAL DE VERSIONES")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Control de Versionado")]),t("th",[e._v("Datos")])])]),t("tbody",[t("tr",[t("td",[e._v("Fecha de Creación:")]),t("td",[e._v("15/04/2018")])]),t("tr",[t("td",[e._v("Última Modificación:")]),t("td",[e._v("02/05/2018")])]),t("tr",[t("td",[e._v("Versión Actual:")]),t("td",[e._v("1.11")])])])]),t("h2",{attrs:{id:"integrantes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrantes","aria-hidden":"true"}},[e._v("#")]),e._v(" INTEGRANTES")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Equipos")]),t("th",[e._v("Integrantes")])])]),t("tbody",[t("tr",[t("td",[e._v("Profesores")]),t("td",[e._v("Araceli Mendoza")])]),t("tr",[t("td"),t("td",[t("a",{attrs:{href:"https://github.com/nicolasoliva62",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nicolás Oliva")])])]),t("tr",[t("td"),t("td",[e._v("Ramiro Bertalot")])]),t("tr",[t("td",[e._v("Equipo A")]),t("td",[t("a",{attrs:{href:"https://github.com/SrShark",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guido Cavallo")])])]),t("tr",[t("td"),t("td",[t("a",{attrs:{href:"https://github.com/sebacuaglia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sebastián Cuaglia")])])]),t("tr",[t("td"),t("td",[t("a",{attrs:{href:"https://github.com/Malizia27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruben Malizia")])])]),t("tr",[t("td",[e._v("Equipo B")]),t("td",[t("a",{attrs:{href:"https://github.com/daniel1rosso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Daniel Rosso")])])]),t("tr",[t("td"),t("td",[t("a",{attrs:{href:"https://github.com/paulmansilla",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pablo Mansilla")])])]),t("tr",[t("td"),t("td",[t("a",{attrs:{href:"https://github.com/Feedeac",target:"_blank",rel:"noopener noreferrer"}},[e._v("Federico Boccardo")])])]),t("tr",[t("td"),t("td",[e._v("Hernán Grosso")])])])])])}],o=r(0),s=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},t,!1,null,null,null);a.default=s.exports}}]);