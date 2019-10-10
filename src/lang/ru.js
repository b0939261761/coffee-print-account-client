export default {
  // Table
  editRecord: 'Редактировать запись',
  removeRecord: 'Удалить запись',
  previousPage: 'Предыдущая страница',
  nextPage: 'Следующая страница',

  // Btn
  back: 'Назад',
  add: 'Добавить',
  ok: 'Ok',
  cancel: 'Отмена',

  // Shared
  email: 'Email',
  password: 'Пароль',
  owner: 'Владелец',
  serialNumber: 'S/N',
  quantityResource: 'Ресурс',
  quantityPrinted: 'Отпечатано',
  quantityBalance: 'Остаток',
  lastActive: 'Активность',

  // Login
  signIn: 'Войти',

  // MainPage
  cartridges: 'Картриджи',
  devices: 'Принтера',
  users: 'Пользователи',
  signOut: 'Выход',

  // Cartridges
  device: 'Принтер',
  active: 'Активный',
  modalTitleEditCartridge: 'Картридж {0}',

  // Devices
  code: 'Код',
  appVersion: 'App версия',
  city: 'Город',
  description: 'Описание',
  modalTitleEditDevice: 'Принтер {0}',

  // Users
  role: 'Роль',
  admin: 'Админ',
  trader: 'Трейдер',
  dealer: 'Дилер',
  customer: 'Клиент',
  modalTitleAddUser: 'Добавить пользователя',
  modalTitleEditUser: 'Редактировать {0}',

  errors: {
    HTTP: {
      title: 'Ошибка соединения',
      message: '{statusCode} "{method} {url}"\n{message}'
    },
    NETWORK: {
      title: 'Ошибка сети',
      message: '{method} {url}'
    },
    FAIL_AUTH: {
      title: 'Ошибка аутентификации',
      message: 'Неверный еmail или пароль'
    }
  }
};
