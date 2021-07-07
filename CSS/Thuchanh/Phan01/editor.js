const first = document.querySelector(".first");
const subfirst = document.querySelector(".subfirst");
const iframe = document.querySelector("iframe");
const run= document.querySelector("#run");
const ans= document.querySelector("#ans");

run.addEventListener("click", () => {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

ans.addEventListener("click", () => {
run.style.display="none";
ans.textContent = "Kiểm tra kết quả làm thử";
 first.style.display="none";
subfirst.style.display="block";

    var html = subfirst.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

/*
first.addEventListener('keyup', () => {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

first.addEventListener("paste", function (e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});
*/