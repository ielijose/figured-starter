<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Utils\FileUtils;
use Faker\Generator as Faker;

class PostController extends Controller
{
    public function index()
    {
        return Post::orderBy('title', 'DESC')->paginate();
    }

    public function show($slug)
    {
        return Post::where('slug', $slug)->first();
    }

    public function create(Request $request, Faker $faker)
    {
        $file_path = FileUtils::getFilePath();

        $post = new Post();
        $post->title = $request->title;
        $post->excerpt = $request->excerpt;
        $post->body = $request->body;

        $post->picture = $faker->image($file_path, 1080, 720, 'nature', false, false, $post->title);

        $post->save();

        return $post;
    }

    public function delete($id)
    {
        $post = Post::find($id);
        $post->delete();

        return $post;
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $title = $request->title;

        $post->title = $title;
        $post->excerpt = $request->excerpt;
        $post->body = $request->body;

        $post->save();
        return $post;
    }
}
