<?php

namespace App\Http\Controllers\User\Profile;

use App\Http\Controllers\Controller;
use App\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use DB;

class IndexController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        $profile = DB::table('users')->selectRaw('users.id, users.name, users.email, users.created_at, users.updated_at, user_roles.name AS user_role, departments.name AS department')
            ->leftJoin('user_roles', 'user_roles.id', '=', 'users.user_role_id')
            ->leftJoin('departments', 'departments.id', '=', 'users.department_id')
            ->where('users.id', Auth::user()->id)->first();

        return response()->json($profile, 200);
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $attributes = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        User::where('id', Auth::user()->id)->update($attributes);

        return response()->json([
            'message' => [
                'update_profile' => true,
            ],
        ], 200);

    }

    public function changePassword(Request $request)
    {
        $this->validate($request, [
            'password_old' => 'required',
            'password_new' => 'required|same:password_confirm|min:6',
        ]);

        $attributes = [
            'password' => Hash::make($request->password_new),
        ];

        $user = DB::table('users')->where('id', Auth::user()->id)->first();
        if (Hash::check($request->password_old, $user->password)) {
            $change_password = DB::table('users')->where('id', Auth::user()->id)->update($attributes);
            return response()->json([
                'message' => [
                    'change_password' => true,
                ],
            ], 200);
        } else {

            $change_password['password_old'] = ["The old password is incorrect"];

            return response()->json($change_password, 422);
        }
    }
}
