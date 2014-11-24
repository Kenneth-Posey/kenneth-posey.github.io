
var SpriteSimulator = function(sprite, spritetext, count, index, time, options) {
                
    sprite.html(spritetext.charAt(index));
    index = index + 1;
    
    if (index >= spritetext.length) {
        index = 0;
    }
    
    if (count.current < count.max) {
        count.current++;
        var intervalId = setTimeout(SpriteSimulator, time, sprite, spritetext, count, index, time, options);
        count.intervalId = intervalId;
    } else if (count.current >= count.max) {
        clearTimeout(count.intervalId);
    }
};

var InitializeStreams = function(container, userOptions) {
    //var containerWidth = 500;
    //var containerHeight = 200;
    //var topX = 120;
    //var topY = 120;
    
    jQuery.extend(options, userOptions)
    
    var containerWidth = container.width();
    var containerHeight = window.innerHeight - 25;
    var topX = container.position().left;
    var topY = container.position().top;
    
    var positioning = {
        width : containerWidth,
        height : containerHeight,
        X : topX,
        Y : topY
    }
    
    container.html('');
    
    //container.css("width", positioning.width);
    container.css("height", positioning.height);
    //container.css("margin-top", positioning.X);
    //container.css("margin-left", positioning.Y);
    
    for ( var i = 0; i < options.quantity; i++ ) {
        var blockId = RandomIdGenerator(6);
        var blockName = "block" + blockId;
        Generate(container, blockName, options);
        //Position(blockName, positioning, options);
        //Animate(blockName, positioning, options);
        
        var randomTimeout = Math.floor(Math.random() * 10000) + 2000;
        
        setTimeout(Position, 1000, container, blockName, positioning, options);
        setTimeout(Animate, randomTimeout, container, blockName, positioning, options);
    }
};

var Generate = function(container, blockId, options) {
    
    var minLength = options.minLength;
    var maxLength = options.maxLength - minLength
    
    //var container = $('#container');
    container.append('<div class="' + blockId + ' block"></div>');
    
    var glyphStream = $('.' + blockId);
    
    var randomFontSize = Math.floor((Math.random() * options.maxSpriteSize) + options.minSpriteSize);
    
    glyphStream.css('font-size', randomFontSize + "px");
    
    var randomLength = Math.floor((Math.random() * maxLength + 1) + minLength);
    glyphStream.css('height', randomLength * randomFontSize);
    glyphStream.css('top', '-500px');
    
    for ( var i=0; i < randomLength; i++ ) {
    
        var randomTime = 1000;
        var index = 0;
        var divId = RandomIdGenerator(6);
        var spriteId = RandomTextGenerator(6);
        var spriteGlyph = RandomTextGenerator(options.maxLength);;
        var spriteText = '<div id="' + spriteId + '" class="sprite"></div>';
        
        $('.' + blockId).append(spriteText);
    
        var randomTime = Math.floor((Math.random() * options.maxSpriteSpeed) + options.minSpriteSpeed);
        
        var sprite = $("#" + spriteId);                    
        
        // Uncomment to enable disco colors
        // var randomColorList = ['#0ff', '#f0f', '#ff0', '#f00', '#0f0', '#00f'];                
        // var randomColor = randomColorList[Math.floor(Math.random() * randomColorList.length)];
        // sprite.css('color', randomColor);
        
        var count = {}
        count.current = 0;
        count.max = 100;        
        
        setTimeout(SpriteSimulator, randomTime, sprite, spriteGlyph, count, index, randomTime, options);
        
        if (i < 5 && randomLength < 10) {
            sprite.css("opacity", 0.1 + (0.2 * i));
        } else if (i < 10 && randomLength >= 10) {
            sprite.css("opacity", 0.1 + (0.1 * i));
        }
    }
};
        
var Animate = function(container, blockId, positioning, options) {

    var minSpeed = options.minSpeed * 1000;
    var maxSpeed = options.maxSpeed * 1000 - minSpeed;
    
    var selectBlockId = "." + blockId;
    var firstBlockId = selectBlockId + ":first";
    var hookedBlockIds = selectBlockId + ":gt(0)";    
    var durationTime = Math.floor((Math.random() * maxSpeed + 1) + minSpeed);
    
    $(firstBlockId).animate({
      top: positioning.height
    }, {
      duration: durationTime,
      easing: "linear",
      complete: function() {
        $("." + blockId).remove();
        
        var newBlockId = RandomIdGenerator(6);
        var blockName = "block" + newBlockId;
        Generate(container, blockName, options);
        setTimeout(Position, 1000, container, blockName, positioning, options);
        setTimeout(Animate, 2000, container, blockName, positioning, options);
      }
    });            
};

var Position = function(container, blockId, positioning, options) {
    var selectBlockId = "." + blockId;
    
    var rails = Math.floor((positioning.width - ((positioning.width - 20) % 20)) / 20);
    //Picks a rail for the stream
    var leftMarginRail = Math.floor(Math.random() * rails) + 1;    
    //Ensures that the streams will align to some multiple of 20 (glyph width)
    var leftMargin = leftMarginRail * 20 + positioning.X;
    
    var offset = $(selectBlockId).height() + 200;
    var offsetString = "-" + offset + "px";
    
    $(selectBlockId).css("left", leftMargin);
    $(selectBlockId).css("top", offsetString); 
};
