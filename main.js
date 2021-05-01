console.clear();

// let counter = {score: 0};
// const scoreDom = document.querySelector('.score');
// const tween = gsap.to(counter, {
//   duration: 10,
//   score: 100,
//   onUpdate() {
//     scoreDom.innerHTML = "time : " + counter.score.toFixed(2);
//   },
// });
const svg = document.querySelector('#queen')
svg.addEventListener('load',()=>{
    const svgDoc = svg.contentDocument;
    const leftHand = svgDoc.querySelector('#圖層_2 > g > g >:nth-child(1)');
    const rightHand = svgDoc.querySelector('#圖層_2 > g > g >:nth-child(2)');
    // console.log(leftHand)
    const tl = gsap.timeline()
    tl
    .to(leftHand,{
        duration: 1,
        y: -10,
        x:100
    })
    .to(rightHand,{
        duration: 1,
        rotate:410,
    })
})