var loadTemplate = function(templateNames, callback) {
	var deferreds = [];
	$.each(templateNames, function(index, templateName) {
		deferreds.push($.get('./templates/' + templateName + '.tmpl',
				function(data) {
					$('head').append(
							'<script id="template_' + templateName
									+ '" type="text/template">' + data
									+ '<\/script>');
				}));
	});
	$.when.apply(null, deferreds).done(callback);
};

var toggleVisibility = function(target_selector) {

	if (target_selector == "showall")
	{
		selector_list = document.getElementsByClassName("abstract");
		console.log(selector_list);
		for (const selector of selector_list)
		{
			console.log('target_selector=', selector);
			var $target = $(selector);console.log($target, $target.is(':hidden'));
			if ($target.is(':hidden')) {
				$target.show("slow");
			}
		}
	}
	else if (target_selector == "hideall")
	{
		selector_list = document.getElementsByClassName("abstract");
		console.log(selector_list);
		for (const selector of selector_list)
		{
			console.log('target_selector=', selector);
			var $target = $(selector);console.log($target, $target.is(':hidden'));
			if (!$target.is(':hidden')) {
				$target.hide("slow");
			}
		}
	}
	else
	{
		console.log('target_selector=', target_selector);
		var $target = $(target_selector);console.log($target, $target.is(':hidden'));
		if ($target.is(':hidden')) {
			$target.show("slow");
		} else {
			$target.hide("slow");
		}
	}



};