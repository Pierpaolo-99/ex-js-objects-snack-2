const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?

const chefcopia = {
    ...chef,
    restaurant: {
        ...chef.restaurant,
        welcomeClient: chef.restaurant.welcomeClient,
        address: {
            ...chef.restaurant.address,
            showAddress: chef.restaurant.address.showAddress
        }
    }
};

// penso che questo sia l'unico modo per poter copiare anche le funzioni.