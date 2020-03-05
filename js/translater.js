var new_lang = {

    "lt0": "Descripción",

    "lt1": "Cómo trabajamos",

    "lt2": "Certificados",

    "lt3": "Contactos",

    "lt4": "Consulta gratis",

    "lt5": "comprar con un descuento",

    "lt6": "Reduslim es un remedio integral para adelgazamiento*",

    "lt7": "Un complejo natural único de Reduslim a base de componentes naturales que te puede ayudar a adelgazar.*",

    "lt8": "* No garantizamos un resultado de 100%. Todos los resultados son individuales para cada organismo. El producto no es un medicamento. No es un biofármaco.",

    "lt9": "El costo es de <span class=\"new_price_val\">2</span><span class=\"new_price_cur\">euros</span>.",

    "lt10": "Formalización de pedidos: veinticuatro horas, 24/7/365<br>Después de dejar una solicitud siga en contacto.<br>Nuestro manager se contactará con Usted durante 5-10 min.<br>",

    "lt11": "Nombre y apellidos:",

    "lt12": "Teléfono:",

    "lt13": "*en caso de pedir el producto para un ciclo de tratamiento ",

    "lt14": "Reduslim con la entrega en España",

    "lt15": "En un plazo bastante corto el complejo Reduslim ha logrado hacerse notar en nuestro país. Más y más hombres y mujeres dan preferencia a una composición y componentes naturales.*",

    "lt16": "El costo es de<span class=\"new_price_val\">2</span><span class=\"new_price_cur\">euros</span>.",

    "lt17": "Formalización de pedidos: veinticuatro horas, 24/7/365<br>Después de dejar una solicitud siga en contacto.<br>Nuestro manager se contactará con Usted durante 5-10 min.<br>",

    "lt18": "Gracias a una composición natural Reduslim se ha acreditado como un ayudante excelente en el adelgazameinto.*",

    "lt19": "La base del complejo consiste del aceite de Azafrán (activa procesos de metabolismo, digestión, fortaleza la inmunidad), aceite de Onagra Común (baja el nivel de colesterol “malo” en la sangre, normaliza el metabolismo lipídico), lipasa y proteasa (enzimas digestivas muy importantes), extracto de Irvingia Gabonensis (reduce el apetito, ralentiza el proceso de asimilación de la comida en el tracto gastrointestinal gracias a un gran contenido de fibras alimentarias), extracto de Coleus Forskohlii, extracto de la raíz de Yacón (mejora procesos metabólicos), glucomanano (estimula la peristalsis del intestino), y también componentes vegetales adicionales.*",

    "lt20": "Modo de uso es bastante sencillo y no dificultoso, siga las instrucciones en el paquete.",

    "lt21": "Nombre y apellidos:",

    "lt22": "Teléfono:",

    "lt23": "*en caso de pedir el producto para un ciclo de tratamiento",

    "lt24": "* El efecto se alcanza en caso de un uso correcto del remedio. Tome en serio su salud, es deseable una consulta de especialistas.",

    "lt25": "¿Por qué precisamente nosotros?",

    "lt26": "Experiencia de trabajo",

    "lt27": "La experiencia de trabajo en el mercado español es más de 2 años. Queremos volvernos un líder en este sector en futuro próximo. La seguridad y responsabilidad son los aspectos clave de nuestra empresa.",

    "lt28": "Consultas y servicio",

    "lt29": "Aquí Usted puede recibir asesoramiento competente en una forma comprensible sobre todas las cuestiones que le interesa a Usted. Los servicios de asesoramiento se ofrecen gratis.",

    "lt30": "Entrega rápida",

    "lt31": "Todos los paquetes postales se envían contra reembolso, sin pago anticipado. La entrega se realiza durante 3-14 días por correo.",

    "lt32": "Cómo trabajamos",

    "lt33": "USTED FORMALIZA UN PEDIDO EN&nbsp;NUESTRO SITIO WEB",

    "lt34": "Para formalizar un pedido complete el formulario de retroalimentación donde es necesario indicar su nombre y apellidos y su número de teléfono ",

    "lt35": "CONFIRMA EL PEDIDO POR &nbsp;TELÉFONO",

    "lt36": "Durante 15 min en horario de trabajo con Usted contacta un manager consultor de nuestra tienda para confirmar el pedido, precisar los detalles y dar consultas sobre&nbsp; cuestiones que le Interesa a Usted ",

    "lt37": "EMPAQUETAMOS Y ENVIAMOS ",

    "lt38": "Después de confirmar el pedido, se empaqueta en nuestro almacén y se envía a una oficina postal por Correo de España o se da a un mensajero para la entrega",

    "lt39": "COMPRUEBA Y RECIBE ",

    "lt40": "En una oficina postal o en presencia del mensajero comprueba el contenido del envío y paga después de revisar la mercancía ",

    "lt41": "Certificados de mercancía vigentes ",

    "lt42": "¿A Usted le quedan preguntas?<br>¡Pida una consulta gratis!",

    "lt43": "Nombre y apellidos:",

    "lt44": "Teléfono:",

    "lt45": "*en caso de pedir el producto para un ciclo de tratamiento ",

    "lt46": "Despúes de dejar una solicitud siga en contacto.<br>Nuestro manager se contactará con Usted durante 5-10 min.",

    "lt47": " 28023, Madrid,<br>Avenida de Valdemarín 22<br><br>",

    "lt48": "\"Rosfarm\"S.R.L.<br><br>CIF/CCAF 7723657256/753241001<br>Número principal de registro estatal 563216375904<br><br><a class=\"modal__show\" href=\"/politic.html\">Política de privacidad</a><br><br><a class=\"modal__show\" href=\"/oferta.html\">Oferta pública</a><br>",

    "lt49": "Horario del trabajo de la oficina:<br><br>lun-vier: 9:00 - 20:00<br><br>sáb-dom: 10:00 - 19:00"
};
function Translater () {
    for (class_name in new_lang) {
        var elements = document.getElementsByClassName(class_name);
        if (elements.length) {
            for (key in elements) {
                elements[key].innerHTML = new_lang[class_name];
            }
        }
    }
};