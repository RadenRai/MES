<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PasswordResetController extends Controller
{
    /**
     * Reset the user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $email = $request->input('email');
        $token = $request->input('token');
        $password = $request->input('password');

        // Cek apakah token cocok dengan email
        $passwordReset = DB::table('password_resets')
            ->where('email', $email)
            ->where('token', $token)
            ->first();

        if (!$passwordReset) {
            return response()->json(['message' => 'Invalid token'], 400);
        }

        // Update password pengguna
        DB::table('users')
            ->where('email', $email)
            ->update(['password' => Hash::make($password)]);

        // Hapus token reset
        DB::table('password_resets')->where('email', $email)->delete();

        return response()->json(['message' => 'Password reset successful'], 200);
    }
}
