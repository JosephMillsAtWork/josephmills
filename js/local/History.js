/*
      _                      _       __  __ _ _ _
     | | ___  ___  ___ _ __ | |__   |  \/  (_| | |___
  _  | |/ _ \/ __|/ _ | '_ \| '_ \  | |\/| | | | / __|
 | |_| | (_) \__ |  __| |_) | | | | | |  | | | | \__ \
  \___/ \___/|___/\___| .__/|_| |_| |_|  |_|_|_|_|___/
                      |_|


 010010100110111101110011011001010111000001101000001000000100110101101001011011000110110001110011
 4676768 466673


 If you are reading this I am for hire.

 Copyright (C) 2016 Joseph Mills
 Contact: josephjamesmills@gmail.com

 This file is part of Joseph Mills portfolio site

 GNU Lesser General Public License Usage
 Alternatively, this file may be used under the terms of the GNU Lesser
 General Public License version 3 as published by the Free Software
 Foundation and appearing in the file LICENSE.LGPLv3 included in the
 packaging of this file. Please review the following information to
 ensure the GNU Lesser General Public License version 3 requirements
 will be met: https://www.gnu.org/licenses/lgpl.html.

 GNU General Public License Usage
 Alternatively, this file may be used under the terms of the GNU
 General Public License version 2.0 or later as published by the Free
 Software Foundation and appearing in the file LICENSE.GPL included in
 the packaging of this file. Please review the following information to
 ensure the GNU General Public License version 2.0 requirements will be
 met: http://www.gnu.org/licenses/gpl-2.0.html.


*/



function History()
{
  //public:

  this.pages = [];

  // protected:
  var baseUrl = "127.0.0.1:8088"
  //var baseUrl = "https://josephmillsatwork.github.io/josephmills"
  var currentUrl  = "null"
  var currentHash = "null"

  // private:


var getHash = function()
{
  if( window.location.hash.indexOf("#") !=-1 )
  {
    var cH = window.location.hash
    var ty =  cH.substring(cH.lastIndexOf("#") +1 )
    if (DEFINE_DEBUG)
    {
      console.log("has hash " + ty);
    }
    currentHash = ty;
  }
}






this.setPages = function(arr)
{
  if (this.pages.length > 0 ){
    this.pages.length = 0
  }
  this.pages = arr
}


this.setUrl = function()
{

    this.setLoader()
}

this.setLoader = function()
{


}

this.hashStr = function()
{
  getHash()
  return currentHash;
}



this.refresh = function(hash)
{

  var cHash = getHash();
  for (var i = 0 ; i < this.pages.length ; i++ )
  {
    if ( this.pages[i] === cHash  )
    {
      if (DEFINE_DEBUG){
        console.log("Found it " + cHash );
      }
    }
  }
}



this.setBaseUrl = function(str)
{
  baseUrl = str;
}




this.checkforHash = function()
{
  getHash();
}

this.hasHash = function()
{

  if (window.location.hash.length > 0 )
  {
    return true;
  }
  else
  {
    return false
  }
}

window.addEventListener("hashchange", function(){
  if (DEFINE_DEBUG)
  {
    console.log("HASH CHANGE");
  }
  getHash()
});


}
