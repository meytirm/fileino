<?php

namespace Modules\CategoryPack;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{

    use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $fillable = ['cat_title','cat_slug','parent_id','seo_title','seo_meta','description','keywords','has_slider','cat_type','image'];

    public static function newFactory()
    {
        return \Database\Factories\CategoryFactory::new();
    }

    public function findWithTrashed($id)
    {
        return Category::withTrashed()->find($id);
    }

    public function records()
    {
        return Category::orderby('id','desc')->paginate(10,['id','cat_title','cat_slug']);
    }
}
