function swapImage_p5(clickedImage) {
    const centerImage = document.querySelector('.center-image');
    const descriptionElement = document.getElementById('image-description');
    
    // 保存当前中间图片的 src
    const tempSrc = centerImage.src;

    // 保存当前中间图片的描述
    const tempDescription = centerImage.getAttribute('data-description');

    // 替换中间图片的 src 和描述为点击的图片的 src 和描述
    centerImage.src = clickedImage.src;
    centerImage.setAttribute('data-description', clickedImage.getAttribute('data-description'));

    // 替换点击的图片的 src 和描述为之前中间图片的 src 和描述
    clickedImage.src = tempSrc;
    clickedImage.setAttribute('data-description', tempDescription);

    // 更新描述文本
    descriptionElement.textContent = centerImage.getAttribute('data-description');
}
