const tg = window.Telegram.WebApp;
tg.expand();
function showSettings() { document.getElementById('catalog').style.display='none'; document.getElementById('settings').style.display='block'; }
function hideSettings() { document.getElementById('catalog').style.display='block'; document.getElementById('settings').style.display='none'; }