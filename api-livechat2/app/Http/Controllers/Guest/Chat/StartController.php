<?php

namespace App\Http\Controllers\Guest\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Guest;
use App\Conversation;
use App\Message;

class StartController extends Controller
{
    public function __invoke(Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            // 'email' => 'required|email'
        ]);

        $guest = Guest::firstOrCreate([
            'name' => $request->name,
            // 'email' => $request->email
        ]);

        $guest->update([
            'last_seen_at' => Carbon::now()
        ]);
        
        $conversation = Conversation::create([
            'uuid' => Str::uuid(),
            'ip_address' => request()->ip(),
            'url' =>  $request->url,
            'guest_id' => $guest->id
        ]);

        Message::create([
            'conversation_id' => $conversation->id ,
            'guest_id' => $guest->id,
            'content' => $guest->name.' Has Started Chat Conversation'
        ]);

        // $access_token = $guest->createToken('guest_token')->accessToken;
        // $request->session()->put('conversation_uuid',  $conversation->uuid);

        return response()->json([
            'success' => true,
            'results' => [
                'conversation_uuid' => $conversation->uuid,
                // 'token' => $access_token
            ]
        ],200);
    }
}
