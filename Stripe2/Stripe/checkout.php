<?php

// require __DIR__ . "/vendor/autoload.php";
// require __DIR__ . "./vendor/autoload.php";
require __DIR__ . "/vendor/autoload.php";

$stripe_secret_key = "sk_test_51P4pUgSEH9nxB7u95s10lcUKRqqa5b3fUDLXnFAAAiVVqzB9YflzkIvFlLGab9pyGDpbAY9911FFLKXfxqVDdKLk00tozd1yQ4";

\Stripe\Stripe::setApiKey($stripe_secret_key);

$checkout_session = \Stripe\Checkout\Session::create([
    "mode" => "payment",
    "success_url"=> "http://localhost/success.php",
    "line_items" => [
        [
            "quantity" => 1,
            "price_data" =>
[
    "currency" => "inr",
    "unit_amount" => 300000,
    "product_data" =>[
        "name"=>"Classic Vase"
    ]
]        ]
    ]
    ]);

    http_response_code(303);
    header("location: " .$checkout_session->url);
