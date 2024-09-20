import sqlite3

def remove_duplicates(db_name):
    # Connect to the SQLite database
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()

    # Create a temporary table to hold unique entries
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS temp_doctors (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            specialty_id INTEGER,
            FOREIGN KEY (specialty_id) REFERENCES specialties (id)
        )
    ''')

    # Insert unique entries into the temporary table
    cursor.execute('''
        INSERT INTO temp_doctors (id, name, specialty_id)
        SELECT MIN(id), name, specialty_id FROM doctors
        GROUP BY name
    ''')

    # Drop the original doctors table
    cursor.execute('DROP TABLE IF EXISTS doctors')

    # Rename the temporary table to doctors
    cursor.execute('ALTER TABLE temp_doctors RENAME TO doctors')

    # Commit the changes and close the connection
    conn.commit()
    conn.close()

if __name__ == "__main__":
    remove_duplicates("/home/rahul/Desktop/DesktopSept17-2024/Portfolio/UjalaCygnus/backend/new_database.db")
    print("Duplicates removed successfully.")
