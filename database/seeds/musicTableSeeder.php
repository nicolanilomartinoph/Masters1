<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class musicTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('music')->insert([
            'title' => 'Eye of the Tiger',
            'genre' => 'Hard Rock',
            'composer' => 'Frankie Sullivan & Jim Peterik',
            'performer' => 'Survivor',
            'arranger' => 'Frankie Sullivan & Jim Peterik'
        ]);

        DB::table('music')->insert([
            'title' => 'One Winger Angel',
            'genre' => 'Metal',
            'composer' => 'Nobuo Uematsu',
            'performer' => 'The Black Mages',
            'arranger' => 'Nobuo Uematsu'
        ]);
    }
}

/* 
create a procedure or table that stores ... 
- titles played by the player
- players who played the title
- 

a [musician] HAS ONE [titles played] table
a [titles played] HAS MANY [music]
a [title played] by a [musician] HAS MANY [performance_id]

==================

a [title] HAS MANY [played_by]
a [played_by] HAS MANY [performance_id]

[player] go to MASTER [available music] >>> pick a music gets added to [played_music] and [played_by] and [performance detail]
[search for songs] by title
*/
