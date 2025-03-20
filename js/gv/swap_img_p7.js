const buttons_p7 = document.querySelectorAll('.action-button-p7');
const displayImage_p7 = document.querySelector('.display-image');
const imageDescription = document.querySelector('.image-description-p7');

// 初始化时设置第一个按钮为 active
buttons_p7[0].classList.add('active');

// 描述信息
const descriptions = {
    temp1: {
        title: "Custom High-Resolution Image Output",
        text1: "Creates images that exceed screen size for large-format printing and professional reports.<br>Uses original high-resolution data for sharp, detailed visuals."
    },
    temp2: {
        title: "Orthophoto Generation",
        text1: "Outputs high-accuracy orthophotos for GIS and mapping applications.",
    }
};

// 设置初始显示的内容
displayImage_p7.src = `../../resources/GV/temp1.jpg`;
imageDescription.querySelector('h2').textContent = descriptions.temp1.title;
imageDescription.querySelector('p').innerHTML = descriptions.temp1.text1; // 使用 innerHTML


buttons_p7.forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有按钮的 active 类
        buttons_p7.forEach(btn => btn.classList.remove('active'));
        
        // 为当前按钮添加 active 类
        this.classList.add('active');

        const imageKey = this.getAttribute('data-image');
        // 切换图片
        displayImage_p7.src = `../../resources/GV/${imageKey}.jpg`;
        // 更新描述
        imageDescription.querySelector('h2').textContent = descriptions[imageKey].title;
        imageDescription.querySelector('p').innerHTML = descriptions[imageKey].text1; // 使用 innerHTML
    });
});
