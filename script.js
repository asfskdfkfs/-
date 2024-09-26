let users = [];
let verificationCode = '';

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            verificationCode = Math.floor(1000 + Math.random() * 9000);
            alert(`تم إرسال كود التحقق إلى البريد الإلكتروني: ${verificationCode}`);
            
            const codeInput = prompt("أدخل كود التحقق الذي تم إرساله:");
            if (codeInput == verificationCode) {
                users.push({ username, email, password });
                alert('تم إنشاء الحساب بنجاح!');
                window.location.href = 'login.html';
            } else {
                alert('كود التحقق غير صحيح.');
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert('تم تسجيل الدخول بنجاح!');
                window.location.href = 'index.html';
            } else {
                alert('خطأ في اسم المستخدم أو كلمة المرور');
            }
        });
    }
});
