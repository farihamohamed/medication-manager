from flask import Flask , request, jsonify 


app  = Flask(__name__)

#simulated user database 
users = {
    "johndoe": {"password": "1234", "name": "John Doe", "medications": ["Aspirin", "Ibuprofen"]},
    "janedoe": {"password": "5678", "name": "Jane Doe", "medications": ["Paracetamol", "Amoxicillin"]}
}

@app.route('/login', methods=['POST'])
def login():
 #Get JSON from the frontend
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
#Validate input
    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400


#Authenticate user
    user = users.get(username)
    if not user or  user['password'] != password:
        return jsonify({"error": "Invalid Credentials!"}), 401



#Respond with user data 
    return jsonify({
        "name" : user['name'],
        "medications" : user['medications']
    })   
    

if __name__ == '__main__':
    app.run(debug=True)




