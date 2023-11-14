
let thunhap = + prompt("thu nhập bao nhiêu ");
// canhan ;
if(thunhap <=5) {
    canhan=(thunhap * 5/100) ;
}else if ( 5<thunhap<10) {
    canhan=(thunhap * (10/100))-0.25 ;
}else if (10<thunhap<18 ) {
    canhan=(thunhap * (15/100)) -0.75 ;
}else if (18<thunhap<32) {
    canhan=(thunhap * (20/100)) - 1.65;
}else if (32<thunhap<52) {
    canhan=(thunhap *(25/100)) -3.25;
}else if (52<thunhap<80) {
    canhan=(thunhap *(30/100)) -5.85;
}else {
    canhan = (thunhap * (35 / 100)) - 9.85;
}
document.getElementById("abc").innerHTML= canhan ;