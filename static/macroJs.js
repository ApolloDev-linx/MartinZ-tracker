function logMeal(e) {
	e.preventDefault();
  const meal = document.getElementById("enterMeal").value;
  const calories = document.getElementById("cal").value;
  const fats = document.getElementById("fats").value;
  const protein = document.getElementById("protein").value;
  const carbs = document.getElementById("carbs").value;
// here we are creating an empty form-style that holds "key": value pairs.
  const payload = new URLSearchParams();
// now we add  key-value pairs to payload.	
  payload.append("enterMeal", meal);
  payload.append("cal", calories);
  payload.append("fats", fats);
  payload.append("protein", protein);
  payload.append("carbs", carbs);
// we will use fetch to send the data to the backend with POST.
  fetch('http://127.0.0.1:5000/mealInput', {
    method: 'POST',
// we will use content type to format it in HTML form.	  
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
// body is the actual data we are sending.	  
    body: payload,
  })
// the .then is a function in JS that essentially, says once fetch finishes successfully then do this.
// the first respone is a param that will take whatever flask sends back.
// use a simple arrow function for cleaner code.
//the respone.json() converts the response body into usable JS object. 
  .then(response => response.json())
// data is a param that is waiting on respone.json() followed by a arrow function.
  .then(data => {
// we will log it in the console and take notice how we refernce data here.	  
    console.log('Received from Python:', data);
// we will define days to hold all of the IDS in our html.
//essentialy an array.
	 const days = ['mon','tue','wed','thur','fri','sat','sun'];
// this will loop through every string in days and use day as an expresion to hold these.	  
	days.forEach(day => {
		// uses the current day to grab a reference to its corresponding box in the DOM.	
		const box = document.getElementById(day);
		// will write to each div.
		// we reference data from this file, but we reference meal, dailyCalories etc from our macroTracker.py file.
		box.textContent =`
			${data.meal};
		Calories: ${data.dailyCalories}
		Fats: ${data.dailyFats}
		Protein: ${data.dailyProtein}
		Carbs: ${data.dailyCarbs}
		 ` ;
	});

  })
// activates if fetch fails.
// error is a param that will hold any error it catches and we will log it to the console.
  .catch(error => {
    console.error('ERROR:', error);
  });
}
// using DOM to connect our function to the button
document.addEventListener('DOMContentLoaded', () => {
  let btnLog = document.getElementById('logbtn');
  btnLog.addEventListener('click',(e) => logMeal(e));
});


