const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// 1. Qual è il metodo migliore per clonare l’oggetto chef, e perché?

const chefcopia = { ...chef }

// risposta: il miglior metodo è usare lo spread operator, perchè copia tutte le proprietà incluse le funzioni.


// 2. Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

const restaurantcopia = structuredClone(restaurant)

// risposta: il metodo migliore è usare structuredClone, perchè crea una copia profonda dell’oggetto restaurant, copiando anche tutte le proprietà annidate (come l’oggetto address e la data openingDate).