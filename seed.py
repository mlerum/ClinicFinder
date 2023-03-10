import os, json, crud, model, server

os.system('dropdb ClinicFinder') 
os.system('createdb ClinicFinder') 

with server.app.app_context():
    model.connect_to_db(server.app)
    model.db.create_all()

    """Load clinic data from JSON file."""
    with open('Data/clinics.json') as c:
        clinic_info = json.loads(c.read())

    #Create clinics, store them in list:
    clinic_in_db = []
    for clinic in clinic_info:
        name, phone, address, lat, lng = (
            clinic['name'],
            clinic['phone'],
            clinic['address'],
            clinic['coords']['lat'],
            clinic['coords']['lng'],
        )

        clinic_in_db.append(crud.create_clinic(name, phone, address, lat, lng))
    
    model.db.session.add_all(clinic_in_db)
    model.db.session.commit()

    """Load resource data from JSON file."""
    with open('Data/resources.json') as r:
        resource_info = json.loads(r.read())

    #create resources, store them in list:
    resource_in_db = []
    for resource in resource_info:
        name, summary, link = (
            resource['name'],
            resource['summary'],
            resource['link'],
        )

        resource_in_db.append(crud.create_resource(name, summary, link))

    model.db.session.add_all(resource_in_db)
    model.db.session.commit()

if __name__ == '__main__':
    from server import app
    #connect_to_db(app)

#executes when file is run directly 

