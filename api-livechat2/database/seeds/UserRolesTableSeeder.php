<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserRolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_roles')->insert([
            'id'=> '1',
            'name' => 'Admin',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('user_roles')->insert([
            'id'=> '2',
            'name' => 'Operator',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}