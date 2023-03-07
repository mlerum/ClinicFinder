import os, json, crud, model, server

os.system('dropdb ClinicFinder') 
os.system('createdb ClinicFinder') 

with server.app.app_context():
    model.connect_to_db(server.app)
    model.db.create_all()

"""Load clinic data from JSON file."""
with open('clinics.json') as c:
    clinic_data = json.loads(c.read())

#Create clinics, store them in list:
clinic_in_db = []
for clinic in clinic_data:
    name, phone, address, lat, lng = (
        clinic['name'],
        clinic['phone'],
        clinic['address'],
        clinic['lat'],
        clinic['lng'],
    )
#db_clinic = crud.create_clinic(name, link, phone, address, zipcode, state, lat, lng)

model.db.session.add_all(clinic_in_db)
model.db.session.commit()

if __name__ == '__main__':
    from server import app
    #connect_to_db(app)

#executes when file is run directly 

