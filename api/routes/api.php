<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\PasswordResetController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application.
| These routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Rute untuk operasi CRUD pada tabel Leads
Route::get('leads', [LeadController::class, 'index']);
Route::post('leads', [LeadController::class, 'store']);
Route::get('leads/{id}', [LeadController::class, 'show']);
Route::put('leads/{id}', [LeadController::class, 'update']);
Route::delete('leads/{id}', [LeadController::class, 'destroy']);

// Rute untuk Autentikasi
Route::post('login', [AuthController::class, 'login'])->name('login');
Route::post('register', [AuthController::class, 'register'])->name('register');
Route::post('/forgot-password', [MailController::class, 'sendPasswordResetEmail']);
Route::put('/reset-password', [PasswordResetController::class, 'resetPassword']);
