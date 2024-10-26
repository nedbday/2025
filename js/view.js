NavView = Backbone.View.extend({
	initialize: function (options) {
	},
	events: {
		'click ul.pills li.home a': 'displayHome',
		'click ul.pills li.contact a': 'displayContact'
	},
	initialize: function () {
	},
	displayHome: function () {
		this.router.navigate("home", true);
	},

	displayContact: function () {
		this.router.navigate("contact", true);
	},
	render: function (options) {
		var template = _.template($("#template_nav").html(), {});
		this.$el.html(template);
	}
});

ContentHomeView = Backbone.View.extend({
	initialize: function (options) {
	},
	render: function (options) {
		var template = _.template($("#template_content_home").html(), {});
		this.$el.html(template);
	}
});

ContentProgramView = Backbone.View.extend({
	initialize: function (options) {
	},
	render: function (options) {
		var template = _.template($("#template_content_program").html(), {});
		this.$el.html(template);
	}
});

ContentKeynoteView = Backbone.View.extend({
	initialize: function (options) {
	},
	render: function (options) {
		var template = _.template($("#template_content_keynote").html(), {});
		this.$el.html(template);
	}
});

ContentPapersView = Backbone.View.extend({
	initialize: function (options) {
	},
	render: function (options) {
		var template = _.template($("#template_content_papers").html(), {});
		this.$el.html(template);
	}
});

ContentPostersView = Backbone.View.extend({
	initialize: function (options) {
	},
	render: function (options) {
		var template = _.template($("#template_content_posters").html(), {});
		this.$el.html(template);
	}
});

ContentTransportView = Backbone.View.extend({
	initialize: function (options) {
	},
	render: function (options) {
		var template = _.template($("#template_content_transport").html(), {});
		this.$el.html(template);
	}
});

ContentPhotosView = Backbone.View.extend({
	initialize: function (options) {
	},
	render: function (options) {
		var template = _.template($("#template_content_photos").html(), {});
		this.$el.html(template);
	}
});


ContentHistoryView = Backbone.View.extend({
	initialize: function (options) {
	},
	render: function (options) {
		var template = _.template($("#template_content_history").html(), {});
		this.$el.html(template);
	}
});