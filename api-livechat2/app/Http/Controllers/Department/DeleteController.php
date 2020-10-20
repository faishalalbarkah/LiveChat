<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Department;
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
        
       Department::where('id', $id)->delete();

        return response()->json([
            'message' => [
                'delete_department' => true,
            ],
        ], 200);
    }
}