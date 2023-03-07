from flask import Flask, render_template, flash, jsonify, session, request, redirect
from model import connect_to_db, db, User, Clinic
import os
from os import environ
import crud 

app = Flask(__name__) 
app.secret_key = '1234' #change to longer string
#GOOGLE_KEY = app.config['GOOGLE_KEY'] 

#Enter all app.route() below:

@app.route('/')
def homepage():
    """Shows the homepage."""

    return render_template('homepage.html')

@app.route('/new_user', methods=['POST'])
def register_user():
    """Register a new user."""

    user_name = request.form.get('user_name')
    user_password = request.form.get('user_password')

    user = crud.get_user_name(user_name)
    if user:
        flash("Username already exists. Please log in.")
    else:
        user = crud.register_user(user_name, user_password)
        db.session.add(user)
        db.session.commit()
        flash("Your account was created successfully.")

    return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    """Login with username and password."""

    username = request.form.get('user_name')
    password = request.form.get('user_password')

    user = crud.get_user_name(username)
    if not user or user.user_password != password:
        flash("Incorrect credentials. Please try again.")
    else:
        session['user_name'] = user.user_name
        flash("You are now logged in!")

    return redirect('/')

@app.route('/clinicMap') 
def view_map():
    """Show the interactive map of US clinics."""

    return render_template('clinicMap.html')

@app.route('/api/clinics')
def clinic_info():
    """JSON info about US clinics."""

    clinic = [
        {
            "id": clinic.clinic_id,
            "name": clinic.name,
            "link": clinic.link,
            "phone": clinic.phone,
            "address": clinic.address,
            "zipcode": clinic.zipcode,
            "state": clinic.state,
            "lat": clinic.lat,
            "lng": clinic.lng
        }
        for clinic in clinic.query.limit(100)
    ]
    
    return jsonify(clinic)

@app.route('/resources') #route to resource guide
def show_resource():
    """Show the resource guide."""

    return render_template('resources.html')

if __name__ == '__main__':
    connect_to_db(app)
    app.run(debug=True, host='0.0.0.0', port=5001)
#executes when file is run directly 