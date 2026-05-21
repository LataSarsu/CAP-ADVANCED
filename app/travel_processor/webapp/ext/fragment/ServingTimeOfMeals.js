sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oEvent the event object provided by the event provider.
         */
        // onPress: function(oEvent) {
        //     MessageToast.show("Custom handler invoked.");
        // }
        onSelectionChange: function (oEvent) {
            var sNewDeliveryPreferenceMade = oEvent.getParameter("item").getKey();
            var oSgmBtn = oEvent.getSource();
            oSgmBtn.getBindingContext().setProperty("DeliveryPreference_code", sNewDeliveryPreferenceMade);
        }
    };
});
