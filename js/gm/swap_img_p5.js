const buttons_p5 = document.querySelectorAll('.action-button-p5');
const displayImage_p5 = document.querySelector('.display-image-p5');
const imageDescription_p5 = document.querySelector('.image-description-p5');

// 初始化时设置第一个按钮为 active
buttons_p5[0].classList.add('active');

// 描述信息
const descriptions_p5 = {
    temp1: {
        text1: "Detailed and lifelike textures for accurate mapping and visualization."
    },
    temp2: {
        text1: "Ensures uniform color blending without visual artifacts.",
    },
    temp3: {
        text1: "Removes unwanted shadows, improving overall texture clarity.",
    },
    temp4: {
        text1: "Intelligently eliminates dynamic objects like pedestrians, vehicles, and bicycles, leading to cleaner environment models.",
    },
    temp5: {
        text1: "Effortlessly restores water surfaces without gaps or distortions.",
    }
};

// 设置初始显示的内容
displayImage_p5.src = `/resources/gm/temp1.jpg`;
imageDescription_p5.querySelector('p').innerHTML = descriptions_p5.temp1.text1; // 使用 innerHTML


buttons_p5.forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有按钮的 active 类
        buttons_p5.forEach(btn => btn.classList.remove('active'));
        
        // 为当前按钮添加 active 类
        this.classList.add('active');

        const imageKey_p5 = this.getAttribute('data-image-p5');
        // 切换图片
        displayImage_p5.src = `/resources/gm/${imageKey_p5}.jpg`;
        // 更新描述
        imageDescription_p5.querySelector('p').innerHTML = descriptions_p5[imageKey_p5].text1; // 使用 innerHTML
    });
});
