<?php

namespace App\Http\Controllers\Dashboard\Conversation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Conversation;
use App\Message;

class EndController extends Controller
{
    public function __invoke(Request $request,$conversation_id)
    {

        $conversation = Conversation::where('id',$conversation_id)->firstOrFail();
        
        $conversation->update([                 
            'status_id' => 13           
        ]);

        Message::create([
            'conversation_id'=> $conversation_id,
            'user_id'=> auth()->user()->id,
            'content' => auth()->user()->name.' Has Ended Chat Session.'
        ]);

        return response()->json([
            'success' => true
        ],200);
    }
}
