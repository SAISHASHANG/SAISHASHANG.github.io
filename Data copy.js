  var categoryData = {
      shells: {
        "TvWall": {
            icon: "Resources/Images/TvWall.png",
            description: "Description for TV Wall category."
        },
        "LeftWall": {
            icon: "Resources/Images/LeftWall.png",
            description: "Description for Left Wall category."
        },
        "RightWall": {
            icon: "Resources/Images/RightWall.png",
            description: "Description for Right Wall category."
        },
        "BackWall": {
            icon: "Resources/Images/BackWall.png",
            description: "Description for Back Wall category."
        },
        "Ceiling": {
            icon: "Resources/Images/Ceiling.png",
            description: "Description for Ceiling category."
        },
        "Flooring": {
            icon: "Resources/Images/Flooring.png",
            description: "Description for Flooring category."
        }
      },
      products: {
        "Lights": {
            icon: "Resources/Images/Light.png",
            description: "Description for Lights category."
        },
        "Table": {
            icon: "Resources/Images/Table.png",
            description: "Description for Table category."
        },
        "Chair": {
            icon: "Resources/Images/Chair.png",
            description: "Description for Chair category."
        }
      }
    };
    
    // Extract shell categories keys from categoryData object
    var shellsCategories = Object.keys(categoryData.shells);
    
    // Extract product categories keys from categoryData object
    var productsCategories = Object.keys(categoryData.products);




    // Asset Data

    var AssetData = {
      "configurator": [
        {
          "shell": [
            {
              
              "name": "Flooring",
              "options": [
                { "id": "28959", "slots": [] },
                { "id": "28958", "slots": [] },
                { "id": "28955", "slots": [] }
              ]
            },
            {
              
              "name": "TvWall",
              "options": [
                { "id": "32941", "slots": ["32343", "32473", "32482", "32490", "32497", "30051"] },
                { "id": "32944", "slots": ["32563", "32579", "32587", "32593", "30051"] },
                { "id": "32938", "slots": ["32343", "32363", "32389", "32402", "30060"] },
                { "id": "32945", "slots": ["32566", "32595", "32846", "30051"] }
              ]
            },
            {
              
              "name": "RightWall",
              "options": [
                { "id": "37902", "slots": ["37899", "33341", "33344", "37906"] },
                { "id": "33377", "slots": ["29937", "30872", "30886", "33341", "33345", "33357"] },
                { "id": "33378", "slots": ["31004", "31057", "31268", "33386", "33341", "33354", "33356"] }
              ]
            },
            {
              
              "name": "BackWall",
              "options": [
                { "id": "30830", "slots": ["31741", "31755", "31761", "30772"] },
                { "id": "30832", "slots": ["30767", "31772", "31780", "31792", "30772"] },
                { "id": "37924", "slots": ["37921"] }
              ]
            },
            {
            
              "name": "LeftWall",
              "options": [
                { "id": "38004", "slots": [] }
              ]
            }
          ]
        },
        {
          "product": [
            {
              
              "name": "Table",
              "options": [
                { "id": "29162", "slots": [] },
                { "id": "29167", "slots": [] },
                { "id": "29170", "slots": [] },
                { "id": "29171", "slots": [] },
                { "id": "29154", "slots": [] },
                { "id": "29155", "slots": [] }
              ]
            },
            {
              
              "name": "Chair",
              "options": [
                { "id": "28990", "slots": [] },
                { "id": "28984", "slots": [] },
                { "id": "28976", "slots": [] },
                { "id": "28973", "slots": [] }
              ]
            },
            {
            
              "name": "Lights",
              "options": [
                { "id": "30027", "slots": [] },
                { "id": "30030", "slots": [] },
                { "id": "30036", "slots": [] },
                { "id": "30023", "slots": [] }
              ]
            }
          ]
        }
        
      ]
    }
    
