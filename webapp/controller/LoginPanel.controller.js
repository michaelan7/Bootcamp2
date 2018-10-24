sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("namespace.Bootcamp2.controller.LoginPanel", {

		onLoginPress: function (oEvent) {
			var oTextField = this.getView().byId("username");
			var oPassField = this.getView().byId("password");
			var user = oTextField.getValue();
			var password = oPassField.getValue();

			if (user === "michael") {
				if (password === "test123") {
					// read msg from i18n model
					var oBundle = this.getView().getModel("i18n").getResourceBundle();
					var sRecipient = this.getView().getModel().getProperty("/field/username");
					var sMsg = oBundle.getText("helloMsg", [sRecipient]);
					// show message
					MessageToast.show(sMsg);
				} else {
					MessageToast.show("Incorrect Password!");
				}
			} else {
				MessageToast.show("Invalid User!");
			}
		},

		onOpenDialog: function () {
			// this._getDialog().open();
			this.getOwnerComponent().loginDialog.open(this.getView());
		}

	});
});