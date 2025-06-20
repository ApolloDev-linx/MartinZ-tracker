document.getElementById('loginBtn').addEventListener('click', function (e) {
  e.preventDefault();  

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        window.location.href = '/main';
      } else {
        alert('Login failed!');
      }
    })
    .catch(err => console.error('Login error:', err));
});

