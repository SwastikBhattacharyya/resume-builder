<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use HasUuids;

    protected $table   = 'achievements';
    public $timestamps = false;

    protected $fillable = [
        'resume_id',
        'title',
        'issuer',
        'date_awarded',
        'description',
    ];

    protected $casts = [
        'date_awarded' => 'date',
    ];

    public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
