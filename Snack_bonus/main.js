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

// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

// ⚠️ Serve usare una funzione ricorsiva!(fai un po’ di ricerca).

function cloneChef(chef) {
    return {
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
}

const chefCopia = cloneChef(chef);