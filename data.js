var data = [
    {
        id: 1,
        name: "Kajak",
        category: "Sporty wodne",
        description: "Kajak dla jednej osoby",
        price: 275
    },
    {
        id: 2,
        name: "Kamizelka ratunkowa",
        category: "Sporty wodne",
        description: "Skuteczna i modna",
        price: 48.95
    },
    {
        id: 3,
        name: "Piłka nożna",
        category: "Piłka nożna",
        description: "Odpowiednia waga i wymiar",
        price: 19.50
    },
    {
        id: 4,
        name: "Chorągiewki",
        category: "Piłka nożna",
        description: "Profesjonalne",
        price: 35.95
    },
    {
        id: 5,
        name: "Chwiejne krzesło",
        category: "Szachy",
        description: "Irytuje przeciwnika",
        price: 29.95
    },
    {
        id: 6,
        name: "Szachownica",
        category: "Szachy",
        description: "Zabawa dla całej rodziny",
        price: 29.95
    },
    {
        id: 7,
        name: "Król złoty",
        category: "Szachy",
        description: "Pozłacana figura króla",
        price: 1200
    },
]

module.exports = function () {
    return {
        products: data,
        categories: [...new Set(data.map(p => p.category))].sort(),
        orders: []
    }
}