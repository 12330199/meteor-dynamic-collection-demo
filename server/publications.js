Meteor.publish('allClientCollectionName', function() {
	return Clients.find({}, {
		fields: {
			name: 1,
			collectionName: 1
		}
	});
});

Meteor.publish('clientDetails', function(opts) {
	if (global[opts.collectionName]) {
		return global[opts.collectionName].find();
	}

	return this.ready();
});

