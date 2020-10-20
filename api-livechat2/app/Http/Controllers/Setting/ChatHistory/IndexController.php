<?php

namespace App\Http\Controllers\Setting\ChatHistory;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;

class indexController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $chathistory = DB::table('conversations')->selectRaw('conversations.id,
        conversations.user_id, conversations.guest_id,
        conversations.status_id, conversations.ip_address, conversations.url,
        user_roles.name AS user_role_name,
        conversations.created_at, conversations.updated_at, guests.name AS name,
        guests.email AS email, statuses.name AS status, users.name AS user')
            ->leftJoin('users', 'users.id', '=', 'conversations.user_id')
            ->leftJoin('user_roles', 'users.user_role_id', '=', 'user_roles.id')
            ->leftJoin('guests', 'guests.id', '=', 'conversations.guest_id')
            ->leftJoin('statuses', 'statuses.id', '=', 'conversations.status_id')
            ->orderByDesc('conversations.id')
            ->paginate(15);

        return response()->json($chathistory, 200);
    }
}
