// function importAll(r) {
//   let images = {};
//   r.keys().forEach((item) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

// const images = importAll(
//   require.context("../assets/img", false, /\.(png|jpe?g|svg)$/)
// );

export const attributes = [
  {
    "_id": "63f078f54b86ed26b05281b2",
    "status": "show",
    "title": {
      "data": "Color"
    },
    "name": {
      "data": "Color"
    },
    "option": "Dropdown",
    "createdAt": "2023-04-19T04:38:53.168Z",
    "variants": [
      {
        "status": "show",
        "_id": "63f078f54b86ed26b05281b3",
        "name": {
          "data": "Red"
        }
      },
      {
        "status": "show",
        "_id": "63f078f54b86ed26b05281b4",
        "name": {
          "data": "Green"
        }
      },
      {
        "status": "show",
        "_id": "63f078f54b86ed26b05281b5",
        "name": {
          "data": "Blue"
        }
      }
    ]
  },
  {
    "_id": "63f078f54b86ed26b05281b6",
    "status": "show",
    "title": {
      "data": "Size"
    },
    "name": {
      "data": "Size"
    },
    "option": "Radio",
    "createdAt": "2023-04-19T04:38:53.170Z",
    "variants": [
      {
        "status": "show",
        "_id": "63f078f54b86ed26b05281b7",
        "name": {
          "data": "Small"
        }
      },
      {
        "status": "show",
        "_id": "63f078f54b86ed26b05281b8",
        "name": {
          "data": "Medium"
        }
      },
      {
        "status": "show",
        "_id": "63f078f54b86ed26b05281b9",
        "name": {
          "data": "Large"
        }
      }
    ]
  },
  {
    "_id": "63f34946d3639309840ca336",
    "status": "show",
    "title": {
      "data": "Gift Wrap"
    },
    "name": {
      "data": "Gift Wrap"
    },
    "option": "Checkbox",
    "createdAt": "2023-04-19T04:38:53.171Z",
    "variants": [
      {
        "status": "show",
        "_id": "63f34946d3639309840ca337",
        "name": {
          "data": "Yes"
        }
      },
      {
        "status": "show",
        "_id": "63f34946d3639309840ca338",
        "name": {
          "data": "No"
        }
      }
    ]
  },
  {
    "_id": "63f34983d3639309840ca64a",
    "status": "show",
    "title": {
      "data": "Package"
    },
    "name": {
      "data": "Package"
    },
    "option": "Checkbox",
    "createdAt": "2023-04-19T04:38:53.172Z",
    "variants": [
      {
        "status": "show",
        "_id": "63f34983d3639309840ca64b",
        "name": {
          "data": "Plastic"
        }
      },
      {
        "status": "show",
        "_id": "63f34983d3639309840ca64c",
        "name": {
          "data": "Jar"
        }
      },
      {
        "status": "show",
        "_id": "63f34983d3639309840ca64d",
        "name": {
          "data": "Eco Friendly"
        }
      }
    ]
  },
  {
    "_id": "65395391c9bb5600088e8a5c",
    "status": "show",
    "title": {
      "tr-TR": "Aroma"
    },
    "name": {
      "tr-TR": "Aroma"
    },
    "option": "Dropdown",
    "createdAt": "2023-10-25T17:42:41.069Z",
    "variants": [
      {
        "status": "show",
        "_id": "65395391c9bb5600088e8a5d",
        "name": {
          "tr-TR": "Çilek"
        }
      },
      {
        "status": "show",
        "_id": "65395391c9bb5600088e8a5e",
        "name": {
          "tr-TR": "Çikolata"
        }
      },
      {
        "status": "show",
        "_id": "65395391c9bb5600088e8a5f",
        "name": {
          "tr-TR": "Karamel"
        }
      }
    ]
  },
  {
    "_id": "653a3f0d5dc210000806efdd",
    "status": "show",
    "title": {
      "tr-TR": "Hediye"
    },
    "name": {
      "tr-TR": "Hediye"
    },
    "option": "Dropdown",
    "createdAt": "2023-10-26T10:27:25.286Z",
    "variants": [
      {
        "status": "show",
        "_id": "653a3f0d5dc210000806efde",
        "name": {
          "tr-TR": "Suluk"
        }
      },
      {
        "status": "show",
        "_id": "653a3f0d5dc210000806efdf",
        "name": {
          "tr-TR": "Bar"
        }
      }
    ]
  }
]



