let userProfile = {
  fullName: prompt("Karryle B. Lagrimas:"),
  age: prompt("19:"),
  favoriteNumber: prompt("07:"),
  favoriteColors: ["lavender, white, green"],
};

for (let i = 0; i < 3; i++) {
  let color = prompt(`Pink ${i + 1}:`);
  userProfile.favoriteColors.push(color);
}

console.log(userProfile
