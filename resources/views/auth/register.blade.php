@extends('layouts.app')

@section('content')
<link rel="stylesheet" type="text/css" href="/css/register.css" />

<div class="container-fluid darkbg" > 
<div class="container bg-dark">
    <div class="row">
        <img class="mx-auto" src="/img/navbar/masterLogo.png" id="registerMasterLogo">
    </div>
    <div class="col-8 mx-auto">
    <div class="row">
        <div class="col-12 text-center font-weight-bold" id="create_an_account">
            Create an account
        </div>
    </div>
    <div class="row justify-content-around mt-3">
        <a href="#" class="col-5 fa fa-facebook-official text-center text-light regnlogAPI" id="facebook-icon">
            Facebook
        </a>
        <a href="#" class="col-5 text-center fa text-light my-auto regnlogAPI" >
            <img src="/img/google-icon.png" id="google-icon" /> 
            Google
        </a>
    </div>
    <div class="row justify-content-center mt-2 font-weight-bold">OR</div>
    <div class="row">
        <div class="col-12 ">
            <p class="text-center text-light font-weight-bold mt-2">Start your adventure in Masters, echo out and be the best in your music.</p>
        </div>
    </div>
    <div class="row">
            <form class="col-12 mb-5" method="POST" action="{{ route('register') }}">
                @csrf

                <div class="col-md-12 my-2">
                    <input id="firstname" type="text" class="registerInputbg form-control @error('firstname') is-invalid @enderror" name="firstname" value="{{ old('firstname') }}" required autocomplete="name"  placeholder="Firstname" autofocus>
                    @error('firstname')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="middlename" type="text" class="registerInputbg form-control @error('middlename') is-invalid @enderror" name="middlename" value="{{ old('middlename') }}" required autocomplete="name"  placeholder="Middlename" autofocus>
                    @error('middlename')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="lastname" type="text" class="registerInputbg form-control @error('lastname') is-invalid @enderror" name="lastname" value="{{ old('lastname') }}" required autocomplete="name"  placeholder="Lastname" autofocus>
                    @error('lastname')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-12 my-2">
                    <div class="row justify-content-between">
                        <div class="col-4">
                            <input id="month" type="text" class="registerInputbg form-control @error('month') is-invalid @enderror" name="month" value="{{ old('month') }}" required autocomplete="name"  placeholder="MM"autofocus>
                            @error('month')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="col-4">
                            <input id="day" type="text" class="registerInputbg form-control @error('day') is-invalid @enderror" name="day" value="{{ old('day') }}" required autocomplete="name"  placeholder="DD"autofocus>
                            @error('day')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="col-4">
                            <input id="year" type="text" class="registerInputbg form-control @error('year') is-invalid @enderror" name="year" value="{{ old('year') }}" required autocomplete="name"  placeholder="YYYY"autofocus>
                            @error('year')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12 my-2">
                    <input id="email" type="text" class="registerInputbg form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="name"  placeholder="example@example.com"autofocus>
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="password" type="password" class="registerInputbg form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="password-confirm" type="password" class="registerInputbg form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Confirm Password">
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="secret_question" type="text" class="registerInputbg form-control @error('secret_question') is-invalid @enderror" name="secret_question" value="{{ old('secret_question') }}" required autocomplete="name"  placeholder="Secret Question" autofocus>
                    @error('secret_question')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="col-md-12 my-2">
                    <input id="secret_answer" type="text" class="registerInputbg form-control @error('secret_answer') is-invalid @enderror" name="secret_answer" value="{{ old('answer') }}" required autocomplete="name"  placeholder="Secret Answer" autofocus>
                    @error('secret_answer')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="row">
                    <div class="registerCheckbox form-group">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" name="newsAndSpecial">
                            <label class="form-check-label" id="checkbox_text" for="newsAndSpecial">&nbsp Receive news and special offers from Masters by email.</label>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="registerCheckbox">Carefully selected news, event information and special offer about Masters product and services.</p>
                </div>
                <div class="row m-3">
                    <button class="col-12 justify-content-center my-2" id="create_a_free_account" type="submit">Create a free account</button>
                </div>
                <div class="row m-3">
                    <button class="col-12 justify-content-center my-2" id="already_have_an_account">Already have an account?</button>
                </div>
                <div class="row justify-content-center">
                    <p class="text-light">By clicking on "Create a free account", I agree to the Masters End User Licence Agreement and Privacy Policy.</p>
                </div>
            </form>        
    </div>
    </div>
        <div class="row text-center my-5">
            <div class="col-12">
                <h4><pre class="text-light bg-transparent border-0">CAREERS  <span class="footerSeparator">|</span>  ABOUT  <span class="footerSeparator">|</span>  SUPPORT  <span class="footerSeparator">|</span>  CONTACT US  <span class="footerSeparator">|</span>  PRESS  <span class="footerSeparator">|</span>  API</pre></h4>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12 text-muted mt-2">©2020 MASTERS , INC. ALL RIGHTS RESERVED.</div>
            <div class="col-12 text-muted mb-2">All <span class="text-light">trademarks</span> reference herein are the properties of their respective owners.</div>
        </div>
        <div class="row">
        <div class="col-12 text-center mb-5">
            <h5>
                <pre class="text-light bg-transparent border-0">PRIVACY    LEGAL   TERMS   COOKIES</pre>
            </h5>
        </div>
    </div>
</div>
</div>
@endsection
