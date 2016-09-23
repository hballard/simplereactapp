from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_graphql import GraphQLView
import graphene
from graphene.contrib.sqlalchemy import SQLAlchemyConnectionField,\
        SQLAlchemyNode

SECRET_KEY = 'dev'
SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'

app = Flask('api')
app.config.from_object(__name__)

db = SQLAlchemy(app)

# declare flask_sqlalchemy models


class Contacts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    job_title = db.Column(db.String(120))
    company = db.Column(db.String(120))
    phone_number = db.Column(db.String(120))
    email = db.Column(db.String(120))
    address1 = db.Column(db.String(250))
    city = db.Column(db.String(120))
    state = db.Column(db.String(80))
    zipcode = db.Column(db.String(120))
    comments = db.Column(db.Text)
    active_status = db.Column(db.Boolean, default=True)

    def __init__(self, **kwargs):
        super(Contacts, self).__init__(**kwargs)

    def __repr__(self):
        return '<Contact %r: %r>' % (self.id, self.first_name)

# declare graphql schema
schema = graphene.Schema()


@schema.register
class ContactsQ(SQLAlchemyNode):
    class Meta:
        model = Contacts


class Query(graphene.ObjectType):
    all_contacts = SQLAlchemyConnectionField(ContactsQ)


schema.query = Query

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True
    )
)

# def add_cors_header(response):
# response.headers['Access-Control-Allow-Origin'] = '*'
# response.headers['Access-Control-Allow-Credentials'] = 'true'
# response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
# response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT,\
# DELETE, OPTIONS'
# return response

# app.after_request(add_cors_header)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
