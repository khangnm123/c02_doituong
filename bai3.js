console.log("Bài 3");

let laptop ={
    tenmay: "TUF Gaming",
    Namsanxuat: "2003",
    cauhinh: {
        RAM : 8 ,
        HDD:250,
        Kichthuoc: {
            dai : 1920,
            rong: 1080
        }
    }
};
laptop.cauhinh.RAM=16;
laptop.cauhinh.HDD=500;

function xuat2(){
    console.log("Ten may: " , laptop.tenmay)
    console.log("Nam san xuat: " , laptop.Namsanxuat)
    console.log("Cau Hinh: " , laptop.cauhinh)

    console.log("RAM: " , laptop.cauhinh.RAM)
    console.log("HDD: " , laptop.cauhinh.HDD)
    console.log("Kich Thuoc: " , laptop.cauhinh.Kichthuoc)

    console.log("Dai: " , laptop.cauhinh.Kichthuoc.dai)
    console.log("Rong: " , laptop.cauhinh.Kichthuoc.rong)

}
xuat2();

function nammay(){
    return 2100 - laptop.Namsanxuat;
}

console.log("Tuổi đời laptop: " , nammay());

function tinhdiem(){
    return (3*laptop.cauhinh.RAM + 2*laptop.cauhinh.HDD)/5;
}
console.log("Tinh diem: " , tinhdiem());