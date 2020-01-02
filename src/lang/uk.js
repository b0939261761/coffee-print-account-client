export default {
  // Table
  editRecord: 'Редагувати запис',
  removeRecord: 'Видалити запис',
  previousPage: 'Попередня сторінка',
  nextPage: 'Наступна сторінка',

  // Btn
  back: 'Назад',
  add: 'Додати',
  ok: 'Ok',
  cancel: 'Скасувати',

  // Date Piker
  datePicker: {
    mask: 'дд.мм.гггг',
    ariaLabel: 'Використовуйте клавіші зі стрілками, щоб вибрати дату',
    calendar: {
      previousMonth: 'Попередній Місяць',
      nextMonth: 'Наступний Місяць',
      months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
      weekdays: ['Воскресенье', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'],
      weekdaysShort: ['Ндл', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт']
    }
  },

  // Shared
  email: 'Email',
  password: 'Пароль',
  owner: 'Власник',
  serialNumber: 'S/N',
  quantityResource: 'Ресурс',
  quantityPrinted: 'Надруковано',
  quantityBalance: 'Залишок',
  lastActive: 'Активність',

  // Login
  signIn: 'Увійти',

  // MainPage
  cartridges: 'Картриджі',
  devices: 'Принтера',
  users: 'Користувачі',
  report: 'Звіт',
  signOut: 'Вихід',

  // Cartridges
  device: 'Принтер',
  active: 'Активний',
  modalTitleEditCartridge: 'Картридж {0}',

  // Devices
  code: 'Код',
  appVersion: 'App версія',
  city: 'Місто',
  description: 'Опис',
  modalTitleEditDevice: 'Принтер {0}',

  // Users
  role: 'Роль',
  admin: 'Адмін',
  trader: 'Трейдер',
  dealer: 'Дилер',
  customer: 'Клієнт',
  modalTitleAddUser: 'Додати користувача',
  modalTitleEditUser: 'Редагувати {0}',

  // Report
  download: 'Завантажити',
  dateFrom: 'Дата з',
  dateBy: 'Дата по',

  errors: {
    HTTP: {
      title: 'Помилка з\'єднання',


      message: '{statusCode} "{method} {url}"\n{message}'
    },
    NETWORK: {
      title: 'Помилка мережі',
      message: '{method} {url}'
    },
    FAIL_AUTH: {
      title: 'Помилка аутентифікації',
      message: 'Невірний еmail або пароль'
    }
  }
};
