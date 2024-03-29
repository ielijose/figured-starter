<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Egro.tech</title>

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    </head>
    <body>

        <div id="app">

            <app></app>

        </div>

        <script>
            const BASE_URL = '{{URL::to("/")}}';
        </script>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
