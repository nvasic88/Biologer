<?php

namespace App\Concerns;

use App\Role;

trait HasRoles
{
    /**
     * Relation to roles that the user has.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     * Get names of roles the user has.
     *
     * @return \Illuminate\Support\Collection
     */
    protected function roleNames()
    {
        return $this->roles->pluck('name');
    }

    /**
     * Check if user has given role.
     *
     * @param  string  $role
     * @return bool
     */
    public function hasRole($role)
    {
        return $this->roleNames()->contains($role);
    }

    /**
     * Check if user has one or more of the given roles.
     *
     * @param  array  $roles
     * @return bool
     */
    public function hasAnyRole(array $roles)
    {
        return $this->roleNames()->intersect($roles)->isNotEmpty();
    }

    /**
     * Check if user has all the given roles.
     *
     * @param  array  $roles
     * @return bool
     */
    public function hasAllRoles(array $roles)
    {
        return count($roles) === $this->roleNames()->intersect($roles)->count();
    }

    /**
     * Assign given role to user.
     *
     * @param  string  $role
     * @return $this
     */
    public function assignRole($role)
    {
        $this->roles()->attach(Role::findByName($role));

        return $this;
    }
}
