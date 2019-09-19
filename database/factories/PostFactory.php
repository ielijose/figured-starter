<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    $title = $faker->sentence;
    $filepath = storage_path('app/public/images');
    if (!File::exists($filepath)) {
        File::makeDirectory($filepath);
    }

    return [
        'title'     => $title,
        'slug'      => str_slug($title),
        'excerpt'   => $faker->text(300),
        'body'      => $faker->text(800),
        'picture'   => $faker->image($filepath, 1080, 720, null, false),
    ];
});
