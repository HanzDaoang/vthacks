from flask import Flask, render_template, request
from openai import OpenAI

app = Flask(__name__)

client = OpenAI(api_key="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")

MODEL="gpt-4o"


@app.route("/", methods=["POST", "GET"])
def prompt():
    if request.method == "POST":
        choice = request.form["cho"]
        college = request.form["coll"]
        UserInput = request.form["prom"]
        completion = client.chat.completions.create(
          model=MODEL,
          messages=[
          {"role": "system", "content": f"You are an assistant that gives the best {choice} at {college} based on what description I give. Add prices and links to the property websites as well that are accurate and real web pages."},
          {"role": "user", "content": UserInput}
          ]
        )
        return render_template('result.html', Result = "Assistant: " + completion.choices[0].message.content)
    else: 
        return render_template('index.html')
        