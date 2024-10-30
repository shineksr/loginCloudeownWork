const modal = document.getElementById('loginModal');
        const loginForm = document.getElementById('loginForm');

        function openModal() {
            modal.style.display = 'flex';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        }

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically send this data to a server
            console.log('Login attempt:', { username, password });
            alert('Login successful!');
            closeModal();
        });