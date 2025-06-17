function logMeal(e) {
	e.preventDefault();
  const meal = document.getElementById("enterMeal").value;
  const calories = document.getElementById("cal").value;
  const fats = document.getElementById("fats").value;
  const protein = document.getElementById("protein").value;
  const carbs = document.getElementById("carbs").value;

  const payload = new URLSearchParams();
  payload.append("enterMeal", meal);
  payload.append("cal", calories);
  payload.append("fats", fats);
  payload.append("protein", protein);
  payload.append("carbs", carbs);

  fetch('http://127.0.0.1:5000/mealInput', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload,
  })
  .then(response => response.json())
  .then(data => {
    console.log('Received from Python:', data);
  })
  .catch(error => {
    console.error('ERROR:', error);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let btnLog = document.getElementById('logbtn');
  btnLog.addEventListener('click',(e) => logMeal(e));
});

