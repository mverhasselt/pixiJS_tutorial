import { Application } from "pixi.js";
// IIFE
(async () => {

    const app = new Application()

    await app.init({
        //width: window.innerWidth,
        //height: window.innerHeight,
        resizeTo: window,
        backgroundColor: 0x1099bb,
    })
    
    app.canvas.style.position = "absolute"
    document.body.appendChild(app.canvas)
})()

