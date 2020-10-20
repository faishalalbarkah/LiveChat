<?php

namespace App\Http\Controllers\Dashboard\Conversation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Conversation;
use App\Message;
use DB;
use Auth;

class IndexController extends Controller
{
    public function __invoke(Request $request, $conversation_id)
    {
        $conversation = Conversation::with('guest','messages.guest','messages.user')->where('id', $conversation_id)->first();

        // Join
        if ($conversation->status_id == 11) {
            Conversation::find($conversation_id)->update([                   
                'user_id' => auth()->user()->id,
                'status_id' => 12           
            ]);
    
            Message::create([
                'conversation_id'=> $conversation_id,
                'user_id'=> auth()->user()->id,
                'content' => auth()->user()->name.' Has Joined To Chat Conversation.',
            ]);           
        }        

        // Read
        Message::where('conversation_id', $conversation_id)->update([
            'read' => 'y'
        ]);

        return response()->json([
            'success' => true,
            'datas' => [
                'conversation' => $conversation
            ]
        ],200);
    }
}
