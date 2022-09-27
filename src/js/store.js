
import { createStore } from 'framework7';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ],
    workers: [
      {
        "rut": "71063607",
        "nombre": "TEST TEST TEST",
        "especialidad": "GERENTE DE TECNOLOGIA",
        "contrato": "CTRL IT",
        "status": "false",
        "foto": "http://foto.ctrlit.cl/img/1533141599172_lzmcv.jpg",
        "tipo_costo": "COSTO DIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "99483261",
        "nombre": "FERNANDO UNDURRAGA DOMINGUEZ",
        "especialidad": "GERENTE GENERAL",
        "contrato": "FUTURE IT",
        "status": "true",
        "foto": "http://img2.ctrlit.cl/imgs/2022-04-11/1649707500389_oqf5d.jpg",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "17402541K",
        "nombre": "CRISTOBAL CORTINEZ CAMPOS",
        "especialidad": "LEAD DEVELOPER",
        "contrato": "CTRL IT",
        "status": "false",
        "foto": "http://foto.ctrlit.cl/img/1534795079732_8xzn7c.jpg",
        "tipo_costo": "COSTO DIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "156424676",
        "nombre": "JUAN PABLO PINEDO DOMINGUEZ",
        "especialidad": "LEAD DEVELOPER",
        "contrato": "CTRL AP",
        "status": "true",
        "foto": "http://foto.ctrlit.cl/img/1603126917880_v5u3h8.jpg",
        "tipo_costo": "COSTO DIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "97852707",
        "nombre": "BENJAMIN LUNA DIAZ",
        "especialidad": "JEFE DE SOPORTE",
        "contrato": "CTRL IT",
        "status": "false",
        "foto": "http://img2.ctrlit.cl/imgs/2021-07-30/1627681064105_ey272c.jpg",
        "tipo_costo": "COSTO DIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "269413441",
        "nombre": "YAMILET BOLIVAR PEREIRA",
        "especialidad": "ADMINISTRATIVA",
        "contrato": "CTRL IT",
        "status": "false",
        "foto": "http://foto.ctrlit.cl/img/1559336469465_3axlvi.jpg",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "96751842",
        "nombre": "ALEXANDROS KALOGEREAS TORO",
        "especialidad": "GERENTE COMERCIAL",
        "contrato": "FUTURE IT",
        "status": "false",
        "foto": "http://foto.ctrlit.cl/img/1603206635322_shocna.jpg",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "125839045",
        "nombre": "CRISTIAN CORREA CAPETILLO",
        "especialidad": "GERENTE DE TECNOLOGIA",
        "contrato": "FUTURE IT",
        "status": "false",
        "foto": "null",
        "tipo_costo": "COSTO INDIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "167474764",
        "nombre": "MARCELO REYES GAJARDO",
        "especialidad": "VENTAS",
        "contrato": "CTRL",
        "status": "false",
        "foto": "null",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "182741965",
        "nombre": "LEONEL LERMANDA JAQUE",
        "especialidad": "ANALISTA DE CUENTAS JUNIOR",
        "contrato": "FIJO",
        "status": "false",
        "foto": "null",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "187650461",
        "nombre": "REINALDO ABRAHAM JOSIAS TAPIA SEGOVIA",
        "especialidad": "SUPERVISOR TECNICO",
        "contrato": "FIJO",
        "status": "false",
        "foto": "null",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "182510726",
        "nombre": "PRUEBA PRUEBA PRUEBA",
        "especialidad": "ADMINISTRATIVO",
        "contrato": "INDEFINIDO",
        "status": "false",
        "foto": "https://buk-cluster-enterprise-chile.s3.amazonaws.com/sac/person/picture_url/769/a1ba9cb1-79b2-48a5-b55f-c93957f2c3ee-Francisca-Past%C3%A9n.png",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "163580292",
        "nombre": "SEBASTIAN VALENZUELA A",
        "especialidad": "HARDWARE",
        "contrato": "CTRL",
        "status": "false",
        "foto": "null",
        "tipo_costo": "COSTO INDIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "132800855",
        "nombre": "NICOLÁS BELMAR MOLLA",
        "especialidad": "GERENTE GENERAL",
        "contrato": "BUK",
        "status": "false",
        "foto": "null",
        "tipo_costo": "COSTO INDIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "260829572",
        "nombre": "ISABEL STELLA RINCON RANGEL",
        "especialidad": "ADMINISTRATIVO",
        "contrato": "INDEFINIDO",
        "status": "false",
        "foto": "https://buk-cluster-enterprise-chile.s3.amazonaws.com/clinicanace/person/picture_url/7/0ac2970b-9815-4148-8090-d44e80ffec52-ISABEL_RINCON.png",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "179825856",
        "nombre": "PRUEBA PRUEBA2 PRUEBA3",
        "especialidad": "ADMINISTRATIVO",
        "contrato": "INDEFINIDO",
        "status": "false",
        "foto": "null",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "188335284",
        "nombre": "PRUEBA PRUEBA PRUEBA",
        "especialidad": "PRUEBA",
        "contrato": "PRUEBA",
        "status": "false",
        "foto": "http:sdasd",
        "tipo_costo": "COSTO INDIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "17967713K",
        "nombre": "FELICIANO ANDRES MUÑOZ SUAZO",
        "especialidad": "ADMINISTRATIVO",
        "contrato": "INDEFINIDO",
        "status": "false",
        "foto": "https://buk-cluster-enterprise-chile.s3.amazonaws.com/distribuidora-modinger/person/picture_url/5784/06434656-5228-48dd-8702-f2424a139ca2-20220411_111901.jpg",
        "tipo_costo": "null",
        "vector_face": "true"
      },
      {
        "rut": "146491308",
        "nombre": "TOM SIEGEL CORREA",
        "especialidad": "ADMINISTRATIVO",
        "contrato": "BUK",
        "status": "false",
        "foto": "null",
        "tipo_costo": "COSTO DIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "256936356",
        "nombre": "SILVIA COLMENAREZ VALENZUELA",
        "especialidad": "ADMINISTRATIVA",
        "contrato": "BUK",
        "status": "false",
        "foto": "null",
        "tipo_costo": "null",
        "vector_face": "false"
      },
      {
        "rut": "193607810",
        "nombre": "FELIPE CONCHA A",
        "especialidad": "PRUEBA1",
        "contrato": "PRUEBA1",
        "status": "false",
        "foto": "null",
        "tipo_costo": "COSTO INDIRECTO",
        "vector_face": "false"
      },
      {
        "rut": "188084028",
        "nombre": "PRUEBA BUK PRUEBA BUK PRUEBA BUK",
        "especialidad": "ADMINISTRATIVO",
        "contrato": "BUK",
        "status": "false",
        "foto": "null",
        "tipo_costo": "null",
        "vector_face": "false"
      }
    ]
  },
  getters: {
    products({ state }) {
      return state.products;
    },
    workers({ state }) {
      let strData = JSON.stringify(state.workers);
      let parsedData = JSON.parse(strData, (k, v) => v === "true" ? true : (v === "false" ? false : ( v === "null" ? null : v)));
      return parsedData;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
