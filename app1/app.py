from flask import Flask
app = Flask(__name__)

@app.route('/app1')
def home():
    return "Hello from App1 - Python Flask"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
