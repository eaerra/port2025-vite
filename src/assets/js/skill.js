import gsap from "gsap";

export function skill() {
    gsap.to(".skill_deco1", {
        rotation: 360,    // 360도 회전
        duration: 9,      // 9초 동안
        repeat: -1,       // 무한 반복
        ease: "linear"    // 일정한 속도로 회전
      });
    gsap.to(".skill_deco2", {
      rotation: 360,    // 360도 회전
      duration: 10,      // 10초 동안
      repeat: -1,       // 무한 반복
      ease: "linear"    // 일정한 속도로 회전
    });
}