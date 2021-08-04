$(function() {
    var xhr = new XMLHttpRequest()
    xhr.open('get', 'https://v1.hitokoto.cn?')
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText)
            var hitokoto = document.getElementById('hitokoto')
            hitokoto.innerText = data.hitokoto
            var hitokoto_from = document.getElementById('hitokoto_from')

            if(data.from == "internet"||data.from == "网络"){
                hitokoto_from.innerText = "网络"
            }else if(data.from == "原创"){
                hitokoto_from.innerText = "网络原创"
            }else if(data.from == "贴吧"){
                hitokoto_from.innerText = "贴吧"
            }else if(data.from == "网易云"){
                hitokoto_from.innerText = "网易云"
            }else if(data.from == "哲学"){
                hitokoto_from.innerText = data.from_who
            }else{
                if(data.from_who == null){
                hitokoto_from.innerText = "《" + data.from + "》"
                }else{
                    hitokoto_from.innerText = "《" + data.from + "》" + data.from_who
                }
            }
        }
    }
    xhr.send()
});