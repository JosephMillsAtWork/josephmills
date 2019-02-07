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

 Copyright (C) 2017 Joseph Mills
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


StackView = function()
{


  this.currentPage = "undefined";
  this.pageTitle = "undefined";
  this.active = false;
  this.visable = false;

  var m_currentPageInt = -1;
  var pageList = [];

var loadIfNotLoaded = function()
{
  if( visible && !active )
  {
    active = true;
  }
}


/*!
 * load the array into a stack of jquery loaders
 */
var init = function()
{

  for(var i = 0 ; i < pageList.length;i++)
  {
    var g = "/josephmills/pages/" + pageList[i].replace(/\s/g, "").toLowerCase() +".html" ;

    $("#pages").append("<div id='page"+i+"' class='col-md-12'></div>")
    $("#page"+i).load( g );
    $("#page"+i).hide();
  }
}


var findAt = function(str)
{
  return pageList.indexOf(str);
}



this.start = function(pageArrayIn)
{
  pageList = pageArrayIn;
  init()
}



this.changePage = function(pageStr)
{

  // FIXME make santiy check
//   if (m_currentPageInt === findAt(pageStr) )
//   {
//     return;
//   }


  // hide the current page
  $("#page"+m_currentPageInt+"").hide()

  // take the string that gets passed in and get its index in the array
  // then set the private var
  m_currentPageInt = findAt(pageStr);

  // TODO make different animation maybe in settings
  $( "#page"+m_currentPageInt +"").show()

  // here is where the emit should go.  what ever emit is in javascript lol


}


this.done = function()
{

}


}
