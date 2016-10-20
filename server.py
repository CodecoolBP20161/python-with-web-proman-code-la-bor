from flask import *
from model import *
from peewee import *
from playhouse.shortcuts import dict_to_model, model_to_dict
import json

app = Flask(__name__)


@app.before_request
def _db_connect():
    ConnectDatabase.db.connect()
    if Board.table_exists():
        pass
    else:
        ConnectDatabase.db.create_table(Board, Card, safe=True)


@app.route('/')
def start():
    return render_template('index.html')


@app.route('/api/boards', methods=['POST'])
def save_board():
    for element in request.form:
        board_json = json.loads(element)
    board_model = dict_to_model(Board, board_json)
    board_model.save()
    return "a board has been saved"


@app.route('/api/boards', methods=['GET'])
def get_boards_from_database():
    boards = Board.select()
    board_list = [model_to_dict(board) for board in boards]
    return json.dumps(board_list)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
