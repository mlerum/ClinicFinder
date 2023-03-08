"""CRUD operations."""

from model import db, User, Clinic, connect_to_db

#Functions that create data:

def register_user(user_name, user_password):
    """Create and return a new user."""

    user = User(
        user_name=user_name,
        user_password=user_password,
    )

    return user

def get_user_name(user_name):
     """Return user_name."""

     return User.query.filter(User.user_name == user_name).first()

#do I want a function to return user_id???

def create_clinic(name, phone, address, lat, lng):
    """Create and return a new clinic."""

    clinic = Clinic(
        name=name,
        phone=phone,
        address=address,
        lat=lat,
        lng=lng
    )

    return clinic

# def user_resource(user_id, clinic_id):
#     """Create and return user's resource."""

#     user_resource = User_Resources(
#         user_id=user_id,
#         clinic_id=clinic_id,
#     )

#     return user_resource


if __name__ == '__main__':
    from server import app
    connect_to_db(app)
#executes when file is run directly 