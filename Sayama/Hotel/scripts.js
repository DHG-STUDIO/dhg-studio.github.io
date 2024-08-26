// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');

    // 背景グラデーションの変更をデバウンスする関数
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    // マウスの動きに応じて背景グラデーションを変更
    const changeBackground = (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const startColor = `rgba(${Math.floor(106 + (149 - 106) * x)}, ${Math.floor(17 + (75 - 17) * y)}, ${Math.floor(203 + (252 - 203) * x)}, 1)`;
        const endColor = `rgba(${Math.floor(37 + (100 - 37) * x)}, ${Math.floor(117 + (252 - 117) * y)}, ${Math.floor(252 + (100 - 252) * x)}, 1)`;

        heroSection.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    };

    // 背景変更関数をデバウンスする
    const debouncedChangeBackground = debounce(changeBackground, 10);

    document.addEventListener('mousemove', debouncedChangeBackground);

    // 星をランダムに配置
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    heroSection.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
});
