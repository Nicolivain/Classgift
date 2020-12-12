
class Pendulum{
    k = 0.5
    constructor(T, cursor){
        this.T = T;
        this.angle = 0.15;
        this.angle_d = 0;
        this.angle_dd = 0;
        this.cursor = cursor
        this.dt = cursor.dt/1000
    }
    move(){
        let [ax, ay] = this.cursor.a
        this.angle_dd = (ay*500 - 4*Math.PI*Math.PI/(this.T*this.T))*Math.sin(this.angle) - 500*ax*Math.cos(this.angle) - this.k*this.angle_d
        this.angle_d += this.angle_dd*this.dt
        this.angle += this.angle_d*this.dt
    }
    draw(scrolled){
        let pendulum = document.querySelector('#pendulum')
        let x = this.cursor.X[0]
        let y = this.cursor.X[1] - scrolled
        pendulum.style.transform = `translate(0,-2px) translate(${x}px, ${y}px) translate(-50%,-50%) rotate(${this.angle}rad) translate(0,50%) `;
        let imgwidth =  $('#pendulum img').width()
        document.querySelector('#pendulum .halo').style.transform = `translate(-50%,-50%) translate(${imgwidth/2}px,${2*$(pendulum).height()/3}px)`;
        
    }
}
class Cursor{
    constructor(dt, position, speed=[0,0], acc=[0,0]){
        this.X = position
        this.v = speed
        this.a = acc
        this.dt= dt
    }
    move(new_pos){
        let v = new_pos.map((num, idx) => (num - this.X[idx])/this.dt)
        this.a = v.map((num, idx) => (num - this.v[idx])/this.dt);
        this.v = v
        this.X = [...new_pos]
    }
}

$(document).ready(function(){
    let pos = [0,0];
    let dt =30
    let cur = new Cursor(dt, [...pos]);
    let pendule = new Pendulum(1, cur)
    let scrolled = 0;
    $('head').append('<link rel="stylesheet" type="text/css" href="pendulum.css">')
    document.onmousemove = function(e){
        pos[0] = e.pageX - window.scrollX;
        pos[1] = e.pageY - window.scrollY;
        pendule.draw(scrolled)
    };
    setInterval(function(){
        cur.move(pos)
        pendule.move()
        pendule.draw(scrolled)
    },dt)
})


function getCursorXY(e) {
}
