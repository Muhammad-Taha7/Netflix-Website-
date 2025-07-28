 const slider = document.getElementById('slider');
    document.getElementById('slide-left').addEventListener('click', () => {
      slider.scrollBy({ left: -300, behavior: 'smooth' });
    });
    document.getElementById('slide-right').addEventListener('click', () => {
      slider.scrollBy({ left: 300, behavior: 'smooth' });
    });
     const toggles = document.querySelectorAll('.accordion-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.classList.toggle('hidden');
      const symbol = btn.querySelector('span');
      symbol.textContent = content.classList.contains('hidden') ? '+' : '×';
    });
  });