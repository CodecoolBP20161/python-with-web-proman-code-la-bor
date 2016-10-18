from peewee import *
import json


class ConnectDatabase:
    def get_connect_string():
        with open("connect_str.json") as config:
            data = json.load(config)
            db_name = data["database"]
            return db_name

    db = PostgresqlDatabase(get_connect_string())


class BaseModel(Model):
    class Meta:
        database = ConnectDatabase.db


class BoardData(BaseModel):
    board_title = CharField()
    board_id = CharField()
