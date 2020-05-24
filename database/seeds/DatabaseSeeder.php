<?php

use App\User;
use App\Model\Like;
use App\Model\Reply;
use App\Model\Category;
use App\Model\Question;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'id'   => 1,
            'name' => 'sudip singh',
            'email' => 'sudipsingh04@gmail.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);

        factory(User::class,10)->create();
        factory(Category::class,5)->create();
        factory(Question::class,10)->create();
        factory(Reply::class,50)->create()->each(function($reply){
            return $reply->like()->save(factory(Like::class)->make());
        });
    }
}
