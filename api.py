import graphene
import graphene_sqlalchemy
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_graphql import GraphQLView

SECRET_KEY = 'dev'
SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'

app = Flask('api')
app.config.from_object(__name__)

db = SQLAlchemy(app)


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


class ContactsQuery(graphene_sqlalchemy.SQLAlchemyObjectType):

    class Meta:
        model = Contacts
        interfaces = (graphene.relay.Node, )


class Query(graphene.ObjectType):
    node = graphene.relay.Node.Field()
    all_contacts = graphene_sqlalchemy.SQLAlchemyConnectionField(ContactsQuery)


class AddContact(graphene.relay.ClientIDMutation):

    class Input:
        first_name = graphene.String()
        last_name = graphene.String()
        job_title = graphene.String()
        company = graphene.String()
        phone_number = graphene.String()
        email = graphene.String()
        address1 = graphene.String()
        city = graphene.String()
        state = graphene.String()
        zipcode = graphene.String()
        comments = graphene.String()

    ok = graphene.Boolean()
    contact = graphene.Field(lambda: ContactsQuery)

    @classmethod
    def mutate_and_get_payload(cls, args, context, info):
        _input = args.copy()
        del _input['clientMutationId']
        new_contact = Contacts(**_input)
        db.session.add(new_contact)
        db.session.commit()
        ok = True
        return AddContact(ok=ok, contact=new_contact)


class EditContact(graphene.relay.ClientIDMutation):

    class Input:
        id = graphene.ID(required=True)
        first_name = graphene.String()
        last_name = graphene.String()
        job_title = graphene.String()
        company = graphene.String()
        phone_number = graphene.String()
        email = graphene.String()
        address1 = graphene.String()
        city = graphene.String()
        state = graphene.String()
        zipcode = graphene.String()
        comments = graphene.String()
        active_status = graphene.Boolean()

    ok = graphene.Boolean()
    contact = graphene.Field(lambda: ContactsQuery)

    @classmethod
    def mutate_and_get_payload(cls, args, context, info):
        _input = args.copy()
        _type, _id = graphene.relay.node.from_global_id(_input.get('id'))
        _input['id'] = _id
        del _input['clientMutationId']
        Contacts.query.filter_by(id=_input.get('id')).update(_input)
        db.session.commit()
        ok = True
        contact = Contacts.query.get(_input.get('id'))
        return EditContact(ok=ok, contact=contact)


class DeleteContact(graphene.relay.ClientIDMutation):

    class Input:
        id = graphene.ID(required=True)

    ok = graphene.Boolean()
    contact = graphene.Field(lambda: ContactsQuery)

    @classmethod
    def mutate_and_get_payload(cls, args, context, info):
        _input = args.copy()
        _type, _id = graphene.relay.node.from_global_id(_input.get('id'))
        _input['id'] = _id
        contact = Contacts.query.get(_input.get('id'))
        db.session.delete(contact)
        db.session.commit()
        ok = True
        return DeleteContact(ok=ok, contact=contact)


class Mutations(graphene.ObjectType):
    add_contact = AddContact.Field()
    edit_contact = EditContact.Field()
    delete_contact = DeleteContact.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True
    )
)


def add_cors_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT,\
            DELETE, OPTIONS'
    return response


app.after_request(add_cors_header)


if __name__ == "__main__":
    app.run(host='0.0.0.0')
