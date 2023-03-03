import os, json, crud, model, server

os.system('dropdb ClinicFinder') 
os.system('createdb ClinicFinder') 

with server.app.app_context():
    model.connect_to_db(server.app)
    model.db.create_all()

#Load clinic data from JSON file
with open('clinic.json') as f:
    clinic_data = json.loads(f.read())

#Create clinics, store them in list
clinic_in_db = []
for clinic in clinic_data:
    clinic_name, link = (
        clinic['name'],
        clinic['link'],
        clinic['phone'],
        clinic['address'],
        clinic['zipcode'],
        clinic['state'],
        clinic['location'],
    )

model.db.session.add_all(clinic_in_db)
model.db.session.commit()

if __name__ == '__main__':
    from server import app
    #connect_to_db(app)

#executes when file is run directly 

