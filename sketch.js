let rotationAngle = 0; // 定義旋轉角度

function setup() {
  createCanvas(windowWidth, windowHeight); // 使用 2D 渲染
  textAlign(CENTER, CENTER); // 將文字對齊到畫布中央
  textSize(100); // 設定字體大小為 100
  noStroke(); // 不描邊
}

function draw() {
  background(0); // 設定背景為黑色

  // 繪製網格圖形
  drawGrid();

  // 更新旋轉角度
  rotationAngle += 0.01; // 每幀增加角度

  // 顯示紅色文字
  push();
  translate(width / 2, height / 2); // 將原點移到畫布中央
  rotate(rotationAngle); // 旋轉文字
  fill(255, 0, 0); // 設定字體顏色為紅色
  text("TKUET", 0, 0); // 在畫布正中央顯示文字
  pop();
}

// 繪製固定的網格圖形
function drawGrid() {
  noFill();
  let cols = 20;
  let rows = 20;
  let xStep = width / cols;
  let yStep = height / rows;
  let size = map(mouseX, 0, width, 20, 100); // 根據滑鼠 X 位置變化的大小
  let smallCircleSize = map(mouseY, 0, height, 10, 50); // 根據滑鼠 Y 位置變化的大小

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let xOffset = j * xStep;
      let yOffset = i * yStep;

      stroke(0, 255, 0); // 設定綠色邊框
      rect(xOffset, yOffset, xStep, yStep);

      stroke(0, 0, 255); // 設定藍色邊框
      ellipse(xOffset + xStep / 2, yOffset + yStep / 2, size, size); // 中間圓形根據滑鼠位置變化
      ellipse(xOffset + xStep, yOffset + yStep, smallCircleSize, smallCircleSize); // 右下角小圓形
    }
  }
}
