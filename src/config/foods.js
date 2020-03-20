export default [
    {
        'id': 0,
        'name': 'Не нужно или своя',
        'img': '/conf/images/newfoods/myself.png',
        'description': 'Самостоятельно организуете питание.',
        'tariff': false,
    },
    {
        'id': 1,
        'name': 'Фуршет',
        'img': '/conf/images/newfoods/foorshet.png',
        'description': 'Стоимость от 1 500 руб. на человека.',
        'tariff': {
            'amount_min': 10,
            'amount_max': 10000,
            'price': 1500
        },
    },
    {
        'id': 2,
        'name': 'Банкет',
        'img': '/conf/images/newfoods/banket.png',
        'description': 'Стоимость от 2 500 руб. на человека.',
        'tariff': {
            'amount_min': 10,
            'amount_max': 10000,
            'price': 2500
        },
    },
    {
        'id': 3,
        'name': 'Кофе-брейк',
        'img': '/conf/images/newfoods/koffee.png',
        'description': 'Стоимость от 1 000 руб. на человека.',
        'tariff': {
            'amount_min': 10,
            'amount_max': 10000,
            'price': 1000
        },
    },
    {
        'id': 4,
        'name': 'Welcome меню',
        'img': '/conf/images/newfoods/welcome.png',
        'description': 'Стоимость от 700 руб. на человека.',
        'tariff': {
            'amount_min': 10,
            'amount_max': 10000,
            'price': 700
        },
    },
    {
        'id': 5,
        'name': 'VIP меню',
        'img': '/conf/images/newfoods/vip.png',
        'description': '<p>Стоимость от 5 000 руб. на человека. Разные варианты меню или персональное меню. Ресторан, обслуживание.</p>',
        'tariff': {
            'amount_min': 10,
            'amount_max': 10000,
            'price': 5000
        },
    },
]
