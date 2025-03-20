// TopicOptions.js
document.getElementById("topic-select").addEventListener("click", function () {
    const options = document.getElementById("topic-options");
    options.style.display = options.style.display === "block" ? "none" : "block"; // 切换显示状态
});

// 点击选项
document.querySelectorAll("#topic-options li").forEach(function (item) {
    item.addEventListener("click", function () {
        const selectedValue = this.getAttribute("data-value");
        const selectedText = this.textContent;
        document.getElementById("selected-topic").textContent = selectedText; // 更新显示的文本
        document.getElementById("topic").value = selectedValue; // 更新隐藏的值
        document.getElementById("topic-options").style.display = "none"; // 隐藏选项
    });
});

// 点击以外的区域关闭选项
document.addEventListener("click", function (e) {
    const selectBox = document.getElementById("topic-select");
    if (!selectBox.contains(e.target)) {
        document.getElementById("topic-options").style.display = "none"; // 隐藏选项
    }
});
