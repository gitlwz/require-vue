define(['text!./footer.html', ], function(footer) {
	return {
		data: function() {
			return {
				count: 0
			}
		},
		template: footer
	}
});