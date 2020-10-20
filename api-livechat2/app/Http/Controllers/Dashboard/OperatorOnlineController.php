<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Support\Arr;
use Cache;
use DB;
use Illuminate\Http\Request;

class OperatorOnlineController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $users = DB::table('users')->get();

        $onlines = [];
        foreach ($users as $key => $user) {
            $status = (Cache::has('user-is-online-' . $user->id)) ? 'Online' : 'Offline';
            if ($status == 'Online') {
                array_push($onlines, ['id' => $user->id,'name' => ucfirst($user->name),'status' => $status]);
            }          
        }

        return response()->json([
            'data' => $onlines
        ], 200);
    }
}
