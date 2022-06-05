<?php

namespace App\MediaLibrary;


class DefaultFileNamer extends \Spatie\MediaLibrary\Support\FileNamer\DefaultFileNamer
{
    public function originalFileName(string $fileName): string
    {
        $extLength = strlen(pathinfo($fileName, PATHINFO_EXTENSION));
        $baseName  = substr($fileName, 0, strlen($fileName) - ($extLength ? $extLength + 1 : 0));

        return md5($baseName.config('app.key'));
    }
}
