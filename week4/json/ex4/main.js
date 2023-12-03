/*
 anima

 name, //string
 weight { // object
    number, // number
    unit // string
 }
 habitats [], // array
isIndangered, //boolean
foods [], // array
hisPredators[], //array
deliciousRate //number

*/ 

const animals = [
    { 
        "name": 'Cow',
        "weight": { 
            "number": 650, 
            "unit":"kg" 
         },
         "habitats":["different geographic areas"],
         "isIndangered":false,
         "foods":['plants'],
         "hisPredators": ["human"],
         "deliciousRate": 5
    },
    { 
        "name": 'Elephant',
        "weight": { 
            "number": 3.9, 
            "unit":"tons" 
         },
         "habitat":["sub-Saharan Africa", "South Asia", "Southeast Asia" ],
         "isIndangered":true,
         "foods":['plants'],
         "hisPredators": ["lions","hyenas","crocodiles"],
         "deliciousRate": 1
    },
    { 
        "name": 'Wolf',
        "weight": { 
            "number": 80, 
            "unit":"kg" 
         },
         "habitat":["temperate forests", "mountains", "tundra", "taiga", "grasslands" ,"deserts" ],
         "isIndangered":true,
         "foods":["deer", "elk", "bison", "moose", "beavers", "rodents", "hares"],
         "hisPredators": ["polar bear", "grizzly bear", "black bear", "Siberian tigers", "scavengers"],
         "deliciousRate": 1
    }
    ,
    { 
        "name": 'Squirrel',
        "weight": { 
            "number": 600, 
            "unit":"g" 
         },
         "habitat":["every ware"],
         "isIndangered":false,
         "foods":[{"name":"nuts" ,"dietPercent":"50%"}, {"name":"seeds" ,"dietPercent":"10%"}, 
         {"name":"fruits","dietPercent":"10%"},
         {"name": "fungi","dietPercent":"10%"},
         {"name":"buds","dietPercent":"10%"},
         {"name":"even green vegetables","dietPercent":"10%"},
        ],
         "hisPredators": ["Eagle", "Hawk", "Great Horned Owl", "Snake", "Fox","Coyote","Bobcat","Domestic Cat" , "Weasel", "Alligator"],
         "deliciousRate": 1
    }
]

// Did you have to change the structure of your JSON document at any point while you were filling it out for the different animals?
// yes 

//Does the format you chose make later additions to the data easy?
//no

