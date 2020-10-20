<?php

namespace App\Http\Controllers\Setting\ChatHistory;

use App\Http\Controllers\Controller;
use App\Message;
use DB;
// use App\Conversation;
// use DB;
// use Auth;
use Illuminate\Http\Request;

class ViewController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request, $id)
    {
        $ChatHistoryById = Message::with('guest', 'user')->where('conversation_id', $id)->get();
        return response()->json($ChatHistoryById, 200);
    }
}
