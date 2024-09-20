import sqlite3
import re

def generate_url(name):
    # Remove "Dr." and other prefixes, replace spaces with hyphens, convert to lowercase
    formatted_name = re.sub(r'^(Dr\.|Dietitian)\s+', '', name, flags=re.IGNORECASE).strip()
    formatted_name = formatted_name.lower().replace(' ', '-')
    if name.lower().startswith("dr."):
        formatted_name = f"dr-{formatted_name}"
    # Create the URL
    return f"https://ujalacygnus.com/profile/{formatted_name}"

def update_database(db_file):
    # Connect to the SQLite database
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()

    try:
        # Check if the 'url' column exists, if not, create it
        cursor.execute("PRAGMA table_info(doctors)")
        columns = [column[1] for column in cursor.fetchall()]
        if 'url' not in columns:
            cursor.execute("ALTER TABLE doctors ADD COLUMN url TEXT")

        # Fetch all names from the database
        cursor.execute("SELECT rowid, name FROM doctors")
        rows = cursor.fetchall()

        # Generate URLs and update the database
        for row in rows:
            rowid, name = row
            url = generate_url(name)
            cursor.execute("UPDATE doctors SET url = ? WHERE rowid = ?", (url, rowid))

        # Commit the changes
        conn.commit()
        print(f"Successfully updated {len(rows)} URLs in the database.")

    except sqlite3.Error as e:
        print(f"An error occurred: {e}")

    finally:
        # Close the connection
        conn.close()

# Usage
db_file = '/home/rahul/Desktop/DesktopSept17-2024/Portfolio/UjalaCygnus/backend/new_database.db'
update_database(db_file)