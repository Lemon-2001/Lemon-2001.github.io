// 宣告每個數字按鈕、小數點、 AC 、 backspace 鍵、顯示結果區。
// 宣告每個數字按鈕
const oneBtn = document.getElementById("calc-one");
const twoBtn = document.getElementById("calc-two");
const threeBtn = document.getElementById("calc-three");
const fourBtn = document.getElementById("calc-four");
const fiveBtn = document.getElementById("calc-five");
const sixBtn = document.getElementById("calc-six");
const sevenBtn = document.getElementById("calc-seven");
const eightBtn = document.getElementById("calc-eight");
const nineBtn = document.getElementById("calc-nine");
const zeroBtn = document.getElementById("calc-zero");
// 宣告 小數點、 AC 、 backspace 鍵、顯示結果區。
const decimalBtn = document.getElementById("calc-decimal"); 
const clearBtn = document.getElementById("calc-clear"); 
const backspaceBtn = document.getElementById("calc-backspace"); 
const displayValElement = document.getElementById("calc-display-val"); 

// 藉由宣告，分別放進名為 calcNumBtns 與 calcOperatorBtns 的陣列中。等到有需要時再取出。
let calcNumBtns = document.getElementsByClassName("calc-btn-num"); 
let calcOperatorBtns = document.getElementsByClassName("calc-btn-operator"); 

// 預設上方欄顯示為0，宣告變數讓數字打完後可以放在該放的位置儲存
let displayVal = "0"; //顯示結果區的變數
let pendingVal = "";  //變數，預設為空字串
let evalStringArray = []; //運算區變數，預設為空陣列

let updateDisplayVal = (clickObj) =>{ 
    let btnText = clickObj.target.innerHTML; 
    if(displayVal === "0"){
        displayVal = '';
    }
    
    displayVal += btnText;
    displayValElement.innerHTML = displayVal;
}
// 加減乘除
let performOperation = (clickObj) => {
    let operator = clickObj.target.innerHTML; 
    switch(operator){
        case '+':
            pendingVal = displayVal; 
            displayVal = '0'; 
            displayValElement.innerText = displayVal; 
            evalStringArray.push(pendingVal); 
            evalStringArray.push('+'); 
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;  
        case 'X':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '/':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;  
        case '%':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('%');
            break; 
        case '=':
            evalStringArray.push(displayVal); 
            let evaluation = eval(evalStringArray.join(' ')); 
            displayVal = evaluation + ''; 
            displayValElement.innerText = displayVal; 
            evalStringArray = []; 
            break; 
        default:
            break;
    }
}
//  讓每個按鈕被監聽
for(let i=0; i < calcNumBtns.length; i++){ 
    // 設定 i 一開始為 0 ，當 i 小於 calcNumBtns.length 時，就讓 calcNumBtns[i] 能夠在點擊時，執行 updateDisplayVal 的函式。
    // 那 calcNumBtns.length 會是多少呢？因為上面有宣告 calcNumBtns 就是所有 class 名稱為 calc-btn-num 的， html 在數字的地方都有設這個 class ，因此 0-9 共 10 個數字，都會執行監聽。
    calcNumBtns[i].addEventListener("click",updateDisplayVal,false) 
}
// 另外命名為 performOperation 
for(let i=0; i < calcOperatorBtns.length; i++){ 
    calcOperatorBtns[i].addEventListener("click",performOperation,false)
}
// 讓clearBtn有作用--完成 C 鍵功能
clearBtn.onclick = () => {
    displayVal = "0"; 
    pendingVal = undefined; 
    evalStringArray = []; 
    displayValElement.innerHTML = displayVal; 
}
// 讓backspace btn有作用
backspaceBtn.onclick = () =>{
    let lengthOfDisplayVal = displayVal.length; 
    displayVal = displayVal.slice(0, lengthOfDisplayVal -1); 
    
    if(displayVal === ""){
        displayVal = "0";
    }

    displayValElement.innerHTML = displayVal;  
}
// 讓小數點有自己的函式可以執行
decimalBtn.onclick = () => {
    if(!displayVal.includes('.')){ 
        displayVal +="."; 
    }
    displayValElement.innerText = displayVal; 
}