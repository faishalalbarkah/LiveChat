<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            'id'=> '1',
            'company_name' => 'OSG Serpong',
            'offline_mode' => 'enable',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
