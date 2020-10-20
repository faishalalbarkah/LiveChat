<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;
use Laravel\Passport\HasApiTokens;

class User extends Model implements AuthenticatableContract, AuthorizableContract
{
    use HasApiTokens, Authenticatable, Authorizable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guard = 'api';
    protected $fillable = [
        'name', 'email','user_role_id','department_id','status_id','password'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password','remember_token'
    ];

    public function findForPassport($username){
        return $user = (new User)->where('email', $username)->orWhere('name', $username)->first();
    }

     /**
     * Get the user that owns the phone.
     */
    public function status()
    {
        return $this->belongsTo('App\Status');
    }

    
     /**
     * Get the user that owns the phone.
     */
    public function department()
    {
        return $this->belongsTo('App\Department');
    }
}
