<?php

namespace App\Http\Controllers\User;

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
        $users =  DB::table('users')->selectRaw('users.id, users.user_role_id, users.name, users.status_id, users.department_id, users.email, users.created_at, users.updated_at, statuses.name AS status, user_roles.name AS user_role, departments.name AS department')
                ->leftJoin('statuses', 'statuses.id', '=', 'users.status_id')
                ->leftJoin('departments', 'departments.id', '=', 'users.department_id')
                ->leftJoin('user_roles', 'user_roles.id', '=', 'users.user_role_id')
                ->paginate(15);

        return response()->json($users, 200);
    }
}