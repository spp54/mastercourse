let offer = "none";
let time = 1600;

const cafe = {
  name: "Greyshepard",
  seatingCapacity: 55,
  hasSpecialOffers: true,
  drinks: ["Cappuccino", "Latte", "Filter Coffee", "Tea, Hot Chocolate"],
  breakfastOffer: "Free Croissant with Coffee",
  lunchOffer: "Free Drink with Sandwich",
  noOffer: "Sorry no offer",
};
const welcome = () => {
   console.clear()
   console.log(`Hello and welcome to the ${cafe.name} cafe`)
   console.log(`             We have room for ${cafe.seatingCapacity} so parties and group bookings are welcome`)
}
welcome()

if (time < 1100) {
  offer = cafe.breakfastOffer;
  console.log(cafe.breakfastOffer);
} else if (time < 1500) {
  offer = cafe.lunchOffer;
  console.log(cafe.lunchOffer);
}
else
{
  console.log(cafe.noOffer)
}
