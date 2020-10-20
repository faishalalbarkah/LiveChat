<?php

namespace App\Http\Controllers\OfflineMessage;

use App\Http\Controllers\Controller;
use App\OfflineMessage;
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
        
       OfflineMessage::where('id', $id)->delete();

        return response()->json([
            'message' => [
                'delete_offline_message' => true,
            ],
        ], 200);
    }
}