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


function cutName(n){
    var c = n.toString()
    var cu = c.substring(c.lastIndexOf("/")+1)
    var cut = cu.replace(/-/g," ").replace(/_/g," ").replace(/lp:/g,"")

    if (DEFINE_DEBUG){
      console.log(cut)
    }

    return cut;
}

function cleanFieldFive(str)
{
  str = str.replace(/ +(?= )/g,'').replace(/\n/g, " ");
  //elide right
  if (str.length >= 50 )
  {

    var t  = str.substring(0,str.indexOf(' ',100))
    str = t.concat(" ......")
  }
  return str;
}

function makeLink(str)
{
  return str.replace(/lp:/, "https://code.launchpad.net/")
}


function parseBranches(d){
  for (var i = 0 ; i < d.length ; i ++ ){
    if(DEFINE_DEBUG){
      console.log( cutName( d[i].Name ) )
      console.log( cleanFieldFive( d[i].FIELD5 ) )
      console.log( makeLink( d[i].Name ) )
    }
    $("#lpBranches").append("\
        <div class='col-sm-6 col-md-4'>\
          <div class='thumbnail card' style='min-height:450px'>\
            <img src='/artwork/programming/makefile.png'></img>\
            <div class='caption'>\
              <h3>"+cutName( d[i].Name )+"</h3>\
              <hr></hr>\
              <p>"+cleanFieldFive( d[i].FIELD5 ) +"</p>\
              <div class='lpButton'><a href=" +makeLink( d[i].Name ) + " class='btn btn-primary btn-rasied' role='button' style='width:100%'>View On Launchpad</a></div> \
            </div> \
          </div> \
        </div> \
    ")
  }
}

function getLPJson(){
    $.ajax({
    url: "http://localhost:3000/Json/Launchpad.json",
    }).done(function(data) {
        var item = JSON.stringify(data)
        var list = JSON.parse(item)
        parseBranches(list);
    });
}



$(document).ready(function(){
  $("#lpInfo").append("<h3>Joseph Mills ( ~josephjamesmills )</h3>")
  getLPJson();

})
