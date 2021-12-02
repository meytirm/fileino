<?php
$prefix = env('API_VERSION').'/category';
$router = $this->app->router;
$router->group(['prefix'=> $prefix,'namespace' => 'Modules\CategoryPack'], function () use ($router){
    $router->get('/', ['uses' => 'CategoryController@index']);
    $router->post('/', ['uses' => 'CategoryController@store']);
    $router->get('/{id}', ['uses' => 'CategoryController@show']);
    $router->patch('/{id}', ['uses' => 'CategoryController@update']);
    $router->delete('/{id}', ['uses' => 'CategoryController@destroy']);
});

