<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Department;
use Illuminate\Http\Request;

class StoreController extends Controller
{


    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
        ]);

        $attributes = [
            'name' =>$request->name,
            'description' =>$request->description,
        ];

        $create_department = Department::create($attributes);

        return response()->json([
            'message' => [
                'create_department' => true,
            ],
        ], 200);
    }
}