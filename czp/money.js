document.onkeydown = function (e) { 
    var theEvent = window.event || e
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode
    if (code == 13) {
        money_enter()
    }
}

function money_enter(){
    var yek_thgir = "5p2l546p5rC05ZWK5aeQ5aa55Lus"
    var money_0 = "ICAgICAgICA8ZGl2IHN0eWxlPSJ0ZXh0LWFsaWduOmxlZnQ7dGV4dC1pbmRlbnQ6IDM2cHg7Ij4KPHA+4oCc6K+277yM5L2g6Zeu6Zeu5LuW5ZGX44CC4oCdWuaOqOS6huaOqOWls+WtqeOAgjwvcD4KICAgICAgICA8cD7igJzlsLHmmK/vvIzkvaDnprvku5bpgqPkuYjov5HvvIzlv6vljrvvvIzlv6vljrvjgILigJ1M56yR552A5YKs5L+D6YGT44CCPC9wPgogICAgICAgIDxwPuWls+Wtqeebr+edgFrvvIzohJHmtbfph4zmmK9D5ZKM5aW56K+055qE6K+d4oCc5LuW5Lus6K+05LuW6KeJ5b6XWuacgOWlveeci+ivtu+8geKAnTwvcD4KICAgICAgICA8cD7lpbnvvIzlkJfvvJ88L3A+CiAgICAgICAgPHA+5Y2B5aSa5YiG6ZKf5YmNPC9wPgogICAgICAgIDxwPuS4jeefpemBk+eqgeeEtuW4reWNt+S6huS7gOS5iOeDrea1qu+8jOWHoOS4queUt+eUn+eqgeeEtuWIsOWkhOiwg+afpeePremHjOeUt+eUn+inieW+l+ePreS4iuWTquS4quWls+eUn+acgOWlveeci++8jOS9huW5tOm+hOeahOW5vOeomuiuqeS6uuaAu+aYr+WWnOasouaKiuKAnOinieW+l+Wlveeci+KAneWSjOKAnOWWnOasouKAneeUu+S4iuiSmeecrOeahOetieWPt++8jOimgeaYr+i2geecvO+8jOi/mOiDvei1t+WThOWHoOWPpeOAgjwvcD4KICAgICAgICA8cD7ogIzlkozlkIzlrabogYrlpKnnmoTlpbPlranvvIzlv4Pph4zljbTlg4/mmK/mnInnvr3mr5voi6XmnInoi6Xml6DnmoTliK7nnYDvvIzlpbnmhJ/op4nlpb3lg4/po5jlnKjnqbrkuK3vvIzlv4Pph4zmmK/msqHnlLHmnaXml6Dms5XmjqfliLbnmoTnqbrjgII8L3A+CiAgICAgICAgPHA+5LuW77yM5Lya6KeJ5b6X6LCB5aW955yL77yfPC9wPgogICAgICAgIDxwPuKAnOWPrumTg+mTg+KAnSDmmZroh6rkuaDnmoTpooTlpIfpk4Plk43otbfjgII8L3A+CiAgICAgICAgPHA+4oCc5LuW5Zue5p2l5ZWm77yM5b+r5Y675b+r5Y6744CC4oCd6ICz6L655piv5aWz55Sf55qE56qD56qD44CCPC9wPgogICAgICAgIDxwPuWls+WtqeWOi+S4i+W/g+mHjOeahOeDpui6ge+8jOWbnuWIsOW6p+S9jeS4iu+8jOWBh+ijheW8gOWni+WGmeS9nOS4mu+8jOS9meWFieWBt+WBt+eehOS4iuWHoOecvO+8jOWPiOWMhuWMhuaUtuWbnuinhue6v+OAgjwvcD4KICAgICAgICA8cD7mg7Pkuoblpb3ljYrlpKnlpoLkvZXlvIDlj6PvvIzlpbPlranmiazotbflsI/ohLjvvIzkvqfov4fouqvvvIzigJzpgqPkuKrosIPmn6XigKbigKbkvaDop4nlvpfosIHlpb3nnIvllYrjgILigJ08L3A+CiAgICAgICAgPHA+6K645piv5b+D6YeM55qE5auJ5aaS5b+D5L2c5oCq77yM5aWz5a2p5pWF5L2c5byA546p56yR77ya4oCc5ZCs6K+05L2g6KeJ5b6XWuWlveeci+WTpuOAguKAnTwvcD4KICAgICAgICA8cD7nlLflranmiZPnnYDlk4jlk4jvvIzliLDmnIDlkI7kuZ/msqHor7TmuIXmpZrjgII8L3A+CiAgICAgICAgPHA+5L2G5a+55LqO5aWz5a2p5p2l6K+077yM6L+Z5Liq5LiN5riF5qWa55qE562U5qGI77yM5LiN5LuF5piv6YKj5Liq5pma6Ieq5Lmg55qE5pyA5ZCO77yM6L+Y5piv5ryr6ZW/5a2m55Sf5pe25Luj55qE5pyA5ZCO77yM5piv5pyA5ZCO55qE5pyA5ZCO44CCPC9wPgo8L2Rpdj4="
    var input_key = document.getElementById("key").value
    if (input_key == decodeURIComponent(escape(window.atob(yek_thgir)))){
        document.getElementById("money_0").innerHTML = decodeURIComponent(escape(window.atob(money_0)))
        document.getElementById("lock").innerHTML = "🔓"
    }else{
        alert("密钥错误")
    }
}

function money_clear(){
    document.getElementById("key").value = ""
}