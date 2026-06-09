   const modal = document.getElementById('modal');
        const openBtn = document.getElementById('openModal');
        const closeBtn = document.getElementById('closeModal');

        openBtn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'visible';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'visible';
            }
        });