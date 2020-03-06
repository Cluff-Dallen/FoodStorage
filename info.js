const resourceItemsData = [
  {
    "name": "7 Gallon Water Jug",
    "href": "https://www.amazon.com/Reliance-Products-Aqua-Tainer-Gallon-Container/dp/B001QC31G6?ref_=fsclp_pl_dp_2",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/51eAFKbEKoL._AC_.jpg",
    "price": 15.00
  },
  {
    "name": "Apple Slices (10 Cans)",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/apple-slices",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/235400_004384_000_p_348.jpg",
    "price": 76.00
  },
  {
    "name": "Black Beans (10 Cans)",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/black-beans",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/367100_004388_000_p_348.jpg",
    "price": 43.25
  },
  {
    "name": "Potato Flakes (10 Cans)",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/potato-flakes",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/235300_004380_000_p_348.jpg",
    "price": 37.00
  },
  {
    "name": "Refried Beans (10 Cans)",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/refried-beans",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/367400_004394_000_p_348.jpg",
    "price": 45.25
  },
  {
    "name": "Regular Oats (10 Cans)",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/regular-oats",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/372/234800_004372_000_p_348.jpg",
    "price": 25.50
  },
  {
    "name": "White Rice (10 Cans)",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/white-rice",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/360/37000_004360_360_p_348.jpg",
    "price": 36.75
  },
  {
    "name": "Sugar (10 Cans)",
    "href": "https://store.churchofjesuschrist.org/usa/en/food-storage-3074457345616678849-1/sugar",
    "imgSrc": "https://store.churchofjesuschrist.org/wcsimages/LDSCAS/products/Non-language/234900_004368_000_p_348.jpg",
    "price": 40.00
  },
  {
    "name": "Water Filter (stick)",
    "href": "https://www.amazon.com/gp/product/B00FA2RLX2/ref=ppx_yo_dt_b_asin_title_o01_s01?ie=UTF8&psc=1",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/812XaHTx24L._AC_SL1500_.jpg",
    "price": 20.00
  },
  {
    "name": "Water Purification Tablets",
    "href": "https://www.amazon.com/Potable-Aqua-Purification-Tablets-neutralizing/dp/B0009I3T3S/ref=sr_1_4?crid=2UOKED6Q5EW4X&dchild=1&keywords=water+purification+tablets&qid=1582789789&sprefix=water+purification%2Caps%2C220&sr=8-4",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/91N73gbfQhL._AC_SL1500_.jpg",
    "price": 11.00
  },
  {
    "name": "First Aid Kit",
    "href": "https://www.amazon.com/Swiss-Safe-First-Piece-32-Piece/dp/B01G45DWOK/ref=sr_1_9?dchild=1&keywords=first+aid+kit&qid=1583512428&sr=8-9",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/91V2wQChMTL._AC_SL1500_.jpg",
    "price": 68.00
  },
  {
    "name": "Crank Flashlight",
    "href": "https://www.amazon.com/American-ARCCR100R-DBL-Crank-Powered-Flashlight-Smartphone/dp/B0188PGDOK/ref=sr_1_6?keywords=crank+flashlight&qid=1583512583&sr=8-6",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/71xoepyxkaL._AC_SL1500_.jpg",
    "price": 17.00
  },
  {
    "name": "Large Water Pump",
    "href": "https://www.amazon.com/Katadyn-Transparent-Lightweight-Backpacking-Preparedness/dp/B075TTTX2R/ref=sr_1_7?dchild=1&keywords=water+filter+pump&qid=1583512339&sr=8-7",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/71s%2BEatDSiL._AC_SL1500_.jpg",
    "price": 68.00
  },
  {
    "name": "All Weather Matches",
    "href": "https://www.amazon.com/UCO-Stormproof-Waterproof-Matches-Strikers/dp/B00773VVHO/ref=sr_1_12?dchild=1&keywords=emergency+matches&qid=1583512731&sr=8-12",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61XCwHWvTwL._AC_SL1417_.jpg",
    "price": 10.00
  },
  {
    "name": "Propane/Butane Portable Stove",
    "href": "https://www.amazon.com/gp/product/B01HQRD8EO/ref=ox_sc_saved_title_3?smid=ATVPDKIKX0DER&psc=1",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/61fUMRoHXPL._AC_SL1500_.jpg",
    "price": 29.00
  },
  {
    "name": "Compass",
    "href": "https://www.amazon.com/Boy-Scout-Compass-Hiking-Backpack/dp/B07PH1DHR9/ref=sr_1_19?dchild=1&keywords=compass&qid=1583513024&sr=8-19",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/81uxGPFfWGL._AC_SL1500_.jpg",
    "price": 7.00
  },
  {
    "name": "Emergency Radio",
    "href": "https://www.amazon.com/American-Emergency-Weather-Smartphone-ARCFR1WXR/dp/B00UTKQ1P4/ref=sr_1_7?keywords=emergency%2Bradio&qid=1583513143&sr=8-7&th=1",
    "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/81riPIgCVlL._AC_SL1500_.jpg",
    "price": 19.00
  }
];

const resourceInformationData = [
  {

  }
];
