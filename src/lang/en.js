export default {
  // Table
  editRecord: 'Edit record',
  removeRecord: 'Remove record',
  previousPage: 'Previous page',
  nextPage: 'Next page',

  // Btn
  back: 'Back',
  add: 'Add',
  ok: 'Ok',
  cancel: 'Cancel',

  // Shared
  email: 'Email',
  password: 'Пароль',
  owner: 'Owner',
  serialNumber: 'S/N',
  quantityResource: 'Resource',
  quantityPrinted: 'Printed',
  quantityBalance: 'Balance',
  lastActive: 'Last active',

  // Login
  signIn: 'Sign me in!',

  // MainPage
  cartridges: 'Cartridges',
  devices: 'Devices',
  users: 'Users',
  signOut: 'Sign out',

  // Cartridges
  device: 'Device',
  active: 'Active',
  modalTitleEditCartridge: 'Cartridge {0}',

  // Devices
  code: 'Code',
  appVersion: 'App version',
  city: 'City',
  description: 'Description',
  modalTitleEditDevice: 'Device {0}',

  // Users
  role: 'Role',
  admin: 'Admin',
  trader: 'Trader',
  dealer: 'Dealer',
  customer: 'Customer',
  modalTitleAddUser: 'Add user',
  modalTitleEditUser: 'User {0}',

  validation: {
    email: 'Field must be a valid email',
    maxLength: 'Field may not be greater than {max} characters',
    minLength: 'Field must be at least {min} characters',
    required: 'Field is required',
    password: 'Field must be between 8 and 30 characters with a combination of uppercase and lowercase letters, numbers and special characters ()[]+-*_;,!?~@#$%^&'
  },

  errors: {
    HTTP: {
      title: 'Connection error',
      message: '{statusCode} "{method} {url}"\n{message}'
    },
    NETWORK: {
      title: 'Network error',
      message: '{method} {url}'
    },
    FAIL_AUTH: {
      title: 'Authentication error',
      message: 'Incorrect email or password'
    }
  }
};
