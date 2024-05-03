<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;

class LeadController extends Controller
{
    // Menampilkan semua leads
    public function index()
    {
        return Lead::all();
    }

    // Menyimpan lead baru
    public function store(Request $request)
    {
        return Lead::create($request->all());
    }

    // Menampilkan detail lead
    public function show($id)
    {
        return Lead::findOrFail($id);
    }

    // Memperbarui lead
    public function update(Request $request, $id)
    {
        $lead = Lead::findOrFail($id);
        $lead->update($request->all());
        return $lead;
    }

    // Menghapus lead
    public function destroy($id)
    {
        $lead = Lead::findOrFail($id);
        $lead->delete();
        return response()->json(['message' => 'Lead deleted successfully']);
    }
}
