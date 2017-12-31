<?php

namespace App;

class License
{
    /**
     * List of available licenses.
     *
     * @return array
     */
    public static function getAvailable()
    {
        return [
            10 => 'CC BY-SA 4.0',
            20 => 'CC BY-NC-SA 4.0',
            30 => 'Partially open',
            40 => 'Closed',
        ];
    }

    /**
     * Get license ids.
     *
     * @return array
     */
    public static function getIds()
    {
        return array_keys(static::getAvailable());
    }

    public static function getFirstId()
    {
        return array_first(static::getIds());
    }

    /**
     * Get license name.
     *
     * @param  int $key
     * @return string|null
     */
    public function getName($key)
    {
        $licenses = static::getAvailable();

        if (! array_key_exists($key, $licenses)) {
            return;
        }

        return $licenses[$key];
    }
}