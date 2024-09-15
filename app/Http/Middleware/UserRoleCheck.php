<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserRoleCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if($request->session()->get('role_id' == null)){
            return redirect('/login');
        }elseif($request->session()->get('role_id') != null && $request->session()->get('role_id') == 1 && $request->session()->get('status') != 1){
            return redirect('/admin_dashboard');
        }elseif($request->session()->get('role_id') != null && $request->session()->get('role_id') == 2 && $request->session()->get('status') != 1){
            return back()->with('success','Welcome to [Bakery Name]! You are Successfully Logged In!');
        }
        return $next($request);
    }
}
