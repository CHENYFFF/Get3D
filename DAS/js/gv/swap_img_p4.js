const buttons_p4 = document.querySelectorAll('.action-button-p4');
const groupSwitchButtons = document.querySelectorAll('.group-switch-button');
const displayImage_p4 = document.querySelector('.display-image');

// 图片组数据
const imageGroups = {
    a: ['a1', 'a2', 'a3', 'a4'],
    b: ['b1', 'b2', 'b3', 'b4']
};

// 当前显示的组
let currentGroup = 'a';

// 初始化时设置第一个按钮为 active
buttons_p4[0].classList.add('active');
groupSwitchButtons[0].classList.add('active');

// 切换组的逻辑
groupSwitchButtons.forEach(button => {
    button.addEventListener('click', function () {
        // 移除所有切换按钮的 active 类
        groupSwitchButtons.forEach(btn => btn.classList.remove('active'));
        // 为当前按钮添加 active 类
        this.classList.add('active');

        // 更新当前组
        currentGroup = this.getAttribute('data-group');

        // 更新图片显示为当前组的第一个图片
        const firstImage = imageGroups[currentGroup][0];
        displayImage_p4.src = `/resources/gv/${firstImage}.jpg`;

        // 更新按钮的 data-image 属性
        buttons_p4.forEach((btn, index) => {
            btn.setAttribute('data-image', imageGroups[currentGroup][index]);
        });

        // 设置第一个按钮为 active
        buttons_p4.forEach(btn => btn.classList.remove('active'));
        buttons_p4[0].classList.add('active');
    });
});

// 切换图片的逻辑
buttons_p4.forEach(button => {
    button.addEventListener('click', function () {
        // 移除所有按钮的 active 类
        buttons_p4.forEach(btn => btn.classList.remove('active'));
        // 为当前按钮添加 active 类
        this.classList.add('active');

        const imageKey = this.getAttribute('data-image');
        // 切换图片
        displayImage_p4.src = `/resources/gv/${imageKey}.jpg`;
    });
});
