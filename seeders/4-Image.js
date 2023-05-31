'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        "name": "Carp",
        "imagePath": "/img/product-9.png",
        "productId": 1
      }, {
        "name": "arthritis pain relief",
        "imagePath": "/img/product-2.png",
        "productId": 2
      }, {
        "name": "STRONTIUM CHLORIDE Sr-89",
        "imagePath": "/img/product-2.png",
        "productId": 3
      }, {
        "name": "Carvedilol",
        "imagePath": "/img/product-5.png",
        "productId": 4
      }, {
        "name": "Lithium Carbonate",
        "imagePath": "/img/product-9.png",
        "productId": 5
      }, {
        "name": "ATORVASTATIN CALCIUM",
        "imagePath": "/img/product-5.png",
        "productId": 6
      }, {
        "name": "Predator",
        "imagePath": "/img/product-9.png",
        "productId": 7
      }, {
        "name": "Metoprolol Tartrate",
        "imagePath": "/img/product-1.png",
        "productId": 8
      }, {
        "name": "CARVEDILOL",
        "imagePath": "/img/product-3.png",
        "productId": 9
      }, {
        "name": "Treatment Set TS349291",
        "imagePath": "/img/product-1.png",
        "productId": 10
      }, {
        "name": "Acetylcysteine",
        "imagePath": "/img/product-5.png",
        "productId": 11
      }, {
        "name": "INTRON A",
        "imagePath": "/img/product-5.png",
        "productId": 12
      }, {
        "name": "ULMUS AMERICANA POLLEN",
        "imagePath": "/img/product-5.png",
        "productId": 13
      }, {
        "name": "Mentholatum Natural Ice",
        "imagePath": "/img/product-6.png",
        "productId": 14
      }, {
        "name": "Eastern White Pine",
        "imagePath": "/img/product-5.png",
        "productId": 15
      }, {
        "name": "Oat Smut",
        "imagePath": "/img/product-2.png",
        "productId": 16
      }, {
        "name": "Isuprel",
        "imagePath": "/img/product-5.png",
        "productId": 17
      }, {
        "name": "Banana Boat Baby Tear Free Sunscreen SPF 60",
        "imagePath": "/img/product-9.png",
        "productId": 18
      }, {
        "name": "LAMICTAL",
        "imagePath": "/img/product-6.png",
        "productId": 19
      }, {
        "name": "Up and Up dual action acid controller complete",
        "imagePath": "/img/product-1.png",
        "productId": 20
      }, {
        "name": "HYDROCODONE BITARTRATE AND ACETAMINOPHEN",
        "imagePath": "/img/product-9.png",
        "productId": 21
      }, {
        "name": "Topcare Sinus Congestion and Pain",
        "imagePath": "/img/product-9.png",
        "productId": 22
      }, {
        "name": "YES TO TOMATOES ACNE CONTROL GEL CLEANSER",
        "imagePath": "/img/product-7.png",
        "productId": 23
      }, {
        "name": "Verapamil Hydrochloride",
        "imagePath": "/img/product-5.png",
        "productId": 24
      }, {
        "name": "VERATRUM ALBUM",
        "imagePath": "/img/product-5.png",
        "productId": 25
      }, {
        "name": "BLEPH-10",
        "imagePath": "/img/product-7.png",
        "productId": 26
      }, {
        "name": "Antibacterial Hand Sanitizer",
        "imagePath": "/img/product-9.png",
        "productId": 27
      }, {
        "name": "Oxygen",
        "imagePath": "/img/product-5.png",
        "productId": 28
      }, {
        "name": "Gentamicin Sulfate",
        "imagePath": "/img/product-9.png",
        "productId": 29
      }, {
        "name": "MULTI-SYMPTOM ALLERGY",
        "imagePath": "/img/product-7.png",
        "productId": 30
      }, {
        "name": "Psorizide Forte",
        "imagePath": "/img/product-1.png",
        "productId": 31
      }, {
        "name": "RITE AID RENEWAL",
        "imagePath": "/img/product-7.png",
        "productId": 32
      }, {
        "name": "Dulera",
        "imagePath": "/img/product-3.png",
        "productId": 33
      }, {
        "name": "Diorskin Nude Natural Glow Makeup 040 Honey Beige",
        "imagePath": "/img/product-2.png",
        "productId": 34
      }, {
        "name": "SK1N NATURAL SUNSCREEN SPF 40",
        "imagePath": "/img/product-6.png",
        "productId": 35
      }, {
        "name": "CleanWell Natural Original Hand Sanitizer Wipes",
        "imagePath": "/img/product-4.png",
        "productId": 36
      }, {
        "name": "Clearskin",
        "imagePath": "/img/product-2.png",
        "productId": 37
      }, {
        "name": "Best Choice Bacitracin Zinc",
        "imagePath": "/img/product-4.png",
        "productId": 38
      }, {
        "name": "Ambien",
        "imagePath": "/img/product-6.png",
        "productId": 39
      }, {
        "name": "AGELESS Total Skin Bleaching Serum",
        "imagePath": "/img/product-7.png",
        "productId": 40
      }, {
        "name": "Clarithromycin",
        "imagePath": "/img/product-9.png",
        "productId": 41
      }, {
        "name": "Mucinex Sinus-Max",
        "imagePath": "/img/product-5.png",
        "productId": 42
      }, {
        "name": "spironolactone",
        "imagePath": "/img/product-2.png",
        "productId": 43
      }, {
        "name": "Sodium Chloride",
        "imagePath": "/img/product-8.png",
        "productId": 44
      }, {
        "name": "Redtop Grass, Standardized",
        "imagePath": "/img/product-6.png",
        "productId": 45
      }, {
        "name": "BUPROPION HYDROCHLORIDE",
        "imagePath": "/img/product-1.png",
        "productId": 46
      }, {
        "name": "Lisinopril",
        "imagePath": "/img/product-2.png",
        "productId": 47
      }, {
        "name": "Ibuprofen",
        "imagePath": "/img/product-6.png",
        "productId": 48
      }, {
        "name": "Lymph Drainage",
        "imagePath": "/img/product-9.png",
        "productId": 49
      }, {
        "name": "Diovan HCT",
        "imagePath": "/img/product-1.png",
        "productId": 50
      }, {
        "name": "Lidocaine Hydrochloride and Epinephrine",
        "imagePath": "/img/product-7.png",
        "productId": 51
      }, {
        "name": "Verapamil Hydrochloride",
        "imagePath": "/img/product-3.png",
        "productId": 52
      }, {
        "name": "Genuine Hand Sanitizer",
        "imagePath": "/img/product-8.png",
        "productId": 53
      }, {
        "name": "NITROGEN",
        "imagePath": "/img/product-8.png",
        "productId": 54
      }, {
        "name": "ORCHID BY H E B",
        "imagePath": "/img/product-5.png",
        "productId": 55
      }, {
        "name": "Ibuprofen",
        "imagePath": "/img/product-7.png",
        "productId": 56
      }, {
        "name": "Pepcid Complete",
        "imagePath": "/img/product-6.png",
        "productId": 57
      }, {
        "name": "Rimmel London",
        "imagePath": "/img/product-1.png",
        "productId": 58
      }, {
        "name": "Doxazosin",
        "imagePath": "/img/product-1.png",
        "productId": 59
      }, {
        "name": "Aceon",
        "imagePath": "/img/product-1.png",
        "productId": 60
      }, {
        "name": "Sumatriptan Succinate",
        "imagePath": "/img/product-6.png",
        "productId": 61
      }, {
        "name": "Mycophenolate Mofetil",
        "imagePath": "/img/product-3.png",
        "productId": 62
      }, {
        "name": "Cetirizine Hydrochloride",
        "imagePath": "/img/product-8.png",
        "productId": 63
      }, {
        "name": "Zolpidem Tartrate",
        "imagePath": "/img/product-8.png",
        "productId": 64
      }, {
        "name": "Benazepril Hydrochloride and Hydrochlorothiazide",
        "imagePath": "/img/product-7.png",
        "productId": 65
      }, {
        "name": "Pollens - Weeds and Garden Plants, Ragweed, Mixed Ambrosia",
        "imagePath": "/img/product-9.png",
        "productId": 66
      }, {
        "name": "Unblem Est",
        "imagePath": "/img/product-2.png",
        "productId": 67
      }, {
        "name": "IRIS",
        "imagePath": "/img/product-7.png",
        "productId": 68
      }, {
        "name": "DESONATE",
        "imagePath": "/img/product-3.png",
        "productId": 69
      }, {
        "name": "Cardene",
        "imagePath": "/img/product-5.png",
        "productId": 70
      }, {
        "name": "RELNATE DHA",
        "imagePath": "/img/product-7.png",
        "productId": 71
      }, {
        "name": "Pleo Sancom",
        "imagePath": "/img/product-6.png",
        "productId": 72
      }, {
        "name": "Topex",
        "imagePath": "/img/product-4.png",
        "productId": 73
      }, {
        "name": "Nicotine",
        "imagePath": "/img/product-8.png",
        "productId": 74
      }, {
        "name": "Haloperidol",
        "imagePath": "/img/product-3.png",
        "productId": 75
      }, {
        "name": "Medique Alamag",
        "imagePath": "/img/product-6.png",
        "productId": 76
      }, {
        "name": "Crestor",
        "imagePath": "/img/product-5.png",
        "productId": 77
      }, {
        "name": "Albuterol",
        "imagePath": "/img/product-2.png",
        "productId": 78
      }, {
        "name": "Bystolic",
        "imagePath": "/img/product-1.png",
        "productId": 79
      }, {
        "name": "Ciprofloxacin",
        "imagePath": "/img/product-6.png",
        "productId": 80
      }, {
        "name": "DELFLEX",
        "imagePath": "/img/product-6.png",
        "productId": 81
      }, {
        "name": "Dicloxacillin Sodium",
        "imagePath": "/img/product-5.png",
        "productId": 82
      }, {
        "name": "Sheep Sorrel",
        "imagePath": "/img/product-3.png",
        "productId": 83
      }, {
        "name": "Pediatric Cough and Cold Medicine",
        "imagePath": "/img/product-1.png",
        "productId": 84
      }, {
        "name": "Nazil",
        "imagePath": "/img/product-4.png",
        "productId": 85
      }, {
        "name": "Indomethacin",
        "imagePath": "/img/product-3.png",
        "productId": 86
      }, {
        "name": "Clopidogrel",
        "imagePath": "/img/product-4.png",
        "productId": 87
      }, {
        "name": "CareOne Childrens Pain and Fever",
        "imagePath": "/img/product-6.png",
        "productId": 88
      }, {
        "name": "Albutein",
        "imagePath": "/img/product-2.png",
        "productId": 89
      }, {
        "name": "Hydrocortisone Acetate",
        "imagePath": "/img/product-2.png",
        "productId": 90
      }, {
        "name": "Clopidogrel",
        "imagePath": "/img/product-4.png",
        "productId": 91
      }, {
        "name": "Nifedipine",
        "imagePath": "/img/product-1.png",
        "productId": 92
      }, {
        "name": "Daytime Cough And Cold",
        "imagePath": "/img/product-4.png",
        "productId": 93
      }, {
        "name": "VENTOLIN",
        "imagePath": "/img/product-3.png",
        "productId": 94
      }, {
        "name": "Metronidazole",
        "imagePath": "/img/product-4.png",
        "productId": 95
      }, {
        "name": "Thyro T3 Rescue",
        "imagePath": "/img/product-6.png",
        "productId": 96
      }, {
        "name": "Clonidine Hydrochloride",
        "imagePath": "/img/product-3.png",
        "productId": 97
      }, {
        "name": "CONSTIPATION RELIEF",
        "imagePath": "/img/product-2.png",
        "productId": 98
      }, {
        "name": "Sani Professional Brand Sani-Hands",
        "imagePath": "/img/product-3.png",
        "productId": 99
      }, {
        "name": "Amlodipine and Valsartan",
        "imagePath": "/img/product-2.png",
        "productId": 100
      },
      {
      "name": "diam nam",
      "imagePath": "/img/product-9.png",
      "productId": 18
    }, {
      "name": "id ornare",
      "imagePath": "/img/product-4.png",
      "productId": 30
    }, {
      "name": "luctus et",
      "imagePath": "/img/product-6.png",
      "productId": 13
    }, {
      "name": "ac leo",
      "imagePath": "/img/product-4.png",
      "productId": 3
    }, {
      "name": "nulla eget",
      "imagePath": "/img/product-4.png",
      "productId": 23
    }, {
      "name": "porta volutpat",
      "imagePath": "/img/product-4.png",
      "productId": 12
    }, {
      "name": "amet lobortis",
      "imagePath": "/img/product-3.png",
      "productId": 15
    }, {
      "name": "fusce posuere",
      "imagePath": "/img/product-6.png",
      "productId": 19
    }, {
      "name": "donec semper",
      "imagePath": "/img/product-9.png",
      "productId": 16
    }, {
      "name": "tortor risus",
      "imagePath": "/img/product-3.png",
      "productId": 29
    }, {
      "name": "pede libero",
      "imagePath": "/img/product-5.png",
      "productId": 27
    }, {
      "name": "suspendisse potenti",
      "imagePath": "/img/product-9.png",
      "productId": 10
    }, {
      "name": "vehicula condimentum",
      "imagePath": "/img/product-7.png",
      "productId": 12
    }, {
      "name": "ipsum ac",
      "imagePath": "/img/product-9.png",
      "productId": 28
    }, {
      "name": "non mi",
      "imagePath": "/img/product-2.png",
      "productId": 21
    }, {
      "name": "mauris enim",
      "imagePath": "/img/product-3.png",
      "productId": 19
    }, {
      "name": "ultrices posuere",
      "imagePath": "/img/product-6.png",
      "productId": 5
    }, {
      "name": "congue risus",
      "imagePath": "/img/product-3.png",
      "productId": 3
    }, {
      "name": "ante vel",
      "imagePath": "/img/product-4.png",
      "productId": 1
    }, {
      "name": "hac habitasse",
      "imagePath": "/img/product-6.png",
      "productId": 18
    }, {
      "name": "elit sodales",
      "imagePath": "/img/product-6.png",
      "productId": 13
    }, {
      "name": "in quis",
      "imagePath": "/img/product-1.png",
      "productId": 28
    }, {
      "name": "ut blandit",
      "imagePath": "/img/product-8.png",
      "productId": 20
    }, {
      "name": "luctus et",
      "imagePath": "/img/product-5.png",
      "productId": 10
    }, {
      "name": "porttitor lacus",
      "imagePath": "/img/product-4.png",
      "productId": 5
    }, {
      "name": "mi pede",
      "imagePath": "/img/product-8.png",
      "productId": 11
    }, {
      "name": "viverra pede",
      "imagePath": "/img/product-6.png",
      "productId": 29
    }, {
      "name": "vel nulla",
      "imagePath": "/img/product-5.png",
      "productId": 9
    }, {
      "name": "ut nulla",
      "imagePath": "/img/product-6.png",
      "productId": 24
    }, {
      "name": "lorem integer",
      "imagePath": "/img/product-9.png",
      "productId": 9
    }, {
      "name": "at nulla",
      "imagePath": "/img/product-8.png",
      "productId": 30
    }, {
      "name": "elementum ligula",
      "imagePath": "/img/product-8.png",
      "productId": 12
    }, {
      "name": "sed nisl",
      "imagePath": "/img/product-6.png",
      "productId": 11
    }, {
      "name": "morbi porttitor",
      "imagePath": "/img/product-6.png",
      "productId": 15
    }, {
      "name": "tortor sollicitudin",
      "imagePath": "/img/product-8.png",
      "productId": 14
    }, {
      "name": "lacinia erat",
      "imagePath": "/img/product-5.png",
      "productId": 17
    }, {
      "name": "erat tortor",
      "imagePath": "/img/product-6.png",
      "productId": 16
    }, {
      "name": "nisi volutpat",
      "imagePath": "/img/product-1.png",
      "productId": 20
    }, {
      "name": "eget vulputate",
      "imagePath": "/img/product-1.png",
      "productId": 28
    }, {
      "name": "enim leo",
      "imagePath": "/img/product-5.png",
      "productId": 17
    }, {
      "name": "erat quisque",
      "imagePath": "/img/product-2.png",
      "productId": 14
    }, {
      "name": "venenatis non",
      "imagePath": "/img/product-1.png",
      "productId": 26
    }, {
      "name": "integer aliquet",
      "imagePath": "/img/product-3.png",
      "productId": 29
    }, {
      "name": "velit nec",
      "imagePath": "/img/product-4.png",
      "productId": 1
    }, {
      "name": "sapien dignissim",
      "imagePath": "/img/product-1.png",
      "productId": 18
    }, {
      "name": "in faucibus",
      "imagePath": "/img/product-8.png",
      "productId": 11
    }, {
      "name": "eget elit",
      "imagePath": "/img/product-8.png",
      "productId": 21
    }, {
      "name": "sit amet",
      "imagePath": "/img/product-7.png",
      "productId": 19
    }, {
      "name": "lobortis sapien",
      "imagePath": "/img/product-5.png",
      "productId": 18
    }, {
      "name": "a odio",
      "imagePath": "/img/product-4.png",
      "productId": 26
    }, {
      "name": "aenean lectus",
      "imagePath": "/img/product-4.png",
      "productId": 26
    }, {
      "name": "auctor gravida",
      "imagePath": "/img/product-6.png",
      "productId": 28
    }, {
      "name": "interdum mauris",
      "imagePath": "/img/product-6.png",
      "productId": 5
    }, {
      "name": "vel pede",
      "imagePath": "/img/product-1.png",
      "productId": 30
    }, {
      "name": "consequat ut",
      "imagePath": "/img/product-7.png",
      "productId": 11
    }, {
      "name": "leo rhoncus",
      "imagePath": "/img/product-2.png",
      "productId": 9
    }, {
      "name": "elit sodales",
      "imagePath": "/img/product-7.png",
      "productId": 25
    }, {
      "name": "in faucibus",
      "imagePath": "/img/product-2.png",
      "productId": 13
    }, {
      "name": "nunc rhoncus",
      "imagePath": "/img/product-2.png",
      "productId": 1
    }, {
      "name": "lobortis vel",
      "imagePath": "/img/product-9.png",
      "productId": 19
    }, {
      "name": "nibh in",
      "imagePath": "/img/product-3.png",
      "productId": 29
    }, {
      "name": "lorem id",
      "imagePath": "/img/product-8.png",
      "productId": 15
    }, {
      "name": "magna bibendum",
      "imagePath": "/img/product-8.png",
      "productId": 9
    }, {
      "name": "magna at",
      "imagePath": "/img/product-9.png",
      "productId": 25
    }, {
      "name": "porttitor lacus",
      "imagePath": "/img/product-2.png",
      "productId": 4
    }, {
      "name": "magnis dis",
      "imagePath": "/img/product-8.png",
      "productId": 5
    }, {
      "name": "curae nulla",
      "imagePath": "/img/product-8.png",
      "productId": 14
    }, {
      "name": "pede libero",
      "imagePath": "/img/product-2.png",
      "productId": 1
    }, {
      "name": "primis in",
      "imagePath": "/img/product-5.png",
      "productId": 20
    }, {
      "name": "velit donec",
      "imagePath": "/img/product-8.png",
      "productId": 1
    }, {
      "name": "pretium nisl",
      "imagePath": "/img/product-2.png",
      "productId": 21
    }, {
      "name": "turpis enim",
      "imagePath": "/img/product-4.png",
      "productId": 13
    }, {
      "name": "faucibus orci",
      "imagePath": "/img/product-9.png",
      "productId": 29
    }, {
      "name": "congue risus",
      "imagePath": "/img/product-7.png",
      "productId": 3
    }, {
      "name": "sed justo",
      "imagePath": "/img/product-8.png",
      "productId": 5
    }, {
      "name": "in faucibus",
      "imagePath": "/img/product-6.png",
      "productId": 6
    }, {
      "name": "nulla tempus",
      "imagePath": "/img/product-5.png",
      "productId": 5
    }, {
      "name": "tortor risus",
      "imagePath": "/img/product-5.png",
      "productId": 14
    }, {
      "name": "turpis adipiscing",
      "imagePath": "/img/product-3.png",
      "productId": 15
    }, {
      "name": "donec posuere",
      "imagePath": "/img/product-9.png",
      "productId": 4
    }, {
      "name": "dui vel",
      "imagePath": "/img/product-4.png",
      "productId": 18
    }, {
      "name": "consectetuer eget",
      "imagePath": "/img/product-9.png",
      "productId": 5
    }, {
      "name": "bibendum morbi",
      "imagePath": "/img/product-6.png",
      "productId": 15
    }, {
      "name": "ipsum primis",
      "imagePath": "/img/product-4.png",
      "productId": 4
    }, {
      "name": "nunc purus",
      "imagePath": "/img/product-1.png",
      "productId": 22
    }, {
      "name": "convallis nulla",
      "imagePath": "/img/product-5.png",
      "productId": 19
    }, {
      "name": "ac neque",
      "imagePath": "/img/product-2.png",
      "productId": 10
    }, {
      "name": "dapibus duis",
      "imagePath": "/img/product-1.png",
      "productId": 5
    }, {
      "name": "in leo",
      "imagePath": "/img/product-2.png",
      "productId": 25
    }, {
      "name": "congue elementum",
      "imagePath": "/img/product-5.png",
      "productId": 7
    }, {
      "name": "lectus in",
      "imagePath": "/img/product-3.png",
      "productId": 6
    }, {
      "name": "vulputate ut",
      "imagePath": "/img/product-9.png",
      "productId": 12
    }, {
      "name": "rhoncus mauris",
      "imagePath": "/img/product-3.png",
      "productId": 21
    }, {
      "name": "primis in",
      "imagePath": "/img/product-7.png",
      "productId": 8
    }, {
      "name": "sapien a",
      "imagePath": "/img/product-1.png",
      "productId": 27
    }, {
      "name": "integer non",
      "imagePath": "/img/product-1.png",
      "productId": 29
    }, {
      "name": "scelerisque quam",
      "imagePath": "/img/product-1.png",
      "productId": 27
    }, {
      "name": "augue a",
      "imagePath": "/img/product-2.png",
      "productId": 16
    }, {
      "name": "nec dui",
      "imagePath": "/img/product-9.png",
      "productId": 22
    }, {
      "name": "morbi vestibulum",
      "imagePath": "/img/product-3.png",
      "productId": 9
    }];

    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Images', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
