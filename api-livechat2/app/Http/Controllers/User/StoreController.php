<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
            'email' => 'required|email',
            'password' => 'required|same:password_confirm|min:6',
            'status' => 'required|numeric',
            'user_role' => 'required|numeric',
            'department' => 'required|numeric',
        ]);

        $attributes = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'status_id' => $request->status,
            'user_role_id' => $request->user_role,
            'department_id' => $request->department,
        ];

        User::create($attributes);

        return response()->json([
            'message' => [
                'create_user' => true,
            ],
        ], 200);
    }
}