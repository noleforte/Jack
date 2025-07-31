// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Элементы навигации
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalBody = document.querySelector('.modal-body h2');
    
    // Функция для открытия модального окна
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    }
    
    // Функция для закрытия модального окна
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Возвращаем прокрутку
    }
    
    // Обработчик для гамбургер меню
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Обработчики для ссылок навигации
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Закрываем мобильное меню если оно открыто
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Открываем модальное окно
            openModal();
        });
    });
    
    // Обработчик для кнопки копирования
    const copyButton = document.getElementById('copyButton');
    if (copyButton) {
        copyButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const textToCopy = 'FZSbrH376X6v1jBgRPD9Jc6v2sgZNYimv56MFNvpump';
            
            // Копируем в буфер обмена
            navigator.clipboard.writeText(textToCopy).then(function() {
                // Показываем уведомление об успешном копировании
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                copyButton.style.background = 'rgba(101, 118, 134, 0.3)';
                
                // Возвращаем оригинальный текст через 2 секунды
                setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.style.background = 'rgba(101, 118, 134, 0.1)';
                }, 2000);
            }).catch(function(err) {
                console.error('Ошибка копирования: ', err);
                // Fallback для старых браузеров
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                copyButton.style.background = 'rgba(101, 118, 134, 0.3)';
                
                setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.style.background = 'rgba(101, 118, 134, 0.1)';
                }, 2000);
            });
        });
    }
    
    // Обработчик для закрытия модального окна по клику на крестик
    closeButton.addEventListener('click', closeModal);
    
    // Обработчик для закрытия модального окна по клику вне его
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Обработчик для закрытия модального окна по нажатию Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Плавная прокрутка для навигации (если понадобится в будущем)
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Анимация появления элементов при загрузке страницы
    function animateOnScroll() {
        const elements = document.querySelectorAll('.hero-title, .hero-image, .cta-button');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    
    // Инициализация анимаций
    animateOnScroll();
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', function() {
        // Закрываем мобильное меню при изменении размера окна
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Добавляем эффект параллакса для фона (опционально)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Добавляем интерактивность для кнопок
    const buttons = document.querySelectorAll('button, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Функция для добавления эффекта печатающегося текста (опционально)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Применяем эффект печатающегося текста к заголовку (опционально)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 500);
    }
    
    // Добавляем поддержку жестов для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Свайп влево - можно использовать для навигации
                console.log('Swipe left');
            } else {
                // Свайп вправо - можно использовать для навигации
                console.log('Swipe right');
            }
        }
    }
    
    // Добавляем поддержку клавиатурной навигации
    document.addEventListener('keydown', function(e) {
        // Навигация по Tab
        if (e.key === 'Tab') {
            // Добавляем фокус для доступности
            const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
            const firstFocusableElement = document.querySelector(focusableElements);
            const focusableContent = document.querySelectorAll(focusableElements);
            const lastFocusableElement = focusableContent[focusableContent.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
    
    // Обработчик для иконок
    const sideIcons = document.querySelectorAll('.side-icon');
    let iconsScattered = false;
    
    sideIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            if (!iconsScattered) {
                // Разъезжаем иконки по углам
                sideIcons.forEach(icon => {
                    icon.classList.add('scattered');
                });
                iconsScattered = true;
            } else {
                // Возвращаем иконки на место
                sideIcons.forEach(icon => {
                    icon.classList.remove('scattered');
                });
                iconsScattered = false;
            }
        });
    });
    
    // Инициализация завершена
    console.log('Jack\'s website initialized successfully!');
}); 