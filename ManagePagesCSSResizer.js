// ==UserScript==
// @name       Manage Pages CSS Re-sizer
// @namespace  http://www.mysmallcorneroftheweb.co.uk/
// @version    0.1
// @description  Script to automatically re-size the Liferay site-wide CSS box to something more useful
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==

var regularCSS = document.getElementById('_156_regularCss')
    
regularCSS.style.width='650px';
regularCSS.style.height='700px';