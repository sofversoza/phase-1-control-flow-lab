function scuberGreetingForFeet(distance) {
  if (distance <= 400) 
    return 'This one is on me!';
  else if (distance > 2500)
    return 'No can do.';
  else if (distance > 2000) 
    return 'I will gladly take your thirty bucks.';
}


function ternaryCheckCity(city) {
  const mssg = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return mssg;
}


function switchOnCharmFromTip(tip) {
  let message;
  switch (tip) {
    case 'generous':
      message = "Thank you so much.";
      break;
    case 'not as generous':
      message = "Thank you.";
      break;
    default:
      message = "Bye.";  
  }
  return message;
}