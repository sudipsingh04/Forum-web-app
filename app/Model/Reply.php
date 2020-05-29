<?php

namespace App\Model;

use App\User;
use App\Model\Like;
use App\Model\Question;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();
        static::creating(function($reply){
            $userId = Auth::id();
            $reply->user_id = $userId ? $userId : User::all()->random()->id;
        });
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function like()
    {
        return $this->hasMany(Like::class);
    }

}
