<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Musician extends Model
{

    public function user()
    {
        return $this->belongsTo('App\User', 'id');
    }

    protected $fillable = ['musician_id', 'instrument'];
}
