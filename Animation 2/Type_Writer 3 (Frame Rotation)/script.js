/*
https://github.com/daybrush/scenejs
*/
const scene = new Scene({
  ".container": {} },
{
  selector: true });


const item = scene.getItem(".container");


function move(startTime, endTime, left, top, rotate, scale) {
  item.set({
    [`${startTime}, ${endTime}`]: Scene.kineticFrame({
      left: `${left}px`,
      top: `${top}px` }).
    set({
      transform: {
        rotate: `${rotate}deg`,
        scale } }) });



}



move(0, 0, 90, 115, 0, 5);
move(1, 1, 90, 115, 0, 2);
move(2, 3, 0, 115, 0, 1);
move(4, 4.5, -100, 0, -90, 2);
move(5.5, 6, -52, -18, -90, 1.6);
move(7, 7.5, 30, 45, 0, 2);
move(8.5, 9, 10, 30, 0, 3);
move(10, 10.5, 28, 0, 0, 2.2);
move(11.5, 12, 50, -35, 0, 1.65);
move(13, 13.5, 35, -70, 0, 2);
move(14.5, 18, 0, 0, 0, 1);


/*
typing
https://github.com/daybrush/scenejs-effects
*/
scene.set({
  "[data-typing='i']": Scene.typing({ text: "I ", duration: 1 }),
  "[data-typing='frontend']": {
    1: Scene.typing({ text: "'m Front-End", duration: 1 }) },

  "[data-typing='engineer']": {
    1.5: Scene.typing({ text: "Engineer", duration: 1 }) },

  "[data-typing='with']": {
    3.3: Scene.typing({ text: "with", duration: 0.5 }) },

  "[data-typing='javascript']": {
    4.5: Scene.typing({ text: "JavaScript", duration: 1 }) },

  "[data-typing='typescript']": {
    6: Scene.typing({ text: "TypeScript", duration: 1 }) },

  "[data-typing='css']": {
    7.5: Scene.typing({ text: "CSS", duration: 0.7 }) },

  "[data-typing='nodejs']": {
    9: Scene.typing({ text: "Node.js", duration: 1 }) },

  "[data-typing='animation']": {
    10.5: Scene.typing({ text: "Animation", duration: 1 }) },

  "[data-typing='scenejs']": {
    12: Scene.typing({ text: "Scene.js", duration: 1 }) } });



scene.setPlaySpeed(1);
scene.setEasing("ease-in-out");
scene.setIterationCount("infinite");
scene.play();


// new Timeline(scene, document.body)