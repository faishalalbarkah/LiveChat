<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
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
        
        User::where('id', $id)->delete();

        return response()->json([
            'message' => [
                'delete_user' => true,
            ],
        ], 200);
    }
}