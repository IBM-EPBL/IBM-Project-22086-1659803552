from flask import Flask,render_template,jsonify,redirect,request
from flask_cors import CORS
import sqlite3

app = Flask('app')
CORS(app)

@app.route('/')
def home():
  return render_template('signin.html')
  
@app.route('/signup')
def signup():
  return render_template('new.html')
  
@app.route('/retrieveData')
def retrieveData():
  conn  = sqlite3.connect('Database.db')
  ds={}
  for i,j,k in conn.execute('select * from customers'):
    ds[j] = k
  return jsonify(ds)
  
@app.route('/addData/<data>',methods=['POST','GET'])
def addData(data):
    conn  = sqlite3.connect('Database.db')
    print(data)
    usr,mail,pwd = data.split('-')
    query="insert into customers (usr,mail,pwd) values (?,?,?)"
    conn.execute(query,(usr,mail,pwd))
    conn.commit()
    return render_template('index.html')

@app.route('/home')
def home1():
  return render_template('home.html')
  
@app.errorhandler(405)
def page_not_found(e):
    return render_template('index.html')
  
app.run(debug=True)