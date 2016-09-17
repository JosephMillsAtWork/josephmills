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













  const sections =  [ "About", "Resume", "Videos","Code" ];
  var sectionZero = [ "Joseph Mills"];
// "Contact"   var sectionOne =  [ "Stay In Touch", "Call Now" ];
  var sectionOne =  [ "Experence", "Qualifactions", "Rating of skills" ];
  var sectionTwo = [ "Programs","Tutorials" ]
  var sectionThree = ["Github" ,"Launchpad","This Site" ]





  var eHistory = [];
  var forHistory = eHistory.concat(
                                    sectionZero,
                                    sectionOne,
                                    sectionTwo,
                                    sectionThree
                                  );

  m_history.setPages(forHistory)



  const materialColors = [
          "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
          "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
          "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800",
          "#FF5722", "#9E9E9E", "#607D8B", "#795548", "#000000",
          "#FFFFFF"
  ]
  const materialColorArea = ["Primary Color","Accent Color", "Background Color"]

  var menuOpen =  true


/*!
 *set up the colors that are in the dialog to change primary seconday and background
 */
function setUpColorOptions(){

  for (var i = 0 ; i < materialColorArea.length ; i++){
    $("#colorAreaType").append("<option>"+materialColorArea[i]+"</option>")
  }

  for (var i = 0 ; i < materialColors.length; i++)
  {

  $("#colorPicker").append("<div id='pickColor' class='col-xs-2' style='border:1px solid black; height:32px ;background-color:" +materialColors[i]+ "'></div>")

  }

}

/*!
  *
  *Parse the Menu calls
  * empty it and fill with array
*/
function parseMenuCall(menuArray){

  if (DEFINE_DEBUG){
    console.log("Parse Menu " + menuArray)
  }

  $("#leftMenu").empty();
  for (var i = 0 ; i < menuArray.length ; i++)
  {
      if ( i === 0 )
      {
        $("#leftMenu").append(
          "<li id='menuItem' class='withripple active menuItem"+i+" '>" +  menuArray[i]  +"</li>"
        );
      }
      else
      {
        $("#leftMenu").append(
          "<li id='menuItem' class='withripple menuItem"+i+"'>" +  menuArray[i]  +"</li>"
        );
      }
  }

  //changePage(menuArray[0])
}


/*!
 * Change the current page that is loaded
 */
function changePage(pageName)
{
  var newPage = pageName.toString()
  $("#page").load( "pages/" + newPage.replace(/\s/g, "").toLowerCase() +".html" );
  $("#pageTitle").text(pageName);
  $("#navDrawer").css("height", $("#mainRow").height() )
  window.location.hash = pageName;
}





/*!
 * Load in the footer
 */
function loadFooter(){
  $('#theFooter').append(" \
    <!-- footer --> \
    <div id='footerTopbar' class='col-md-12'></div> \
        <div id='footerBackground' class='col-md-12'> \
            <div class='row' id='footer'> \
                <div id='footerIconHolder' class='col-md-12 hideme'> \
                      <p >Created By Joseph Mills</p> \
                      <p>All source code for this web site is located <a href='https://github.com/JosephMillsAtWork/josephmills'>Here</a></p> \
                      <p>version 0.1</p> \
                </div> \
            </div> \
        </div> \
    </div> \
    <!-- Footer Ends --> \
    ");
}


// Buggy not adding the active tab correctly

/*!
 *Create all the tabs in the header for navigation
 */
function createTabs(){
  // Tabs on the header-pannel
  for (var i =0;i < sections.length ; i++){
    $( '#sectionTabs' ).append("<li class='tab'> <a class='tabBtn' id='section" + i + "'>" + sections[i]+ "</a></li>");
  }
  // REAL BAD IMPLAMENT
  // BUG active not working even after created.
  // tried adding active to 1st append
  // tried removing classes and then adding classes
  // $("#section0").trigger( "click" );
  // $("#section0").trigger( "click" );


}



/*!
 * setup the primary color
 */
function setPrimaryColor(c)
{
  //   $(".btn-primary").css("background-color", c);
    $(".header-panel").css("background-color", c);
    $(".tab").css("background-color", c);
//     $(".menu ul li.active").css("background-color", c);
    setColorCookie("primaryColor", c, 256)

}

/*!
 * setup the acceccent color
 */
function setAccentColor(c)
{
    $(".indicator").css("background-color", c);
    setColorCookie("acceccentColor", c, 256)
}

