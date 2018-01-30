'use strict';

(function() {
  var NUMBER_OF_ROBOTS = 6;
  var ROBOT_NAMES = ['Оптимус Прайм', 'Т-1000', 'Бендер Сгибатель Родригес', 'Робокоп', 'R2-D2', 'TARS', 'ВАЛЛ-И'];
  var ROBOT_TASKS = ['командовать автоботами', 'спасти Джона Коннора', 'сгибать металлические балки', 'cлужить обществу, защищать невиновных, соблюдать закон', 'ремонтировать технику', 'помогать людям', 'сбор и прессовка мусора'];
  var ROBOT_STATUS = ['ждёт отправки', 'готов к самовывозу', 'готов к работе', 'в пути'];
  var ROBOT_SOMETHING = [];

  function createRobot() {
    return {
      name: getRandomEl(ROBOT_NAMES),
      task: getRandomEl(ROBOT_TASKS),
      status: getRandomEl(ROBOT_STATUS)
    }
  }

  function checkRobot(robot, robots) {
    for (var i = 0; i < robots.length; i++) {
      for (var j = 0; j < robots[i].length + 1; j++) {
        if (robot[j] === robots[i][j]) {
          console.log('У робота что-то совпало');
        } else {
          console.log('всё в порядке');
        }
      }
    }
  }

  window.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.getRandomEl = function(array) {
    return array[getRandomInt(array.length - array.length, array.length - 1)];
  };

  window.getRobots = function(numberOfRobots) {
    var newRobot;
    var robots = [];

    for (var i = 0; i < numberOfRobots; i++) {
      newRobot = createRobot();
      checkRobot(newRobot, robots);
      robots.push(createRobot());
    }

    return robots;
  }

  console.log(getRobots(NUMBER_OF_ROBOTS));
})();