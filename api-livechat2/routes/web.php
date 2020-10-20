<?php
use Illuminate\Support\Str;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
 */

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/key', function () {
    $key = Str::random(32);
    return $key;
});

$router->post('admin/login', 'Auth\LoginController');
$router->post('guest/chat/start', 'Guest\Chat\StartController');

$router->group(['prefix' => 'guest', 'namespace' => 'Guest'], function () use ($router) {
    // Chat
    $router->get('chat/{conversation_uuid}', 'Chat\IndexController');
    $router->post('chat/{conversation_uuid}', 'Chat\StoreController');
    $router->put('chat/{conversation_uuid}/end', 'Chat\EndController');

    $router->post('offline-message', 'OfflineMessage\StoreController');

    $router->get('setting', 'Setting\IndexController');
});

$router->group(['middleware' => 'auth', 'prefix' => 'admin'], function () use ($router) {
    // Chat
    $router->get('dashboard/guest-online', 'Dashboard\GuestOnlineController');
    // $router->get('dashboard/guest-online/{guest}/detail', 'Dashboard\GuestOnlineDetailController');
    $router->get('dashboard/operator-online', 'Dashboard\OperatorOnlineController');

    // Conversation
    // $router->put('dashboard/{conversation_id}/join', 'Dashboard\Conversation\JoinController');
    $router->get('dashboard/{conversation_id}', 'Dashboard\Conversation\IndexController');
    $router->post('dashboard/{conversation_id}', 'Dashboard\Conversation\StoreController');
    $router->put('dashboard/{conversation_id}/end', 'Dashboard\Conversation\EndController');

    // User
    $router->get('users', 'User\IndexController');
    $router->post('user/create', 'User\StoreController');
    $router->delete('user/{id}/delete', 'User\DeleteController');
    $router->put('user/{id}/update', 'User\UpdateController');
    // Profile
    $router->put('profile/change-password', 'User\Profile\IndexController@changePassword');
    $router->get('profile', 'User\Profile\IndexController@index');
    $router->put('profile/update', 'User\Profile\IndexController@update');

    // Department
    $router->get('departments', 'Department\IndexController');
    $router->put('department/{id}/update', 'Department\UpdateController');
    $router->post('department/create', 'Department\StoreController');
    $router->delete('department/{id}/delete', 'Department\DeleteController');

    // Offline Message
    $router->get('offline/messages', 'OfflineMessage\IndexController');
    $router->delete('offline/message/{id}/delete', 'OfflineMessage\DeleteController');

    // Setting
    $router->get('setting', 'Setting\IndexController');
    $router->put('setting/update', 'Setting\UpdateController');

    $router->get('chathistory', 'Setting\ChatHistory\IndexController');
    $router->get('chathistory/{id}/history','Setting\ChatHistory\ViewController');
    // $router->delete('chathistory/{id}/delete', 'Setting\ChatHistory\DeleteController')

    // User online
    // $router->get('users/online', 'User\UserOnlineController');
});
