function logMeal(){
    const meal = document.getElementById("enterMeal").value;
    const calories = document.getElementById("calories").value;
    const fats = document.getElementById("fats").value;
    const protein = document.getElementById("protein").value;
    const carbs = document.getElementById("carbs").value;

    console.log("Meal:", meal);
    console.log("Calories:", calories);
    console.log("Fats:", fats);
    console.log("Protein:", protein);
    console.log("Carbs:", carbs);
    document.addEventListenr('DOMContentLoaded', () =>{	
	let btnLog = document.getElementById("logBtn");
	btnLog.addEventListener('click', logMeal );

})
} 

