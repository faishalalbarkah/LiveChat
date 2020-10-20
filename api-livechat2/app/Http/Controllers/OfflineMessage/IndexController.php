<?php

namespace App\Http\Controllers\OfflineMessage;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;

class IndexController extends Controller
{


    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $offline_messages =  DB::table('offline_messages')->orderByDesc('id')->paginate(15);

        return response()->json($offline_messages, 200);
    }
}