<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasUuids;

    protected $table   = 'skills';
    public $timestamps = false;

    protected $fillable = [
        'resume_id',
        'name',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function resumes()
    {
        return $this->belongsToMany(Resume::class);
    }
}
