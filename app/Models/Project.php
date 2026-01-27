<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasUuids;

    protected $table   = 'projects';
    public $timestamps = false;

    protected $fillable = [
        'resume_id',
        'name',
        'role',
        'start_date',
        'end_date',
        'ongoing',
        'description',
        'url',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date'   => 'date',
        'ongoing'    => 'boolean',
    ];

    public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
