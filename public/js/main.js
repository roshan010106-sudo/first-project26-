document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCustomCursor();
    initNavigation();
    initThemeToggle();
    initTypewriter();
    initScrollAnimations();
    initStatsCounter();
    initSkillBars();
    initProjects();
    initContactForm();
    initScrollToTop();
    initSmoothScroll();
    initScrollDown();
});

function initLoader() {
    const loader = document.querySelector('.loader-wrapper');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }, 1500);
    });
}

function initCustomCursor() {
    if (window.innerWidth > 768) {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
        });

        function animateFollower() {
            const distX = mouseX - followerX;
            const distY = mouseY - followerY;

            followerX += distX * 0.1;
            followerY += distY * 0.1;

            cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;

            requestAnimationFrame(animateFollower);
        }

        animateFollower();

        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform += ' scale(1.5)';
                cursorFollower.style.transform += ' scale(1.5)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
                cursorFollower.style.transform = cursorFollower.style.transform.replace(' scale(1.5)', '');
            });
        });
    }
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScroll = currentScroll;

        updateActiveNavLink();
    });



































    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section, .hero');
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
}

function initTypewriter() {
    const texts = [
        'Full Stack Developer',
        'UI/UX Designer',
        'Creative Problem Solver',
        'Tech Enthusiast'
    ];

    const typewriterElement = document.getElementById('typewriter');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.glass-card, .skill-item, .timeline-item, .interest-card');

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateStats();
            }
        });
    }, observerOptions);

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }

    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;

                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };

            updateCounter();
        });
    }
}

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let animated = false;

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateSkillBars();
            }
        });
    }, observerOptions);

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    function animateSkillBars() {
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = `${progress}%`;
            }, index * 100);
        });
    }
}

function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    renderProjects('all');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });

    function renderProjects(filter) {
        projectsGrid.innerHTML = '';

        const filteredProjects = filter === 'all'
            ? projectsData
            : projectsData.filter(project => project.category === filter);

        filteredProjects.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
    }

    function createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="project-image" style="background: ${project.gradient}">
            </div>
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        return card;
    }
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    const formGroups = form.querySelectorAll('.form-group');

    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');

        input.addEventListener('blur', () => {
            validateField(group, input);
        });

        input.addEventListener('input', () => {
            if (group.classList.contains('error')) {
                validateField(group, input);
            }
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isValid = true;

        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (!validateField(group, input)) {
                isValid = false;
            }
        });

        if (!isValid) return;

        const submitBtn = form.querySelector('.btn-submit');
        const formMessage = form.querySelector('.form-message');

        submitBtn.classList.add('loading');
        formMessage.style.display = 'none';

        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim()
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formMessage.className = 'form-message success';
                form.reset();

                formGroups.forEach(group => {
                    group.classList.remove('error');
                });
            } else {
                formMessage.textContent = data.error || 'Something went wrong. Please try again.';
                formMessage.className = 'form-message error';
            }
        } catch (error) {
            formMessage.textContent = 'Network error. Please check your connection and try again.';
            formMessage.className = 'form-message error';
        } finally {
            submitBtn.classList.remove('loading');
            formMessage.style.display = 'block';
        }
    });

    function validateField(group, input) {
        const value = input.value.trim();
        const type = input.type;
        const errorMessage = group.querySelector('.error-message');

        if (value === '') {
            group.classList.add('error');
            errorMessage.textContent = 'This field is required';
            return false;
        }

        if (type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                group.classList.add('error');
                errorMessage.textContent = 'Please enter a valid email address';
                return false;
            }
        }

        if (input.name === 'name' && value.length < 2) {
            group.classList.add('error');
            errorMessage.textContent = 'Name must be at least 2 characters';
            return false;
        }

        if (input.name === 'message' && value.length < 10) {
            group.classList.add('error');
            errorMessage.textContent = 'Message must be at least 10 characters';
            return false;
        }

        group.classList.remove('error');
        return true;
    }
}

function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}



function initScrollDown() {
    const scrollBtn = document.getElementById("scrollDown");
    const targetSection = document.getElementById("about");   // 👈 destination

    if (!scrollBtn || !targetSection) return;

    scrollBtn.addEventListener("click", () => {
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}
