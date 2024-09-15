<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        return view('index');
    }
    public function login(){
        return view('login');
    }
    public function register(){
        return view('register');
    }
    public function about_us(){
        return view('about-us');
    }
    public function collections(){
        return view('collections');
    }
    public function contact_us(){
        return view('contact-us');
    }
    public function blogs(){
        return view('blog');
    }
    public function faqs(){
        return view('faqs');
    }
    public function whishlist(){
        return view('whishlist');
    }
}
