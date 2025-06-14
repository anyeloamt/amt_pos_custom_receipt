/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/store/pos_store";

patch(PosStore.prototype, {
    getReceiptHeaderData() {
        const data = super.getReceiptHeaderData(...arguments);
        const order = this.get_order();

        let formattedDate = '';

        if (order.date_order) {
            formattedDate = order.date_order.toFormat("dd/MM/yyyy hh:mm:ss a");
        }

        return {
            ...data,
            partner: this.get_order().get_partner(),
            order_date: formattedDate,
            order_name: order.name,
        };
    },
});