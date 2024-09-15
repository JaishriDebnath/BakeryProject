<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class adminController extends Controller
{
    public function admin_dashboard(){
        return view('admin.dashboard');
    }
    public function product_management(){
        return view('admin.product_management');
    }
}
