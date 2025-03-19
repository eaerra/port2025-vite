import gsap from "gsap";

export function intro() {
    
    gsap.to('.intro_title h1', {
        opacity: 1,               // opacity를 1로 변경
        transform: 'translateY(0)', // translateY를 0으로 설정하여 자연스럽게 내려옴
        duration: 2,               // 애니메이션 지속 시간 (2초)
        delay: 0.5,                // 애니메이션 시작 지연 시간 (0.5초 후 시작)
        ease: 'power2.out'         // easing 효과 (부드럽게 끝날 수 있도록)
    });

    gsap.to('.intro_title p', {
        opacity: 1,               // opacity를 1로 변경
        transform: 'translateY(0)', // translateY를 0으로 설정하여 자연스럽게 내려옴
        duration: 2,               // 애니메이션 지속 시간 (2초)
        delay: 0.5,                // 애니메이션 시작 지연 시간 (0.5초 후 시작)
        ease: 'power2.out'         // easing 효과 (부드럽게 끝날 수 있도록)
    });
}