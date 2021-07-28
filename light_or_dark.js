var cookie = document.cookie;
if(cookie == "mode=dark") {
    dark()
}
if(cookie == "mode=light") {
    light()
}
if(cookie == null) {
    if(window.matchMedia('(prefers-color-scheme)').media === 'not all') {
        document.getElementById("no-light-or-dark").style.display = "block"
    }
    if(window.matchMedia('(prefers-color-scheme: light)').matches) {
        light()
    }
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dark()
    }
}

function dark(){
    document.documentElement.style.setProperty('--bg-light-or-dark', "#333333")
    document.documentElement.style.setProperty('--bd-light-or-dark', "#252525")
    document.documentElement.style.setProperty('--ft-light-or-dark', "#666666")
    document.documentElement.style.setProperty('--im-light-or-dark', "opacity(50%)")
    //dqh
    document.documentElement.style.setProperty('--dqh', "invert(100%)")
    //cookie
    document.cookie = "mode=light;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"
    document.cookie = "mode=dark;path=/";
    //czp
    document.documentElement.style.setProperty('--bg-cl', '#333333')
    document.documentElement.style.setProperty('--ft-cl', '#666666')
    document.getElementById("czp_dark").style.display = "none"
    document.getElementById("czp_light").style.display = "inline"
}

function light(){
    document.documentElement.style.setProperty('--bg-light-or-dark', "#f8f9fb")
    document.documentElement.style.setProperty('--bd-light-or-dark', "white")
    document.documentElement.style.setProperty('--ft-light-or-dark', "black")
    document.documentElement.style.setProperty('--im-light-or-dark', "opacity(100%)")
    //dqh
    document.documentElement.style.setProperty('--dqh', "invert(0%)")
    //cookie
    document.cookie = "mode=dark;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"
    document.cookie = "mode=light;path=/";
    //czp
    document.documentElement.style.setProperty('--bg-cl', '#FAF9DE')
    document.documentElement.style.setProperty('--ft-cl', 'black')
    document.getElementById("czp_light").style.display = "none"
    document.getElementById("czp_dark").style.display = "inline"
}
