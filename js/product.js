let products = [
    {
        id: 1,
        cat: "electronic",
        title: "Iphone 14",
        price: "900",
        color: "Black",
        image: './img/iphone12.jpg' ,
    },
    {
        id: 2,
        cat: "furniture",
        title: "Sofa for living room",
        price: "500",
        color: "Brown",
        image:  './img/watch.jpg',
    },
    {
        id: 3,
        cat: "clothing",
        title: "Unisex Bag",
        price: "20",
        color: "Blue",
        image:  './img/Xiaomi.jpg' ,
    },
    // {
    //     id: 4,
    //     cat: "electronic",
    //     title: "GoPro HERO6 4K Action",
    //     price: "790.50",
    //     color: "Black",
    //     image: '')
    // },
    // {
    //     id: 5,
    //     cat: "electronic",
    //     title: "Canon camera 20x zoom EOS 2000",
    //     price: "600",
    //     color: "Black",
    //     image: ''
    // },
    // {
    //     id: 6,
    //     cat: "electronic",
    //     title: "Xiaomi Redmi 8 Original Global Version 4GB",
    //     price: "250",
    //     color: ["Blue", "Black"],
    //     image: ''
    // },
    // {
    //     id: 7,
    //     cat: "electronic",
    //     title: "Apple iPhone 12 Pro 6.1 RAM 6GB 512GB Unlocked",
    //     price: "800",
    //     color: "Grey",
    //     image: "https://www.apple",
    // },
    // {
    //     id: 8,
    //     cat: "electronic",
    //     title: "Apple Watch Series 1 Sport Case 38mm Black",
    //     price: "120",
    //     color: "Black",
    //     image: '',
    // },
    // {
    //     id: 9,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 10,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 11,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 12,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 13,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 14,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 15,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 16,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 17,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 18,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 19,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
    // {
    //     id: 20,
    //     cat: "",
    //     title: "",
    //     price: "",
    //     color: ""
    // },
];



// function getProductById(id) {
//     return products.find((product) => product.id === id);
// }

// console.log(getProductById(1)); //{ id: 1, cat: 'electronic', title: 'Iphone 14' ... }


// function filterByCategory(category){
//    return products.filter((product)=> product.cat=== category );
// }

// console.log(filterByCategory('electronic')); //[ { id:  1, cat: 'electronic', title: 'Iphone 14'... ]


// function groupByCategory(){
//     let result = {};
//     for (let item of products){
//         if (!result[item.cat]){
//             result [item.cat] = [];
//         }
//         result [item.cat].push(item);
//     }
//      return result;
// }

// console.log(groupByCategory()); /*
// { electronic: [ { id: 1, cat: 'electronic', title: 'Iphone 14'... ],
//   clothing: [ { id:  3, cat: 'clothing', .... ] */


// function findMaxPrice() {
//     return Math.max(...products.map(el=> el.price))
// }

// console.log(findMaxPrice()) 
