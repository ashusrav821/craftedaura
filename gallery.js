// Gallery Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryCategories = document.querySelectorAll('.gallery-category');
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter categories
            if (filter === 'all') {
                galleryCategories.forEach(category => {
                    category.style.display = 'block';
                    animateCategory(category);
                });
            } else {
                galleryCategories.forEach(category => {
                    const grids = category.querySelectorAll('.gallery-grid');
                    const categoryMatch = Array.from(grids).some(grid => 
                        grid.getAttribute('data-category') === filter
                    );
                    
                    if (categoryMatch) {
                        category.style.display = 'block';
                        animateCategory(category);
                    } else {
                        category.style.display = 'none';
                    }
                });
            }
            
            // Scroll to gallery section smoothly
            setTimeout(() => {
                const firstVisibleCategory = document.querySelector('.gallery-category[style="display: block;"]');
                if (firstVisibleCategory) {
                    firstVisibleCategory.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start'
                    });
                }
            }, 100);
        });
    });
    
    // Animate category when shown
    function animateCategory(category) {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            category.style.transition = 'all 0.5s ease';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, 50);
    }
    
    // Gallery item hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click event to gallery items (for future modal/lightbox functionality)
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemTitle = this.querySelector('h3').textContent;
            console.log('Clicked on:', itemTitle);
            // Future: Open modal/lightbox with full image and details
        });
    });
    
    // Lazy load animation for gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
});

// Add stagger animation to gallery items
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrids = document.querySelectorAll('.gallery-grid');
    
    galleryGrids.forEach(grid => {
        const items = grid.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    });
});
