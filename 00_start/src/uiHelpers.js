const columns = ['car_id', 'name', 'brand', 'year_release'];

const populateCell = (cell, text) => {
    const cellText = document.createTextNode(text)
    cell.appendChild(cellText);
}

const addCarRow = (car, tableId) => {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cells = columns.map((_, index) => newRow.insertCell(index));
    cells.forEach((c, index) => {
        const text = car[columns[index]];
        populateCell(c, text);
    })
}

export const addCarRows = (cars, tableId) => {
    cars.forEach((c) => addCarRow(c, tableId));
}

export const cleanTable = (tableId) => {
    const table = document
        .getElementById(tableId)
        .getElementsByTagName('tbody')[0];
    if (table.rows && table.rows.length > 0) {
        for (let index = table.rows.length - 1; index >= 0; index--) {
            table.deleteRow(index);
        }
    }
}

export const populateEditCarForm = ({ name, brand, year_release }) => {
    document.getElementById('name').value = name;
    document.getElementById('brand').value = brand;
    document.getElementById('year').value = year_release;
}

export const retrieveCarForm = () => {
    const name = document.getElementById('name').value;
    const brand = document.getElementById('brand').value;
    const year_release = document.getElementById('year').value;
    return {
        name,
        brand,
        year_release,
    };
};

export const retrieveCarId = () => {
    return +document.getElementById('carid').value;
}