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

  // Login
  email: 'Email',
  password: 'Пароль',
  signIn: 'Войти',

  // MainPage
  cartridges: 'Картриджи',
  devices: 'Принтера',
  users: 'Пользователи',
  signOut: 'Выход',

  // Devices
  code: 'Код',
  appVersion: 'App версия',
  serialNumber: 'S/N',
  city: 'Город',
  description: 'Описание',
  quantityResource: 'Ресурс',
  quantityPrinted: 'Отпечатано',
  quantityBalance: 'Остаток',
  lastActive: 'Активность',
  modalTitleEditDevice: 'Принтер {0}',

  // Users
  role: 'Роль',
  owner: 'Владелец',
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
