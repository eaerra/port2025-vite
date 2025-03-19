import gsap from "gsap";

export function site() {

    gsap.to(".square", {
        rotation: -90,    // 도 회전
        duration: 1,      // 초 동안
        repeat: -1,       // 무한 반복
        yoyo: true,      // 애니메이션이 끝날 때마다 반대로 돌아가도록
        ease: "linear"    // 일정한 속도로 회전
    });
    gsap.to(".triangle", {
      rotation: 360,    // 도 회전
      duration: 5,      // 초 동안
      repeat: -1,       // 무한 반복
      yoyo: true,      // 애니메이션이 끝날 때마다 반대로 돌아가도록
      ease: "linear"    // 일정한 속도로 회전
    });
    
}