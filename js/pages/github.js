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


function parseLevelOne(d){
//   $("#githubImg").attr('src',d.avatar_url);
  $("#ghInfo").append("<h3>"+d.name +" (" + d.login + " )</h3>")
  $("#ghInfo").append("<p> Public Repos: "+ d.public_repos + " || Public Gist: "+ d.public_gists + "</p>")
}


function getLevelOne(){
  $.ajax({
    url: "https://josephmillsatwork.github.io/josephmills/Json/ghHome.json",
    }).done(function(data) {
        var item = JSON.stringify(data)
        var list = JSON.parse(item)
        parseLevelOne(list);
    });
}

function first(obj) {
    for (var a in obj)
    return a;
}
function parseGists(d){
console.log(d)
  for (var i = 0 ; i < d.length ; i ++){
    var tt =  first( d[i].files ) ;
  //  console.log(d[i].files[tt].filename)
    $("#gitTabGist").append("\
        <div class='col-sm-6 col-md-4'>\
          <div class='thumbnail card' style='min-height:420px'>\
            <img src='" +getProgramingIcon(d[i].files[tt].language)  + "'></img>\
            <div class='caption'>\
              <h3>"+d[i].files[tt].filename+"</h3>\
              <hr></hr>\
              <p>"+d[i].description +"</p>\
              <div class='lpButton'><a href=" +d[i].html_url + " class='btn btn-primary btn-rasied' role='button' style='width:100%'>View On GitHub</a></div> \
            </div> \
          </div> \
        </div> \
    ")
  }
}
function getGists(){
  $.ajax({
    url: "Json/ghGists.json",
    }).done(function(data) {
        var item = JSON.stringify(data)
        var list = JSON.parse(item)
        parseGists(list);
    });
}


function getProgramingIcon(lang){

  if (lang === null){
    return "artwork/programming/makefile.png";
  }else{
    var tL = lang.toString();
    return "artwork/programming/"+tL.toLowerCase()+".png"
  }

}
function parseRepos(d){
console.log(d.length)
  for (var i = 0 ; i < d.length ; i ++){
    $("#gitTabRepos").append("\
        <div class='col-sm-6 col-md-4'>\
          <div class='thumbnail card' style='min-height:420px'>\
            <img src='" +getProgramingIcon(d[i].language)  + "'></img>\
            <div class='caption'>\
              <h3>"+d[i].name+"</h3>\
              <hr></hr>\
              <p>"+d[i].description +"</p>\
              <div class='lpButton'><a href=" +d[i].html_url + " class='btn btn-primary btn-rasied' role='button' style='width:100%'>View On GitHub</a></div> \
            </div> \
          </div> \
        </div> \
    ")
  }
}

function getRepos(){
  $.ajax({
    url: "Json/ghRepo.json",
    }).done(function(data) {
        var item = JSON.stringify(data)
        var list = JSON.parse(item)
        parseRepos(list);
    });
}

$(document).ready(function (){

  getLevelOne();
  getGists();
  getRepos();

});
