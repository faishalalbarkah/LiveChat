<?php

namespace App\Http\Controllers\Guest\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Conversation;
use App\Message;

class StoreController extends Controller
{
    public function __invoke(Request $request,$conversation_uuid)
    {
        $this->validate($request,[
            'content' => 'required'
        ]);

        $conversation = Conversation::where('uuid',$conversation_uuid)->firstOrFail();

        Message::create([
            'conversation_id' => $conversation->id ,
            'guest_id' => $conversation->guest_id,
            'content' => $request->content
        ]);

        return response()->json([
            'succes' => true
        ],200);
    }
}
