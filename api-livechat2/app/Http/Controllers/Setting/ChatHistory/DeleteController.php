<?php

namespace App\Http\Controllers\Setting\ChatHistory;

use App\Http\Controllers\Controller;
use App\Conversation;
use Illuminate\Http\Request;

class DeleteController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request, $id)
    {
        
        Conversation::where('id', $id)->delete();

        return response()->json([
            'message' => [
                'delete_conversation' => true,
            ],
        ], 200);
    }
}