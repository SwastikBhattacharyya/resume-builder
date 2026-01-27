<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class ContactDetail extends Model
{
    use HasUuids;

    protected $table   = 'contact_details';
    public $timestamps = false;

    protected $fillable = [
        'resume_id',
        'email',
        'phone',
        'location',
        'linkedin',
        'github',
        'website',
    ];

    public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
