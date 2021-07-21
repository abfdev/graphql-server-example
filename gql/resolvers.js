const axios = require("axios").default;
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
module.exports = {
    Query: {
        oneProduct: (_, { id }) => [
            axios
                .get(`https://fakestoreapi.com/products/${id}`)
                .then((res) => res.data),
        ],
        allProducts: (_, { limit, sort }) =>
            axios
                .get(
                    `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`,
                )
                .then((res) => res.data),
    },
};
