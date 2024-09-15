<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\operatorController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\UserRoleCheck;


Route::match(['get','post'],'/login',[HomeController::class,'login']);
Route::match(['get','post'],'/register',[HomeController::class,'register']);
Route::match(['get','post'],'/',[HomeController::class,'index']);
Route::get('/about-us',[HomeController::class,'about_us']);
Route::get('/collections',[HomeController::class,'collections']);
Route::get('/contact-us',[HomeController::class,'contact_us']);
Route::get('/blog',[HomeController::class,'blogs']);
Route::get('/faqs',[HomeController::class,'faqs']);
Route::get('/whishlist',[HomeController::class,'whishlist']);

Route::get('/admin-dashboard',[adminController::class,'admin_dashboard']);
Route::get('/product-management',[operatorController::class,'product_management']);

Route::get('/operator-dashboard',[operatorController::class,'operator_dashboard']);


Route::middleware([UserRoleCheck::class])->group(function () {

});