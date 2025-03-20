// 页面2 —— 2.2button的位置
const slider = document.getElementById("slider");
let sliderPos;

// 默认显示第一组图像
let currentImageGroup = 1;

//监听滑块移动事件
slider.addEventListener("input", function(e) {
  sliderPos = e.target.value;
  // 设置前景图像宽度
  document.querySelector(".foreground-img").style.width = `${sliderPos}%`;
  // 设置slider-button的位置
  const sliderWidth = slider.offsetWidth; // 获取滑块的宽度
  const buttonWidth = 120; // slider-button的宽度
  const leftPosition = (sliderPos / 100) * sliderWidth - (buttonWidth / 2); // 计算其位置
  document.querySelector(".slider-button").style.left = `${leftPosition}px`; // 设置位置
});

// 监听更换图像 按钮点击事件
const buttons = document.querySelectorAll('.action-button');
buttons[0].classList.add('active');// 初始化时设置第一个按钮为active
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // 清除所有按钮的激活状态
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 设置当前按钮为激活状态
        this.classList.add('active');

        // 切换图像组
        const imageGroup = this.getAttribute('data-image-group');
        if (imageGroup === '1') {
            document.querySelector(".background-img").style.backgroundImage = "url('../../resources/mofang/2.1_before_1.jpg')";
            document.querySelector(".foreground-img").style.backgroundImage = "url('../../resources/mofang/2.1_after_1.jpg')";
            currentImageGroup = 1;
        } else if (imageGroup === '2') {
            document.querySelector(".background-img").style.backgroundImage = "url('../../resources/mofang/2.1_before_2.jpg')"; // 新的before
            document.querySelector(".foreground-img").style.backgroundImage = "url('../../resources/mofang/2.1_after_2.jpg')"; // 新的after
            currentImageGroup = 2;
        }
    });
});

// 页面3 —— 3.2 (逻辑结构和2.2一样)
const slider_1 = document.getElementById("slider-1");
let sliderPos_1;

// 默认显示第一组图像
let currentImageGroup_1 = 1; //当前图像组的显示状态：1 or 2

// 监听页面3的滑块移动事件
slider_1.addEventListener("input", function(e) {
  sliderPos_1 = e.target.value;
  // 设置前景图像宽度
  document.querySelector(".foreground-img-1").style.width = `${sliderPos_1}%`;
  // 设置slider-button的位置
  const sliderWidth_1 = slider_1.offsetWidth; // 获取滑块的宽度
  const buttonWidth_1 = 120; // slider-button的宽度
  const leftPosition_1 = (sliderPos_1 / 100) * sliderWidth_1 - (buttonWidth_1 / 2); // 计算其位置
  document.querySelector(".slider-button-1").style.left = `${leftPosition_1}px`; // 设置位置
});

// 监听更换图像 按钮点击事件
const buttons_1 = document.querySelectorAll('.action-button-1');
// 初始化时设置第一个按钮为active
buttons_1[0].classList.add('active');

buttons_1.forEach(button_1 => {
    button_1.addEventListener('click', function () {
        // 清除所有按钮的激活状态
        buttons_1.forEach(btn_1 => {
            btn_1.classList.remove('active');
        });
        
        // 设置当前按钮为激活状态
        this.classList.add('active');

        // 切换图像组
        const imageGroup_1 = this.getAttribute('data-image-group'); 
        if (imageGroup_1 === '1') {
            document.querySelector(".background-img-1").style.backgroundImage = "url('../../resources/mofang/2.1_before_1.jpg')";
            document.querySelector(".foreground-img-1").style.backgroundImage = "url('../../resources/mofang/2.1_after_1.jpg')";
            currentImageGroup_1 = 1;
        } else if (imageGroup_1 === '2') {
            document.querySelector(".background-img-1").style.backgroundImage = "url('../../resources/mofang/2.1_before_2.jpg')"; // 新的before
            document.querySelector(".foreground-img-1").style.backgroundImage = "url('../../resources/mofang/2.1_after_2.jpg')"; // 新的after
            currentImageGroup_1 = 2;
        } else if (imageGroup_1 === '3') {
            document.querySelector(".background-img-1").style.backgroundImage = "url('../../resources/mofang/2.1_before_3.jpg')"; // 新的before
            document.querySelector(".foreground-img-1").style.backgroundImage = "url('../../resources/mofang/2.1_after_3.jpg')"; // 新的after
            currentImageGroup_1 = 3;
        }
    });
});
