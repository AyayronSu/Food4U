const restaurants = [
  { name: "Sushi Tei", cuisine: "Japanese", price: "$$", location: "BSD City", description: "Fresh sushi and cozy atmosphere." },
  { name: "Ramen House", cuisine: "Japanese", price: "$", location: "Alam Sutera", description: "Authentic ramen with homemade broth." },
  { name: "Tokyo Deli", cuisine: "Japanese", price: "$$", location: "Gading Serpong", description: "Casual Japanese dining experience." },
  { name: "Sakura Grill", cuisine: "Japanese", price: "$$$", location: "BSD City", description: "High-end Japanese BBQ and grill." },
  { name: "Ichiban Sushi", cuisine: "Japanese", price: "$", location: "Alam Sutera", description: "Popular sushi chain with affordable rolls." },
  { name: "Hoka Bento", cuisine: "Japanese", price: "$", location: "Gading Serpong", description: "Quick bento meals for lunch or dinner." },
  { name: "Zenbu Mozaru", cuisine: "Japanese", price: "$$", location: "BSD City", description: "Known for baked rice Mozaru dishes." },
  { name: "Sushi Tei", cuisine: "Japanese", price: "$$", location: "Alam Sutera", description: "Well-known sushi restaurant with wide menu." },
  { name: "Midori Resto", cuisine: "Japanese", price: "$$", location: "Gading Serpong", description: "Family-friendly Japanese eatery." },
  { name: "Sakana Izakaya", cuisine: "Japanese", price: "$$", location: "BSD City", description: "Japanese pub with small plates and drinks." },

  { name: "Pagi Sore", cuisine: "Indonesian", price: "$", location: "BSD City", description: "Casual Padang-style Indonesian food." },
  { name: "Sate Senayan", cuisine: "Indonesian", price: "$$", location: "Alam Sutera", description: "Famous for delicious Indonesian satay." },
  { name: "Warung Tekko", cuisine: "Indonesian", price: "$", location: "Gading Serpong", description: "Affordable Indonesian comfort food." },
  { name: "Bebek Tepi Sawah", cuisine: "Indonesian", price: "$$", location: "BSD City", description: "Specialty crispy duck and Balinese dishes." },
  { name: "Sambel Hejo", cuisine: "Indonesian", price: "$", location: "Alam Sutera", description: "Sundanese cuisine with fresh sambal." },
  { name: "Ayam Goreng Karawaci", cuisine: "Indonesian", price: "$", location: "Gading Serpong", description: "Legendary fried chicken place." },
  { name: "Soto Betawi H. Ma'ruf", cuisine: "Indonesian", price: "$", location: "BSD City", description: "Traditional Betawi soup and rice." },
  { name: "Nasi Goreng Mafia", cuisine: "Indonesian", price: "$", location: "Alam Sutera", description: "Popular spicy fried rice chain." },
  { name: "Dapur Solo", cuisine: "Indonesian", price: "$$", location: "Gading Serpong", description: "Javanese cuisine with nostalgic taste." },
  { name: "Bakmi GM", cuisine: "Indonesian", price: "$", location: "BSD City", description: "Classic noodle dishes for all ages." },

  { name: "Burger Bros", cuisine: "Western", price: "$$", location: "BSD City", description: "Handcrafted burgers and fries." },
  { name: "Holycow Steakhouse", cuisine: "Western", price: "$$", location: "Alam Sutera", description: "Casual steakhouse with big portions." },
  { name: "Pizza Place", cuisine: "Western", price: "$", location: "Gading Serpong", description: "Thin crust pizza and soda bar." },
  { name: "Union Cafe", cuisine: "Western", price: "$$", location: "BSD City", description: "Brunch spot with coffee and pastries." },
  { name: "Kopi Kalyan", cuisine: "Western", price: "$", location: "Alam Sutera", description: "Trendy coffee shop with snacks." },
  { name: "Two Stories", cuisine: "Western", price: "$$", location: "Gading Serpong", description: "Western food with live music and rooftop." },
  { name: "Monks", cuisine: "Western", price: "$$", location: "BSD City", description: "Cafe with breakfast, pasta, and burgers." },
  { name: "Kitchenette", cuisine: "Western", price: "$$", location: "Alam Sutera", description: "Casual dining with comfort Western food." },
  { name: "The Garden", cuisine: "Western", price: "$$$", location: "Gading Serpong", description: "Beautiful garden-themed restaurant." },
  { name: "The Bunker Cafe", cuisine: "Western", price: "$", location: "BSD City", description: "Affordable Western bites and coffee." },

    { name: "Din Tai Fung", cuisine: "Chinese", price: "$$", location: "BSD City", description: "Famous for dumplings and Xiao Long Bao." },
    { name: "Imperial Kitchen", cuisine: "Chinese", price: "$", location: "Alam Sutera", description: "Casual Chinese restaurant chain." },
    { name: "Ta Wan", cuisine: "Chinese", price: "$", location: "Gading Serpong", description: "Comfort Chinese porridge and rice dishes." },
    { name: "Paradise Dynasty", cuisine: "Chinese", price: "$$", location: "BSD City", description: "Specialty soup dumplings and noodles." },
    { name: "Dragon Hotpot", cuisine: "Chinese", price: "$$", location: "Alam Sutera", description: "Custom hotpot bowls with toppings." },
    { name: "Duck King", cuisine: "Chinese", price: "$$", location: "Gading Serpong", description: "Roast duck and dim sum favorite." },
    { name: "Haka Dimsum", cuisine: "Chinese", price: "$", location: "BSD City", description: "Affordable dim sum spot, open late." },
    { name: "May Star", cuisine: "Chinese", price: "$$", location: "Alam Sutera", description: "Upscale Chinese cuisine and banquet." },
    { name: "X.O Suki & Dim Sum", cuisine: "Chinese", price: "$$", location: "Gading Serpong", description: "Hotpot and all-you-can-eat dim sum." },
    { name: "Grand Imperial", cuisine: "Chinese", price: "$$$", location: "BSD City", description: "Premium Chinese dining experience." }

];

function decide() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear old
  resultDiv.classList.remove("show");

  const cuisine = document.getElementById("cuisine").value;
  const price = document.getElementById("price").value;
  const location = document.getElementById("location").value;

  const matches = restaurants.filter(r =>
    r.cuisine === cuisine &&
    r.price === price &&
    r.location === location
  );

  const pick = matches[Math.floor(Math.random() * matches.length)];

  resultDiv.innerHTML = pick ? pick.name : "No match found!";

  // Force reflow here!
  void resultDiv.offsetWidth;

  resultDiv.classList.add("show");
}



document.getElementById("decideBtn").addEventListener("click", decide);

