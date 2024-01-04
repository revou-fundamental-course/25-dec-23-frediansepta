function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  function validateInput(inputId, errorId) {
    let inputValue = document.getElementById(inputId).value;
    let errorElement = document.getElementById(errorId);
  
    if (inputValue.trim() === "" || !isNumeric(inputValue)) {
      errorElement.textContent = "(!) " + inputId + " must be a number";
      return false;
    } else {
      errorElement.textContent = "";
    }
  }
  
  function getArea() {
    validateInput("base-input", "base-error");
    validateInput("height-input", "height-error");
  
    let baseValue = document.getElementById("base-input").value;
    let heightValue = document.getElementById("height-input").value;
    let baseNum = document.getElementById("base-number");
    let heightNum = document.getElementById("height-number");
    let resultNum = document.getElementById("result-number");
  
    baseValue = baseValue < 0 ? (baseValue *= -1) : baseValue;
    heightValue = heightValue < 0 ? (heightValue *= -1) : heightValue;
  
    baseNum.innerText = baseValue;
    heightNum.innerText = heightValue;
    resultNum.innerText = (1 / 2) * baseValue * heightValue;
  }
  
  function getCircum() {
    validateInput("a-input", "a-error");
    validateInput("b-input", "b-error");
    validateInput("c-input", "c-error");
  
    let aValue = document.getElementById("a-input").value;
    let bValue = document.getElementById("b-input").value;
    let cValue = document.getElementById("c-input").value;
    let aNum = document.getElementById("a-number");
    let bNum = document.getElementById("b-number");
    let cNum = document.getElementById("c-number");
    let resultNum = document.getElementById("result-number");
  
    aValue = aValue < 0 ? (aValue *= -1) : aValue;
    bValue = bValue < 0 ? (bValue *= -1) : bValue;
    cValue = cValue < 0 ? (cValue *= -1) : cValue;
  
    aNum.innerText = aValue;
    bNum.innerText = bValue;
    cNum.innerText = cValue;
    resultNum.innerText = parseInt(aValue) + parseInt(bValue) + parseInt(cValue);
  }
  
  function reset() {
    let inputs = document.getElementsByTagName("input");
    let numbers = document.getElementsByClassName("number");
    let errors = document.getElementsByClassName("error-message");
  
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = 0;
    }
  
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].innerText = 0;
    }
  
    for (let i = 0; i < errors.length; i++) {
      errors[i].innerText = "";
    }
  }
  
  function openCircum() {
    main.innerHTML = `<div class="container left">
    <!-- TRIANGLE FIGURE -->
    <img
      src="Assets/segitiga.png"
      alt="triangle figure"
      class="triangle-figure"
    />
  
    <!-- NAVIGATION -->
    <nav class="navigation-group">
      <button id="area-button" onclick="openArea()" class="nav-button">Luas</button>
      <button id="circum-button" onclick="openCircum()" class="nav-button active" >Keliling</button>
    </nav>
  
    <!-- FORMULA -->
    <div class="formula-group">
      <h2 class="title">RUMUS</h2>
      <h3 class="subtitle">Keliling Segitiga</h3>
      <p class="formula">K = a &plus; b &plus; c</p>
      <div class="formula-note">
        <p>Keterangan :</p>
        <p>K = <i>Keliling</i></p>
        <p>a, b, and c = <i>Sisi</i></p>
      </div>
    </div>
  </div>
  
  <div class="container right">
    <!-- CALC -->
    <div class="calc-group desktop-right mobile-bottom">
      <!-- TITLE - CALC -->
      <h2 class="title">Hitung Keliling</h2>
  
      <!-- SUBTITLE - CALC -->
      <h3 class="subtitle">Masukkan bilangan a, b, c</h3>
  
      <!-- FORM - CALC -->
      <div class="input-fields">
        <!-- INPUT A -->
        <div class="input-group">
          <div class="label-input">
            <label for="a-input">a</label>
            <input type="number" id="a-input" name="a" value="0" min="0" oninput="validateInput('a-input', 'a-error');" />
          </div>
          <span id="a-error" class="error-message"></span>
        </div>
  
        <!-- INPUT B -->
        <div class="input-group">
          <div class="label-input">
            <label for="b-input">b</label>
            <input type="number" id="b-input" name="b" value="0" min="0" oninput="validateInput('b-input', 'b-error');" />
          </div>
          <span id="b-error" class="error-message"></span>
        </div>
  
        <!-- INPUT C -->
        <div class="input-group">
          <div class="label-input">
            <label for="c-input">c</label>
            <input type="number" id="c-input" name="c" value="0" min="0" oninput="validateInput('c-input', 'c-error');" />
          </div>
          <span id="c-error" class="error-message"></span>
        </div>
      </div>
  
      <!-- COUNT BUTTON -->
      <button class="count-button" onclick="getCircum()">Hitung</button>
  
      <!-- CALC PROCESS -->
      <div class="calc-process">
        <p>K = a &plus; b &plus; c</p>
        <p>
          K =
          <span id="a-number" class="number">0</span> &plus;
          <span id="b-number" class="number">0</span> &plus;
          <span id="c-number" class="number">0</span>
        </p>
      </div>
  
      <!-- SUBTITLE - CALC -->
      <p class="calc-result">
        <strong
          >KELILING = <span id="result-number" class="number">0</span></strong
        >
      </p>
  
      <!-- RESET BUTTON -->
      <button class="reset-button" onclick="reset()">Reset</button>
    </div>
  </div>`;
  }
  
  function openArea() {
    main.innerHTML = `<div class="container left">
    <!-- TRIANGLE FIGURE -->
    <img
      src="Assets/segitiga.png"
      alt="triangle figure"
      class="triangle-figure"
    />
  
    <!-- NAVIGATION -->
    <nav class="navigation-group">
      <button id="area-button" onclick="openArea()" class="nav-button active">Luas</button>
      <button id="circum-button" onclick="openCircum()" class="nav-button" >Keliling</button>
    </nav>
  
    <!-- FORMULA -->
    <div class="formula-group">
      <h2 class="title">Rumus</h2>
      <h3 class="subtitle">Luas Segitiga</h3>
      <p class="formula">L = 1/2 &#215; a &#215; t</p>
      <div class="formula-note">
        <p>Keterangan :</p>
        <p>L = <i>area</i></p>
        <p>a = <i>base</i></p>
        <p>t = <i>height</i></p>
      </div>
    </div>
  </div>
  
  <div class="container right">
    <!-- CALC -->
    <div class="calc-group desktop-right mobile-bottom">
      <!-- TITLE - CALC -->
      <h2 class="title">Hitung Luas</h2>
  
      <!-- SUBTITLE - CALC -->
      <h3 class="subtitle">Masukkan Bilangan untuk alas dan tinggi</h3>
  
      <!-- FORM - CALC -->
      <div class="input-fields">
        <!-- INPUT BASE -->
        <div class="input-group">
          <label for="base">Alas</label>
          <input
            type="number"
            id="base-input"
            name="base"
            value="0"
            min="0"
          />
        </div>
  
        <!-- INPUT HEIGHT -->
        <div class="input-group">
          <label for="height">Tinggi</label>
          <input
            type="number"
            id="height-input"
            name="height"
            value="0"
            min="0"
          />
        </div>
      </div>
  
      <!-- COUNT BUTTON -->
      <button class="count-button" onclick="getArea()">Hasil</button>
  
      <!-- CALC PROCESS -->
      <div class="calc-process">
        <p>L = 1/2 &#215; b &#215; h</p>
        <p>
          L = 1/2 &#215;
          <span id="base-number" class="number">0</span> &#215;
          <span id="height-number" class="number">0</span>
        </p>
      </div>
  
      <!-- SUBTITLE - CALC -->
      <p class="calc-result">
        <strong
          >LUAS = <span id="result-number" class="number">0</span></strong
        >
      </p>
  
      <!-- RESET BUTTON -->
      <button class="reset-button" onclick="reset()">Reset</button>
    </div>
  </div>`;
  }