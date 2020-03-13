# Intro

El objetivo de este ejemplo es comenzar con REST desde el lado de cliente.

Tomaremos como punto de partida una aplicación que muestra una lista de harcoded data.

# Ejercicio

- Comenzar con la implementación inicial ubicada en la carpeta *00_start*.

- Vamos a instalar las dependencias necesarias.

```bash
npm install
```

- Y arrancar la aplicación para comprobar que toda funciona como esperamos.

```bash
npm start
```

- Si comprobamos la implementación actual estamos recibiendo una lista de harcoded data. El `servicio` relacionado que nos provee los datos, lo podemos encontrar en _src/API/carsApi.double.js_

```javascript
const data = [
    {
        "car_id": 1,
        "name": "ABX",
        "brand": "Tokiota",
        "year_release": "1999"
    },
    {
        "car_id": 2,
        "name": "AZE",
        "brand": "Tokiota",
        "year_release": "1995"
    },
];

export const getAllCars = () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const cars = data.map((i) => i);
            resolve(cars);
        }, 500);
    });
}

export const getCarById = (id) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const car = data.map((i) => i)
                .find((c) => c.car_id === id);
            resolve(car);
        }, 500);
    });
}

export const addCar = (car) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            car['car_id'] = (data.length + 1);
            data.push(car);
            resolve('ok');
        }, 500);
    }); 
};
```

- Editar _src/API/carsApi.js_ para implementar las funciones de arriba con _axios_ o _native fetch_ o _XMLHttpRequest_


- Pistas:

  - Copia y pega las funciones _double_ en _src/API/carsApi.js_, de esta manera ya tendrás la firma correcta de las mismas.
  - Comienza la implementación con _getAllCars()_, seguido de _getCarById(id)_, y por último _addCar(car)_.
  - _getAllCars() url_: 'http://localhost:3050/api/cars'.
  - _getAllCarById(2) url_: 'http://localhost:3050/api/cars/2'.
  - _addCar url_: 'http://localhost:3050/api/cars'. `POST` http verb.

# Opcional

* Como parte opcional implementa la API REST de más de una manera.
* Crear capa de seguridad para las peticiones contra la API. Nota, para implementar la capa de seguridad hay que implementar también el servidor de autenticación.
* Modificar el servidor y clientes actuales para que trabaje con GraphQL.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.