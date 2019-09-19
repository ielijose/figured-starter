<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Post extends Eloquent
{
    protected $connection = 'mongodb';

    protected $collection = 'posts_collection';


    public function getPictureFullPath()
    {
        $filename = 'public/images/' . $this->picture;
        return $filename;
    }
    //
}
