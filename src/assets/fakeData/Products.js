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

export const coupon = [
  {
    "status": "show",
    "_id": "643970d0e58a401b6c62c756",
    "title": {
      "en": "Summer Gift Voucher",
      "de": "sommer geschenkgutschein",
      "hy": "ամառային նվեր - վաուչեր",
      "af": "somer geskenkbewys",
      "cs": "letní dárkový poukaz",
      "bn": "গ্রীষ্মের উপহার ভাউচার",
      "az": "yay hədiyyə vauçeri",
      "ln": "sanza ya Zomi na Mibale"
    },
    "couponCode": "SUMMER24",
    "endTime": "2024-10-18T20:38:00.000Z",
    "minimumAmount": 500,
    "productType": "Grocery",
    "logo": "https://i.ibb.co/23kQcB9/ins3.jpg",
    "discountType": {
      "type": "percentage",
      "value": 10
    },
    "__v": 0,
    "createdAt": "2024-08-28T03:03:03.136Z",
    "updatedAt": "2024-09-03T15:01:54.127Z"
  },
  {
    "status": "show",
    "_id": "643970d0e58a401b6c62c755",
    "title": {
      "en": "Winter Gift Voucher",
      "de": "wintergeschenkgutschein",
      "az": "qış hədiyyə vauçeri",
      "ln": "zima Mpho Mpho Mpho",
      "ar": "قسيمة هدايا الشتاء",
      "pt": "voucher de presente de inverno"
    },
    "couponCode": "WINTER24",
    "endTime": "2024-05-31T20:19:00.000Z",
    "minimumAmount": 1500,
    "productType": "Grocery",
    "logo": "https://i.ibb.co/wBBYm7j/ins4.jpg",
    "discountType": {
      "type": "fixed",
      "value": 100
    },
    "__v": 0,
    "createdAt": "2024-08-28T03:03:03.136Z",
    "updatedAt": "2024-09-03T13:45:57.168Z"
  },
  {
    "status": "show",
    "_id": "643970d0e58a401b6c62c754",
    "title": {
      "en": "Summer Gift Voucher",
      "de": "sommer geschenkgutschein"
    },
    "couponCode": "SUMMER24",
    "endTime": "2024-12-20T00:56:00.000Z",
    "minimumAmount": 1000,
    "productType": "Cloths",
    "logo": "https://i.ibb.co/4thS4Z1/ins2.jpg",
    "discountType": {
      "type": "percentage",
      "value": 10
    },
    "__v": 0,
    "createdAt": "2024-08-28T03:03:03.136Z",
    "updatedAt": "2024-08-28T03:03:03.136Z"
  },
  {
    "status": "show",
    "_id": "643970d0e58a401b6c62c753",
    "title": {
      "en": "August Gift Voucher",
      "de": "august geschenkgutschein",
      "hy": "օգոստոսյան նվեր վաուչեր",
      "af": "augustus geskenkbewys",
      "cs": "augustový dárkový poukaz",
      "az": "avqust hədiyyə vauçeri",
      "ln": "sánzá ya zómi na mɔ̌kɔ́",
      "ar": "قسيمة هدايا أغسطس",
      "pt": "voucher presente agosto"
    },
    "couponCode": "AUGUST24",
    "endTime": "2024-10-31T08:30:00.000Z",
    "minimumAmount": 2000,
    "productType": "Grocery",
    "logo": "https://i.ibb.co/PDLPDHc/ins1.jpg",
    "discountType": {
      "type": "percentage",
      "value": 50
    },
    "__v": 0,
    "createdAt": "2024-08-28T03:03:03.135Z",
    "updatedAt": "2024-08-28T18:11:37.008Z"
  }
]

