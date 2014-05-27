
// Repo: https://github.com/hgoebl/mobile-detect.js
// Docs: http://hgoebl.github.io/mobile-detect.js/doc/MobileDetect.html

var md = new MobileDetect(window.navigator.userAgent);

var keys = ['iPad', 'NexusTablet', 'SamsungTablet', 'Kindle', 'SurfaceTablet', 'HPTablet', 'AsusTablet', 'BlackBerryTablet', 'HTCtablet', 'MotorolaTablet', 'NookTablet', 'AcerTablet', 'ToshibaTablet', 'LGTablet', 'FujitsuTablet', 'PrestigioTablet', 'LenovoTablet', 'YarvikTablet', 'MedionTablet', 'ArnovaTablet', 'IntensoTablet', 'IRUTablet', 'MegafonTablet', 'EbodaTablet', 'AllViewTablet', 'ArchosTablet', 'AinolTablet', 'SonyTablet', 'CubeTablet', 'CobyTablet', 'MIDTablet', 'SMiTTablet', 'RockChipTablet', 'FlyTablet', 'bqTablet', 'HuaweiTablet', 'NecTablet', 'PantechTablet', 'BronchoTablet', 'VersusTablet', 'ZyncTablet', 'PositivoTablet', 'NabiTablet', 'KoboTablet', 'DanewTablet', 'TexetTablet', 'PlaystationTablet', 'TrekstorTablet', 'PyleAudioTablet', 'AdvanTablet', 'DanyTechTablet', 'GalapadTablet', 'MicromaxTablet', 'KarbonnTablet', 'AllFineTablet', 'PROSCANTablet', 'YONESTablet', 'ChangJiaTablet', 'GUTablet', 'PointOfViewTablet', 'OvermaxTablet', 'HCLTablet', 'DPSTablet', 'VistureTablet', 'CrestaTablet', 'MediatekTablet', 'ConcordeTablet', 'GoCleverTablet', 'ModecomTablet', 'VoninoTablet', 'ECSTablet', 'StorexTablet', 'VodafoneTablet', 'EssentielBTablet', 'RossMoorTablet', 'iMobileTablet', 'TolinoTablet', 'AudioSonicTablet', 'AMPETablet', 'SkkTablet', 'TecnoTablet', 'JXDTablet', 'iJoyTablet', 'Hudl', 'TelstraTablet', 'GenericTablet', 'iPhone', 'BlackBerry', 'HTC', 'Nexus', 'Dell', 'Motorola', 'Samsung', 'LG', 'Sony', 'Asus', 'Micromax', 'Palm', 'Vertu', 'Pantech', 'Fly', 'iMobile', 'SimValley', 'GenericPhone', 'AndroidOS', 'BlackBerryOS', 'PalmOS', 'SymbianOS', 'WindowsMobileOS', 'WindowsPhoneOS', 'iOS', 'MeeGoOS', 'MaemoOS', 'JavaOS', 'webOS', 'badaOS', 'BREWOS', 'Chrome', 'Dolfin', 'Opera', 'Skyfire', 'IE', 'Firefox', 'Bolt', 'TeaShark', 'Blazer', 'Safari', 'Tizen', 'UCBrowser', 'DiigoBrowser', 'Puffin', 'Mercury', 'GenericBrowser', 'DesktopMode', 'TV', 'WebKit', 'Bot', 'MobileBot', 'Console', 'Watch'];
var versionKeys = ['Mobile', 'Build', 'Version', 'VendorID', 'iPad', 'iPhone', 'iPod', 'Kindle', 'Chrome', 'Coast', 'Dolfin', 'Firefox', 'Fennec', 'IE', 'NetFront', 'NokiaBrowser', 'Opera', 'Opera Mini', 'Opera Mobi', 'UC Browser', 'MQQBrowser', 'MicroMessenger', 'Safari', 'Skyfire', 'Tizen', 'Webkit', 'Gecko', 'Trident', 'Presto', 'iOS', 'Android', 'BlackBerry', 'BREW', 'Java', 'Windows Phone OS', 'Windows Phone', 'Windows CE', 'Windows NT', 'Symbian', 'webOS'];

// var d = new Date(), formattedDate = d.getMonth()+1 +'/'+ d.getDate() +'/'+ d.getFullYear();
// $('.info .date').html(formattedDate);

var content = $('.content');
var legend = $('.legend');

if (md.mobile()) {
  $('.mobile .value').html(md.mobile());
  content.show();
  legend.show();
}
else {
  var alert = $('.desktop-alert');
  alert.select('.button').on('click', function(e){
    e.preventDefault();
    alert.hide();
    content.show();
    legend.show();
  });
  alert.show();
}
if (md.phone()) {
  $('.phone .value').html(md.phone());
}
if (md.tablet()) {
  $('.tablet .value').html(md.tablet());
}
if (md.mobileGrade()) {
  $('.mobile-grade .value').html(md.mobileGrade());
}
if (md.os()) {
  $('.os .value').html(md.os());
}
if (md.userAgent()) {
  $('.user-agent .value').html(md.userAgent());
}

var result;
$.each(keys, function(i, key) {
  result = md.is(key);
  if (result) {
    $('#keys').append($('<div><span class="function">is</span>(<span class="string">\''+key+'\'</span>)<span class="less equal">=</span><span class="value boolean">'+result+'</span></div>'));
  }
});

$.each(versionKeys, function(i, key) {
  result = md.version(key);
  if (result) {
    $('#versions').append($('<div><span class="function">version</span>(<span class="string">\''+key+'\'</span>)<span class="less equal">=</span><span class="value number">'+result+'</span></div>'));
  }
  else {
    // try with versionStr
    result = md.versionStr(key);
    if (result) {
      $('#versions').append($('<div><span class="function">versionStr</span>(<span class="string">\''+key+'\'</span>)<span class="less equal">=</span><span class="value">'+result+'</span></div>'));
    }
  }
});
