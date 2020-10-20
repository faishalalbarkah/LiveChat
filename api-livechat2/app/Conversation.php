<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
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

     /**
     * Get the comments for the blog post.
     */
    public function messages()
    {
        return $this->hasMany('App\Message')->orderBy('id','ASC');
    }


    public function unreadMessages()
    {
        return $this->hasMany('App\Message')->where('read','n');
    }

}