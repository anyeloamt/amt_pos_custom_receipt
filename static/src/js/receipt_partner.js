/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/store/pos_store";

patch(PosStore.prototype, {
    getReceiptHeaderData() {
        const data = super.getReceiptHeaderData(...arguments);

        return {
            ...data,
            partner: this.get_order().get_partner(),
        };
    },
});