<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')->group(function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
});

Route::prefix('posts')->group(function () {
    Route::get('', 'PostController@index');
    Route::get('/{slug}', 'PostController@show');
    Route::post('', 'PostController@create');
    Route::delete('/{id}', 'PostController@delete');
    Route::put('/{id}', 'PostController@update');
});
