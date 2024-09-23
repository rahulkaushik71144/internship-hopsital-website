# Ujala Cygnus Hospitals - Landing Page Redesign

This project is a redesigned landing page for Ujala Cygnus Hospitals, featuring a modern look and improved user experience. One of the main highlights of the landing page is the inclusion of a search bar to help users easily find information on doctors, services, and specialities. The project was built using Flask for the backend and modern frontend tools to ensure a smooth and responsive experience.

## Features

- **Search Bar**: Allows users to search for doctors, services, or specialties available at Ujala Cygnus Hospitals.
- **Enhanced Design**: A modern and user-friendly layout to improve user interaction and attract more customers.
- **Mobile Responsiveness**: The design ensures a seamless experience across all devices, including mobile.
- **Backend**: Built with Flask to handle routing and data management.
- **Frontend**: Integrated with modern JavaScript libraries to enhance responsiveness and functionality.

## Setup Instructions

### Prerequisites

- **Python 3.x**
- **npm (Node Package Manager)**
- Flask and frontend dependencies will be installed during the setup process.

### Setup for Linux / MacOS

1. **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd <repository_folder>
    ```

2. **Create a Virtual Environment**:
    ```bash
    python3 -m venv venv
    ```

3. **Activate the Virtual Environment**:
    ```bash
    source venv/bin/activate
    ```

4. **Install Backend Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

5. **Run the Flask Application**:
    ```bash
    python3 ./backend/app.py
    ```

6. **Install Frontend Dependencies**:
    In a new terminal tab or window, navigate to the project folder and run:
    ```bash
    npm install
    npm run dev
    ```

7. **Run on Host for Testing on Mobile Devices**:
    ```bash
    npm run dev -- --host
    ```

### Setup for Windows

1. **Clone the repository**:
    Open your command prompt and run:
    ```bash
    git clone <repository_url>
    cd <repository_folder>
    ```

2. **Create a Virtual Environment**:
    ```bash
    python -m venv venv
    ```

3. **Activate the Virtual Environment**:
    ```bash
    venv\Scripts\activate
    ```

4. **Install Backend Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

5. **Run the Flask Application**:
    ```bash
    python app.py
    ```

6. **Install Frontend Dependencies**:
    In a new terminal window, run:
    ```bash
    npm install
    npm run dev
    ```

7. **Run on Host for Testing on Mobile Devices**:
    ```bash
    npm run dev -- --host
    ```

## Usage

- Access the landing page through your browser after the setup is complete.
- Use the **search bar** to find specific doctors, services, or specialties.
- The application runs by default on `localhost:5000` for the backend and `localhost:3000` for the frontend.
- When testing on a mobile device, use the IP address of your host machine along with the port number (usually `3000`) to access the page.

## Technologies Used

- **Flask** for the backend
- **HTML, CSS, and JavaScript** for the frontend
- **Node.js and npm** for managing frontend dependencies and running the development server

## Contributing

Feel free to fork this project and submit pull requests if you have suggestions for improving the design or functionality of the landing page.

---

### License

This project is licensed under the [MIT License](LICENSE).

