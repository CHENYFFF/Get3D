const buttons_p3 = document.querySelectorAll('.action-button-p3');
const displayImage_p3 = document.querySelector('.display-image');
const imageDescription = document.querySelector('.image-description-p3');

// 初始化时设置第一个按钮为 active
buttons_p3[0].classList.add('active');

// 描述信息
const descriptions = {
    temp1: {
        title: "Optimized CPU & GPU Acceleration",
        text1: "Maximizes CPU and GPU capabilities for parallel processing, <br>significantly decreasing AT and reconstruction time."
    },
    temp2: {
        title: "High Automation",
        text1: "Automatically conducts aerial triangulation and reconstruction,<br> reducing manual intervention and enhancing efficiency.",
    }
};

// 设置初始显示的内容
displayImage_p3.src = `/resources/gm/temp1.jpg`;
imageDescription.querySelector('h2').textContent = descriptions.temp1.title;
imageDescription.querySelector('p').innerHTML = descriptions.temp1.text1; // 使用 innerHTML


buttons_p3.forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有按钮的 active 类
        buttons_p3.forEach(btn => btn.classList.remove('active'));
        
        // 为当前按钮添加 active 类
        this.classList.add('active');

        const imageKey = this.getAttribute('data-image');
        // 切换图片
        displayImage_p3.src = `/resources/gm/${imageKey}.jpg`;
        // 更新描述
        imageDescription.querySelector('h2').textContent = descriptions[imageKey].title;
        imageDescription.querySelector('p').innerHTML = descriptions[imageKey].text1; // 使用 innerHTML
    });
});