export const discountProducts = [
  {
    "prices": {
      "price": 98.03,
      "originalPrice": 1000,
      "discount": 901.97
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg",
      "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg",
      "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [
      {
        "65395391c9bb5600088e8a5c": "65395391c9bb5600088e8a5d",
        "originalPrice": 1000,
        "price": 98.03,
        "quantity": 582,
        "discount": 901.97,
        "productId": "643f705f5b0dbc4a7c9e34bf-0",
        "barcode": "",
        "sku": "",
        "image": "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg"
      },
      {
        "65395391c9bb5600088e8a5c": "65395391c9bb5600088e8a5e",
        "originalPrice": 1000,
        "price": 98.03,
        "quantity": 582,
        "discount": 901.97,
        "productId": "643f705f5b0dbc4a7c9e34bf-1",
        "barcode": "",
        "sku": "",
        "image": "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg"
      },
      {
        "65395391c9bb5600088e8a5c": "65395391c9bb5600088e8a5f",
        "originalPrice": 1000,
        "price": 98.03,
        "quantity": 582,
        "discount": 901.97,
        "productId": "643f705f5b0dbc4a7c9e34bf-2",
        "barcode": "",
        "sku": "",
        "image": "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg"
      },
      {
        "653a3f0d5dc210000806efdd": "653a3f0d5dc210000806efde",
        "originalPrice": 1000,
        "price": 98.03,
        "quantity": 1746,
        "discount": 901.97,
        "productId": "643f705f5b0dbc4a7c9e34bf-3",
        "barcode": "",
        "sku": "",
        "image": "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg"
      },
      {
        "653a3f0d5dc210000806efdd": "653a3f0d5dc210000806efdf",
        "originalPrice": 1000,
        "price": 98.03,
        "quantity": 1746,
        "discount": 901.97,
        "productId": "643f705f5b0dbc4a7c9e34bf-4",
        "barcode": "",
        "sku": "",
        "image": "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg"
      }
    ],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34bf",
    "slug": "ffff",
    "sku": "",
    "barcode": "",
    "productId": "643f705f5b0dbc4a7c9e34bf",
    "title": {
      "data": "Calabaza Squash",
      "tr-TR": "ffff"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
      "tr-TR": ""
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 5238,
    "isCombination": true,
    "__v": 2,
    "createdAt": "2023-04-19T04:38:55.418Z",
    "updatedAt": "2023-10-26T19:48:59.882Z"
  }
]
export const popularProducts = [
  {
    "prices": {
      "discount": 0,
      "originalPrice": 106.06,
      "price": 106.06
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/ryxzRchQ/Kale-Sprouts-3oz.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34c2",
    "slug": "kale-sprouts",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Kale Sprouts"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 278,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.419Z",
    "updatedAt": "2024-04-15T08:58:43.976Z",
    "sales": 21
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 90.85,
      "price": 90.85
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/qRpDcpsy/Rainbow-Peppers-4ct.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34c1",
    "slug": "rainbow-peppers",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Rainbow Peppers"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 410,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.418Z",
    "updatedAt": "2024-04-05T04:40:20.459Z",
    "sales": 2
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 211.96,
      "price": 211.96
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/L8L3XGcP/Blackberries-1-25-qt.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34c0",
    "slug": "blueberry",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Blueberry"
    },
    "description": {
      "data": "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits."
    },
    "category": {
      "_id": "632aca454d87ff2494210c00",
      "name": {
        "data": "Fresh Fruits"
      }
    },
    "stock": 197,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.418Z",
    "updatedAt": "2024-06-05T06:32:31.481Z",
    "sales": 4
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 193.26,
      "price": 193.26
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/GhRtkNVr/Lettuce-1lb.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34be",
    "slug": "lettuce",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Lettuce"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 367,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.418Z",
    "updatedAt": "2024-06-05T06:32:31.480Z",
    "sales": 2
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 58.66,
      "price": 58.66
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/5y7rNDFv/Radicchio-12ct.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34bd",
    "slug": "radicchio",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Radicchio"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 77,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.418Z",
    "updatedAt": "2024-06-05T06:32:31.480Z",
    "sales": 3
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 134.63,
      "price": 134.63
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/wvzZWXpt/Parsley-each.jpgg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34bc",
    "slug": "parsley",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Parsley"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 171,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.418Z",
    "updatedAt": "2023-10-24T10:28:34.168Z",
    "sales": 1
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 19.57,
      "price": 19.57
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/9FN3WwGS/Organic-Purple-Cauliflower-1lb.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b9",
    "slug": "organic-purple-cauliflower",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Purple Cauliflower"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 29,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.417Z",
    "updatedAt": "2023-04-19T04:38:55.417Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 71.18,
      "price": 71.18
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/cJL8fjK6/Ahold-Acorn-Squash-1ct.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b8",
    "slug": "ahold-acorn-squash",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Ahold Acorn Squash"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 766,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.417Z",
    "updatedAt": "2023-10-24T10:28:34.168Z",
    "sales": 1
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 247.39,
      "price": 247.39
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/d3r7qcfN/Bok-Choy-Cabbage-per-lb.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        "price": 247.39,
        "originalPrice": "247.39",
        "quantity": 99,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9616-0",
        "barcode": "",
        "image": "https://i.postimg.cc/d3r7qcfN/Bok-Choy-Cabbage-per-lb.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        "price": 247.39,
        "originalPrice": "247.39",
        "quantity": 99,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9616-1",
        "barcode": "",
        "image": "https://i.postimg.cc/d3r7qcfN/Bok-Choy-Cabbage-per-lb.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        "price": 247.39,
        "originalPrice": "247.39",
        "quantity": 99,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9616-2",
        "barcode": "",
        "image": "https://i.postimg.cc/d3r7qcfN/Bok-Choy-Cabbage-per-lb.jpg"
      }
    ],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b7",
    "slug": "bok-choy-cabbage",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c9616",
    "title": {
      "data": "Bok Choy Cabbage"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 297,
    "isCombination": true,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.417Z",
    "updatedAt": "2023-04-19T04:38:55.417Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 189.89,
      "price": 189.89
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        "price": 189.89,
        "originalPrice": "189.89",
        "quantity": 434,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9615-0",
        "barcode": "",
        "image": "https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        "price": 189.89,
        "originalPrice": "189.89",
        "quantity": 434,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9615-1",
        "barcode": "",
        "image": "https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        "price": 189.89,
        "originalPrice": "189.89",
        "quantity": 434,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9615-2",
        "barcode": "",
        "image": "https://i.postimg.cc/FstZ49qv/Strawberries-Package-2-25-oz.jpg"
      }
    ],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b6",
    "slug": "strawberries-package",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c9615",
    "title": {
      "data": "Strawberries Package"
    },
    "description": {
      "data": "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits."
    },
    "category": {
      "_id": "632aca454d87ff2494210c00",
      "name": {
        "data": "Fresh Fruits"
      }
    },
    "stock": 1302,
    "isCombination": true,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.417Z",
    "updatedAt": "2023-04-19T04:38:55.417Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 157,
      "price": 157
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/N0C2D4TD/Aloe-Vera-Leaf-each.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b5",
    "slug": "aloe-vera-leaf",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Aloe Vera Leaf"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 14,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.416Z",
    "updatedAt": "2023-04-19T04:38:55.416Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 46.34,
      "price": 46.34
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/8Ck40tYr/Pineapple-1-5lb.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b4",
    "slug": "pineapple-imported",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Pineapple Imported"
    },
    "description": {
      "data": "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits."
    },
    "category": {
      "_id": "632aca454d87ff2494210c00",
      "name": {
        "data": "Fresh Fruits"
      }
    },
    "stock": 504,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.416Z",
    "updatedAt": "2023-10-22T13:56:16.692Z",
    "sales": 1
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 224.85,
      "price": 224.85
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/3w03MCVn/Organic-Broccoli-10oz.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b3",
    "slug": "organic-broccoli",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Broccoli"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 208,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.416Z",
    "updatedAt": "2023-10-24T10:28:34.168Z",
    "sales": 3
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 106.49,
      "price": 106.49
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/DZdkFCgd/Organic-Pinkerton-Avocado-each.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b2",
    "slug": "organic-pinkerton-avocado",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Pinkerton Avocado"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 258,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.416Z",
    "updatedAt": "2023-04-19T04:38:55.416Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 15.06,
      "price": 15.06
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/W1CP7qzr/Organic-Kale-8oz.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b1",
    "slug": "organic-kale",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Kale"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 37,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.415Z",
    "updatedAt": "2023-04-19T04:38:55.415Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 80.97,
      "price": 80.97
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/tCsSNSxS/Yellow-Sweet-Corn-Bag-each.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34b0",
    "slug": "yellow-sweet-corn",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Yellow Sweet Corn"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 776,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.413Z",
    "updatedAt": "2023-04-19T04:38:55.413Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 94.12,
      "price": 94.12
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-0",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-1",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-2",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-3",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-4",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-5",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b7",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-6",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b8",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-7",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b6": "63f078f54b86ed26b05281b9",
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "price": 94.12,
        "originalPrice": "94.12",
        "quantity": 368,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c960e-8",
        "barcode": "",
        "image": "https://i.postimg.cc/W4ytg4Lf/Green-Cauliflower-12ct.jpg"
      }
    ],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34af",
    "slug": "green-cauliflower",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c960e",
    "title": {
      "data": "Green Cauliflower"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 3312,
    "isCombination": true,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.413Z",
    "updatedAt": "2023-04-19T04:38:55.413Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 142.4,
      "price": 142.4
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/rmScsy84/Organic-Green-Cauliflower-1lb.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34ad",
    "slug": "organic-green-cauliflower",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Green Cauliflower"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 192,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.413Z",
    "updatedAt": "2023-04-19T04:38:55.413Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 175.32,
      "price": 175.32
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/RZDvbbsW/Organic-Ginger-Root-per-lb.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34ac",
    "slug": "organic-ginger-root",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Ginger Root"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 418,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.413Z",
    "updatedAt": "2023-04-19T04:38:55.413Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 168.23,
      "price": 168.23
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/SNmQX9Yx/Organic-Baby-Carrot-1oz.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34ab",
    "slug": "organic-baby-carrot",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Baby Carrot"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 257,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.413Z",
    "updatedAt": "2023-04-19T04:38:55.413Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 15.56,
      "price": 15.56
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/QCJX48wD/Orange-Cherry-Tomato-5qt.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34aa",
    "slug": "organic-cherry-tomato",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Cherry Tomato"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 683,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.413Z",
    "updatedAt": "2023-04-19T04:38:55.413Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 116.45,
      "price": 116.45
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/tJjqNZrD/Orange-Bell-Pepper-22ct.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34a9",
    "slug": "organic-bell-pepper",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Organic Bell Pepper"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 345,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.412Z",
    "updatedAt": "2023-04-19T04:38:55.412Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 67.5,
      "price": 67.5
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/0jnsGtK2/Old-Oak-Farm-Small-Potatoes-each.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "price": 67.5,
        "originalPrice": "67.5",
        "quantity": 338,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9607-0",
        "barcode": "",
        "image": "https://i.postimg.cc/0jnsGtK2/Old-Oak-Farm-Small-Potatoes-each.jpg"
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "price": 67.5,
        "originalPrice": "67.5",
        "quantity": 338,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9607-1",
        "barcode": "",
        "image": "https://i.postimg.cc/0jnsGtK2/Old-Oak-Farm-Small-Potatoes-each.jpg"
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "price": 67.5,
        "originalPrice": "67.5",
        "quantity": 338,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9607-2",
        "barcode": "",
        "image": "https://i.postimg.cc/0jnsGtK2/Old-Oak-Farm-Small-Potatoes-each.jpg"
      }
    ],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34a8",
    "slug": "potatoes",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c9607",
    "title": {
      "data": "Potatoes"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 1014,
    "isCombination": true,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.412Z",
    "updatedAt": "2023-04-19T04:38:55.412Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 30.78,
      "price": 30.78
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/251Skfbd/Mint-6-5ct.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34a7",
    "slug": "mint",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Mint"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 731,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.412Z",
    "updatedAt": "2023-04-19T04:38:55.412Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 67.54,
      "price": 67.54
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/2Sc5N568/Mini-Pumpkin-Box-each.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34a6",
    "slug": "mini-pumpkin",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Mini Pumpkin"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 53,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.412Z",
    "updatedAt": "2023-04-19T04:38:55.412Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 185.95,
      "price": 185.95
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/kgkkSrYv/Organic-White-Radish-each.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34a5",
    "slug": "organic-white-radish",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c9604",
    "title": {
      "data": "Organic White Radish"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 302,
    "isCombination": true,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.412Z",
    "updatedAt": "2023-04-19T04:38:55.412Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 95.57,
      "price": 95.57
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/prbTc1df/Iglotex-Cauliflower-Florets.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34a3",
    "slug": "iglotex-cauliflower",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c9602",
    "title": {
      "data": "Iglotex Cauliflower"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 61,
    "isCombination": true,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.412Z",
    "updatedAt": "2023-04-19T04:38:55.412Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 157.58,
      "price": 157.58
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/0ycz5ftv/French-Green-Beans-16ct.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b3",
        "price": 157.58,
        "originalPrice": "157.58",
        "quantity": 273,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9601-0",
        "barcode": "",
        "image": "https://i.postimg.cc/0ycz5ftv/French-Green-Beans-16ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b4",
        "price": 157.58,
        "originalPrice": "157.58",
        "quantity": 273,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9601-1",
        "barcode": "",
        "image": "https://i.postimg.cc/0ycz5ftv/French-Green-Beans-16ct.jpg"
      },
      {
        "63f078f54b86ed26b05281b2": "63f078f54b86ed26b05281b5",
        "price": 157.58,
        "originalPrice": "157.58",
        "quantity": 273,
        "discount": "0.00",
        "productId": "63f3484bd3639309840c9601-2",
        "barcode": "",
        "image": "https://i.postimg.cc/0ycz5ftv/French-Green-Beans-16ct.jpg"
      }
    ],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e34a2",
    "slug": "french-green-beans",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c9601",
    "title": {
      "data": "French Green Beans"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 819,
    "isCombination": true,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.411Z",
    "updatedAt": "2023-04-19T04:38:55.411Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 43.12,
      "price": 43.12
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/ZYdvP6qP/Chinese-Broccoli-Gai-Lan-2lb.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e349f",
    "slug": "chinese-broccoli",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Chinese Broccoli"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 677,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.411Z",
    "updatedAt": "2023-04-19T04:38:55.411Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 159.26,
      "price": 159.26
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/50ZYd2sF/Bicolor-Sweet-Corn-43ct.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e349e",
    "slug": "bicolor-sweet-corn",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Bicolor Sweet Corn"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 264,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.411Z",
    "updatedAt": "2023-04-19T04:38:55.411Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 32.71,
      "price": 32.71
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/RF36DHLB/Asparagus-15oz.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e349d",
    "slug": "asparagus",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Asparagus"
    },
    "description": {
      "data": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "data": "Fresh Vegetable"
      }
    },
    "stock": 666,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.411Z",
    "updatedAt": "2023-04-19T04:38:55.411Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 140.32,
      "price": 140.32
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/RhWczY1N/Cranberries-Package-9-5-oz.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e349a",
    "slug": "cranberries",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Cranberries"
    },
    "description": {
      "data": "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits."
    },
    "category": {
      "_id": "632aca454d87ff2494210c00",
      "name": {
        "data": "Fresh Fruits"
      }
    },
    "stock": 276,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.410Z",
    "updatedAt": "2023-04-19T04:38:55.410Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 66.52,
      "price": 66.52
    },
    "categories": [
      "62d2bbd22e63b40520194f1b",
      "632aca2b4d87ff2494210be8",
      "632aca374d87ff2494210bf0",
      "632aca3d4d87ff2494210bf8",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10"
    ],
    "image": [
      "https://i.postimg.cc/9Mn71p3V/Mandarin-Clementine-22lb.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e3499",
    "slug": "mandarin-clementine",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Mandarin Clementine"
    },
    "description": {
      "data": "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits."
    },
    "category": {
      "_id": "632aca454d87ff2494210c00",
      "name": {
        "data": "Fresh Fruits"
      }
    },
    "stock": 246,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.410Z",
    "updatedAt": "2023-04-19T04:38:55.410Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 93.5,
      "price": 93.5
    },
    "categories": [
      "632aca2b4d87ff2494210be8",
      "632aca3d4d87ff2494210bf8",
      "632aca374d87ff2494210bf0",
      "632aca454d87ff2494210c00",
      "632aca594d87ff2494210c10",
      "62d2bbd22e63b40520194f1b"
    ],
    "image": [
      "https://i.postimg.cc/Yq43cv8b/avocado-juice-fruit-vegetable.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e3498",
    "slug": "avocado-juice-fruit",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Avocado juice Fruit"
    },
    "description": {
      "data": "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits."
    },
    "category": {
      "_id": "632aca454d87ff2494210c00",
      "name": {
        "data": "Fresh Fruits"
      }
    },
    "stock": 176,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.410Z",
    "updatedAt": "2023-04-19T04:38:55.410Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 17.67,
      "price": 17.67
    },
    "categories": [
      "632ab1e04d87ff2494210a6a"
    ],
    "image": [
      "https://i.postimg.cc/yNpW3y8J/komola-Orange-imported-50-gm-1-kg.webp"
    ],
    "tag": [
      "[\"organic food\",\"guava-jelly\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e3491",
    "slug": "Orange-imported",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Orange Imported"
    },
    "description": {
      "data": "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity."
    },
    "category": {
      "_id": "632ab1e04d87ff2494210a6a",
      "name": {
        "data": "Jam \u0026 Jelly"
      }
    },
    "stock": 186,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.409Z",
    "updatedAt": "2023-04-19T04:38:55.409Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 171.22,
      "price": 171.22
    },
    "categories": [
      "632ab1e04d87ff2494210a6a"
    ],
    "image": [
      "https://i.postimg.cc/y6MgTjXc/china-fuji-apple-50-gm-1-kg.webp"
    ],
    "tag": [
      "[\"organic food\",\"guava-jelly\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e3490",
    "slug": "china-fuji-apple",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "China Fuji apple"
    },
    "description": {
      "data": "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity."
    },
    "category": {
      "_id": "632ab1e04d87ff2494210a6a",
      "name": {
        "data": "Jam \u0026 Jelly"
      }
    },
    "stock": 537,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.409Z",
    "updatedAt": "2023-04-19T04:38:55.409Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 61,
      "price": 61
    },
    "categories": [
      "632ab1e04d87ff2494210a6a"
    ],
    "image": [
      "https://i.postimg.cc/9QpDCh3Y/jambura-pomelo-1-pcs.webp"
    ],
    "tag": [
      "[\"organic food\",\"guava-jelly\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e348d",
    "slug": "pomelo",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Pomelo"
    },
    "description": {
      "data": "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity."
    },
    "category": {
      "_id": "632ab1e04d87ff2494210a6a",
      "name": {
        "data": "Jam \u0026 Jelly"
      }
    },
    "stock": 1,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.408Z",
    "updatedAt": "2023-04-19T04:38:55.408Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 27.55,
      "price": 27.55
    },
    "categories": [
      "632ab1e04d87ff2494210a6a"
    ],
    "image": [
      "https://i.postimg.cc/pXK9cjq7/anaros-pineapple-1-pcs.webp"
    ],
    "tag": [
      "[\"organic food\",\"guava-jelly\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e348c",
    "slug": "pineapple",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Pineapple"
    },
    "description": {
      "data": "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity."
    },
    "category": {
      "_id": "632ab1e04d87ff2494210a6a",
      "name": {
        "data": "Jam \u0026 Jelly"
      }
    },
    "stock": 182,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.408Z",
    "updatedAt": "2023-04-19T04:38:55.408Z"
  },
  {
    "prices": {
      "price": 221.96,
      "originalPrice": 221.96,
      "discount": 0
    },
    "categories": [
      "62c827b5a427b63741da9175",
      "632aca6d4d87ff2494210c24",
      "632aca7e4d87ff2494210c34"
    ],
    "image": [
      "https://res.cloudinary.com/dw9jb63uw/image/upload/v1717035660/product/TopSirloinSteak.jpg"
    ],
    "tag": [
      "[]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e3489",
    "slug": "beef-steak",
    "sku": "",
    "barcode": "",
    "productId": "643f705f5b0dbc4a7c9e3489",
    "title": {
      "data": "Beef Steak"
    },
    "description": {
      "data": "The best beef steak ever !!"
    },
    "category": {
      "_id": "632aca6d4d87ff2494210c24",
      "name": {
        "data": "Fish \u0026 Meat"
      }
    },
    "stock": 577,
    "isCombination": false,
    "__v": 1,
    "createdAt": "2023-04-19T04:38:55.408Z",
    "updatedAt": "2024-05-30T02:21:18.890Z"
  },
  {
    "prices": {
      "price": 91.74,
      "originalPrice": 91.74,
      "discount": 0
    },
    "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0604d87ff24942109e7"
    ],
    "image": [
      "https://res.cloudinary.com/dw9jb63uw/image/upload/v1716532200/product/aquafina.jpg"
    ],
    "tag": [
      "[\"drinks\",\"water\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705f5b0dbc4a7c9e346a",
    "slug": "aquafina-water",
    "sku": "",
    "barcode": "",
    "productId": "643f705f5b0dbc4a7c9e346a",
    "title": {
      "data": "Aquafina water"
    },
    "description": {
      "data": "Aquafina water. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances."
    },
    "category": {
      "_id": "632ab0604d87ff24942109e7",
      "name": {
        "data": "Water"
      }
    },
    "stock": 182,
    "isCombination": false,
    "__v": 1,
    "createdAt": "2023-04-19T04:38:55.406Z",
    "updatedAt": "2024-07-30T21:53:20.727Z",
    "sales": 1
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 56.36,
      "price": 56.36
    },
    "categories": [
      "62cfab19484d89068aa7a7ef",
      "62cfab4b484d89068aa7a7ff",
      "62cfab39484d89068aa7a7fb",
      "62cfab28484d89068aa7a7f5",
      "62cfab4b484d89068aa7a7ff"
    ],
    "image": [
      "https://i.postimg.cc/hPmDFzS0/Hibiscus-Premium-Whole-Baby-Corn-425g.jpg"
    ],
    "tag": [
      "[\"hibiscus-corn\",\"canned-food\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705e5b0dbc4a7c9e33e1",
    "slug": "hibiscus-baby-corn",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
      "data": "Hibiscus Baby Corn"
    },
    "description": {
      "data": "canned food - food preserved by canning. canned foods, canned goods, tinned goods. food product, foodstuff - a substance that can be used or prepared for use as food. canned meat, tinned meat - meat preserved in a can or tin."
    },
    "category": {
      "_id": "62cfab4b484d89068aa7a7ff",
      "name": {
        "data": "Canned Food"
      }
    },
    "stock": 485,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.390Z",
    "updatedAt": "2023-04-19T04:38:55.390Z"
  },
  {
    "prices": {
      "discount": 0,
      "originalPrice": 54.43,
      "price": 54.43
    },
    "categories": [
      "632ab1e04d87ff2494210a6a"
    ],
    "image": [
      "https://i.postimg.cc/vTdHmftM/Pran-Mixed-Fruit-Jam-375gm.jpg"
    ],
    "tag": [
      "[\"pran-jam\",\"jam \u0026 jelly\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "643f705e5b0dbc4a7c9e33c4",
    "slug": "pran-mixed-fruit-jam",
    "sku": "",
    "barcode": "",
    "productId": "639dc0f5c2fce72b697282ad",
    "title": {
      "data": "Pran Mixed Fruit Jam"
    },
    "description": {
      "data": "Jams and jellies are spreads typically made from fruit, sugar, and pectin. Jelly is made with the juice of the fruit; jam uses the meat of the fruit as well. Some vegetable jellies are also produced."
    },
    "category": {
      "_id": "632ab1e04d87ff2494210a6a",
      "name": {
        "data": "Jam \u0026 Jelly"
      }
    },
    "stock": 298,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-19T04:38:55.388Z",
    "updatedAt": "2023-04-19T04:38:55.388Z"
  }
]

export function getProductById(title) {
  return popularProducts.find((product) => product.slug === title);
}

export function getProductByChildrenCategory(category) {
  return popularProducts.filter(
    (product) => product?.children?.toLowerCase() === category?.toLowerCase()
  );
}

export function getProductByParentCategory(category) {
  return popularProducts.filter(
    (product) => product?.parent?.toLowerCase() === category?.toLowerCase()
  );
}

export function getProductByName(value) {
  return popularProducts.filter((product) =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );
}
