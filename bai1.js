let user ={
    ten : "Minh khang",
    pass: "123456",
    email: "khangpro2536@gmail.com",
    phone: "01234567899"
    
 
};
user.pass = " 1234567";
function xuat(){
        console.log("Tên: " , user.ten)
        console.log("Pass: " , user.pass)
        console.log("Email: " , user.email)
        console.log("Phone: " , user.phone)
        
    }
xuat();

let s1 = parseInt("0");
let s2 = parseInt(user.phone[1]);
let s3 = parseInt(user.phone[2]);
let s4 = parseInt(user.phone[3]);
let s5 = parseInt(user.phone[4]);
let s6 = parseInt(user.phone[5]);
let s7 = parseInt(user.phone[6]);
let s8 = parseInt(user.phone[7]);
let s9 = parseInt(user.phone[8]);
let s10 = parseInt(user.phone[9]);
let s11 = parseInt(user.phone[10]);
let tong = 0;
 tong = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 +s11;
console.log("Tong: ",tong);
console.log("Nút: ",tong%10)

