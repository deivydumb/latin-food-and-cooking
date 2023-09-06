import { Plato } from "./Plato";

export const Platos:Plato[]=[
    {
        "id": 1,
        "nombre": "Taco al Pastor",
        "descripcion": "Un delicioso taco mexicano con carne marinada y piña, cocinado en un trompo vertical.",
        "pais": "México",
        "imagen": "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        "ingredientes": [
          "Tortilla de maíz",
          "Carne de cerdo marinada",
          "Piña",
          "Cebolla",
          "Cilantro",
          "Salsa"
        ]
      },
      {
        "id": 2,
        "nombre": "Feijoada",
        "descripcion": "Un plato brasileño de estofado de frijoles negros con carnes ahumadas, servido con arroz y naranjas.",
        "pais": "Brasil",
        "imagen": "https://cdn.colombia.com/gastronomia/2011/08/29/feijoada-3663.jpg",
        "ingredientes": [
          "Frijoles negros",
          "Carnes ahumadas (chorizo, tocino, salchichas)",
          "Arroz",
          "Naranjas",
          "Cebolla",
          "Ajo"
        ]
      },
      {
        "id": 3,
        "nombre": "Ceviche",
        "descripcion": "Un plato de mariscos frescos marinados en jugo de limón, típico de varios países latinoamericanos.",
        "pais": "Perú",
        "imagen": "https://www.elespectador.com/resizer/tyGJPN_YmWpagQFeXq_YYOxAKjY=/arc-anglerfish-arc2-prod-elespectador/public/2AVD5Z6Y2ZFWHETPQGCPLMNK4A.jpg",
        "ingredientes": [
          "Pescado o mariscos frescos",
          "Jugo de limón",
          "Cebolla morada",
          "Cilantro",
          "Ají o chile",
          "Maíz"
        ]
      },
      {
        "id": 4,
        "nombre": "Arepas",
        "descripcion": "Panecillos de maíz colombianos, servidos con diversas guarniciones.",
        "pais": "Colombia",
        "imagen": "https://ichef.bbci.co.uk/news/640/cpsprodpb/1400C/production/_93723918_thinkstockphotos-627042504.jpg",
        "ingredientes": [
          "Harina de maíz",
          "Agua",
          "Sal",
          "Relleno a elección (queso, carne, aguacate, etc.)"
        ]
      },
      {
        "id": 5,
        "nombre": "Pupusas",
        "descripcion": "Tortillas salvadoreñas rellenas de queso, frijoles o carne.",
        "pais": "El Salvador",
        "imagen": "https://media.istockphoto.com/id/1029584142/es/foto/tres-pupusas-con-verduras-fritas.jpg?s=612x612&w=0&k=20&c=LErMQr9dY5vWllUSQdItpXwxECLi4J5t_CHXIn_E5Bs=",
        "ingredientes": [
          "Masa de maíz",
          "Queso",
          "Frijoles refritos",
          "Carne (opcional)"
        ]
      },
      {
        "id": 6,
        "nombre": "Empanadas",
        "descripcion": "Pastelitos de masa rellenos de carne, pollo, queso u otros ingredientes.",
        "pais": "Varios países",
        "imagen": "https://www.comedera.com/wp-content/uploads/2021/12/empanadas-colombianas1.jpg",
        "ingredientes": [
          "Masa",
          "Relleno a elección (carne, pollo, queso, etc.)",
          "Cebolla",
          "Comino",
          "Ají (opcional)"
        ]
      },
      {
        "id": 7,
        "nombre": "Tamales",
        "descripcion": "Bocados de masa rellenos de carne, envueltos en hojas de maíz y cocidos al vapor.",
        "pais": "Varios países",
        "imagen": "https://www.comedera.com/wp-content/uploads/2022/03/Tamales-colombianosshutterstock_2045038238.jpg",
        "ingredientes": [
          "Masa de maíz",
          "Carne (pollo, cerdo, res)",
          "Salsa",
          "Hojas de maíz"
        ]
      },
      {
        "id": 8,
        "nombre": "Causa Limeña",
        "descripcion": "Plato peruano a base de papa amarilla, relleno de pollo, atún o mariscos.",
        "pais": "Perú",
        "imagen": "https://cdn0.recetasgratis.net/es/posts/8/6/2/causa_limena_31268_orig.jpg",
        "ingredientes": [
          "Papa amarilla",
          "Limón",
          "Ají amarillo",
          "Pollo, atún o mariscos",
          "Aguacate"
        ]
      },
      {
        "id": 9,
        "nombre": "Ropa Vieja",
        "descripcion": "Carne desmenuzada cocida a fuego lento, típica de la cocina cubana.",
        "pais": "Cuba",
        "imagen": "https://www.196flavors.com/wp-content/uploads/2018/09/ropa-vieja-1-FP.jpg",
        "ingredientes": [
          "Carne de res",
          "Pimientos",
          "Cebolla",
          "Ajo",
          "Tomate"
        ]
      },
      {
        "id": 10,
        "nombre": "Asado",
        "descripcion": "Carnes a la parrilla marinadas con diferentes adobos y especias.",
        "pais": "Argentina",
        "imagen": "https://salroche.com/cdn/shop/articles/asado-perfecto-1.jpg?v=1574172033",
        "ingredientes": [
          "Carne de res",
          "Chimichurri",
          "Sal",
          "Pimienta",
          "Limón"
        ]
      },
      {
        "id": 11,
        "nombre": "Cachapa",
        "descripcion": "Panqueques de maíz dulce, rellenos de queso de mano o jamón.",
        "pais": "Venezuela",
        "imagen": "https://cocina-casera.com/wp-content/uploads/2015/01/cachapa-venezolana.jpg",
        "ingredientes": [
          "Maíz tierno",
          "Queso de mano",
          "Sal",
          "Azúcar"
        ]
      },
      {
        "id": 12,
        "nombre": "Churrasco",
        "descripcion": "Carne a la parrilla servida con guarniciones variadas.",
        "pais": "Brasil",
        "imagen": "https://boquisabroso.com.co/wp-content/uploads/2023/03/Receta-de-Churrasco-Colombiano.jpg",
        "ingredientes": [
          "Carne (generalmente res)",
          "Sal",
          "Pimienta",
          "Guarniciones (arroz, frijoles, ensaladas)"
        ]
      },
      {
        "id": 13,
        "nombre": "Ajiaco",
        "descripcion": "Sopa espesa a base de papas y pollo, típica de la gastronomía colombiana.",
        "pais": "Colombia",
        "imagen": "https://cdn.colombia.com/gastronomia/2011/07/22/ajiaco-1458.jpg",
        "ingredientes": [
          "Papas",
          "Pollo",
          "Maíz",
          "Guisantes",
          "Crema de leche",
          "Capers"
        ]
      },
      {
        "id": 14,
        "nombre": "Parrillada",
        "descripcion": "Variedad de carnes a la parrilla, acompañada de chorizo, morcilla y más.",
        "pais": "Uruguay",
        "imagen": "https://i.pinimg.com/1200x/a8/a1/b3/a8a1b3a82e8b536311e980504ff99f69.jpg",
        "ingredientes": [
          "Carne de res",
          "Chorizo",
          "Morcilla",
          "Mollejas",
          "Salchicha"
        ]
      },
      {
        "id": 15,
        "nombre": "Tostones",
        "descripcion": "Plátanos verdes fritos y luego aplanados, servidos como acompañamiento.",
        "pais": "Varios países",
        "imagen": "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/01/29095741/RFB-17-5-tostonesconensalada.jpg",
        "ingredientes": [
          "Plátanos verdes",
          "Aceite",
          "Sal"
        ]
      },
      {
        "id": 16,
        "nombre": "Moqueca",
        "descripcion": "Estofado de pescado y mariscos con leche de coco y aceite de palma.",
        "pais": "Brasil",
        "imagen": "https://img-global.cpcdn.com/recipes/2578932_1210f6474e9743ef/400x400cq70/photo.jpg",
        "ingredientes": [
          "Pescado",
          "Camarones",
          "Leche de coco",
          "Aceite de palma",
          "Cebolla",
          "Tomate"
        ]
      },
      {
        "id": 17,
        "nombre": "Caldo de Pollo",
        "descripcion": "Sopa de pollo con verduras y especias, común en muchos países latinos.",
        "pais": "Varios países",
        "imagen": "https://okdiario.com/img/2019/08/16/receta-de-caldo-de-pollo-asado.jpg",
        "ingredientes": [
          "Pollo",
          "Verduras (zanahoria, apio, papa)",
          "Cilantro",
          "Cebolla",
          "Ajo"
        ]
      },
      {
        "id": 18,
        "nombre": "Anticuchos",
        "descripcion": "Brochetas de carne marinada a la parrilla, típicas de Perú.",
        "pais": "Perú",
        "imagen": "https://www.shutterstock.com/image-photo/peruvian-anticuchos-grilled-meat-on-600w-2171708595.jpg",
        "ingredientes": [
          "Carne (corazón de res, pollo)",
          "Adobo",
          "Papas cocidas",
          "Ají"
        ]
      },
      {
        "id": 19,
        "nombre": "Mofongo",
        "descripcion": "Plato de plátano verde frito y machacado, mezclado con ajo y tocino.",
        "pais": "República Dominicana",
        "imagen": "https://images-gmi-pmc.edge-generalmills.com/39c21f4d-d9bc-4bbb-b323-0577640c34e5.jpg",
        "ingredientes": [
          "Plátano verde",
          "Ajo",
          "Tocino",
          "Aceite de oliva"
        ]
      },
      {
        "id": 20,
        "nombre": "Tamal",
        "descripcion": "Masa de maíz rellena de carne, chiles, frijoles o dulce, envuelta en hojas de maíz.",
        "pais": "Varios países",
        "imagen": "https://boquisabroso.com.co/wp-content/uploads/2023/02/Receta-de-Tamales-Vallunos.jpg",
        "ingredientes": [
          "Masa de maíz",
          "Carne, chiles, frijoles o dulce",
          "Hojas de maíz"
        ]
      },{
    "id": 21,
    "nombre": "Tamal2",
    "descripcion": "Masa de maíz rellena de carne, chiles, frijoles o dulce, envuelta en hojas de maíz.",
    "pais": "Varios países",
    "imagen": "https://boquisabroso.com.co/wp-content/uploads/2023/02/Receta-de-Tamales-Vallunos.jpg",
    "ingredientes": [
      "Masa de maíz",
      "Carne, chiles, frijoles o dulce",
      "Hojas de maíz"
    ]
  }


]
