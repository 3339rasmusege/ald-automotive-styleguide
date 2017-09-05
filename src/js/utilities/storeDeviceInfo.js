// Store info about the device we're on.
// Info is stored per session.

// (function(){
//
//   function getOS() {
//     var userAgent = window.navigator.userAgent,
//         platform = window.navigator.platform,
//         macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
//         windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
//         iosPlatforms = ['iPhone', 'iPad', 'iPod'],
//         os = null;
//
//     if (macosPlatforms.indexOf(platform) !== -1) {
//       os = 'macOS';
//     } else if (iosPlatforms.indexOf(platform) !== -1) {
//       os = 'iOS';
//     } else if (windowsPlatforms.indexOf(platform) !== -1) {
//       os = 'windows';
//     } else if (/Android/.test(userAgent)) {
//       os = 'android';
//     } else if (!os && /Linux/.test(platform)) {
//       os = 'linux';
//     }
//
//     return os;
//   }
//
//   if(sessionStorage){
//     if( sessionStorage.getItem('deviceInfoIsSet') === null ) {
//       sessionStorage.setItem('os', getOS());
//       sessionStorage.setItem('deviceInfoIsSet', true);
//     }
//   }
//
// })();
