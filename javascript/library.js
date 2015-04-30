
// Didn't feel like a refactor so this exists though
// I will be using the new (better) name
var RandomIdGenerator = function(length)
{ return RandomTextGenerator(length); };

var RandomTextGenerator = function(length) {
    var text = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                   + "abcdefghijklmnopqrstuvwxyz"
                   + "0123456789";

    for ( var i=0; i < length; i++ ) {
        text += characters.charAt(
                    Math.floor(Math.random() * characters.length)
                  );
    }

    return text;
};
