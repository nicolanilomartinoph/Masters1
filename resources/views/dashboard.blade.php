@extends('layouts.app')

@section('content')
<div class="container-fluid" id="dashboard">
    <div class="row">
        <div class="col-12">
            <nav class="navbar navbar-expand-md navbar-light shadow-sm">
                <div class="container">
                    <a class="navbar-brand text-light" href="{{ url('/') }}" id="brand">
                        Masters
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left Side Of Navbar -->
                        <ul class="navbar-nav ml-4 mt-5">
                            <li class="dropdown">
                                <a class="nav-link text-light dbNavbarItems dropdown-toggle" data-toggle="dropdown" href="#" data-target="#navItemGame">GAME</a>
                                <ul class="dropdown-menu" id="navItemGame">
                                    <li><a href="#">MODE 1</a></li>
                                    <li><a href="#">MODE 2</a></li>
                                    <li><a href="#">MODE 3</a></li>
                                </ul>
                            </li>
                            <li class="my-auto nav-item">
                                <a class="nav-link text-light dbNavbarItems" href="#">
                                    SHOP
                                </a>
                            </li>
                            <li class="my-auto nav-item">
                                <a class="nav-link text-light dbNavbarItems" href="#">
                                    NEWS
                                </a>
                            </li>
                        </ul>

                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Authentication Links -->
                            @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                            </li>
                            @endif
                            @else
                            <li class="nav-item dropdown">
                                <a class="h3 nav-link dropdown-toggle text-light" href="#" data-toggle="dropdown" data-target="#logout">
                                    {{ Auth::user()->firstname }}
                                </a>
                                <ul id="logout" class="dropdown-menu collapse">
                                    <li class="text-center">
                                        <a href="#">
                                            Settings
                                        </a>
                                    </li>
                                    <li class="text-center">
                                        <a class="" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>
                                    </li>
                                </ul>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </li>
                            @endguest
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container-fluid">
            <div id="DBCont"></div>
        </div>
    </div>
</div>
@endsection

<!--
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                        {{ Auth::user()->firstname }} <span class="caret"></span>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                           onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                                -->