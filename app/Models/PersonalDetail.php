<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class PersonalDetail extends Model
{
    use HasUuids;

    protected $table   = 'personal_details';
    public $timestamps = false;

    protected $fillable = [
        'resume_id',
        'full_name',
        'designation',
        'profile',
    ];

    public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
