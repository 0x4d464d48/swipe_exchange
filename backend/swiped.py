from flask import Flask, send_from_directory
app = Flask(__name__)

@app.route("/<path:path>")
def send_file(path):
    return send_from_directory("../public", path)

@app.route("/")
def send_index():
    return send_from_directory("../public", "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int("80"))