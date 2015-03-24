Clients = new Mongo.Collection('clients');

Meteor.methods({
	'createClient': function(clientProps) {
		var collectionName = clientProps.name.toLowerCase().replace(/\s/g, '_');

		clientId = Clients.insert({
			collectionName: 'collection_' + collectionName,
			name: clientProps.name
		});

		return clientId;
	}
});

