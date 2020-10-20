<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Validator;

class LoginController extends Controller
{

    /**
     * Client Login
     */

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        // Validations
        $rules = [
            'username' => 'required',
            'password' => 'required|min:6',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            // Validation failed
            return response()->json([
                'message' => $validator->messages(),
            ], 422);
        } else {
            // Fetch User
            $user = User::where('name', $request->username)->orWhere('email', $request->email)->first();
            if ($user) {
                // Verify the password
                if (password_verify($request->password, $user->password)) {

                    if ($user->status_id == 1) {
                        // Update Token
                        $access_token = $user->createToken('LC Password Grant Client')->accessToken;
                        $response = ['access_token' => $access_token];
                        return response()->json($response, 200);
                        // $postArray = ['api_token' => $this->apiToken];
                        // $login = User::where('email',$request->email)->update($postArray);

                        // if($login) {
                        //   return response()->json([
                        //     'name'         => $user->name,
                        //     'email'        => $user->email,
                        //     'access_token' => $this->apiToken,
                        //   ]);
                        // }
                    } else {
                        return response()->json([
                            'message' => [
                                'username' => 'User Inactive',
                            ],
                        ], 422);
                    }

                } else {
                    return response()->json([
                        'message' => [
                            'password' => 'Invalid Password',
                        ],
                    ], 422);
                }

            } else {
                return response()->json([
                    'message' => [
                        'username' => 'User not found',
                    ],
                ], 422);
            }
        }

    }
}
