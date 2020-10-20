<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];   

    public function guest()
    {
        return $this->belongsTo('App\Guest');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }



}