from flask import *
app = Flask(__name__)
app.secret_key = 'skmv'
# app.config['MYSQL_HOST'] = 'shubhamdurugale.mysql.pythonanywhere-services.com'
# app.config['MYSQL_USER'] = 'shubhamdurugale'
# app.config['MYSQL_PASSWORD'] = '#Python8464'
# app.config['MYSQL_DB'] = 'shubham'
# mysql = MySQL(app)

@app.route('/')
def index():
    # cur=mysql.connection.cursor()
    # data=cur.execute("select * from shubham.user")
    # data=cur.fetchall()
    # mysql.connection.commit()
    return render_template('demo.html')    
if __name__ == "__main__":
    app.run(debug=True)