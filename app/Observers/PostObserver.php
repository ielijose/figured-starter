<?php

namespace App\Observers;

use App\Post;
use Illuminate\Support\Facades\Storage;

class PostObserver
{
    /**
     * Handle the post "created" event.
     *
     * @param  \App\Post  $post
     * @return void
     */

    public function created(Post $post)
    {
        $post->slug = str_slug($post->title);
        $post->save();
    }

    /**
     * Handle the post "updated" event.
     *
     * @param  \App\Post  $post
     * @return void
     */
    public function updated(Post $post)
    {
        $newSlug = str_slug($post->title);
        if ($post->slug !== $newSlug) {
            $post->slug = $newSlug;
            $post->save();
        }
    }

    /**
     * Handle the post "deleted" event.
     *
     * @param  \App\Post  $post
     * @return void
     */
    public function deleted(Post $post)
    {
        if (Storage::disk('local')->exists($post->getPictureFullPath())) {
            Storage::disk('local')->delete($post->getPictureFullPath());
        }
    }

    /**
     * Handle the post "restored" event.
     *
     * @param  \App\Post  $post
     * @return void
     */
    public function restored(Post $post)
    {
        //
    }

    /**
     * Handle the post "force deleted" event.
     *
     * @param  \App\Post  $post
     * @return void
     */
    public function forceDeleted(Post $post)
    {
        //
    }
}
