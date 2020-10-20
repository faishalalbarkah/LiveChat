<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Conversation;

class GuestOnlineController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $conversations = Conversation::with('guest')->withCount('unreadMessages')->where('status_id','!=',13)->orderByDesc('id')->get();

        return response()->json([
            'data' => $conversations
        ], 200);
    }
}
