//submit.js

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止默认提交行为

    // 获取表单元素
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const company = document.getElementById("company");
    const topic = document.getElementById("topic");
    const message = document.getElementById("message");

    // 获取错误提示元素
    const fullNameError = document.getElementById("full-name-error");
    const emailError = document.getElementById("email-error");
    const companyError = document.getElementById("company-error");
    const topicError = document.getElementById("topic-error");
    const messageError = document.getElementById("message-error");

    // 验证表单字段
    let isValid = true;

    // 验证 Full Name
    if (fullName.value.trim() === "") {
        fullNameError.style.display = "block";
        isValid = false;
    } else {
        fullNameError.style.display = "none";
    }

    // 验证 Email
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // 验证 Company
    if (company.value.trim() === "") {
        companyError.style.display = "block";
        isValid = false;
    } else {
        companyError.style.display = "none";
    }

    // 验证 Topic
    if (topic.value === "") {
        topicError.style.display = "block";
        isValid = false;
    } else {
        topicError.style.display = "none";
    }

    // 验证 Message
    if (message.value.trim() === "") {
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }

    // 如果验证通过，展示成功信息或执行后续操作
    if (isValid) {
        // fetch("http://localhost:3000/send-email", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         fullName,
        //         email,
        //         company,
        //         topic,
        //         message
        //     })
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error("Network response was not ok");
        //     }
        //     return response.json();
        // })
        // .then(data => {
        //     alert(data.message); // 显示成功信息
        // })
        // .catch(error => {
        //     alert("There was a problem with the request: " + error.message);
        // });
        console.log("提交")
    }
});
