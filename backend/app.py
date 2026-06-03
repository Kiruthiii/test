from flask import Flask,jsonify
from flask_cors import CORS
from flask import request
from voter import checkvoter
app=Flask(__name__)
CORS(app)
@app.route('/api/voter',methods=["POST"])
def voter():
    data=request.get_json()
    age=int(data["age"])
    result=checkvoter(age)
    return jsonify({
        "result": result
    })
@app.route('/api/message')
def message():
    return({
        "message":"hello"
        })
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
