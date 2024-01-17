# app.py
from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['myflix_db']
users_collection = db['users']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    email_or_phone = request.form['emailOrPhoneNumber']
    password = request.form['password']

    # You can perform authentication and store user data in MongoDB here
    # For simplicity, let's just insert the user data into MongoDB
    user_data = {
        'email_or_phone': email_or_phone,
        'password': password
    }
    users_collection.insert_one(user_data)

    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
