// Вам нужно сделать конструктор сущности Студент.

// У Студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, это тоже свойство.
// И есть возможность получить возраст студента и его средний бал — это методы.

// Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов, изначально он не заполнен,
// но на 25 элементов. Это массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present()
// на очередное пустое место в массив записывается true, когда вызываем .absent() — записывается false. Предусмотрите
// какую нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей. Массив это свойство,
// present и absent — методы.

// Ну и последний метод: .summary(), он проверяет среднюю оценку, и среднее посещение
// (количествоПосещений/количествоЗанятий), и если средняя оценка больше 90
//  а среднее посещение больше 0.9, то метод summary, возвращает строку "Ути какой молодчинка!",
//  если одно из этих значений меньше, то — "Норм, но можно лучше", если оба ниже — "Редиска!".

// Ну и не забудьте после того как напишите замечательный конструктор, создать пару экземпляров(конкретных студентов) и подергать методы.


class Student {
  constructor(o){
    this.name = o.name,
    this.surname = o.surname,
    this.born = o.born,
    this.assessments =  o.assessments,
    this.attendance = o.attendance
    }

    present() {
      if (this.attendance.length < 25) {
        this.attendance.push(true);
      }
    }
    absent() {
      if (this.attendance.length < 25) {
        this.attendance.push(false);
      }
    }
    summary() {
      //Рассчитываем среднюю оценку
      let assessmentAverage = this.
                                assessments.
                                  reduce((prev, item) => prev += item, 0) /
                                    this.assessments.length;


      console.log(assessmentAverage);

      //Рассчитываем среднее посещение

      let attendanceAvarage = this.
                                attendance.
                                  reduce((prev, item) => prev += item, 0) /
                                    this.attendance.length;


      //Делаем выводы:
      if (assessmentAverage > 90 && attendanceAvarage > 0.9) {
        return ("Ути какой молодчинка!")
      }else if (assessmentAverage < 90 || attendanceAvarage < 0.9) {
        return ("Норм, но можно лучше")
      }else {
        return ("Редиска!")
      }

    }
}






let st1 = new Student({
	name: 'Artem',
	surname: 'Shvets',
	born: 1986,
	assessments: [80, 90, 95, 97, 90, 99],
  attendance: new Array()
});

st2 = new Student({
	name: 'Anastasiia',
	surname: 'Shvets',
	born: 2001,
	assessments: [85, 70, 89, 97, 88, 99],
  attendance: new Array()
});

for (var i = 0; i < 25; i++) {
  st1.present();
}

for (var i = 0; i < 25; i++) {
  st2.present();
}

console.log(st1.summary());
console.log(st2.summary());

// console.dir(st1);