/*!
 * setup the background color for the pages
 */
function setBackgroundColor(c)
{
  if(DEFINE_DEBUG){
    console.log("Changing the background-color to " +  c)
  }
  $("#page").css("background-color", c);
  $("#root").css("background-color", c);
  $(".html").css("background-color", c);
  $(".myMain").css("background-color", c);

  setColorCookie("backgroundColor", c, 256)
}

/*!
 * function for settting up the cookies for colors
 */
function setColorCookie(thisValue, toThis, cTime ) {
  var d = new Date();
  d.setTime(d.getTime() + (cTime*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = thisValue + "=" + toThis + "; " + cTime;
}

/*!
 * getter for cookies
 */
function getColorCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length,c.length);
      }
  }
  return "";
}

/*!
* on init check if there is cookies for colors
*/
function checkColorCookie() {
  var cPrimaryColor = getColorCookie("primaryColor");
  var cAccentColor = getColorCookie("acceccentColor");
  var cBackgroundColor = getColorCookie("backgroundColor");
  if (cPrimaryColor!="") {
      setPrimaryColor(cPrimaryColor)
  }
  if (cAccentColor!="") {
      setAccentColor(cAccentColor)
  }
  if (cBackgroundColor!="") {
    setBackgroundColor(cBackgroundColor)
  }
}



function setUpMobileMenu()
{
    // Fill up the menu for mobile
    for(var i = 0 ; i < sections.length ; i++){
      $("#mobileMenu").append("<li id='menuItemHeader' class='sectionsItem"+i+" '>" +  sections[i]  +"</li>");
    }

    for(var i = 0 ; i < sections.length ; i++){
      if ( i === 0 )
      {
        for (var ii = 0 ; ii < sectionZero.length; ii++)
        {//class='withripple menuItem"
         $("<li id='menuItem' class='withripple menuItem"+ii+" '><a>" +  sectionZero[ii]  +"</a></li>").insertAfter(".sectionsItem"+i+"")
        }
      }
      else if (i === 1)
      {
        for (var ii = 0 ; ii < sectionOne.length; ii++)
        {
          $("<li id='menuItem' class='withripple menuItem'><a>" +  sectionOne[ii]  +"</a></li>").insertAfter(".sectionsItem"+i+"");
        }
      }
      else if (i === 2)
      {
        for (var ii = 0 ; ii < sectionTwo.length; ii++)
        {
          $("<li id='menuItem' class='withripple menuItem"+ii+" '><a>" +  sectionTwo[ii]  +"</a></li>").insertAfter(".sectionsItem"+i+"");
        }
      }
      else if (i === 3)
      {
        for (var ii = 0 ; ii < sectionThree.length; ii++)
        {
          $("<li id='menuItem' class='withripple menuItem"+ii+" '><a>" +  sectionThree[ii]  +"</a></li>").insertAfter(".sectionsItem"+i+"");
        }
      }
    }



}







