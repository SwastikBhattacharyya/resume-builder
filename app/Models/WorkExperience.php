<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    use HasUuids;

    protected $table   = 'work_experiences';
    public $timestamps = false;

    protected $fillable = [
        'resume_id',
        'company_name',
        'designation',
        'start_date',
        'end_date',
        'is_current',
        'description',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date'   => 'date',
        'is_current' => 'boolean',
    ];

    public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
