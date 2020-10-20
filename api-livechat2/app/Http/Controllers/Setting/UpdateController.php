<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Setting;

class UpdateController extends Controller
{


    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __invoke(Request $request)
    {
        $attributes = [];
        
        if ($request->offline_mode && $this->validate($request,['offline_mode' => 'required|in:enable,disable'])) {
            $attributes = Arr::add($attributes, 'offline_mode', $request->offline_mode);
        }

        if ($request->company_name && $this->validate($request,['company_name' => 'required|string'])) {
            $attributes = Arr::add($attributes, 'company_name', $request->company_name);
        }

        if ($request->hasFile('widget_image') && $this->validate($request,['widget_image' => 'required|mimes:jpeg,jpg,png,gif'])) {

            $image = $request->file('widget_image');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = storage_path('app/public/setting/widget/');
            $image->move($destinationPath, $name);

            $attributes = Arr::add($attributes, 'widget_image', 'setting/widget/'.$name);
        }

        if ($request->greeting && $this->validate($request,['greeting' => 'required|string'])) {
            $attributes = Arr::add($attributes, 'greeting', $request->greeting);
        }

        Setting::first()->update($attributes);

        return response()->json([
            'message' => [
                'update_setting' => true,
            ],
        ], 200);
    }
}