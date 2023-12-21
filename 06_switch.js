var displayDay = function (dayNum) {
  switch (dayNum) {
    case 1:
      console.log(`Monday`);
      break;
    case 2:
      console.log(`Tuesday`);
      break;
    case 3:
      console.log(`Wensday`);
      break;
    case 4:
      console.log(`Thursday`);
      break;
    case 5:
      console.log(`Friday`);
      break;
    case 6:
      console.log(`Sat`);
      break;
    case 7:
      console.log(`Sun`);
      break;
    default:
        console.log(`Invalid data: ${dayNum}`);
      break;
  }
};
displayDay(5);
displayDay(7);
displayDay(9);
