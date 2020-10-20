<?php

return [
    'defaults' => [
        'guard' => 'api',
        'passwords' => 'users',
    ],

    'guards' => [
        'api' => [
            'driver' => 'passport',
            'provider' => 'users',
        ],
        'guest' => [
            'driver' => 'passport',
            'provider' => 'guests',
        ]
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => \App\User::class
        ],
        'guests' => [
            'driver' => 'eloquent',
            'model' => \App\Guest::class
        ]
    ]
];