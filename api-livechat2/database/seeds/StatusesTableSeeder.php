<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->insert([
            'id'=> '1',
            'name' => 'Active',
            'group' => 'Users',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('statuses')->insert([
            'id'=> '2',
            'name' => 'Inactive',
            'group' => 'Users',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('statuses')->insert([
            'id'=> '11',
            'name' => 'Chat Request',
            'group' => 'Messages',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('statuses')->insert([
            'id'=> '12',
            'name' => 'Chat Start',
            'group' => 'Messages',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('statuses')->insert([
            'id'=> '13',
            'name' => 'Chat End',
            'group' => 'Messages',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
