from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#Below is a list of all DB Models:

class User(db.Model):
    """User."""
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_name = db.Column(db.String(25), nullable=False)
    user_password = db.Column(db.String(25), nullable=False)

    #maps = db.relationship('User_Resources', back_populates='user')

    def __repr__(self):
        """Show info about user."""
        return f'<User name={self.user_name}>' #need to edit
    
# class User_Resources(db.Model):
#     """User resources."""

#     __tablename__ = 'maps'

#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('User.user_id'))
#     clinic_id = db.Column(db.Integer, db.ForeignKey('Clinic.clinic_id'))

#     users = db.relationship('User', back_populates='maps')
#     clinics = db.relationship('Clinic', back_populates='maps')

#     def __repr__(self):
#         """Show info about users resources."""
#         return f'<Id={self.id}>' #need to edit
class Resource(db.Model):
    """List of all resources."""

    __tablename__ = 'resources'

    resource_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    summary = db.Column(db.String(300), nullable=False)
    link = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        """Show info about resource."""
        return f'<Resource name={self.name}: link={self.link}>'
    
class Clinic(db.Model):
    """List of all clinics."""

    __tablename__ = 'clinics'

    clinic_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(25))
    address = db.Column(db.String(100))
    lat = db.Column(db.Float, nullable=True)
    lng = db.Column(db.Float, nullable=True)

    #maps = db.relationship('User_Resources', back_populates='clinics')

    def __init__(self, name, phone, address, lat, lng):
        self.name = name
        self.phone = phone
        self.address = address
        self.lat = lat
        self.lng = lng 

    def __repr__(self):
        """Show info about clinic."""
        return f'<Clinic name={self.clinic_name}>'

##need to set connect_to_db(app) function:
def connect_to_db(flask_app, db_uri="postgresql:///ClinicFinder", echo=True):
    """Connect to the database."""

    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print('Connected to database!')

if __name__ == '__main__':
    from server import app

    connect_to_db(app)
    #app.run()
    #db.create_all() 
#executes when file is run directly 