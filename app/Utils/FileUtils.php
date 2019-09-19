<?php

namespace App\Utils;

class FileUtils
{
    static function getFilePath()
    {
        $file_path = storage_path('app/public/images');
        if (!\File::exists($file_path)) {
            \File::makeDirectory($file_path);
        }

        return $file_path;
    }
}
