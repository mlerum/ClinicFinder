from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#Below is a list of all DB Models:

class User(db.Model):
    """User."""
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_zipcode = db.Column(db.String, nullable=False)
    user_name = db.Column(db.String(25), nullable=False)
    user_password = db.Column(db.String(25), nullable=False)
    #user_state = db.Column(db.Integer)

    maps = db.relationship('User_Resources', back_populates='user')

    def __repr__(self):
        """Show info about user."""
        return f'<User name={self.user_name}>' #need to edit
    
class User_Resources(db.Model):
    """User resources."""

    __tablename__ = 'maps'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.user_id'))
    clinic_id = db.Column(db.Integer, db.ForeignKey('Clinic.clinic_id'))

    users = db.relationship('User', back_populates='maps')
    clinics = db.relationship('Clinic', back_populates='maps')

    def __repr__(self):
        """Show info about users resources."""
        return f'<Id={self.id}>' #need to edit
    
class Clinic(db.Model):
    """List of all clinics."""

    __tablename__ = 'clinics'

    clinic_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    link = db.Column(db.String(75), nullable=False)
    phone = db.Column(db.String(25))
    address = db.Column(db.String(50))
    zipcode = db.Column(db.String(5))
    state = db.Column(db.String(2))
    lat = db.Column(db.Float, nullable=True)
    lng = db.Column(db.Float, nullable=True)

    maps = db.relationship('User_Resources', back_populates='clinics')

    def __init__(self, clinic_id, name, link, phone, address, zipcode, state, lat, long):
        self.clinic_id, self.name, self.link, self.phone, self.address, self.zipcode, self.state, self.lat, self.long
    def __repr__(self):
        """Show info about clinic."""
        return f'<Clinic name={self.clinic_name}: Link={self.link}>'

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