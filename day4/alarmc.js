let alarm = true;
let day = "Sunday";
//define key value pairs
const getUp = {
  weekendAlarm: "No Alarm Needed",
 //weekdayAlarm: "Get up at 7am",
  mondayAlarm: "Get up at 9am",
  tuesdayAlarm: "Get up at 10am",
  wednesdayAlarm: "Remote Working Day",
  thursdayAlarm: "Get up at 6am",
  fridayAlarm: "Afternoon working 12pm start"
}

//Display alarm message based on day varible

if (day == "Saturday" || day == "Sunday") {
  alarm = false;
  console.log(`It is the weekend. Have a bit of a sleep in. ${getUp.weekendAlarm}`);
} 
else if (day == "Monday"){
   console.log(`It is Monday ${getUp.mondayAlarm}`)
  alarm = true;
}
else if (day == "Tuesday"){
  console.log(`It is Tuesday ${getUp.tuesdayAlarm}`)
  alarm = true;
}
else if (day == "Wednesday"){
  console.log(`It is Wednesday ${getUp.wednesdayAlarm}`)
 alarm = true;
}
else if (day == "Thurday"){
  console.log(`It is Thursday ${getUp.thursdayAlarm}`)
 alarm = true;
}
else if (day == "Friday"){
  console.log(`It is Friday ${getUp.fridayAlarm}`)
 alarm = true;
}

  

