(function( Popcorn ) {

  Popcorn.plugin( "commentary", {

    _setup: function( options ) {

      // Setup our audio object
      var audio = new Audio();
      audio.preload = "auto";

      // Being able to specify multiple codecs is just the web way
      if ( options.src instanceof Array ) {
        options.src.forEach( function( value ) {
          var source = document.createElement( "source" );
          source.src = value;
          audio.appendChild( source );
        });
      } else {
        audio.src = options.src;
      }

      // Make audio accessible to start/end functions
      options.audio = audio;

      // You could attach some event listeners to change what the audio is doing
      // IE this.on( "pause", function() { ... } );
    },
    start: function( event, options ) {

      // In Popcorn plugins `this` refers to the Popcorn instance
      this.mute();
      options.audio.play();
    },
    end: function( event, options ) {

      this.unmute();
      options.audio.pause();
    }
  });

})( Popcorn );
