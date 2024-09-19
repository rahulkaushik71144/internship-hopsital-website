import sqlite3

def make_id_autoincrement(db_file):
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()

    # Step 1: Create a new temporary table with AUTOINCREMENT
    cursor.execute("""
    CREATE TABLE temp_doctors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        specialization TEXT
    );
    """)

    # Step 2: Copy data from the old table to the new table
    cursor.execute("""
    INSERT INTO temp_doctors (name, specialization)
    SELECT name, specialization FROM doctors;
    """)

    # Step 3: Drop the old table
    cursor.execute("DROP TABLE doctors;")

    # Step 4: Rename the temporary table to the original table name
    cursor.execute("ALTER TABLE temp_doctors RENAME TO doctors;")

    # Commit changes and close the connection
    conn.commit()
    conn.close()

make_id_autoincrement('/home/rahul/Desktop/DesktopSept17-2024/Portfolio/UjalaCygnus/backend/hospitalnewest.db')
