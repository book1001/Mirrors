
  let w = 450;
  let h = 1200;

  let img;
  let flag = "Default";

  let txt;
  let infoArtist;
  let infoYear;
  let infoTitle;
  let infoMedium;
  let fontTitle;

  let name;
  let shapes = {};
  // Note) 요건 딕셔너리 타입이라고 해서 아래처럼 데이터를 넣을수 있는 타입
  // Note) 이 타입은 '키': '벨류'로 형태로 쓰이고
  // Note) shape = {"Acrylic": [loadImage('data/07.svg'), loadImage('data/08.svg'), ...
  //                 "Oil": [loadImage('data/13.svg'), loadImage('data/03.svg'), ...]}
  let vScale = 20; // Note) module size

  function loadDefault() {
    shapes["Default"] = [];

    // Note) module: 0 value ~
    shapes["Default"].push(loadImage('data/fill_T.svg'));
    // shapes["Default"].push(loadImage('data/fill_T.svg'));

    shapes["Default"].push(loadImage('data/fill_K.svg'));
    // shapes["Default"].push(loadImage('data/fill_T.svg'));

    shapes["Default"].push(loadImage('data/fill_W.svg'));
    // shapes["Default"].push(loadImage('data/fill_T.svg'));
    // Note) module: ~ 255 value
  }


  function loadAcrylic() {
    let dataList = ['data/fill_K.svg', 'data/fill_K.svg'];
    let randomData = random(dataList); // select random word

    // 쓸때는 이렇게 특정 키로 접근하는 방식
    shapes["Acrylic"] = [];
    shapes["Acrylic"].push(loadImage('data/fill_K.svg'));
    // shapes["Acrylic"].push(loadImage('data/01.svg'));
    // shapes["Acrylic"].push(loadImage('data/13.svg'));
    // shapes["Acrylic"].push(loadImage('data/04.svg'));
    shapes["Acrylic"].push(loadImage('data/fill_W.svg'));
    // shapes["Acrylic"].push(loadImage(randomData));
  }

  function loadOil() {
    shapes["Oil"] = [];

    // Note) module: 0 value ~
    // shapes["Oil"].push(loadImage('data/fill_K.svg'));
    shapes["Oil"].push(loadImage('data/fill_T.svg'));

    shapes["Oil"].push(loadImage('data/oil_1.svg'));
    // shapes["Oil"].push(loadImage('data/fill_T.svg'));

    shapes["Oil"].push(loadImage('data/oil_2.svg'));
    // shapes["Oil"].push(loadImage('data/fill_T.svg'));

    shapes["Oil"].push(loadImage('data/pigment_1.svg'));
    // shapes["Oil"].push(loadImage('data/fill_T.svg'));

    // shapes["Oil"].push(loadImage('data/fill_T.svg'));
    // Note) module: ~ 255 value
  }

  // function loadOil() {
  //   shapes["Oil"] = [];
  //
  //   // Note) module: 0 value ~
  //   // shapes["Oil"].push(loadImage('data/fill_K.svg'));
  //   shapes["Oil"].push(loadImage('data/fill_T.svg'));
  //
  //   shapes["Oil"].push(loadImage('data/sycamore_4.svg'));
  //   // shapes["Oil"].push(loadImage('data/fill_T.svg'));
  //
  //   shapes["Oil"].push(loadImage('data/sycamore_4.svg'));
  //   // shapes["Oil"].push(loadImage('data/fill_T.svg'));
  //
  //   shapes["Oil"].push(loadImage('data/sycamore_3.svg'));
  //   // shapes["Oil"].push(loadImage('data/fill_T.svg'));
  //
  //   shapes["Oil"].push(loadImage('data/granite_4.svg'));
  //   // shapes["Oil"].push(loadImage('data/fill_T.svg'));
  //
  //   shapes["Oil"].push(loadImage('data/granite_5.svg'));
  //   // shapes["Oil"].push(loadImage('data/fill_T.svg'));
  //
  //   shapes["Oil"].push(loadImage('data/granite_6.svg'));
  //   // shapes["Oil"].push(loadImage('data/fill_T.svg'));
  //
  //   // shapes["Oil"].push(loadImage('data/fill_T.svg'));
  //   // Note) module: ~ 255 value
  // }

  function loadWalnut() {
    shapes["Walnut"] = [];

    // Note) module: 0 value ~
    shapes["Walnut"].push(loadImage('data/fill_K.svg'));
    // shapes["Default"].push(loadImage('data/fill_T.svg'));

    shapes["Walnut"].push(loadImage('data/oak_1.svg'));
    // shapes["Default"].push(loadImage('data/fill_T.svg'));

    shapes["Walnut"].push(loadImage('data/oak_2.svg'));
    // shapes["Default"].push(loadImage('data/fill_T.svg'));

    shapes["Walnut"].push(loadImage('data/oak_3.svg'));
    // shapes["Default"].push(loadImage('data/fill_T.svg'));

    shapes["Walnut"].push(loadImage('data/oak_1.svg'));
    // shapes["Default"].push(loadImage('data/fill_T.svg'));

    // shapes["Default"].push(loadImage('data/fill_T.svg'));
    // Note) module: ~ 255 value
  }

  function preload(){
    // Note) loadImage 함수는 프리로드 함수 내에서만 호출되어야함
    // img = loadImage('Shortcuts_photo/data.png');
    img = loadImage('Sample_photo/data.png');

    // txt = loadStrings('Shortcuts_text/data.txt');
    txt = loadStrings('Sample_text/data.txt');
    // fontTitle = loadFont('font/abd-regular.woff');

    loadDefault();
    loadAcrylic();
    loadOil();
    loadWalnut();
  }

  function initialize() {
    // Note) 플래그 설정은 프리 로드 함수에서 호출되면 X
    // Note) 이때는 아직 텍스트 파일을 제대로 못읽어왔기 때문
    // Note) initialize flag
    for (var i=0; i<txt.length; i++) {
      let line = txt[i];

      // infoArtist = txt[0];
      // infoYear = txt[1];
      // infoTitle = txt[2];
      // infoMedium = txt[3];


      // //"Metadata" 다음의 라인 or 문장을 가져옴
      // if(line == "Metadata" && i+1 < txt.length) {
      //   name = txt[i-1]+txt[i-2];
      //   // name = txt[i+1];
      // }
      // else if(line.startsWith("Metadata")) {
      //   name = line.substring(0, line.indexOf("Metadata")-1);
      //   // name = line.substring(8);
      // }

      if(line.includes('Default')) {
        flag = 'Default';
        break;
      }
      else if(line.includes('Acrylic')) {
        flag = 'Acrylic';
        break;
      }
      else if(line.includes('Oil')) {
        flag = 'Oil';
        break;
      }
      else if(line.includes('Walnut')) {
        flag = 'Walnut';
        break;
      }
    }
    // console.log(name);
  }

  function setup() {
    initialize();

    var canvas = createCanvas(windowWidth, windowHeight);
     // var x = (windowWidth - width) / 2;
     // var y = (windowHeight - height) / 2;
     // canvas.position(x, y);

     // canvas.parent('canvas-parent');
     // canvas.style('z-index','-1');

     img.resize(width / vScale, height / vScale);
     img.loadPixels();

     background(255, 255, 0);

     for(x = 0; x < img.width * vScale; x = x + 1){
        for(y = 0; y < img.height * vScale; y = y + 1){
           var titleWidth = w / img.width; //Note) image size result (make it same as canvas size)
           var titleHeight = h / img.height;
           var posX = titleWidth * x;
           var posY = titleHeight * y;

           var c = img.get(min(x, img.width - 1), y);

           var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);
           var greyscaleR = round(red(c) * 1);
           var greyscaleG = round(green(c) * 1);
           // var greyscaleB = round(blue(c) * 1);

        if(flag != undefined && shapes[flag] != undefined) {
          var shape = shapes[flag];

          var gradientToIndex = round(map(greyscale, 0, 255, 0, shape.length - 1));
          var gradientToIndexR = round(map(greyscaleR, 0, 255, 0, shape.length - 1));
          var gradientToIndexG = round(map(greyscaleG, 0, 255, 0, shape.length - 1));
          // var gradientToIndexB = round(map(greyscaleB, 0, 255, 0, shape.length - 1));

          // let r = random(0, 80);

          // image(shape[gradientToIndexG], vScale*x, vScale*y, vScale, vScale);
          // image(shape[gradientToIndexR], posX, posY, vScale, vScale);
          // image(shape[gradientToIndex], posX, posY, r, vScale);
          // blendMode(MULTIPLY);
          // image(shape[gradientToIndexR], posX, posY, vScale, vScale);

          // image(shape[gradientToIndexG], posX, posY, vScale, vScale);
           // blendMode(MULTIPLY);
          // image(shape[gradientToIndexR], posX * 2, vScale*y, vScale, vScale);
          image(shape[gradientToIndexR], (vScale+2)*x, vScale*y, vScale, vScale);
          image(shape[gradientToIndexG], vScale*x, vScale*y, vScale, vScale);
          // strokeWeight(0);
          // fill('#000000');

          // ellipse(x * vScale + vScale / 2, y * vScale + vScale / 2, vScale / 255 * greyscale, vScale / 255 * greyscale);
          // ellipse(posX, posY, r, r);

          // textFont(fontTitle);
          // textSize(32);
          // text(name, 10, 30);
          // text(infoArtist, 10, 30);
          // text(infoYear, 10, 30);
          // text(infoTitle, 10, 30);
          // text(infoMedium, 10, 30);
        }
      }
     }
     // saveCanvas('output.png');
  }

  // function mouseClicked() {
  //   save('portrait.png');
  //   return false;
  // }
