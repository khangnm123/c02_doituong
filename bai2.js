
console.log("Bài 2");

let player ={
    ten : "Minh khang",
    soao: "21",
    kinang: {
        sut: 20,
        chuyen:25,
        danhdau: 30
    }
};
player.kinang.chuyen = 30;
player.kinang.sut = 100;
player.kinang.danhdau = 60;

function xuat1(){
    console.log("Tên: " , player.ten)
    console.log("so ao: " , player.soao)
    console.log("Ki nang: " , player.kinang)

    console.log("Sút: " , player.kinang.sut)
    console.log("Chuyền: " , player.kinang.chuyen)
    console.log("Danh dau: " , player.kinang.danhdau)
} 
xuat1();

function tinhtrungbinh(){
    return (player.kinang.chuyen+player.kinang.sut+player.kinang.danhdau)/3;
}
console.log("Tính Trung Bình: " , tinhtrungbinh());
// player.kinang.soao = 20;

function kiemtraao(){
    if (player.soao.length <= 2) {
         return "hop le";
         }
         return "khong hop le";
}
console.log(kiemtraao());

