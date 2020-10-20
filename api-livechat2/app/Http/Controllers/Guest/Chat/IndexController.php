<?php

namespace App\Http\Controllers\Guest\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Conversation;
use DB;
use Auth;

class IndexController extends Controller
{
    public function __invoke(Request $request, $conversation_uuid)
    {
        $conversation = Conversation::with('guest','messages.guest','messages.user')->where('uuid', $conversation_uuid)->first();

        // $conversation = DB::table('conversations')->selectRaw('conversations.*, guests.name As guest_name')
        //             ->leftJoin('guests', 'conversations.guest_id', '=', 'guests.id')
        //             ->where('uuid', $conversation_uuid)->first();

        // $messages = DB::table('messages')->selectRaw('messages.*, guests.name As guest_name, users.name AS user_name')
        // ->leftJoin('guests', 'messages.guest_id', '=', 'guests.id')
        // ->leftJoin('users', 'messages.user_id', '=', 'users.id')
        // ->where('messages.conversation_id', $conversation->id)->get();



        return response()->json([
            'success' => true,
            'datas' => [
                'conversation' => $conversation,
                // 'messages' =>$messages
            ]
        ],200);
    }
}
