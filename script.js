const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const btnText = loginBtn.querySelector('.btn-text');
const spinner = loginBtn.querySelector('.spinner');
const toastContainer = document.getElementById('toast-container');

// Form Submit Handler
loginForm.addEventListener('submit', function(e) {

    e.preventDefault();

    const username = loginForm.doctorName.value;
    const password = document.getElementById('passwordInput').value;
    setLoading(true);
    setTimeout(() => {

        setLoading(false);
        if (username && password) {

            showNotification(
                'Login Successful',
                'Welcome back, Dr. ',
                'success'
            );
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);

        } else {

            showNotification(
                'Login Failed',
                'Please check your credentials.',
                'error'
            );
        }

    }, 2000);

});

function setLoading(isLoading) {

    if (isLoading) {

        btnText.style.display = 'none';
        spinner.style.display = 'inline-block';

        loginBtn.disabled = true;
        loginBtn.style.cursor = 'not-allowed';

    } else {

        btnText.style.display = 'inline-block';
        spinner.style.display = 'none';

        loginBtn.disabled = false;
        loginBtn.style.cursor = 'pointer';
    }
}

// Toast Notification Function
function showNotification(title, message, type) {

    const toast = document.createElement('div');

    toast.classList.add('toast', type);

    const iconClass =
        type === 'success'
        ? 'fa-circle-check'
        : 'fa-circle-exclamation';

    toast.innerHTML = `
        <i class="fas ${iconClass}"></i>

        <div class="toast-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {

        toast.remove();

    }, 4000);
}

