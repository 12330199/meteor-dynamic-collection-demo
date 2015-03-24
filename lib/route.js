Router.route('/', {
	template: 'clientCreate',
	layoutTemplate: 'index'
});

Router.route('/clientView/:collectionName', {
	name: 'clientView',
	template: 'clientView',
	layoutTemplate: 'index',
	waitOn: function() {
		return Meteor.subscribe('clientDetails', {collectionName: this.params.collectionName});
	}
});