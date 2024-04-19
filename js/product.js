let products = [
    {
        id: 1,
        cat: "electronic",
        title: "Iphone 14",
        price: "900",
        color: "Black"
    },
    {
        id: 2,
        cat: "furniture",
        title: "Sofa for living room",
        price: "500",
        color: "Brown"
    },
    {
        id: 3,
        cat: "clothing",
        title: "Unisex Bag",
        price: "20",
        color: "Blue"
    },
    {
        id: 4,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 5,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 6,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 7,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 8,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 9,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 10,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 11,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 12,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 13,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 14,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 15,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 16,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 17,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 18,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 19,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
    {
        id: 20,
        cat: "",
        title: "",
        price: "",
        color: ""
    },
];



function getProductById(id) {
    return products.find((product) => product.id === id);
}

console.log(getProductById(1)); //{ id: 1, cat: 'electronic', title: 'Iphone 14' ... }


function filterByCategory(category){
   return products.filter((product)=> product.cat=== category );
}

console.log(filterByCategory('electronic')); //[ { id:  1, cat: 'electronic', title: 'Iphone 14'... ]


function groupByCategory(){
    let result = {};
    for (let item of products){
        if (!result[item.cat]){
            result [item.cat] = [];
        }
        result [item.cat].push(item);
    }
     return result;
}

console.log(groupByCategory()); /*
{ electronic: [ { id: 1, cat: 'electronic', title: 'Iphone 14'... ],
  clothing: [ { id:  3, cat: 'clothing', .... ] */


function findMaxPrice() {
    return Math.max(...products.map(el=> el.price))
}

console.log(findMaxPrice()) 
