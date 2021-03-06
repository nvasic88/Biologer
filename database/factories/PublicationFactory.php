<?php

use App\Publication;
use App\PublicationType;
use App\User;
use Faker\Generator as Faker;

$factory->define(Publication::class, function (Faker $faker) {
    return [
        'type' => $faker->randomElement(PublicationType::toArray()),
        'year' => $faker->randomNumber(4),
        'authors' => collect([
            ['first_name' => 'John', 'last_name' => 'Doe'],
        ]),
        'editors' => collect([
            ['first_name' => 'Jane', 'last_name' => 'Doe'],
        ]),
        'title' => $faker->sentence(3),
        'name' => $faker->sentence(2),
        'issue' => $faker->randomDigitNotNull,
        'place' => $faker->city,
        'publisher' => $faker->words(2, true),
        'page_count' => $faker->randomDigitNotNull,
        'page_range' => 'p10-12',
        'created_by_id' => factory(User::class),
    ];
});
