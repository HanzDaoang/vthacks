from propelauth_flask import init_auth

auth = init_auth(
    "YOUR_AUTH_URL",
    "YOUR_API_KEY",
)            
@app.route("/api/whoami")
@auth.require_user
def who_am_i():
    """This route is protected, current_user is always set"""
    return {"user_id": current_user.user_id}