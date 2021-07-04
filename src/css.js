const string = `.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}
.skin{
  background: #ffe600;
  min-height: 50vh;
  position: relative;
}
.triangle{
  position: relative;
  left: 50%;
  top: 150px;
  margin-left: -10px; 
  width:0;
  height:0;
  border-top: 9px solid black;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
}
.semicircle{
  content: '';
  display: block;
  width: 22px;
  height: 5px;
  background: black;
  position: absolute;
  top: -14px;
  left:-11px;
  border-top-right-radius: 11px 5px;   
  border-top-left-radius: 11px 5px;
  box-shadow: 0 -.5px 1px black;
}
@keyframes wave{
  0%{
    transform: rotate(0deg);    
  }
  33%{
    transform: rotate(5deg);    
  }
  66%{
    transform: rotate(-5deg);    
  }
  100%{
    transform: rotate(0deg);    
  }
}
.triangle:hover{
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}
.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before{
  content: '';
  display: block;
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 4px;
  top: 2px;
}
.eye.left{
  transform: translateX(-100px);
}
.eye.right{
  transform: translateX(100px);
}
.mouth{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 190px;
  margin-left: -100px;
}
.mouth .up{
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip{
  border: 3px solid black;
  height: 30px;
  width: 100px;
  background: #ffe600;
  border-top-color: transparent;
  border-right-color: transparent;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
.mouth .up .lip.left{
  border-radius: 0 0 0 27px;
  transform: rotate(-15deg) translateX(-51px);
}
.mouth .up .lip.right{
  border-radius: 0 0 50px 0px;
  transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
  content: '';
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}
.mouth .up .lip.left::before{
  right: -6px;
}
.mouth .up .lip.right::before{
  left: -6px;
}
.mouth .down{
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}
.mouth .down .yuan1{
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}
.cheek{
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}
.cheek.left{
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}
.cheek.right{
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}`
export default string;