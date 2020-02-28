@extends('layouts.app')

@section('content')
<div class="container-fluid darkbg" id="loginPage">
    <div class="container" id="loginPageCont">
        <div class="row justify-content-center">
            <img class="mt-lg-4" src="/img/navbar/masterLogo.png" />
            <div class="w-100"></div>
                <div class="col-5 justify-content-center">
                    <form class="row mt-lg-5 mt-1" method="POST" action="{{ route('login') }}">
                        @csrf 

                        <input type="email" placeholder="Email or Username" class="col-12 my-3 form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"
                        required autocomplete="email" autofocus id="usernameInput"></input>

                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror

                        <input id="password" type="password" class="col-12 my-3 passwordInput form-control @error('password') is-invalid @enderror" name="password" 
                        required autocomplete="current-password" placeholder="Password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <label class="form-check-label" for="remember">
                                {{ __('Remember Me') }}
                            </label>
                        </div>

                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <button type="submit" class="w-100 mt-3" id="loginButton">Log In</button>
                    </form>
                </div>

                <div class="w-100"></div>
                
                    <div class="col-5 justify-content-center mt-4">
                        <div class="row justify-content-center">
                            OR LOG IN WITH
                        </div>
                        <div class="row no-gutter justify-content-between mt-3">
                            <div class="col-5 fa fa-facebook-official text-center">
                                <span id="facebook-text"> Facebook</span>
                            </div>
                            <div class="col-5 text-center my-auto" id="google-icon-cont">
                                <img src="/img/google-icon.png" id="google-icon" /> 
                                Google
                            </div>
                        </div>
                    <div class="w-100"></div>
                        <div class="row mt-3">
                            <div class="col-12 light-blue-text text-center">
                                Create a free Masters Account
                            </div>
                        </div>
                    <div class="w-100"></div>
                        <div class="row">
                            <div class="col-12 text-center light-blue-text">
                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        Can't log in?
                                    </a>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center loginFooter">
                        <div class="col-2 text-center">
                            <a href="#">
                                Masters EULA
                            </a>
                        </div>|
                        <div class="col-2 text-center">
                            <a href="#">
                                PRIVACY
                            </a>
                        </div>|
                        <div class="col-2 text-center">
                            <a href="#">
                                TERMS
                            </a>
                        </div>|
                        <div class="col-3 text-center">
                            <a href="#">
                                COPYRIGHT 
                            </a>
                        </div>|
                        <div class="col-2 text-center">
                            <a href="#">
                                COOKIES
                            </a>
                        </div>
                    <div class="row mt-3">
                        <div class="col-12 justify-content-center">
                            ©2020 MASTERS , INC. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
