<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            ['id' => 1, 'name' => 'Bidhan', 'email' => 'bidhan@example.com'],
            ['id' => 2, 'name' => 'Mik', 'email' => 'mik@example.com'],
        ]);
    }
}
