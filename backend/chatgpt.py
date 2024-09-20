from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database file
DB_FILE = 'new_database.db'

def get_db_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def search_doctors(query):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
    SELECT d.id, d.name, d.url, s.name as specialty
    FROM doctors d
    JOIN specialties s ON d.specialty_id = s.id
    WHERE d.name LIKE ? OR s.name LIKE ? OR s.keywords LIKE ?
    GROUP BY d.name
    ''', (f'%{query}%', f'%{query}%', f'%{query}%'))
    results = cursor.fetchall()
    conn.close()
    return results

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q', '')
    results = search_doctors(query)
    
    response = {
        "doctors": [{"id": row['id'], "name": row['name'], "specialization": row['specialty'], "url": row['url']} for row in results],
        "specialities": []  # We'll fill this later if needed
    }
    
    return jsonify(response)

@app.route('/autocomplete', methods=['GET'])
def autocomplete():
    query = request.args.get('q', '')
    conn = get_db_connection()
    cursor = conn.cursor()

    # Query doctor names
    cursor.execute('''
    SELECT DISTINCT name FROM doctors WHERE name LIKE ? LIMIT 5
    ''', (f'%{query}%',))
    doctor_names = [row['name'] for row in cursor.fetchall()]

    # Query specialties
    cursor.execute('''
    SELECT DISTINCT name FROM specialties WHERE name LIKE ? OR keywords LIKE ? LIMIT 5
    ''', (f'%{query}%', f'%{query}%'))
    specialties = [row['name'] for row in cursor.fetchall()]

    conn.close()

    # Combine doctor names and specialties into suggestions
    suggestions = doctor_names + specialties

    return jsonify(suggestions)

@app.route('/get-counts', methods=['GET'])
def get_counts():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM specialties")
    specialty_count = cursor.fetchone()[0]
    
    cursor.execute("SELECT COUNT(*) FROM doctors")
    doctor_count = cursor.fetchone()[0]

    conn.close()

    return jsonify({
        "specialty_count": specialty_count,
        "doctor_count": doctor_count
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000, debug=True)