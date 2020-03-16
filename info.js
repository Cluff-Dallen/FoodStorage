const resourceItemsData = [
  {
    "name": "7 Gallon Water Jug",
    "href": "https://www.amazon.com/Reliance-Products-Aqua-Tainer-Gallon-Container/dp/B001QC31G6?ref_=fsclp_pl_dp_2",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/51eAFKbEKoL._AC_.jpg",
    "price": 15.00,
    "about": "Storing water safely and for longer term is important. This can be done with a large water container like this. Designed to be space saving, and convient. Holds up to 7 gallons."
  },
  {
    "name": "Apple Slices",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/apple-slices",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/235400_004384_000_p_348.jpg",
    "price": 76.00,
    "about" : "Dehydrated apple slices. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 16."
  },
  {
    "name": "Black Beans",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/black-beans",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/367100_004388_000_p_348.jpg",
    "price": 43.00,
    "about" : "Deydrated black beans. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 55."
  },
  {
    "name": "Potato Flakes",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/potato-flakes",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/235300_004380_000_p_348.jpg",
    "price": 37.00,
    "about" : "Deydrated potato flakes. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 39."
  },
  {
    "name": "Refried Beans",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/refried-beans",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/367400_004394_000_p_348.jpg",
    "price": 45.00,
    "about" : "Deydrated refried beans. This contains 10 large cans. Shelf life of over 5 years if stored properly. Servings per container is 32."
  },
  {
    "name": "Regular Oats",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/regular-oats",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/372/234800_004372_000_p_348.jpg",
    "price": 25.00,
    "about" : "Rolled Oats. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 32."
  },
  {
    "name": "White Rice",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/white-rice",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/360/37000_004360_360_p_348.jpg",
    "price": 36.00,
    "about" : "White rice. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 54."
  },
  {
    "name": "Sugar",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/sugar",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/234900_004368_000_p_348.jpg",
    "price": 40.00,
    "about" : "Granulated sugar. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 693."
  },
  {
    "name": "Water Filter (stick)",
    "href": "https://www.amazon.com/gp/product/B00FA2RLX2/ref=ppx_yo_dt_b_asin_title_o01_s01?ie=UTF8&psc=1",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/812XaHTx24L._AC_SL1500_.jpg",
    "price": 20.00,
    "about" : "Sawyer MINI filteration system. Helpful for emergency preparedness in keeping your water supply safe and clean. Lightweight, portable, easy to use. Filter rated for over 100,000 gallons. Removes 99.99% of all bacteria."
  },
  {
    "name": "Water Purification Tablets",
    "href": "https://www.amazon.com/Potable-Aqua-Purification-Tablets-neutralizing/dp/B0009I3T3S/ref=sr_1_4?crid=2UOKED6Q5EW4X&dchild=1&keywords=water+purification+tablets&qid=1582789789&sprefix=water+purification%2Caps%2C220&sr=8-4",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/91N73gbfQhL._AC_SL1500_.jpg",
    "price": 11.00,
    "about" : "Water purification tablets, 50 count. Useful for cleaning contaminated water and ensureing saftey before drinking. Makes water drinkable within 35 mins. Effective against bacteria, giardia, lambia. Great for emergency preparedness. Comes with tablets to improve taste."
  },
  {
    "name": "First Aid Kit",
    "href": "https://www.amazon.com/Swiss-Safe-First-Piece-32-Piece/dp/B01G45DWOK/ref=sr_1_9?dchild=1&keywords=first+aid+kit&qid=1583512428&sr=8-9",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/91V2wQChMTL._AC_SL1500_.jpg",
    "price": 68.00,
    "about" : "Fist Aid kit containing basic items that might be needed in an emergency. Of course you can create your own, or get a different one. But this is needed in all 72 hour kits!"
  },
  {
    "name": "Crank Flashlight",
    "href": "https://www.amazon.com/American-ARCCR100R-DBL-Crank-Powered-Flashlight-Smartphone/dp/B0188PGDOK/ref=sr_1_6?keywords=crank+flashlight&qid=1583512583&sr=8-6",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/71xoepyxkaL._AC_SL1500_.jpg",
    "price": 17.00,
    "about" : "American Red Cross crank powered flashlight and smart phone charger. In an emergancy you will need light, and a way to communicate. By having a portable charger for your phone, you can make any emergency calls you might need."
  },
  {
    "name": "Large Water Pump",
    "href": "https://www.amazon.com/Katadyn-Transparent-Lightweight-Backpacking-Preparedness/dp/B075TTTX2R/ref=sr_1_7?dchild=1&keywords=water+filter+pump&qid=1583512339&sr=8-7",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/71s%2BEatDSiL._AC_SL1500_.jpg",
    "price": 68.00,
    "about" : "For longer term emergency's you may want to have a larger water pump capable of filtering much mroe water at a quicker rate. This filter is much easier than a straw and can be more convient for longer term use."
  },
  {
    "name": "All Weather Matches",
    "href": "https://www.amazon.com/UCO-Stormproof-Waterproof-Matches-Strikers/dp/B00773VVHO/ref=sr_1_12?dchild=1&keywords=emergency+matches&qid=1583512731&sr=8-12",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61XCwHWvTwL._AC_SL1417_.jpg",
    "price": 10.00,
    "about" : "25 Storm proof matches with 3 strikers. This is important to have a way to start fires as needed regardless of weather conditions. These are easy to light, and work in both water and wind conditions."
  },
  {
    "name": "Propane/Butane Portable Stove",
    "href": "https://www.amazon.com/gp/product/B01HQRD8EO/ref=ox_sc_saved_title_3?smid=ATVPDKIKX0DER&psc=1",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61fUMRoHXPL._AC_SL1500_.jpg",
    "price": 29.00,
    "about" : "In order to cook your food, you'll likely want and or need a portable stove. This one is exceptional as that it supports both butane and propane allowing for cooking with what ever gas you have avalible. "
  },
  {
    "name": "Compass",
    "href": "https://www.amazon.com/Boy-Scout-Compass-Hiking-Backpack/dp/B07PH1DHR9/ref=sr_1_19?dchild=1&keywords=compass&qid=1583513024&sr=8-19",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/81uxGPFfWGL._AC_SL1500_.jpg",
    "price": 7.00,
    "about" : "A cheap and simple compass can be an extremely helpful tool in emergancy situations. Navitation is a very important part of emergency preparedness. Goes very handy along side a local map!"
  },
  {
    "name": "Emergency Radio",
    "href": "https://www.amazon.com/American-Emergency-Weather-Smartphone-ARCFR1WXR/dp/B00UTKQ1P4/ref=sr_1_7?keywords=emergency%2Bradio&qid=1583513143&sr=8-7&th=1",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/81riPIgCVlL._AC_SL1500_.jpg",
    "price": 19.00,
    "about" : "You never know what you'll face. With this emergency radio, you'll have a way of checking what's going on and be able to recieve any emergency brodcasts."
  },
  {
    "name": "Carrots",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/carrots",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/386/367200_004386_950_p_348.jpg",
    "price": 63.00,
    "about" : "Dehydrated carrots. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 45."
  },
  {
    "name": "Macaroni",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/macaroni-235200-1",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/235200_004376_000_p_348.jpg",
    "price": 53.00,
    "about" : "Macaroni. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 24."
  },
  {
    "name": "Nonfat Dry Milk",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/nonfat-dry-milk",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/352500_004366_000_p_348.jpg",
    "price": 62.00,
    "about" : "Nonfat dry milk. This contains 12 puches. Shelf life of over 20 years if stored properly. Servings per container is 29."
  },
  {
    "name": "White Flour",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/white-flour",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/209400_004364_000_p_348.jpg",
    "price": 25.00,
    "about" : "White flour. This contains 10 large cans. Shelf life of over 10 years if stored properly. Servings per container is 64."
  },
  {
    "name": "Spagetti Bites",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/spaghetti-bites",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/235100_004374_000_p_348.jpg",
    "price": 48.00,
    "about" : "Spagetti bites. This contains 10 large cans. Shelf life of over 30 years if stored properly. Servings per container is 22."
  },
  {
    "name": "Granola Bars",
    "href": "https://www.amazon.com/Quaker-Chewy-Granola-Variety-Count/dp/B01GQ5WNC0/ref=sr_1_1_sspa?keywords=granola+bars&qid=1584345267&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzU1FaVVBNQk9URTBQJmVuY3J5cHRlZElkPUEwNDE1MzM0VDBPV1o0UDgzMlI4JmVuY3J5cHRlZEFkSWQ9QTA2Nzc5MDMzME1CMExRVE0wMlhEJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/913Cm3tsw2L._SL1500_.jpg",
    "price": 12.00,
    "about" : "Granola bars, contains 58 bars. 3 flavors. Great for a quick and lasting snack."
  },
  {
    "name": "Trail Mix",
    "href": "https://www.amazon.com/Kars-Nuts-Variety-Trail-Snacks/dp/B07STGBRCD/ref=sr_1_1_sspa?keywords=trail+mix&qid=1584345396&sr=8-1-spons&swrs=884CB341970E14D22D0232A2DE71F492&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFIVTlYMUpWSDJROFgmZW5jcnlwdGVkSWQ9QTAwMTc2NDAzT0Y1NkpFTFoxR1A0JmVuY3J5cHRlZEFkSWQ9QTAxNjA0NDkyNVhYWDEyTktWM1dYJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61%2BCN6B15ZL._SL1000_.jpg",
    "price": 26.00,
    "about" : "Tail Mix. Contains 24 individual packages. Great for a quick energizing snack."
  },
  {
    "name": "Saltine Crackers",
    "href": "https://www.amazon.com/Premium-Saltine-Crackers-Original-Ounce/dp/B00VHVK8AI/ref=sr_1_28?fpw=pantry&keywords=crackers&qid=1584345501&s=pantry&sr=8-28",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/913Cm3tsw2L._SL1500_.jpg",
    "price": 3.00,
    "about" : "Saltine Crackers, 16oz. A salty easy to eat, long lasting food."
  },
  {
    "name": "Beef Jerky",
    "href": "https://www.amazon.com/Jack-Links-Beef-Jerky-Variety/dp/B07JL8WLDQ/ref=sr_1_7?keywords=beef+jerky&qid=1584345606&sr=8-7&swrs=5AD813C59FA4771CF7B2EC6C62423FF0",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/91Z-267Na-L._SL1500_.jpg",
    "price": 25.00,
    "about" : "Jack Link's Beef jerky vareity pack. 3 packs. 1.25oz/pack. Great for long lasting energy, and a snack that you'll love!"
  },
  {
    "name": "Survival Knife",
    "href": "https://www.amazon.com/Smith-Wesson-SWA24S-Serrated-Aluminum/dp/B007HAE5GQ/ref=sr_1_11?dchild=1&keywords=survival+knife&qid=1584345798&sr=8-11",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/81FWNXaX%2BvL._SL1500_.jpg",
    "price": 12.00,
    "about" : "All 72 kits should contain a surival knife. Great for defence, as a tool, and for much more. This smith and wesson knife is small, portable, durable, and has a serrated and straight blade."
  }
];

const resourceInformationData = [

];
