sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("namespace.Bootcamp2.controller.App", {

		onInit: function () {
			//set data model on view
			var oData = {
				field: {
					username: "michael"
				}
			};

			//instantiate new json model storing the oData
			var oModel = new JSONModel(oData);

			//set model in this view
			this.getView().setModel(oModel);

			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "namespace.Bootcamp2.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");

		},
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
		}
	});
});