define(['text!./header.html',"css!./header.css"], function(header) {
	return {
		data: function() {
			return {
				count: 0
			}
		},
		methods: {
		  click: function () {
		    this.count++;
		  }
		},
		template: header
	}
});