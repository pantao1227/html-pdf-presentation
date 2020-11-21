const org = '组织/单位/地址/其他附加信息';

function SetPageNum() {
    var pgnum = document.querySelectorAll("div[class='pagenumber']");
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
    var dt = document.querySelectorAll("div[class='datetime']");
    var i;
    for (i=0; i<dt.length; i++) {
        dt[i].textContent = currentdate;
    }
}
function SetShortTitle() {
    var st = document.querySelectorAll("div[class='shorttitle']");
    var i;
    for (i=0;i<st.length;i++) {
        // st[i].innerHTML = `<p>${org}</p>`;
        st[i].textContent = org;
    }
}