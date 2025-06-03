document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.card').style.transform = 'scale(1)';
    
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');
    const overlay = document.getElementById('overlay');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.add('open');
        overlay.classList.add('active');
        menuToggle.classList.add('hidden');
    });
    
    closeBtn.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        menuToggle.classList.remove('hidden');
    });
    
    overlay.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        menuToggle.classList.remove('hidden');
    });
});