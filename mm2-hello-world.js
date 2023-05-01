/* MagicMirror²
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("mm2-hello-world", {
	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	getTemplate: function () {
		return "helloworld.njk";
	},

	getTemplateData: function () {
		return this.config;
	}
});
