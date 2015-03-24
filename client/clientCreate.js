Session.set('currentClient', null);

Template.clientCreate.rendered = function() {
	this.subscribe('allClientCollectionName');
};

Template.clientCreate.helpers({
	'clientList': function() {
		return Clients.find();
	},

	'currentClient': function() {
		return Session.get('currentClient');
	}
});

Template.clientCreate.events({
	'submit #frm-client': function(e) {
		e.preventDefault();

		var clientProps = {
			name: $(e.target).find('#txt-client-name').val(),
			email: $(e.target).find('#txt-client-email').val()
		};

		Meteor.call('createClient', clientProps);
	},

	'click .lst-client li': function(e) {
		var collectionName = $(e.target).data('collection');

		Session.set('currentClient', collectionName);
	},

	'submit #frm-client-details': function(e) {
		e.preventDefault();

		var clientProps = {
			collectionName: $(e.target).find('#txt-client').val(),
			email: $(e.target).find('#txt-client-email').val()
		};

		Meteor.call('addClientEmail', clientProps);
	}
});