sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"namespace/Bootcamp2/model/models",
	"namespace/Bootcamp2/controller/LoginDialog"
], function (UIComponent, Device, models, LoginDialog) {
	"use strict";

	return UIComponent.extend("namespace.Bootcamp2.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// set dialog by instantiating it
			this.loginDialog = new LoginDialog();

		}
	});
});