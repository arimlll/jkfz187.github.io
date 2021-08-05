function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(500).then(() => $(function () {
    var xhr = new XMLHttpRequest()
    xhr.open('get', 'https://v1.hitokoto.cn?')
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText)
            var hitokoto = document.getElementById('hitokoto')
            hitokoto.innerText = data.hitokoto
            var hitokoto_from = document.getElementById('hitokoto_from')
            if (data.from == "internet" || data.from == "网络" || data.from == "原创" || data.from == "贴吧" || data.from == "网易云" || data.from == "网友" || data.from == "知乎") {
                hitokoto_from.innerText = data.from
            } else if (data.from == "来自网络") {
                hitokoto_from.innerText = "网络"
            } else if (data.from == "哲学") {
                hitokoto_from.innerText = data.from_who
                来自网络
            } else {
                if (data.from_who == null) {
                    hitokoto_from.innerText = "《" + data.from + "》"
                } else {
                    hitokoto_from.innerText = "《" + data.from + "》" + data.from_who
                }
            }
        } else {
        document.getElementById('hitokoto').innerText = "Jiangxi University of Technology High School Grade 2018 Class 7"
    }
    document.getElementById('hitokoto').style.color = "var(--ft-light-or-dark)"
    document.getElementById('hitokoto_from').style.color = "var(--ft-light-or-dark)"
}
    xhr.send()
}))