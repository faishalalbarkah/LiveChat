<?php

namespace App\Http\Controllers\Department;

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
        $departments =  DB::table('departments')->paginate(15);

        return response()->json($departments, 200);
    }
}