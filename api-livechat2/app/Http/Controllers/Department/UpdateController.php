<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Department;
use Illuminate\Http\Request;

class UpdateController extends Controller
{


    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
        ]);

        $attributes = [
            'name' =>$request->name,
            'description' =>$request->description,
        ];

        Department::where('id', $id)->update($attributes);

        return response()->json([
            'message' => [
                'update_department' => true,
            ],
        ], 200);
    }
}