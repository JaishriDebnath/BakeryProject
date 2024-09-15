<?php

namespace App\Http\Controllers;
use Yajra\DataTables\DataTables;
use Illuminate\Http\Request;

class operatorController extends Controller
{
    public function operator_dashboard(){
        return view('operators.dashboard');
    }
    public function product_management(){
        return view('operators.product_management');
    }

}
