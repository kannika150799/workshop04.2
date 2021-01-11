var wrapper = document.getElementById("myHtml");
let title = [
  "ที่ใส่เนยใบบัว มีฝา",
  "ที่เขี่ยบุหรี่สี่เหลี่ยม XL",
  "ผอบกลม เล็ก",
  "เตาน้ำมันหอม",
  "ชุดกาน้ำชาสำหรับ 3 ที่",
];
let detail = [
  "เครื่องใช้บนโต๊ะอาหาร",
  "อุปกรณ์ตกแต่งบ้าน",
  "อุปกรณ์ตกแต่งบ้าน",
  "อุปกรณ์ตกแต่งบ้าน",
  "ภาชนะชาและกาแฟ",
];
let price = ["350.00 ฿", "460.00 ฿", "230.00 ฿", "460.00 ฿", "1,210.00 ฿"];
let pic = [
  "./access/images/1.png",
  "./access/images/2.png",
  "./access/images/3.png",
  "./access/images/4.png",
  "./access/images/5.png",
];
var myHTML = "";
let x = "ที่ใส่เนยใบบัว มีฝา";

for (var i = 0; i < title.length; i++) {
  myHTML += `<div class="card"> 
             <img onClick="reply_click(${i})" class="image-card" src="${pic[i]}"/>
             <p id="title" class="name" onclick="myFunction()">${title[i]}</p> 
             <p id="detail" class="detail">${detail[i]}</p> 
             <p id="price" class="price">${price[i]}</p> </div>`;
}
wrapper.innerHTML = myHTML;

// popup
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function reply_click(id) {
  modal.style.display = "block";
  if (id == 0) {
    modalImg.src = pic[0];
  } else if (id == 1) {
    modalImg.src = pic[1];
  } else if (id == 2) {
    modalImg.src = pic[2];
  } else if (id == 3) {
    modalImg.src = pic[3];
  } else if (id == 4) {
    modalImg.src = pic[4];
  }
}
// New window
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

function myFunction() {
  window.open("https://siamceladon.com/", "_blank", "width=600,height=600");
}
