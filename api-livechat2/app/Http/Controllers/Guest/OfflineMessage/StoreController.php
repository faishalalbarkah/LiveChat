<?php

namespace App\Http\Controllers\Guest\OfflineMessage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OfflineMessage;

class StoreController extends Controller
{
    public function __invoke(Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        OfflineMessage::create([
            'name' => $request->name ,
            'email' => $request->email,
            'ip_address' => request()->ip(),
            'url' => 'test.com',
            'message' => $request->message,
        ]);

        return response()->json([
            'succes' => true
        ],200);
    }
}
