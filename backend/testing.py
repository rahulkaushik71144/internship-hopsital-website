from sqlalchemy import create_engine, Column, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Define the base class for the ORM models
Base = declarative_base()

# Define the Doctor model
class Doctor(Base):
    __tablename__ = 'doctors'
    
    id = Column(String, primary_key=True)  # Assuming there is an ID column
    url = Column(String)

# Function to fetch URLs
def fetch_urls_from_doctors(db_url):
    # Create an engine and session
    engine = create_engine(db_url)
    Session = sessionmaker(bind=engine)
    session = Session()
    
    try:
        # Query to get all URLs from the Doctor model
        urls = session.query(Doctor.url).all()
        
        # Print each URL
        for url in urls:
            print(url[0])  # url is a tuple, so we access the first element
    
    except Exception as e:
        print(f"An error occurred: {e}")
    
    finally:
        # Close the session
        session.close()

# Replace 'sqlite:///your_database.db' with your actual database URL
fetch_urls_from_doctors('sqlite:///hospitalnewest.db')
