<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MailController extends Controller
{
    public function sendPasswordResetEmail(Request $request)
    {
        // Ambil alamat email dari permintaan
        $email = $request->input('email');

        // Validasi email
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Invalid email format'], 400);
        }

        // Buat token reset password
        $token = bin2hex(random_bytes(32));

        // Simpan token ke database
        DB::table('password_reset_tokens')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => now()
        ]);

        // Kirim email reset password
        try {
            Mail::send('emails.reset-password', ['token' => $token], function ($mail) use ($email) {
                $mail->to($email)
                    ->subject('Password Reset');
                $mail->from('your@example.com', 'Your Name');
            });
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to send reset link'], 500);
        }

        return response()->json(['message' => 'Reset password link sent successfully'], 200);
    }
}
