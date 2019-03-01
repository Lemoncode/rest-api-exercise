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
            resolve('ok'); // TODO: Check with browser
        }, 500);
    }); 
};