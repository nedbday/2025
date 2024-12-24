import REGISTER_REDIRECT_LINK from "./custom";

ApplicationRouter = Backbone.Marionette.AppRouter.extend({
	routes: {
		"": "home",
		"home": "home",
		"program": "program",
		"papers": "papers",
		"keynote": "keynote",
		"posters": "posters",
		"transport": "transport",
		"photos": "photos",
		"history": "history",
		"register": "register"
	},

	deselectPills: function () {
		$('ul.sidebar li').removeClass('active');
	},

	selectPill: function (pill) {
		this.deselectPills();
		$(pill).addClass('active');
	},

	home: function () {
		this.selectPill('ul.sidebar li.home');
		MyApp.contentRegion.show(new ContentHomeView());
	},

	keynote: function () {
		this.selectPill('ul.sidebar li.keynote');
		MyApp.contentRegion.show(new ContentKeynoteView());
	},

	program: function () {
		this.selectPill('ul.sidebar li.program');
		MyApp.contentRegion.show(new ContentProgramView());
	},

	papers: function () {
		this.selectPill('ul.sidebar li.papers');
		MyApp.contentRegion.show(new ContentPapersView());
	},

	posters: function () {
		this.selectPill('ul.sidebar li.posters');
		MyApp.contentRegion.show(new ContentPostersView());
	},

	transport: function () {
		this.selectPill('ul.sidebar li.transport');
		MyApp.contentRegion.show(new ContentTransportView());
	},

	photos: function () {
		this.selectPill('ul.sidebar li.photos');
		MyApp.contentRegion.show(new ContentPhotosView());
	},

	history: function () {
		this.selectPill('ul.sidebar li.history');
		MyApp.contentRegion.show(new ContentHistoryView());
	},
    register: function () {
        window.location.href = REGISTER_REDIRECT_LINK.registerRedirectUrl;
    }
});
