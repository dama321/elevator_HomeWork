//! Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

//////////////////////////////////////////////////////////////////////////////
// ! Реализуйте лифт, где есть кнопки от 1 до 16. По нажатию кнопки ваш лифт должен плавно подниматься на заданный этаж.

// const btn = document.querySelectorAll(".btn");
// btn1.forEach((item) => {
//   item.addEventListener("click", (e) => btn1(e.target.value));
// });
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");
let btn15 = document.getElementById("btn15");
let btn16 = document.getElementById("btn16");

let img = document.getElementById("door");

const elevator = {
  currentFloor: 1, // текущий этаж
  minFloor: 1, //минЭтаж
  maxFloor: 16, //макЭтаж
  printFloor: function () {
    // этаж печати
    console.log(this.currentFloor);
    return this.currentFloor;
  },
  downOneFloor() {
    // перемещает на один этаж вниз
    if (this.currentFloor > this.minFloor) {
      this.currentFloor--;
    } else {
      console.log("Error!");
      return "Error!";
    }
  },
  upOneFloor() {
    // перемещает на один этаж вверх
    if (this.currentFloor < this.maxFloor) {
      this.currentFloor++;
    } else {
      console.log("Error!");
      return "Error!";
    }
  },
  toFloor(choosedFloor) {
    // принимает целое числовое (выбранный этаж)
    if (choosedFloor < 1 || choosedFloor > 16) return "Error!";
    while (this.currentFloor !== choosedFloor) {
      if (choosedFloor > this.currentFloor) {
        if (this.currentFloor === this.maxFloor) break;
        this.upOneFloor();
      } else {
        if (this.currentFloor === this.minFloor) break;
        this.downOneFloor();
      }
      this.printFloor();
    }
  },
};
btn3.addEventListener("click", () => {
  elevator.toFloor(3);
  img.style.top = `${680 - (elevator.currentFloor - 1) * 45}px`;
});
btn10.addEventListener("click", () => {
  elevator.toFloor(10);
  img.style.top = `${680 - (elevator.currentFloor - 1) * 45}px`;
});
btn1.addEventListener("click", () => {
  elevator.toFloor(1);
  img.style.top = `${680 - (elevator.currentFloor - 1) * 45}px`;
});
btn5.addEventListener("click", () => {
  elevator.toFloor(5);
  img.style.top = `${680 - (elevator.currentFloor - 1) * 45}px`;
});
