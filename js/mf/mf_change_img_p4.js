const buttons_p4 = document.querySelectorAll('.action-button-p4');
const displayImage_p4 = document.querySelector('.display-image');
const descriptionTexts = document.querySelectorAll('.description-text');

// 描述信息
const descriptions = {
    temp1: "Ensure historical authenticity through accurate reconstructions.",
    temp2: "Photograph intricate details of ancient buildings and decorations."
};

// 初始化时设置第一个按钮为 active
buttons_p4[0].classList.add('active');
descriptionTexts[0].textContent = descriptions.temp1;
descriptionTexts[0].style.display = 'block';

buttons_p4.forEach((button, index) => {
    button.addEventListener('click', function () {
        // 移除所有按钮的 active 类
        buttons_p4.forEach(btn => btn.classList.remove('active'));
        // 隐藏所有描述文本
        descriptionTexts.forEach(text => text.style.display = 'none');

        // 为当前按钮添加 active 类
        this.classList.add('active');

        const imageKey = this.getAttribute('data-image');
        // 切换图片
        displayImage_p4.src = `../../resources/mofang/${imageKey}.jpg`;
        // 显示对应的描述文本
        descriptionTexts[index].textContent = descriptions[imageKey];
        descriptionTexts[index].style.display = 'block';
    });
});
