
const createProduct = async (jsonProduct) => {
    try {
        const response = await fetch(`https://vacomoloco.herokuapp.com/db.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonProduct
        });
        return response.json;
    } catch (error) {
        return console.log(error);
    }
}

const readProducts = () => fetch('https://vacomoloco.herokuapp.com/db.json').then(response => response.json());

const readProduct = (id) => fetch(`https://vacomoloco.herokuapp.com/db.json/${id}`).then(response => response.json());

const deleteProduct = (id) => {
    return fetch(`https://vacomoloco.herokuapp.com/db.json/${id}`, {
        method: 'DELETE'
    });
};

const updateProduct = (id, jsonProduct) => {
    return fetch(`https://vacomoloco.herokuapp.com/db.json/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}


export const clientService = {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
};