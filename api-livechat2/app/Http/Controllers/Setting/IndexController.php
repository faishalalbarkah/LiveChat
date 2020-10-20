<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Setting;
use Illuminate\Http\Request;

class indexController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $setting = Setting::first();

        return response()->json($setting, 200);
    }
}
