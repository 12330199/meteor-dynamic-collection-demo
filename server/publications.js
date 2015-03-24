Meteor.publish('allClientCollectionName', function() {
	return Clients.find({}, {
		fields: {
			name: 1,
			collectionName: 1
		}
	});
});