$(document).ready( function(){



  loadFooter();



  if (formFactor === "desktop" || formFactor === "tablet")
  {
    createTabs();

    if ( m_history.hasHash() )
    {

      var cPage =  m_history.hashStr()
      var sectionCount,sectionActive, sectionFocus;

      // ok this is a refresh on a page. and not the starting point
//       so lets check the arrays and make sure that we parse the right one
      if ( sectionZero.includes( m_history.hashStr() ) )
      {
        parseMenuCall(sectionZero);
        //This is real bad
        $("#section0").trigger( "click" );
        $("#section0").trigger( "click" );
        changePage( cPage );
        sectionFocus = sectionZero
        sectionActive =  sectionZero.indexOf( cPage )
        sectionCount = sectionZero.length

      }

      else if ( sectionOne.includes( cPage ) )
      {
        parseMenuCall(sectionOne);
        //This is real bad
        $("#section1").trigger( "click" );
        $("#section1").trigger( "click" );
        changePage( cPage );
        sectionFocus = sectionOne
        sectionActive =  sectionOne.indexOf( cPage )
        sectionCount = sectionOne.length

      }

      else if ( sectionTwo.includes(cPage ) )
      {
        parseMenuCall(sectionTwo);
        //This is real bad
        $("#section2").trigger( "click" );
        $("#section2").trigger( "click" );
        changePage( cPage );
        sectionFocus = sectionTwo
        sectionActive =  sectionTwo.indexOf( cPage )
        sectionCount = sectionTwo.length

      }

      else if ( sectionThree.includes( cPage ) )
      {
        parseMenuCall(sectionThree);
        //This is real bad
        $("#section3").trigger( "click" );
        $("#section3").trigger( "click" );
        changePage( cPage );
        sectionFocus = sectionThree
        sectionActive =  sectionThree.indexOf( cPage )
        sectionCount = sectionThree.length

      }


        for (var i = 0 ; i < sectionCount ; i++)
        {
          if ( i === sectionActive )
          {

            $(".menuItem"+i+"").addClass( "active" )
          }
          else
          {
            $("#menuItem").removeClass( "active" )
          }
        }

      $(".mobile-close").hide(0)
      $(".mobile-menu").hide(0)
    }
    else
    {

      // make sure the mobil stuff is closed
      $(".mobile-close").hide(0)
      $(".mobile-menu").hide(0)
      parseMenuCall(sectionZero);
      changePage(sectionZero[0])

    }

  }


  // Here we start out mobile process
  else
  {
    setUpMobileMenu();
    // make sure that all the desktop stuff is closed up
    $("#navDrawer").hide(0)
    $("#page").removeClass("col-xs-9")
    $("#page").addClass("col-xs-12")
    $("#sectionTabs").hide(0)
    $(".mobile-close").hide(0)
    $(".mobile-menu").hide(0)

    changePage(sectionZero[0])

  }














  setUpColorOptions();
  checkColorCookie();



  var colorFocus = 0
  $( "#colorAreaType , option:selected" ).change(function() {
    $( "select option:selected" ).each(function() {
      colorFocus = $( this ).index();
      });
  });

  $("#colorPicker").on('click' ,"#pickColor"  , function(){
    switch (colorFocus){
      case 0:
        setPrimaryColor( $(this).css("background-color") );
      break;
      case 1:
        setAccentColor( $(this).css( "background-color") );
      break;
      case 2:
        setBackgroundColor( $(this).css("background-color") );
      break;
    }
  })

/*!
 * When this is clicked we pass the array off the the parse caller to refill it
*/
 $( ".tabs" ).on('click','.tabBtn', function()
  {

    switch( $(this).attr('id').replace( /\s/g,"")  )
    {
      case "section0":
        parseMenuCall(sectionZero)
        changePage(sectionZero[0])
      break;
      case "section1":
        parseMenuCall(sectionOne)
        changePage(sectionOne[0])
      break;
      case "section2":
        parseMenuCall(sectionTwo)
        changePage(sectionTwo[0])
      break;
      case "section3":
        parseMenuCall(sectionThree)
        changePage(sectionThree[0])
      break;
      case "section4":
        parseMenuCall(sectionFour)
        changePage(sectionFour[0])
      break;

    }
  });

/*!
 * The Menu on the left is clicked so we setup the new page
 * also change the pageTitle
 */
 $( "#leftMenu" ).on('click','#menuItem', function()
  {
    if (DEFINE_DEBUG){
      console.log( $(this).text() )
    }

    $("#leftMenu").each(function(){
      $("li").removeClass("active");
    });

    $(this).addClass("active");

    changePage( $(this).text() )
  });


/*!
 * open and close the left menu
*/
  $("#menuButton").click( function(){

    if (formFactor === "phone" || formFactor === "phablet")
    {
        $(".mobile-close").show(800)
        $(".mobile-menu").show(800)
    }
    else
    {
      if (menuOpen){

        $("#navDrawer").hide(800)
        $("#page").removeClass("col-xs-9")
        $("#page").addClass("col-xs-12")

        menuOpen = false;
      }
      else
      {
        $("#page").removeClass("col-xs-12")
        $("#navDrawer").show(800);
        $("#navDrawer").addClass("col-xs-3")
        $("#page").addClass("col-xs-9")
        menuOpen = true;
      }
      $("#navDrawer").css("height", $("#mainRow").height() )
    }


  });



 $( "#mobileMenu" ).on('click','#menuItem', function()
  {
    if (DEFINE_DEBUG){
      console.log( $(this).text() )
    }

    $("#mobileMenu").each(function(){
      $("li").removeClass("active");
    });

    $(this).addClass("active");

    changePage( $(this).text() )
    $(".mobile-close").hide(600)
    $(".mobile-menu").hide(600)
  });


  // open and close the mobile menus
  $(".mobile-close").click(function(){
    $(".mobile-close").hide(800)
    $(".mobile-menu").hide(800)
  });





});
