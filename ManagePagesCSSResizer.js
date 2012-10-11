// ==UserScript==
// @name       Manage Pages CSS Re-sizer
// @namespace  http://www.mysmallcorneroftheweb.co.uk/
// @version    0.2
// @description  Script to automatically re-size the Liferay site-wide CSS box to something more useful
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==

var regularCSS = document.getElementById('_156_regularCss');
    
regularCSS.style.width='650px';
regularCSS.style.height='700px';

regularCSS = document.getElementById('_88_name_en_US');
regularCSS.style.max-width='350px';