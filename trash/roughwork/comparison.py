import sqlite3

def find_unique_names(db1_name, db2_name):
    # Connect to both SQLite databases
    conn1 = sqlite3.connect(db1_name)
    conn2 = sqlite3.connect(db2_name)

    cursor1 = conn1.cursor()
    cursor2 = conn2.cursor()

    # Fetch all names from the first database
    cursor1.execute('SELECT name FROM doctors')
    names_db1 = set(row[0] for row in cursor1.fetchall())

    # Fetch all names from the second database
    cursor2.execute('SELECT name FROM doctors')
    names_db2 = set(row[0] for row in cursor2.fetchall())

    # Find names in the first database that are not in the second
    unique_names = names_db1 - names_db2

    # Close the database connections
    conn1.close()
    conn2.close()

    return unique_names

if __name__ == "__main__":
    db1 = "/home/rahul/Desktop/DesktopSept17-2024/Portfolio/UjalaCygnus/backend/hospitalnewest.db"  # Replace with your first database file name
    db2 = "/home/rahul/Desktop/DesktopSept17-2024/Portfolio/UjalaCygnus/backend/new_database.db"  # Replace with your second database file name

    unique_names = find_unique_names(db1, db2)

    print("Names present in the first database but not in the second:")
    for name in unique_names:
        print(name)
