import time
from flask import Flask
 
app = Flask(__name__, static_folder='../build', static_url_path='/')
            
@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/profile')
def get_profile():
    return {'name': 'Noel'}

if __name__ == '__main__':
    app.run()