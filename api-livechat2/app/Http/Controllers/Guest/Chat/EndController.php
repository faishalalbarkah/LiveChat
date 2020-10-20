<?php

namespace App\Http\Controllers\Guest\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Conversation;
use App\Message;

class EndController extends Controller
{
    public function __invoke(Request $request,$conversation_uuid)
    {
        $conversation = Conversation::where('uuid',$conversation_uuid)->first();

        $conversation->update([
            'status_id' => 13
        ]);

        
        Message::create([
            'conversation_id' => $conversation->id ,
            'guest_id' => $conversation->guest_id,
            'content' => $conversation->guest->name.' Has Ended Chat Session.'
        ]);


        return response()->json([
            'succes' => true
        ],200);
    }
}
