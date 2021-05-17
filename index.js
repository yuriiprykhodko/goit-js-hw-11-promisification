//1.Задание
const delay = (ms) => {
  const a = Math.random() > 0.5;
  const promise = new Promise((resolve) =>
    setTimeout(() => {
      if (a) {
        resolve(ms);
      }
    }, ms)
  );
  return promise;
};

//const logger = (time) => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
//delay(2000).then(logger); // Resolved after 2000ms
//delay(1000).then(logger); // Resolved after 1000ms
//delay(1500).then(logger); // Resolved after 1500ms

//2.Задание
const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const DELAY = 1000;
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const updatedUsers = allUsers.map((user) => {
        if (user.name === userName) {
          resolve({ ...user, active: !user.active });
        }
      });
    }, DELAY);
  });
  return promise;
};

const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
//toggleUserState(users, "Mango", logger);
//toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */
//toggleUserState(users, "Mango").then(logger);
//toggleUserState(users, "Lux").then(logger);

//3.Задание
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve([transaction.id, delay]);
      } else {
        rejected(transaction.id);
      }
    }, delay);
  });
  return promise;
};

const logSuccess = ([id, time]) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
//makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
//makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
//makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
//makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

//makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

//makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

//makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
