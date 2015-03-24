global = this;

global.initDB = function() {
	if (Meteor.isClient) {
		Meteor.subscribe('allClientCollectionName', {}, function(err) {
			// loop through all client and setup the BD
			var clients = Clients.find().fetch();

			if (clients.length) {
				_.map(clients, function(client) {
					if (!global[client.collectionName]) {
						global[client.collectionName] = new Mongo.Collection(client.collectionName);
					}
				});
			}
		});
	}

	if (Meteor.isServer) {
		// loop through all client and setup the BD
		var clients = Clients.find().fetch();

		if (clients.length) {
			_.map(clients, function(client) {
				if (!global[client.collectionName]) {
					global[client.collectionName] = new Mongo.Collection(client.collectionName);
				}
			});
		}
	}
};

Meteor.startup(function() {
	global.initDB();
});