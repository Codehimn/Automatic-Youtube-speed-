// ==UserScript==
// @name       Youtube X2
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://stackoverflow.com/questions/779739/how-do-i-include-a-remote-javascript-file-in-a-greasemonkey-script
// @copyright  2012+, You
// @include     http*.youtube.*/*
// ==/UserScript==


//&enablejsapi=1&version=3

if(location.search.indexOf('enablejsapi=1') == -1) {
   setGetParameter('enablejsapi','1')
}

else{
    if(document.getElementById('eow-title').title.toLowerCase().indexOf('cerrado') != -1) {
        document.getElementById("movie_player").setPlaybackRate(2);
    }
}


function setGetParameter(paramName, paramValue)
{
    var url = window.location.href;
    if (url.indexOf(paramName + "=") >= 0)
    {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else
    {
    if (url.indexOf("?") < 0)
        url += "?" + paramName + "=" + paramValue;
    else
        url += "&" + paramName + "=" + paramValue;
    }
    window.location.href = url;
}
