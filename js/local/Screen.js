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


function Screen()
{
    // public
    this.desktopWidth = screen.width;
    this.desktopHeight = screen.height;
    this.availableHeight = screen.availHeight;
    this.availableWidth = screen.availWidth;

    this.devicePixelRatio = window.devicePixelRatio;
    this.dp = "null";

    this.logicalDotsPerInch = 0;
    this.orientation = screen.orientation.type

    // private
    var m_formFactor = "null";
    var m_displaySize = "null";
    var m_logicalDotsPerInch = 0;
    var isDesktop = false;

/*!
 * init funtion for the class
 */
var init = function()
{
  pythagoreanTheorem()
  m_logicalDotsPerInch = getDPI();
  setFormFactor()
}

/*
* Get logicalDotsPerInch
* can not belive that the web is this archaic
*/
var getDPI = function()
{
    var body = document.getElementsByTagName("body")[0];
    var m_ldpi =document.createElement("div");
    m_ldpi.setAttribute("id", "dpi");
    m_ldpi.style.width="1in";
    m_ldpi.style.height="1in";
    m_ldpi.style.left="-100%";
    m_ldpi.style.top="-100%";
    m_ldpi.style.position="absolute";
    body.appendChild(m_ldpi);
    return document.getElementById('dpi').offsetWidth;

}


/*!
 * get the diagonal with using pythagorean theorem
 */
var pythagoreanTheorem = function()
{
  var m_diag
  m_diag = Math.sqrt( Math.pow(screen.width, 2) + Math.pow(screen.height, 2) );
  m_displaySize = Math.round(( m_diag / 100 ));
}


/*
 * Set the formfactor for the device that is getting used
 */
var setFormFactor = function()
{
    if (m_displaySize < 8 )
    {
      m_formFactor = "phone";
      isDesktop = false;
    }
    else if (m_displaySize < 8.8 && this.devicePixelRatio < 3)
    {
      m_formFactor = "phone";
      isDesktop = false;
    }
    else if (m_displaySize >= 8 && m_displaySize < 10 && this.devicePixelRatio >= 3 )
    {
      m_formFactor = "phablet";
      isDesktop = false;
    }
    else if (m_displaySize >= 10 && m_displaySize < 16)
    {
      m_formFactor = "tablet";
      isDesktop = false;
    }
    else if (m_displaySize > 16 && m_displaySize < 25)
    {
      m_formFactor = "desktop";
      isDesktop = true;
    }
    else if (m_displaySize > 25 )
    {
      m_formFactor  = "tv";
      isDesktop = false;
    }

}



/*!
* protected
*/


/*!
 * returns the form factor per device
 * example:
 *
 * nexus 5 would return a phone
 *
 * nexus 6 would return a phablet
 *
 * nexus 7 would return a tablet
 *
 * other formfactors are TV and Desktop
 */
this.formFactor = function ()
{
    return m_formFactor;
}

/*
 * return the diagonal size of the screen
 * note because the web went a odd way with css
 * dpi this can be off  but it is better than nothing
 */
this.m_displaySize = function()
{
  return m_displaySize;
}

/*!
 * Returns a bool if the formfactor is a desktop
 */
this.m_desktop = function()
{

  return isDesktop;
}

/*!
 * returns the css archaic dots per inch
 */
this.logicalDotsPerInch = function()
{
  return m_logicalDotsPerInch;
}

/*!
 * public init function
 */
this.start = function()
{
    init()
}


}
