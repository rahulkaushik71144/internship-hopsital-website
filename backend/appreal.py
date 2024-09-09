from flask import Flask, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database URLs
DATABASE_URL = "sqlite:///./hospital.db"  # Doctors database URL
SPECIALITIES_DATABASE_URL = "sqlite:///./specialities.db"  # Specialities database URL

Base = declarative_base()

# Define the Doctor model
class Doctor(Base):
    __tablename__ = "doctors"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    specialization = Column(String, index=True)

# Define the Speciality model
class Speciality(Base):
    __tablename__ = "specialities"
    id = Column(Integer, primary_key=True, index=True)
    speciality = Column(String, index=True)

# Create engines for both databases
engine = create_engine(DATABASE_URL)
specialities_engine = create_engine(SPECIALITIES_DATABASE_URL)

# Create session makers for both databases
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
SpecialitiesSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=specialities_engine)

Base.metadata.create_all(bind=engine)  # Create tables if they don't exist in doctors DB
Base.metadata.create_all(bind=specialities_engine)  # Create tables if they don't exist in specialities DB

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q', '')
    session: Session = SessionLocal()
    specialities_session: Session = SpecialitiesSessionLocal()

    # Query doctors matching the query
    results = session.query(Doctor).filter(
        (Doctor.name.like(f'%{query}%')) | (Doctor.specialization.like(f'%{query}%'))
    ).all()

    # Query specialities matching the query
    speciality_results = specialities_session.query(Speciality).filter(
        Speciality.speciality.like(f'%{query}%')
    ).all()

    session.close()
    specialities_session.close()

    # Combine doctors and specialities
    response = {
        "doctors": [{"id": doctor.id, "name": doctor.name, "specialization": doctor.specialization} for doctor in results],
        "specialities": [{"id": spec.id, "speciality": spec.speciality} for spec in speciality_results]
    }
    
    return jsonify(response)

@app.route('/autocomplete', methods=['GET'])
def autocomplete():
    query = request.args.get('q', '')
    session: Session = SessionLocal()
    specialities_session: Session = SpecialitiesSessionLocal()

    # Query doctor names and specializations
    doctor_names = session.query(Doctor.name).filter(Doctor.name.like(f'%{query}%')).limit(5).all()
    doctor_specializations = session.query(Doctor.specialization).filter(Doctor.specialization.like(f'%{query}%')).distinct().limit(5).all()

    # Query specialities
    specialities = specialities_session.query(Speciality.speciality).filter(Speciality.speciality.like(f'%{query}%')).limit(5).all()

    session.close()
    specialities_session.close()

    # Combine doctor names, specializations, and specialities into suggestions
    suggestions = [result[0] for result in doctor_names] + [spec[0] for spec in doctor_specializations] + [spec[0] for spec in specialities]

    return jsonify(suggestions)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
