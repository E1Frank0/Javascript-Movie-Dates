/* A basic Javascript Date() Object Demonstration. */
/* By: Frank Diaz */

//Setup the current date
var today = new Date();
var todayYear = today.getFullYear();
var todayMonth = today.getMonth();
var todayDay = today.getDay();
var todayHour = today.getHours();
var todayMinutes = today.getMinutes();
var todaySeconds = today.getSeconds();
 
// Set the date for The Iron Giant
var ironGiantDate = new Date(1999, 7, 6, 15, 24, 0);
var ironGiantYear = ironGiantDate.getFullYear();
var ironGiantMonth = ironGiantDate.getMonth();
var ironGiantDay = ironGiantDate.getDay();
var ironGiantHour = ironGiantDate.getHours();
var ironGiantMinutes = ironGiantDate.getMinutes();
var ironGiantSeconds = ironGiantDate.getSeconds();

// Set the date for the upcoming movie
var futureMovieDate = new Date(2115, 10, 18, 15, 24, 0);
var futureMovieYear = futureMovieDate.setFullYear();
var futureMovieMonth = futureMovieDate.setMonth();
var futureMovieDay = futureMovieDate.setDate();
var futureMovieHour = futureMovieDate.setHours();
var futureMovieMinutes = futureMovieDate.setMinutes();
var futureMovieSeconds = futureMovieDate.setSeconds();

// Calculate the amount of time that passed since The Iron Giant came out
document.querySelector(".ironGiantYears").innerHTML = todayYear - ironGiantYear;

document.querySelector(".ironGiantMonths"). innerHTML = todayMonth - ironGiantMonth;

document.querySelector(".ironGiantDays").innerHTML = todayDay - ironGiantDay;

document.querySelector(".ironGiantHours").innerHTML = todayHour - ironGiantHour;

document.querySelector(".ironGiantMinutes").innerHTML = todayMinutes - ironGiantMinutes;

document.querySelector(".ironGiantSeconds").innerHTML = todaySeconds - ironGiantSeconds;

// Calculate the amount of time left for 100 Years to come out
document.querySelector(".futureMovieYears").innerHTML = futureMovieYear - todayYear;

document.querySelector(".futureMovieMonths").innerHTML = futureMovieMonth - todayMonth;

document.querySelector(".futureMovieDays").innerHTML = futureMovieDay - todayDay;

document.querySelector(".futureMovieHours").innerHTML = futureMovieHour - todayHour;

document.querySelector(".futureMovieMinutes").innerHTML = futureMovieMinutes - todayMinutes;

document.querySelector(".futureMovieSeconds").innerHTML = futureMovieSeconds - todaySeconds;