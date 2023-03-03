from flask import Flask, render_template, flash, jsonify, session, request, redirect
from model import connect_to_db, db, User, User_Resources, Clinic
import os
from os import environ
import crud 

#enter all app.route() below:
app = Flask(__name__) 

GOOGLE_KEY = app.config['GOOGLE_KEY'] 

@app.route('/')
def homepage():
    """Shows the homepage."""

    return render_template('homepage.html')

@app.route('/new_user', methods=['POST'])
def register_user():
    """Register a new user."""

    user_name = request.form.get('user_name')
    user_password = request.form.get('user_password')

    user = crud.register_user(user_name, user_password)
    db.session.add(user)
    db.session.commit()
    flash('Account created. Please log in.')

    return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    """Login with username and password."""

    username = request.form.get('user_name')
    password = request.form.get('user_password')

    user = crud.get_user_name(username)
    if not user.password or user != user:
        flash("Incorrect credentials. Please try again.")
    else:
        session['user_name'] = User.user_name
        flash("You are now logged in!")

    return redirect('/')

@app.route('/clinicMap') 
def view_map():
    """Show the interactive map of US clinics."""

    return render_template('clinicMap.html')

@app.route('/api/clinics')
def clinic_info():
    """JSON info about US clinics."""

    clinics = []
    for clinic in clinic.query.limit(50):
        clinic.append({
            'Name': clinic.name,
            'Link': clinic.link,
            'Phone': clinic.phone,
            'Address': clinic.address,
            'Zipcode': clinic.zipcode,
            'State': clinic.state,
            'Lat': clinic.lat,
            'Long': clinic.long,
        })
    
    return jsonify(clinics)

@app.route('/resources') #route to resource guide
def show_resource():
    """Show the resource guide."""

    return render_template('resources.html')

if __name__ == '__main__':
    connect_to_db(app)
    app.run(debug=True, host='0.0.0.0', port=5001)
#executes when file is run directly 