export const discountProducts = [
  {
    "prices": {
      "price": 566,
      "originalPrice": 2000,
      "discount": 1434
    },
    "categories": [],
    "image": [],
    "tag": [
      "[]"
    ],
    "variants": [],
    "status": "show",
    "_id": "66d67d7e89865f000c1471a1",
    "productId": "66d67d7e89865f000c1471a0",
    "sku": "sws",
    "barcode": "swswsws",
    "title": {
      "en": "edddwd"
    },
    "description": {
      "en": "wwsswsw"
    },
    "slug": "edddwd",
    "category": {
      "_id": "66d678c61024c3000cdd8fa9",
      "name": "How"
    },
    "stock": 0,
    "isCombination": false,
    "createdAt": "2024-09-03T03:07:42.748Z",
    "updatedAt": "2024-09-04T04:27:10.271Z",
    "__v": 0
  },
  {
    "prices": {
      "price": 30.99,
      "originalPrice": 31,
      "discount": 0.010000000000001563
    },
    "categories": [],
    "image": [],
    "tag": [
      "[]"
    ],
    "variants": [],
    "status": "show",
    "_id": "66d5b83eb749ad000d5f8d87",
    "productId": "66d5b83eb749ad000d5f8d86",
    "sku": "",
    "barcode": "",
    "title": {
      "en": "asda"
    },
    "description": {
      "en": "dasdasd"
    },
    "slug": "asda",
    "category": {
      "_id": "66d678c61024c3000cdd8fa9",
      "name": "How"
    },
    "stock": 1,
    "isCombination": false,
    "createdAt": "2024-09-02T13:06:06.369Z",
    "updatedAt": "2024-09-03T03:12:55.857Z",
    "__v": 2
  },
  {
    "prices": {
      "price": 160,
      "originalPrice": 174.97,
      "discount": 14.969999999999999
    },
    "categories": [
      "632ab2864d87ff2494210a8a",
      "632ab2c34d87ff2494210ab2",
      "632ab2f04d87ff2494210ad0"
    ],
    "image": [
      "https://i.ibb.co/9g7vDQJ/Himalaya-Baby-Powder-100g.jpg",
      "https://i.ibb.co/9g7vDQJ/Himalaya-Baby-Powder-100g.jpg"
    ],
    "tag": [
      "[\"baby care\",\"baby accessories\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "644500c2839a5e0c2f5c17d3",
    "slug": "himalaya-powder",
    "sku": "",
    "barcode": "",
    "productId": "639dc0f5c2fce72b697282e1",
    "title": {
      "en": "Himalaya Powder"
    },
    "description": {
      "en": "Baby Products are products intended to be used on infants and category under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams."
    },
    "category": {
      "_id": "632ab2f04d87ff2494210ad0",
      "name": {
        "en": "Skin Care"
      }
    },
    "stock": 5472,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.443Z",
    "updatedAt": "2023-04-23T09:56:57.740Z"
  },
  {
    "prices": {
      "price": 90,
      "originalPrice": 106.06,
      "discount": 16.060000000000002
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
    "_id": "644500c2839a5e0c2f5c17cf",
    "slug": "kale-sprouts",
    "sku": "",
    "barcode": "",
    "productId": "644500c2839a5e0c2f5c17cf",
    "title": {
      "en": "Kale Sprouts"
    },
    "description": {
      "en": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "en": "Fresh Vegetable"
      }
    },
    "stock": 298,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.442Z",
    "updatedAt": "2024-09-04T06:23:09.548Z",
    "sales": 1
  },
  {
    "prices": {
      "price": 45,
      "originalPrice": 58.66,
      "discount": 13.659999999999997
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
    "_id": "644500c2839a5e0c2f5c17ca",
    "slug": "radicchio",
    "sku": "",
    "barcode": "",
    "productId": "644500c2839a5e0c2f5c17ca",
    "title": {
      "en": "Radicchio"
    },
    "description": {
      "en": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "en": "Fresh Vegetable"
      }
    },
    "stock": 80,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.442Z",
    "updatedAt": "2023-04-23T09:57:17.165Z"
  },
  {
    "prices": {
      "price": 140,
      "originalPrice": 156.95,
      "discount": 16.94999999999999
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
      "https://i.postimg.cc/NFXkHVKZ/Strawberries-9-25oz.jpg"
    ],
    "tag": [
      "[\"fresh fruits\",\"fruits\",\"vegetable\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "644500c2839a5e0c2f5c17c8",
    "slug": "strawberrie",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c961a",
    "title": {
      "en": "Strawberrie"
    },
    "description": {
      "en": "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits."
    },
    "category": {
      "_id": "632aca454d87ff2494210c00",
      "name": {
        "en": "Fresh Fruits"
      }
    },
    "stock": 422,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.442Z",
    "updatedAt": "2024-09-04T06:23:09.986Z",
    "sales": 1
  },
  {
    "prices": {
      "price": 30,
      "originalPrice": 46.34,
      "discount": 16.340000000000003
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
    "_id": "644500c2839a5e0c2f5c17c1",
    "slug": "pineapple-imported",
    "sku": "",
    "barcode": "",
    "productId": "644500c2839a5e0c2f5c17c1",
    "title": {
      "en": "Pineapple Imported"
    },
    "description": {
      "en": "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits."
    },
    "category": {
      "_id": "632aca454d87ff2494210c00",
      "name": {
        "en": "Fresh Fruits"
      }
    },
    "stock": 505,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.442Z",
    "updatedAt": "2023-04-23T09:57:45.926Z",
    "sales": 5
  },
  {
    "prices": {
      "price": 150,
      "originalPrice": 168.23,
      "discount": 18.22999999999999
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
    "_id": "644500c2839a5e0c2f5c17b8",
    "slug": "organic-baby-carrot",
    "sku": "",
    "barcode": "",
    "productId": "644500c2839a5e0c2f5c17b8",
    "title": {
      "en": "Organic Baby Carrot"
    },
    "description": {
      "en": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "en": "Fresh Vegetable"
      }
    },
    "stock": 257,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.442Z",
    "updatedAt": "2023-04-23T09:58:19.450Z",
    "sales": 11
  },
  {
    "prices": {
      "price": 55,
      "originalPrice": 67.54,
      "discount": 12.540000000000006
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
    "_id": "644500c2839a5e0c2f5c17b3",
    "slug": "mini-pumpkin",
    "sku": "",
    "barcode": "",
    "productId": "644500c2839a5e0c2f5c17b3",
    "title": {
      "en": "Mini Pumpkin"
    },
    "description": {
      "en": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "en": "Fresh Vegetable"
      }
    },
    "stock": 53,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.442Z",
    "updatedAt": "2023-04-23T09:58:08.453Z"
  },
  {
    "prices": {
      "price": 80,
      "originalPrice": 95.57,
      "discount": 15.569999999999993
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
    "_id": "644500c2839a5e0c2f5c17b0",
    "slug": "iglotex-cauliflower",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c9602",
    "title": {
      "en": "Iglotex Cauliflower"
    },
    "description": {
      "en": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "en": "Fresh Vegetable"
      }
    },
    "stock": 61,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.441Z",
    "updatedAt": "2023-04-23T09:58:00.092Z"
  },
  {
    "prices": {
      "price": 140,
      "originalPrice": 157.58,
      "discount": 17.580000000000013
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
    "variants": [],
    "status": "show",
    "_id": "644500c2839a5e0c2f5c17af",
    "slug": "french-green-beans",
    "sku": "",
    "barcode": "",
    "productId": "63f3484bd3639309840c9601",
    "title": {
      "en": "French Green Beans"
    },
    "description": {
      "en": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "en": "Fresh Vegetable"
      }
    },
    "stock": 819,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.441Z",
    "updatedAt": "2023-04-23T09:58:41.045Z"
  },
  {
    "prices": {
      "price": 30,
      "originalPrice": 43.12,
      "discount": 13.119999999999997
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
    "_id": "644500c2839a5e0c2f5c17ac",
    "slug": "chinese-broccoli",
    "sku": "",
    "barcode": "",
    "productId": "644500c2839a5e0c2f5c17ac",
    "title": {
      "en": "Chinese Broccoli"
    },
    "description": {
      "en": "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi."
    },
    "category": {
      "_id": "632aca374d87ff2494210bf0",
      "name": {
        "en": "Fresh Vegetable"
      }
    },
    "stock": 677,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.441Z",
    "updatedAt": "2023-04-23T09:58:27.685Z"
  },
  {
    "prices": {
      "price": 10,
      "originalPrice": 17.67,
      "discount": 7.670000000000002
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
    "_id": "644500c2839a5e0c2f5c179e",
    "slug": "Orange-imported",
    "sku": "",
    "barcode": "",
    "productId": "644500c2839a5e0c2f5c179e",
    "title": {
      "en": "Orange Imported"
    },
    "description": {
      "en": "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity."
    },
    "category": {
      "_id": "632ab1e04d87ff2494210a6a",
      "name": {
        "en": "Jam \u0026 Jelly"
      }
    },
    "stock": 186,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.441Z",
    "updatedAt": "2023-04-23T09:59:05.805Z"
  },
  {
    "prices": {
      "price": 50,
      "originalPrice": 61,
      "discount": 11
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
    "_id": "644500c2839a5e0c2f5c179a",
    "slug": "pomelo",
    "sku": "",
    "barcode": "",
    "productId": "644500c2839a5e0c2f5c179a",
    "title": {
      "en": "Pomelo"
    },
    "description": {
      "en": "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity."
    },
    "category": {
      "_id": "632ab1e04d87ff2494210a6a",
      "name": {
        "en": "Jam \u0026 Jelly"
      }
    },
    "stock": 1,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.441Z",
    "updatedAt": "2023-04-23T09:58:53.878Z"
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

export const categories = [
  {
    "_id": "66d678c61024c3000cdd8fa9",
    "name": "How",
    "parentName": "HO",
    "status": "show",
    "children": []
  },
  {
    "_id": "66d6788b005085000cd548d3",
    "name": "How",
    "parentName": "HO",
    "status": "show",
    "children": []
  },
  {
    "_id": "62c827b5a427b63741da9175",
    "name": {
      "en": "Home"
    },
    "parentName": "Home",
    "description": {
      "en": "This is Home Category"
    },
    "status": "show",
    "children": [
      {
        "_id": "66d42bc5d858a0000c8c49f9",
        "name": {
          "en": "Brijesh Vaghasiya"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "sfefegfgrg"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1725180866/category/Inverted-Blue.webp",
        "status": "show",
        "children": [
          {
            "_id": "66d7b9f2d6b63d000c52df53",
            "name": {
              "fr": "dxcccvcvcvc"
            },
            "parentId": "66d42bc5d858a0000c8c49f9",
            "parentName": "Home",
            "description": {
              "fr": "ccxxccxxc  vcvcvc  vcvc"
            },
            "icon": "https://res.cloudinary.com/ahossain/image/upload/v1687933752/category/1.png",
            "status": "show",
            "children": []
          }
        ]
      },
      {
        "_id": "66d3709f3bbcdc000ceaa5dc",
        "name": {
          "pt": "Energetico",
          "en": "Test"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "pt": "todos os tipos de energetico"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1725132956/category/monster.png",
        "status": "show",
        "children": []
      },
      {
        "_id": "66d36e97806fb2000ca4d733",
        "name": {
          "pt": "tenis",
          "en": "Food"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "pt": "tenis"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1725132435/category/capa.jpg",
        "status": "show",
        "children": [
          {
            "_id": "66d7b9668d9def000c3acda3",
            "name": {
              "en": "PyScotty Code"
            },
            "parentId": "66d36e97806fb2000ca4d733",
            "parentName": "Home",
            "description": {
              "en": "sednhjdsnbds dfnmdnd df"
            },
            "icon": "",
            "status": "show",
            "children": []
          }
        ]
      },
      {
        "_id": "632aca6d4d87ff2494210c24",
        "name": {
          "en": "Fish & Meat"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Fish & Meat"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/carp-fish_paxzrt.png",
        "status": "show",
        "children": [
          {
            "_id": "632aca7e4d87ff2494210c34",
            "name": {
              "en": "Fish"
            },
            "parentId": "632aca6d4d87ff2494210c24",
            "parentName": "Fish & Meats",
            "description": {
              "en": "Fish"
            },
            "icon": "",
            "status": "show",
            "children": [
              {
                "_id": "632aca9b4d87ff2494210c4f",
                "name": {
                  "en": "Rui"
                },
                "parentId": "632aca7e4d87ff2494210c34",
                "parentName": "Fish",
                "description": {
                  "en": "Rui"
                },
                "icon": "",
                "status": "show",
                "children": [
                  {
                    "_id": "66d5d9865f8bbf000c81d8e1",
                    "name": {
                      "en": "New Category"
                    },
                    "parentId": "632aca9b4d87ff2494210c4f",
                    "parentName": "Rui",
                    "description": {
                      "en": "dsaf"
                    },
                    "icon": "",
                    "status": "show",
                    "children": []
                  },
                  {
                    "_id": "66d36e653d40f2000cce26d3",
                    "name": {
                      "pt": "tenis"
                    },
                    "parentId": "632aca9b4d87ff2494210c4f",
                    "parentName": "Rui",
                    "description": {
                      "pt": "aa"
                    },
                    "icon": "",
                    "status": "show",
                    "children": []
                  }
                ]
              },
              {
                "_id": "632aca944d87ff2494210c47",
                "name": {
                  "en": "Tuna"
                },
                "parentId": "632aca7e4d87ff2494210c34",
                "parentName": "Fish",
                "description": {
                  "en": "Tuna"
                },
                "icon": "",
                "status": "show",
                "children": []
              }
            ]
          },
          {
            "_id": "632aca754d87ff2494210c2c",
            "name": {
              "en": "Meat"
            },
            "parentId": "632aca6d4d87ff2494210c24",
            "parentName": "Fish & Meats",
            "description": {
              "en": "Meat"
            },
            "icon": "",
            "status": "show",
            "children": [
              {
                "_id": "632aca864d87ff2494210c3c",
                "name": {
                  "en": "Beef"
                },
                "parentId": "632aca754d87ff2494210c2c",
                "parentName": "Meat",
                "description": {
                  "en": "Beef"
                },
                "icon": "",
                "status": "show",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "_id": "632aca2b4d87ff2494210be8",
        "name": {
          "en": "Fruits & Vegetable"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Fruits & Vegetable"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png",
        "status": "show",
        "children": [
          {
            "_id": "63f12afdcc480f0454f475dd",
            "name": {
              "en": "Baby Food"
            },
            "parentId": "632aca2b4d87ff2494210be8",
            "parentName": "Fruits & Vegetable",
            "description": {
              "en": "Baby Food"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632aca454d87ff2494210c00",
            "name": {
              "en": "Fresh Fruits"
            },
            "parentId": "632aca2b4d87ff2494210be8",
            "parentName": "Fruits & Vegetables",
            "description": {
              "en": "Fresh Fruits"
            },
            "icon": "",
            "status": "show",
            "children": [
              {
                "_id": "632aca594d87ff2494210c10",
                "name": {
                  "en": "Orange"
                },
                "parentId": "632aca454d87ff2494210c00",
                "parentName": "Fresh Fruits",
                "description": {
                  "en": "Orange"
                },
                "icon": "",
                "status": "show",
                "children": []
              },
              {
                "_id": "632aca524d87ff2494210c08",
                "name": {
                  "en": "Apple"
                },
                "parentId": "632aca454d87ff2494210c00",
                "parentName": "Fresh Fruits",
                "description": {
                  "en": "Apple"
                },
                "icon": "",
                "status": "show",
                "children": []
              }
            ]
          },
          {
            "_id": "632aca3d4d87ff2494210bf8",
            "name": {
              "en": "Dry Fruits"
            },
            "parentId": "632aca2b4d87ff2494210be8",
            "parentName": "Fruits & Vegetables",
            "description": {
              "en": "Dry Fruits"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632aca374d87ff2494210bf0",
            "name": {
              "en": "Fresh Vegetable"
            },
            "parentId": "632aca2b4d87ff2494210be8",
            "parentName": "Fruits & Vegetables",
            "description": {
              "en": "Fresh Vegetable"
            },
            "icon": "",
            "status": "show",
            "children": []
          }
        ]
      },
      {
        "_id": "632aca0b4d87ff2494210bc4",
        "name": {
          "en": "Cooking Essentials"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Cooking Essentials"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/frying-pan_vglm5c.png",
        "status": "show",
        "children": [
          {
            "_id": "632aca184d87ff2494210bd4",
            "name": {
              "en": "Flour"
            },
            "parentId": "632aca0b4d87ff2494210bc4",
            "parentName": "Cooking Essential",
            "description": {
              "en": "Flour"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632aca144d87ff2494210bcc",
            "name": {
              "en": "Oil"
            },
            "parentId": "632aca0b4d87ff2494210bc4",
            "parentName": "Cooking Essential",
            "description": {
              "en": "Oil"
            },
            "icon": "",
            "status": "show",
            "children": []
          }
        ]
      },
      {
        "_id": "632ac9864d87ff2494210b49",
        "name": {
          "en": "Household Tools"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Household Tools"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/spray_pebsjt.png",
        "status": "show",
        "children": [
          {
            "_id": "632ac9c24d87ff2494210b84",
            "name": {
              "en": "Water Filter"
            },
            "parentId": "632ac9864d87ff2494210b49",
            "parentName": "Household Tool",
            "description": {
              "en": "Water Filter"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ac9ba4d87ff2494210b7c",
            "name": {
              "en": "Cleaning Tools"
            },
            "parentId": "632ac9864d87ff2494210b49",
            "parentName": "Household Tool",
            "description": {
              "en": "Cleaning Tools"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ac9b24d87ff2494210b74",
            "name": {
              "en": "Pest Control"
            },
            "parentId": "632ac9864d87ff2494210b49",
            "parentName": "Household Tool",
            "description": {
              "en": "Pest Control"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ac99d4d87ff2494210b64",
            "name": {
              "en": "Air Freshener"
            },
            "parentId": "632ac9864d87ff2494210b49",
            "parentName": "Household Tool",
            "description": {
              "en": "Air Freshener"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ac9984d87ff2494210b5c",
            "name": {
              "en": "Luandry"
            },
            "parentId": "632ac9864d87ff2494210b49",
            "parentName": "Household Tool",
            "description": {
              "en": "Luandry"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ac9934d87ff2494210b54",
            "name": {
              "en": "Cleaner"
            },
            "parentId": "632ac9864d87ff2494210b49",
            "parentName": "Household Tool",
            "description": {
              "en": "Cleaner"
            },
            "icon": "",
            "status": "show",
            "children": []
          }
        ]
      },
      {
        "_id": "632ab4434d87ff2494210b0e",
        "name": {
          "en": "Pet Care"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Pet Care"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340707/category%20icon/cat_tznwmq.png",
        "status": "show",
        "children": [
          {
            "_id": "66d305df26cb8c000c32f5e3",
            "name": {
              "ko": "trest"
            },
            "parentId": "632ab4434d87ff2494210b0e",
            "parentName": "Pet Care",
            "description": {
              "ko": "awdwadwadwa"
            },
            "icon": "https://res.cloudinary.com/ahossain/image/upload/v1725105625/category/mong_slim.jpg",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ab45b4d87ff2494210b21",
            "name": {
              "en": "Dog Care"
            },
            "parentId": "632ab4434d87ff2494210b0e",
            "parentName": "Pet Cares",
            "description": {
              "en": "Dog Care"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ab4524d87ff2494210b19",
            "name": {
              "en": "Cat Care"
            },
            "parentId": "632ab4434d87ff2494210b0e",
            "parentName": "Pet Cares",
            "description": {
              "en": "Cat Care"
            },
            "icon": "",
            "status": "show",
            "children": []
          }
        ]
      },
      {
        "_id": "632ab2864d87ff2494210a8a",
        "name": {
          "en": "Beauty & Healths"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Beauty & Healths"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/beauty_vfbmzc.png",
        "status": "show",
        "children": [
          {
            "_id": "632ab2c34d87ff2494210ab2",
            "name": {
              "en": "Women"
            },
            "parentId": "632ab2864d87ff2494210a8a",
            "parentName": "Beauty & Healths",
            "description": {
              "en": "Women"
            },
            "icon": "",
            "status": "show",
            "children": [
              {
                "_id": "632ab3044d87ff2494210ae8",
                "name": {
                  "en": "Bath"
                },
                "parentId": "632ab2c34d87ff2494210ab2",
                "parentName": "Women",
                "description": {
                  "en": "Bath"
                },
                "icon": "",
                "status": "show",
                "children": []
              },
              {
                "_id": "632ab2fd4d87ff2494210ae0",
                "name": {
                  "en": "Cosmetics"
                },
                "parentId": "632ab2c34d87ff2494210ab2",
                "parentName": "Women",
                "description": {
                  "en": "Cosmetics"
                },
                "icon": "",
                "status": "show",
                "children": []
              },
              {
                "_id": "632ab2f84d87ff2494210ad8",
                "name": {
                  "en": "Oral Care"
                },
                "parentId": "632ab2c34d87ff2494210ab2",
                "parentName": "Women",
                "description": {
                  "en": "Oral Care"
                },
                "icon": "",
                "status": "show",
                "children": []
              },
              {
                "_id": "632ab2f04d87ff2494210ad0",
                "name": {
                  "en": "Skin Care"
                },
                "parentId": "632ab2c34d87ff2494210ab2",
                "parentName": "Women",
                "description": {
                  "en": "Skin Care"
                },
                "icon": "",
                "status": "show",
                "children": []
              }
            ]
          },
          {
            "_id": "632ab2b64d87ff2494210aa7",
            "name": {
              "en": "Men"
            },
            "parentId": "632ab2864d87ff2494210a8a",
            "parentName": "Beauty & Healths",
            "description": {
              "en": "Men"
            },
            "icon": "",
            "status": "show",
            "children": [
              {
                "_id": "632ab2df4d87ff2494210ac8",
                "name": {
                  "en": "Body Care"
                },
                "parentId": "632ab2b64d87ff2494210aa7",
                "parentName": "Men",
                "description": {
                  "en": "Body Care"
                },
                "icon": "",
                "status": "show",
                "children": []
              },
              {
                "_id": "632ab2d54d87ff2494210ac0",
                "name": {
                  "en": "Shaving Needs"
                },
                "parentId": "632ab2b64d87ff2494210aa7",
                "parentName": "Men",
                "description": {
                  "en": "Shaving Needs"
                },
                "icon": "",
                "status": "show",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "_id": "632ab1e04d87ff2494210a6a",
        "name": {
          "en": "Jam & Jelly"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Jam & Jelly"
        },
        "icon": "https://i.postimg.cc/rmLvfsMC/strawberry-jam-1.png",
        "status": "show",
        "children": []
      },
      {
        "_id": "632ab14a4d87ff2494210a29",
        "name": {
          "en": "Milk & Dairy"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Milk & Dairy"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/milk_dcl0dr.png",
        "status": "show",
        "children": [
          {
            "_id": "632ab16c4d87ff2494210a44",
            "name": {
              "en": "Butter & Ghee"
            },
            "parentId": "632ab14a4d87ff2494210a29",
            "parentName": "Milk & Dairys",
            "description": {
              "en": "Butter & Ghee"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ab1644d87ff2494210a3c",
            "name": {
              "en": "Ice Cream"
            },
            "parentId": "632ab14a4d87ff2494210a29",
            "parentName": "Milk & Dairys",
            "description": {
              "en": "Ice Cream"
            },
            "icon": "",
            "status": "show",
            "children": []
          }
        ]
      },
      {
        "_id": "632ab0334d87ff24942109c1",
        "name": {
          "en": "Drinks"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Drinks"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/juice_p5gv5k.png",
        "status": "show",
        "children": [
          {
            "_id": "632ab0664d87ff24942109ef",
            "name": {
              "en": "Tea"
            },
            "parentId": "632ab0334d87ff24942109c1",
            "parentName": "Drink",
            "description": {
              "en": "Tea"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ab0604d87ff24942109e7",
            "name": {
              "en": "Water"
            },
            "parentId": "632ab0334d87ff24942109c1",
            "parentName": "Drink",
            "description": {
              "en": "Water"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ab0564d87ff24942109df",
            "name": {
              "en": "Juice"
            },
            "parentId": "632ab0334d87ff24942109c1",
            "parentName": "Drink",
            "description": {
              "en": "Juice"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ab0504d87ff24942109d7",
            "name": {
              "en": "Coffee"
            },
            "parentId": "632ab0334d87ff24942109c1",
            "parentName": "Drink",
            "description": {
              "en": "Coffee"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632ab0454d87ff24942109cc",
            "name": {
              "en": "Energy Drinks"
            },
            "parentId": "632ab0334d87ff24942109c1",
            "parentName": "Drink",
            "description": {
              "en": "Energy Drinks"
            },
            "icon": "",
            "status": "show",
            "children": []
          }
        ]
      },
      {
        "_id": "632aae414d87ff2494210945",
        "name": {
          "en": "Breakfast"
        },
        "parentId": "62c827b5a427b63741da9175",
        "parentName": "Home",
        "description": {
          "en": "Breakfast"
        },
        "icon": "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/bagel_mt3fod.png",
        "status": "show",
        "children": [
          {
            "_id": "632aae7b4d87ff2494210967",
            "name": {
              "en": "Bread"
            },
            "parentId": "632aae414d87ff2494210945",
            "parentName": "Breakfasts",
            "description": {
              "en": "Bread"
            },
            "icon": "",
            "status": "show",
            "children": []
          },
          {
            "_id": "632aae624d87ff2494210951",
            "name": {
              "en": "Cereal"
            },
            "parentId": "632aae414d87ff2494210945",
            "parentName": "Breakfasts",
            "description": {
              "en": "Cereal"
            },
            "icon": "",
            "status": "show",
            "children": []
          }
        ]
      }
    ]
  }
]


export function getProductById(title) {
  console.log(title);

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
