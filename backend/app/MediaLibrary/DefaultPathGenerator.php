<?php

namespace App\MediaLibrary;

use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DefaultPathGenerator extends \Spatie\MediaLibrary\Support\PathGenerator\DefaultPathGenerator
{
    public function getPath(Media $media): string
    {
        return Str::kebab(Str::afterLast($media->model_type, '\\')).'/'.$this->getBasePath($media).'/';
    }

    public function getPathForConversions(Media $media): string
    {
        return Str::kebab(Str::afterLast($media->model_type, '\\')).'/'.$this->getBasePath($media).'/conversions/';
    }
}
