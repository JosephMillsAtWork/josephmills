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


// Get system information about the host OS there Arch and other simple info

var Platform = Platform || {}
Platform.SysInfo = Platform.SysInfo || {}


function Platform.SysInfo.SystemInfo()
{

    // globals
//     this.desktopWidth  =
//     this.desktopHeight =
//     this.designHeight = "null"
//     this. designWidth = "null"
//     this.displaySize = "null"
//     this.devicePixelRatio = "null"
//     this.gridUnit = "null"
//     this.scaleSize = "null"
//     this.dp = "null"
//     this.formFactor = "null"
//     this.availableHeight = "null"
//     this.availableWidth = "null"
//     this.pixelRatio = "null"

    this.os = "null"
    this.ext = "null"
    this.version = "null"
    this.arch="null"
    this.distro = "null"
    this.packageType = "null"
    this.language = "null"

    this.osxVersion = "null"
    this.iosVersion = ""
    this.windowsVersion = "null"



this.getMacVersion = function()
{
  var t = navigator.appVersion;
  var tl = t.substring(t.lastIndexOf("OS X")+4);
  var te = tl.substring(0,tl.indexOf(")")).replace(/_/g,"") ;
  var tle = te.substring(0,5);

  var pI = parseInt( tle , 10 );
  this.osxVersion = pI
}


/*
	Returns the Operating stystems file exstention type
*/
this.setEx function(){
	switch(getOS()){
		case "Windows":
		this.ext = "exe"
		break
		case "MacOS":
		this.ext = "dmg"
		break;
		case "Android":
		this.ext = "apk"
		break;
		case "iPhone" || "iPad":
		this.ext = "app"
		break;
	}
	return this.ext;
}

/*
	Returns the Operating system string
*/
this.getOS function(){
	if (navigator.appVersion.indexOf("Win")!=-1)
       this.os="windows";
	if (navigator.appVersion.indexOf("Mac")!=-1)
       this.os="osx";
	if (navigator.appVersion.indexOf("X11")!=-1)
       this.os="unix";
	if (navigator.appVersion.indexOf("Linux")!=-1)
       this.os="linux";
	if( navigator.userAgent.indexOf("Android")!=-1)
       this.os="android";
	if( navigator.userAgent.indexOf("iPhone")!=-1)
       this.os="ios";
	if(navigator.userAgent.indexOf("iPad")!=-1)
       this.os="ios";
	if(navigator.userAgent.indexOf("iPod")!=-1)
       this.os="ios";
	if(navigator.userAgent.indexOf("BlackBerry")!=-1)
       this.os="blackberry";
	return this.os
}

/*
	Returns the arch for the os in focus
*/
this.getCPU function(){
	switch(window.navigator.platform){
		case "MacIntel":
        this.arch="64";
		break;
		case "Win16":
			this.arch="32";
		break;
		case "Win32":
			this.arch="64";
		break;
		case "Linux i686":
			this.arch="32";
		break;
		case "Linux x86_64":
        this.arch="64";
		break ;
		case "Linux armv7l":
        this.arch="arm";
		break;
		// FIXME I have no clue what this comes back as.
		case "iPhone":
        this.arch="null"
		break
		default :
        this.arch =window.navigator.platform
		break;
	}
	return arch;
}


*/
this.getPackageManger function(){
	var distro="Unknown"
	if(navigator.userAgent.indexOf("Ubuntu")!=-1){
       this.packageType = "deb"
       this.distro="ubuntu";
    }
   if(navigator.userAgent.indexOf("ubuntu")!=-1){
        this.packageType = "deb"
        this.distro="ubuntu";
    }
	if(navigator.userAgent.indexOf("Debian")!=-1){
        this.packageType = "deb"
        this.distro="debian";
	}
       if(navigator.userAgent.indexOf("Arch")!=-1){
       this.packageType = "pkgman"
           this.distro="arch";
	}
   if(navigator.userAgent.indexOf("CentOS")!=-1){
       this.packageType = "rpm"
       this.distro="centos""
	}
   if(navigator.userAgent.indexOf("Fedora")!=-1){
       this.packageType = "rpm"
       this.distro="fedora";
	}
   if(navigator.userAgent.indexOf("Gentoo")!=-1){
       this.packageType = "portage"
       this.distro="gentoo";
	}
   if(navigator.userAgent.indexOf("Mint")!=-1){
       this.packageType = "deb"
       this.distro="mint";
	}
   if(navigator.userAgent.indexOf("Mandriva")!=-1){
       this.packageType = "rpm"
       this.distro="mandriva";
	}
   if(navigator.userAgent.indexOf("Red Hat")!=-1){
       this.packageType = "rpm"
       this.distro="redhat";
	}
   if(navigator.userAgent.indexOf("SUSE")!=-1){
       this.packageType = "‎zypper"
       this.distro="suse":
    }

    if(navigator.userAgent.indexOf("Sabayon")!=-1){
        this.packageType = "entropy"
        this.distro="sabayon";
    }
	if(navigator.userAgent.indexOf("slax")!=-1){
        this.packageType = "sourceCode"
        this.distro="slax";
   }
	if(navigator.userAgent.indexOf("slackware")!=-1){
        this.packageType = "sourceCode"
        this.distro="slackware";
   }
}


this.getLanguage = function(){
    this.language = window.navigator.language
}





return this;
}
