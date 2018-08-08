require.config({
	baseUrl: './',
	shim: {
		'vue': {
			exports: 'vue'
		}
	},
	paths: {
		'vue': 'https://cdn.bootcss.com/vue/2.4.2/vue.min',
		'text': "https://cdn.bootcss.com/require-text/2.0.12/text.min",
		'css': "https://cdn.bootcss.com/require-css/0.1.10/css.min",
	},
});

require(['vue', './header/header.js', './footer/footer.js'], function(Vue, header, footer) {
	new Vue({
		el: '#app',
		components: {
			'my-header': header,
			'my-footer': footer,
		}
	})
});