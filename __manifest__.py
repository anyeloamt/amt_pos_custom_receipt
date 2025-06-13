# -*- coding: utf-8 -*-
{
    'name': "AMT Custom POS Receipt",
    'version': '0.1',
    'summary': "Customizations for POS receipt printing in Odoo",
    'description': """
    This module provides customizations for the Point of Sale (POS) receipt printing in Odoo.
    Initially, adds customer name and phone number to the receipt.
    """,
    'author': 'AMT MOVIL',
    'website': 'https://www.amtmovil.com',
    'category': 'Invoicing',
    'depends': ['point_of_sale'],
    'installable': True,
    'license': 'OPL-1',
     'assets': {
        'point_of_sale._assets_pos': [
            'amt_custom_pos_receipt/static/src/**/*',
        ],
    },
}

