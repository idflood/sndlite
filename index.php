<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <title>(( sndlite ))</title>
    <script type="text/javascript" charset="utf-8" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="assets/js/soundcloud.player.api.js"></script>
    <script type="text/javascript" charset="utf-8" src="assets/js/sc-player.js"></script>
    <script type="text/javascript" charset="utf-8" src="assets/js/main.js"></script>
    <link type="text/css" rel="stylesheet" media="all" href="assets/css/sc-player-minimal.css" />
    <link type="text/css" rel="stylesheet" media="all" href="assets/css/style.css" />
    <link rel="shortcut icon" type="image/x-icon" href="favicon2.ico" />
  </head>
  <body>
    <a href="http://github.com/idflood/sndlite" id="ribbon"><img style="position: absolute; top: 0; left: 0; border: 0;" src="http://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png" alt="Fork me on GitHub" /></a>
    <div id="main_loader"></div>
    <div id="container">
      <div id="logo">
        <h1>SoundLite - Soundcloud minimalist search tool</h1>
      </div>
      <div id="search">
        <form>
          <label id="tag_search">Tag: <input type="text" value="" /></label>
          <div id="toggler"><a href="#">Options</a></div>
          <div class="search_options">
          <label>Minimum duration:
            <select name="min_duration" id="min_duration">
            <option value="short">Short ( > 5 min )</option>
            <option value="medium">Medium ( > 20 min )</option>
            <option value="long">Long ( > 40 min )</option>
            </select>
          </label>
          <label>Order by:
            <select name="order" id="order">
            <option value="time">Created at</option>
            <option value="hotness">Hotness</option>
            </select>
          </label>
          </div>
        </form>
      </div>
      <div id="tags"><a href="#">2010</a> <a href="#">afrobeat</a> <a href="#">ambient</a> <a href="#">blues</a> <a href="#">breaks</a> <a href="#">chill</a> <a href="#">downbeat</a> <a href="#">drum & bass</a> <a href="#">dub</a> <a href="#">dubstep</a> <a href="#">electronic</a> <a href="#">folk</a> <a href="#">funk</a> <a href="#">hiphop</a> <a href="#">instrumental</a> <a href="#">jazz</a> <a href="#">mashup</a> <a href="#">minimal</a> <a href="#">ragga</a> <a href="#">reggae</a> <a href="#">rock</a> <a href="#">soul</a> <a href="#">techno</a></div>
      <div id="player"></div>
      <div id="playlist"></div>
      <div id="loader"></div>
      <div id="actions"></div>
    </div>
    <div id="footer"><a href="http://github.com/idflood/sndlite">Fork on github</a> | <a href="http://github.com/idflood/sndlite/issues">Report issues</a> | <a href="http://www.idflood.com">idflood.com</a></div>
  </body>
</html>

