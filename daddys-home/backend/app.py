from flask import Flask, jsonify
from propelauth_flask import init_auth, current_user

app = Flask(__name__)  # Define the app object

# Initialize PropelAuth
# auth = init_auth(
#     "",
#     "",
# )  

auth = init_auth(
    "https://406717810.propelauthtest.com",
    "1ce0168e0f30d08c133a6cc70faa519e40e368619f167ffc3c2995fa9ba6a234a690ac81ccf3b4581573e727cf67be1a",
)            

@app.route("/api/whoami")
@auth.require_user
def who_am_i():
    """This route is protected, current_user is always set if authenticated"""
    return jsonify({"user_id": current_user.user_id})

@app.route("/")
def index():
    return "hi!"

if __name__ == "__main__":
    app.run(port=3001, debug=True)

