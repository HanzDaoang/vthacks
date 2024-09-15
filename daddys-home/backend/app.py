from flask import Flask, jsonify, request, Response
import openai
from flask_cors import CORS
from openai import OpenAI
import json

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes and all origins

@app.route("/api/generate", methods=["POST"])
def generate():
    # Get JSON input from the POST request
    
    data = request.get_json()  # Expecting JSON data from the request
    user_message = data.get("message", "Say this is a test")  # Default message

    # Make the OpenAI API call with streaming enabled
    try:
        # Initialize the OpenAI client with the API key
        client = OpenAI(api_key="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")

        # Generate the completion with streaming enabled
        completion = client.chat.completions.create(
            model="gpt-4o",  # Correct model specification
            messages=[
                {"role": "system", "content": "You are an assistant that gives the best choice at at a college dorm or off campus housing based on what description I give. Add prices and links to the property website as well that are accurate and a real web page. Only give one apartment/dorm suggestion"},
                {"role": "user", "content": user_message}
            ],
        )
        response_text = completion.choices[0].message.content

        # Return only the relevant text as JSON
        return jsonify({"response": response_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
