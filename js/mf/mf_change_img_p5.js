const buttons_p5 = document.querySelectorAll('.action-button-p5');
const displayImage_p5 = document.querySelector('.display-image-p5');

// 初始化时设置第一个按钮为 active
buttons_p5[0].classList.add('active');

// 设置初始显示的内容
displayImage_p5.src = `../../resources/mofang/temp1.jpg`;

buttons_p5.forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有按钮的 active 类
        buttons_p5.forEach(btn => btn.classList.remove('active'));
        
        // 为当前按钮添加 active 类
        this.classList.add('active');

        const imageKey_p5 = this.getAttribute('data-image');
        // 切换图片
        displayImage_p5.src = `../../resources/mofang/${imageKey_p5}.jpg`;
        console.log(displayImage_p5.src)
    });
});
