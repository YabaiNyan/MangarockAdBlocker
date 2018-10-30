// ==UserScript==
// @name         Mangarock Ad Blocker
// @namespace    https://github.com/YabaiNyan/MangarockAdBlocker
// @version      0.1
// @description  Block Ads on Mangarock
// @author       YabaiNyan
// @match        https://mangarock.com/manga/*/chapter/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    //clean up adverts
    function clean(){
        $("#bottom-banner-ads").hide();
        $("#block_adexchange").hide();
        $("#vdo_ai_div").parent().remove()
    };

    //function to mass remove ads for x ms.
    function loopClean(time){
        let LoopRemove = setInterval(function(){
            clean();
        }, 1)
        setTimeout(function(){
            clearInterval(LoopRemove);
        },time)
    }

    //Fix Size of Images
    var styleTag = $('<style>figure { padding-bottom: 100% !important; }</style>')
    $('html > head').append(styleTag);

    //When the bottom ads are ready, start doing spam clear
    $(document.getElementsByClassName("#bottom-banner-ads")).ready(function() {
        loopClean(5000);
    })

    //Spam clear on document click
    $(document).click(function() {
        loopClean(50);
    });

    //Spam clear on left/right arrow
    $(document).on( "keydown", function( event ) {
        if(event.which == 37 || event.which == 39){
            loopClean(50);
        }
    });



})();