<?php

namespace App\Http\Controllers\Dashboard\Conversation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Conversation;
use App\Message;

class StoreController extends Controller
{
    public function __invoke(Request $request,$conversation_id)
    {
        $this->validate($request,[
            'content' => 'required'
        ]);

        Message::create([
            'conversation_id'=> $conversation_id,
            'user_id'=> auth()->user()->id,
            'content' => $request->content
        ]);

        return response()->json([
            'success' => true
        ],200);
    }
}
