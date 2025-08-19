/**
 * Habitop（他律）官网 JavaScript 文件
 * 版本：1.0.0
 * 功能：页面交互、导航控制、用户体验优化
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('[Habitop官网] 页面加载完成');
    
    // 初始化页面
    initPage();
    
    // 添加页面加载动画
    addPageLoadAnimation();
});

/**
 * 初始化页面
 */
function initPage() {
    // 检查当前页面类型
    const currentPage = getCurrentPage();
    
    // 根据页面类型执行不同的初始化逻辑
    switch(currentPage) {
        case 'home':
            initHomePage();
            break;
        case 'service':
            initServicePage();
            break;
        case 'privacy':
            initPrivacyPage();
            break;
        default:
            console.log('[Habitop官网] 未知页面类型:', currentPage);
    }
    
    // 添加通用事件监听器
    addEventListeners();
}

/**
 * 获取当前页面类型
 * @returns {string} 页面类型
 */
function getCurrentPage() {
    const pathname = window.location.pathname;
    
    if (pathname.includes('service.html')) {
        return 'service';
    } else if (pathname.includes('privacy.html')) {
        return 'privacy';
    } else {
        return 'home';
    }
}

/**
 * 初始化首页
 */
function initHomePage() {
    console.log('[Habitop官网] 初始化首页');
    
    // 添加卡片悬停效果
    const cards = document.querySelectorAll('.agreement-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // 添加按钮点击效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 添加点击波纹效果
            addRippleEffect(e);
        });
    });
}

/**
 * 初始化服务协议页面
 */
function initServicePage() {
    console.log('[Habitop官网] 初始化服务协议页面');
    
    // 添加章节导航
    addSectionNavigation();
}

/**
 * 初始化隐私政策页面
 */
function initPrivacyPage() {
    console.log('[Habitop官网] 初始化隐私政策页面');
    
    // 添加章节导航
    addSectionNavigation();
}

/**
 * 添加章节导航
 */
function addSectionNavigation() {
    const sections = document.querySelectorAll('.section h3');
    if (sections.length === 0) return;
    
    // 创建导航菜单
    const nav = document.createElement('div');
    nav.className = 'section-nav';
    nav.innerHTML = '<h4>目录导航</h4><ul></ul>';
    
    const navList = nav.querySelector('ul');
    
    sections.forEach((section, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#section-${index}`;
        a.textContent = section.textContent;
        a.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(section);
        });
        
        li.appendChild(a);
        navList.appendChild(li);
        
        // 给章节添加ID
        section.id = `section-${index}`;
    });
    
    // 插入到页面头部
    const header = document.querySelector('.agreement-header');
    if (header) {
        header.parentNode.insertBefore(nav, header.nextSibling);
    }
}

/**
 * 平滑滚动到指定元素
 * @param {HTMLElement} element 目标元素
 */
function smoothScrollTo(element) {
    const offsetTop = element.offsetTop - 100; // 减去头部高度
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

/**
 * 添加事件监听器
 */
function addEventListeners() {
    // 监听滚动事件，添加章节高亮
    window.addEventListener('scroll', throttle(highlightCurrentSection, 100));
    
    // 监听窗口大小变化
    window.addEventListener('resize', throttle(handleResize, 250));
}

/**
 * 高亮当前章节
 */
function highlightCurrentSection() {
    const sections = document.querySelectorAll('.section h3');
    const navLinks = document.querySelectorAll('.section-nav a');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    let currentSection = 0;
    const scrollTop = window.pageYOffset;
    
    sections.forEach((section, index) => {
        const offsetTop = section.offsetTop - 150;
        if (scrollTop >= offsetTop) {
            currentSection = index;
        }
    });
    
    // 移除所有高亮
    navLinks.forEach(link => link.classList.remove('active'));
    
    // 高亮当前章节
    if (navLinks[currentSection]) {
        navLinks[currentSection].classList.add('active');
    }
}

/**
 * 处理窗口大小变化
 */
function handleResize() {
    console.log('[Habitop官网] 窗口大小变化:', window.innerWidth, 'x', window.innerHeight);
    
    // 重新计算响应式布局
    updateResponsiveLayout();
}

/**
 * 更新响应式布局
 */
function updateResponsiveLayout() {
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    // 根据屏幕大小调整样式
    document.body.classList.toggle('mobile', isMobile);
    document.body.classList.toggle('small-mobile', isSmallMobile);
}

/**
 * 添加页面加载动画
 */
function addPageLoadAnimation() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.6s ease-out';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
}

/**
 * 添加按钮点击波纹效果
 * @param {Event} event 点击事件
 */
function addRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * 节流函数
 * @param {Function} func 要执行的函数
 * @param {number} wait 等待时间
 * @returns {Function} 节流后的函数
 */
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 打开用户服务协议页面
 */
function openServiceAgreement() {
    console.log('[Habitop官网] 打开用户服务协议页面');
    window.location.href = 'service.html';
}

/**
 * 打开隐私政策页面
 */
function openPrivacyPolicy() {
    console.log('[Habitop官网] 打开隐私政策页面');
    window.location.href = 'privacy.html';
}

/**
 * 返回上一页
 */
function goBack() {
    console.log('[Habitop官网] 返回上一页');
    
    // 如果有上一页，则返回
    if (document.referrer && document.referrer.includes(window.location.host)) {
        window.history.back();
    } else {
        // 否则返回首页
        window.location.href = 'index.html';
    }
}

/**
 * 添加错误处理
 */
window.addEventListener('error', function(event) {
    console.error('[Habitop官网] 页面错误:', event.error);
    
    // 显示用户友好的错误信息
    showErrorMessage('页面出现了一些问题，请刷新页面重试');
});

/**
 * 显示错误信息
 * @param {string} message 错误信息
 */
function showErrorMessage(message) {
    // 创建错误提示元素
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // 添加到页面
    document.body.appendChild(errorDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 3000);
}

/**
 * 添加页面可见性检测
 */
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('[Habitop官网] 页面隐藏');
    } else {
        console.log('[Habitop官网] 页面显示');
        // 页面重新显示时，可以执行一些刷新逻辑
    }
});

// 导出函数供HTML调用
window.openServiceAgreement = openServiceAgreement;
window.openPrivacyPolicy = openPrivacyPolicy;
window.goBack = goBack;
