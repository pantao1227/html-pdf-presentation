function SetPageNum() {
    var pgnum = document.querySelectorAll("div[class='footer_right']");
    var i;
    for (i=0; i < pgnum.length; i++) {
        var index = String(i + 1);
        var all = String(pgnum.length);
        pgnum[i].innerHTML = `<p>${index} / ${all}</p>`;
    }
}
function SetDate() {
    var today = new Date();
    var month = today.getMonth() + 1;
    month = month < 10 ? '0'+month : month;
    var day = today.getDate() < 10 ? '0'+today.getDate() : today.getDate();
    var currentdate = today.getFullYear() + '-' + month + '-' + day;
    var dt = document.querySelectorAll("div[class='footer_left']");
    var i;
    for (i=0; i<dt.length; i++) {
        dt[i].innerHTML = `<p>${currentdate}</p>`;
    }
}
function SetShortTitle() {
    var st = document.querySelectorAll("div[class='footer_center']");
    var i;
    for (i=0;i<st.length;i++) {
        st[i].innerHTML = "<p>微系统与芯片集成设计中心 - 503 实验室</p>";
    }
}