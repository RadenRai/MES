<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'Kode Produk',
        'Nama Produk',
        'Total Lead Time',
        'Keterangan',
        'Dok Production Lead Time',
        'Lead Time',
        'PIC PPC',
        'Keterangan',
        'ASSY MH',
        'ASSY MCH',
        'Testing MH',
        'Testing MCH',
    ];
}

