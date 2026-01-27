<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class EducationDetail extends Model
{
    use HasUuids;

    protected $table   = 'education_details';
    public $timestamps = false;

    protected $fillable = [
        'resume_id',
        'institution',
        'degree',
        'start_date',
        'end_date',
        'ongoing',
        'description',
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
