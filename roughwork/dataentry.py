import json
import sqlite3

# Function to insert URLs into the database
def insert_urls_to_db(json_file, db_file):
    # Connect to SQLite database
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()

    # Read URLs from the JSON file
    with open(json_file, 'r') as file:
        urls = json.load(file)

    # Insert each URL into the doctors table
    for idx, url in enumerate(urls, start=1):
        cursor.execute("INSERT INTO doctors (id, url) VALUES (?, ?)", (idx, url))

    # Commit the changes and close the connection
    conn.commit()
    conn.close()

# Example usage
insert_urls_to_db('doctor_urls.json', '/home/rahul/Desktop/DesktopSept17-2024/Portfolio/UjalaCygnus/backend/hospitalnewest.db')
