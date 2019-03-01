# Intro

The goal of this sample to is get started with REST from client side.

We will get as starting point an application that displays a list of harcoded items.

# Excercise

- Start with the starting implementation that is located under the folder *00_start*.

- Let's install the needed dependencies.

```bash
npm install
```

- And start the application to check that everything is working as expected.

```bash
npm start
```

- If we check the current implementation we are getting a list of harcoded data. The related `service` that provides data can be found in _src/API/carsApi.double.js_

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

- Edit _src/API/carsApi.js_ to implent functions above with _axios_ or _native fetch_ or _XMLHttpRequest_


- Hints:

  - Copy and paste the _double_ functions into _src/API/carsApi.js_, this way yo already have the right signatures.
  - Start implementation with _getAllCars()_, follow with _getCarById(id)_, and for last _addCar(car)_.
  - _getAllCars() url_: 'http://localhost:3050/api/cars'.
  - _getAllCarById(2) url_: 'http://localhost:3050/api/cars/2'.
  - _addCar url_: 'http://localhost:3050/api/cars'. `POST` http verb.

- Start server:

* On server folder as root in bash terminal

```bash
npm install
```

* Run server

```bash
npm start
```

* Check that server is running by pasting this url on browser:_http://localhost:3050/api/cars_

# Optional

As optional part implement in more than one way the real API.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.