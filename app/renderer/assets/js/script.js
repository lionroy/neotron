const {remote} = require ('electron');

document.getElementById('close').addEventListener('click', closeWindow);
document.getElementById('minimize').addEventListener('click', minimizeWindow);
// document.getElementById('maximize').addEventListener('click', maximizeWindow);

    function closeWindow() {
        var wind = remote.getCurrentWindow()
        wind.close()
    }
   
    function minimizeWindow() {
        var wind = remote.getCurrentWindow()
        wind.minimize()
    }
    
    // function maximizeWindow() {
    //     var wind = remote.getCurrentWindow()
    //     wind.isMaximized() ? wind.unmaximize() : wind.maximize();
    // }