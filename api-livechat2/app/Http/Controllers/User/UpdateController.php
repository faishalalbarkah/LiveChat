<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Arr;

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
            'email' => 'required|email',
            'status' => 'required|numeric',
            'user_role' => 'required|numeric',
            'department' => 'required|numeric',
        ]);

        $attributes = [
            'name' => $request->name,
            'email' => $request->email,
            'status_id' => $request->status,
            'user_role_id' => $request->user_role,
            'department_id' => $request->department,
        ];
        
        if ($request->password && $this->validate($request,['password' => 'string|same:password_confirm|min:6'])) {
            $attributes = Arr::add($attributes, 'password', Hash::make($request->password));
        }

        User::where('id', $id)->update($attributes);

        return response()->json([
            'message' => [
                'update_user' => true,
            ],
        ], 200);
    }
}