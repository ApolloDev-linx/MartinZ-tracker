from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
#allows acces from other origins.
app = Flask(__name__)
#this activates CORS rules on app.
CORS(app)
#this is decorator essentially saying when this route /mealInput is accessed run the function below.
@app.route('/mealInput', methods=['POST'])

def log_meal():
# the definition below grabs incoming data from the frontend form or payload and stores it in our var called data.    
    data = request.form
    meal = data.get('enterMeal')
    fats = float(data.get('fats', 0))
    protein = float(data.get('protein',0))
    carbs = float(data.get('carbs',0))
    calories = float(data.get('cal',0))

    #Divide each by 7 in a var called daily_name.

    daily_fats = fats / 7
    daily_protein = protein / 7
    daily_carbs = carbs / 7
    daily_calories = calories / 7
#here we turn the python dict into a json response.
    return jsonify ({
        "meal": meal,
        "dailyFats": round(daily_fats, 2),
        "dailyProtein": round(daily_protein, 2),
        "dailyCarbs": round(daily_carbs, 2),
        "dailyCalories": round(daily_calories, 2)
            
        })
    
@app.route('/login', methods=['GET'])
# using render template we send the html file we mention to the page browser.
def serve_login():
    return render_template('macroLogin.html')

@app.route('/login', methods=['POST'])
def login():
# we then take raw json data and turn it into a python dict.    
    data = request.get_json()
    username= data['username']
    password= data['password']
#we check if the key has the value we hardcoded here.
    if username == "apollo" and password == "test123":
        #sends a true or false to our loginJS.js
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})
#same logic from line 36
@app.route('/main')
def main_page():
    return render_template('mainMacro.html')


#if we are running the file directly we run the app: python macroTracker.py
if __name__ == '__main__':
    app.run(debug=True)

