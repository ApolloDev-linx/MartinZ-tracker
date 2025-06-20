from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
app = Flask(__name__)  
CORS(app)

@app.route('/mealInput', methods=['POST'])
def log_meal():
    data = request.form
    meal = data.get('enterMeal')
    fats = float(data.get('fats', 0))
    protein = float(data.get('protein',0))
    carbs = float(data.get('carbs',0))
    calories = float(data.get('cal',0))

    #Divide each by 7 in a var called daily_name

    daily_fats = fats / 7
    daily_protein = protein / 7
    daily_carbs = carbs / 7
    daily_calories = calories / 7

    return jsonify ({
        "meal": meal,
        "dailyFats": round(daily_fats, 2),
        "dailyProtein": round(daily_protein, 2),
        "dailyCarbs": round(daily_carbs, 2),
        "dailyCalories": round(daily_calories, 2)
            
        })
@app.route('/login', methods=['GET'])
def serve_login():
    return render_template('macroLogin.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username= data['username']
    password= data['password']

    if username == "apollo" and password == "test123":
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})

@app.route('/main')
def main_page():
    return render_template('mainMacro.html')



if __name__ == '__main__':
    app.run(debug=True)

