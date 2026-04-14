function setup() { 
  createCanvas(400, 400); //產生一個400x400的畫布
  //產生一個全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  //background(220); //設定背景顏色為灰色. 數字越大越亮, 255為白色, 0為黑色
  //background(255, 0, 0); //設定背景顏色為紅色. RGB顏色模式, 分別為紅綠藍的數值, 範圍0-255
  //background(255, 0, 0, 127); //設定背景顏色為半透明紅色. RGBA顏色模式, 分別為紅綠藍的數值和透明度, 範圍0-255

  //var clr1 = color("#3a86ff"); //建立一個紅色的顏色物件
  //var clr2 = color("#ffcad4"); //建立一個綠色的顏色物件
  //var clr3 = color(0, 0, 255); //建立一個藍色的顏色物件
  //var clr = lerpColor(clr1, clr2, 0.5); //使用lerpColor函數在兩個顏色之間插值, 0.5表示取兩者的平均值
  //background(clr1); //設定背景顏色為clr1

  colorMode(HSB); //設定顏色模式為HSB, 分別為色相、飽和度、亮度, 範圍0-360, 0-100, 0-100
  var clr1 = color(0, 100, 100); //HSB顏色模式下的紅色
  var clr2 = color(120, 100, 100); //HSB顏色模式下的綠色
  var clr3 = color(240, 100, 100); //HSB顏色模式下的藍色
  clr1.setAlpha(127); //設定顏色的透明度為127, 範圍0-255
  background(clr1); //設定背景顏色為clr1

}

function draw() {
  //background(220);
  var cir2 = color(100+mouseX%260, 50, mouseY%100); //HSB顏色模式下的顏色, 色相根據滑鼠X位置變化, 飽和度固定為20, 亮度固定為10, 透明度根據滑鼠Y位置變化
  var cir3 = color(240, 100, 100); //HSB顏色模式下的藍色
  fill(cir2); //設定填充顏色為cir2
  stroke(cir3); //設定邊框顏色為cir3
  strokeWeight(2); //設定邊框粗細為2
  noStroke(); //取消邊框
  ellipse(mouseX, mouseY, 100, 100, 100); //在滑鼠位置畫一個寬200高200的橢圓, 第五個參數是旋轉角度, 預設為0
}
