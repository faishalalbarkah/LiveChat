<?php

namespace App\Http\Controllers\Dashboard\Conversation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Conversation;
use App\Message;

class JoinController extends Controller
{
    public function __invoke(Request $request,$conversation_id)
    {        
        $conversation = Conversation::find($conversation_id)->update([                   
            'user_id' => auth()->user()->id,
            'status_id' => 12           
        ]);

        Message::create([
            'conversation_id'=> $conversation_id,
            'user_id'=> auth()->user()->id,
            'content' => auth()->user()->name.' Has Joined To Chat Conversation.',
        ]);

        return response()->json([
            'succes' => true
        ],200);
    }
}
