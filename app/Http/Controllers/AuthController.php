<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
            return response()->json(Auth::user(), 200);
        } else {
            return response()->json(["error" => "Invalid credentials."], 401);
        }
    }

    public function register(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (isset($user->id)) {
            return response()->json("Email already exists.", 401);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        Auth::login($user);

        return response()->json($user, 200);
    }

    public function logout(Request $request)
    {
        Auth::logout();
    }
}
