<?php

namespace App\Http\Middleware;

use Auth;
use Cache;
use Carbon\Carbon;
use Closure;
use App\Guest;

class LastGuestActivity
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if($request->conversation_uuid){
            $conversation = Conversation::where('uuid',$request->conversation_uuid)->first();

            Guest::find($conversation->guest_id)->update([
                'last_seen_at' => Carbon::now()
            ]);
        }
        
        return $next($request);
    }
}
