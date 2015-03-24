Template.clientView.helpers({
	'client': function() {
		if (Router.current()) {
			var collectionName = Router.current().params.collectionName;

			if (global[collectionName]) {
				return global[collectionName].find();
			}
		}
	}
});
