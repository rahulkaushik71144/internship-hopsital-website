import json
import sqlite3

# Function to update URLs in the database
def update_urls_in_db(json_file, db_file):
    # Connect to SQLite database
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()

    # Read URLs from the JSON file
    with open(json_file, 'r') as file:
        urls = json.load(file)

    # Update URLs in the doctors table
    for idx, url in enumerate(urls, start=1):
        cursor.execute("UPDATE doctors SET url = ? WHERE id = ?", (url, idx))

    # Commit the changes and close the connection
    conn.commit()
    conn.close()

# Example usage
update_urls_in_db('doctor_urls.json', '/home/rahul/Desktop/DesktopSept17-2024/Portfolio/UjalaCygnus/backend/hospitalnewest.db')
