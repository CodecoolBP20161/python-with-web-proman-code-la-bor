from flask import *
from model import *

app = Flask(__name__)


@app.before_request
def _db_connect():
    ConnectDatabase.db.connect()
    if Board.table_exists():
        pass
    else:
        ConnectDatabase.db.create_table(Board, safe=True)


@app.route('/')
def start():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
