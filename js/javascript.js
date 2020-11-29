var shorttitle="页脚";
var today = new Date();
var month = today.getMonth() + 1;
month = month < 10 ? '0'+month : month;
var day = today.getDate() < 10 ? '0'+today.getDate() : today.getDate();
var currentdate = today.getFullYear() + '-' + month + '-' + day;
function setFooter() {
    var ft = document.querySelectorAll("footer");
    var i;
    for(i=0;i<ft.length;i++) {
        ft[i].innerHTML = `<div>${currentdate}</div>\
        <div>${shorttitle}</div>\
        <div>${i+1}/${ft.length}</div>`
    }
}