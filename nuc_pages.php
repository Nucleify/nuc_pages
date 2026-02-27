<?php

namespace Modules\nuc_pages;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class nuc_pages extends ServiceProvider
{
    public function boot(): void
    {
        app()->register(App\Providers\RouteServiceProvider::class);
    }
}
