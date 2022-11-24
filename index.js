function scuberGreetingForFeet(someValue){
  let ride;
   if (someValue <= 400) {
     ride = "This one is on me!";
   } else if (someValue > 2000) {
     ride = "I will gladly take your thirty bucks."; 
   } if (someValue > 2500){
     ride = "No can do.";}
  return ride
   }
scuberGreetingForFeet (199)
scuberGreetingForFeet (2001)
scuberGreetingForFeet (2501)

function ternaryCheckCity(city){
  return city === "NYC"? "Ok, sounds good." : "No go."
}

ternaryCheckCity(true)
ternaryCheckCity (false)

function switchOnCharmFromTip(tip){
  switch (tip)  {
    case "generous":
  return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default: 
    return "Bye."
     break
  }
  }
