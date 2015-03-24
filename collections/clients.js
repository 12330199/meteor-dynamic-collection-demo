Clients = new Mongo.Collection('clients');

Meteor.methods({
	'createClient': function(clientProps) {
		var collectionName = clientProps.name.toLowerCase().replace(/\s/g, '_');

		clientId = Clients.insert({
			collectionName: 'collection_' + collectionName,
			name: clientProps.name
		});

		global.initDB();

		return clientId;
	},

	'addClientEmail': function(clientProps) {
		return global[clientProps.collectionName].insert({
			email: clientProps.email
		});
	}
});

