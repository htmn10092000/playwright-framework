export const environment = {
  default: {
    userAgent:
      '"Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 JASECTESTMNDQWG8765788VGH51FS QE E2E"',
    apikey: 'e974ea60-44f3-44ed-9aa3-f5bb3182d44b',
    storageStateRMS: './.auth/thnguyen.json',
    storageStateMainApp: './.auth/user.json',
    gsuiteAccount: 'Thanh Nguyen thnguyen@jobadder.com',
    namespace: 'bghd7',
    apiSalt: 'fnOeQ70NpSNSsOLNAi8XoJeWa1ULDgNnwNtNUZnL7ipgor96aW1WLYd9jvVFotw',
    widgeturl: 'https://apps.jobadder.com/widgets',
    prodEmail: '34bd1b990a-8986e5@inbox.mailtrap.io',
    skipLogin: false,
  },
  production: {
    baseUrl: 'https://{envName}.preview.jobadder.build/',
    adminUrl: 'https://previewadmin.jobadder.build',
    wakeupUrl: 'https://previewservice.dev.jobadder.build/wakeup',
    apiUrl: 'https://api.preview.jobadder.build',
    apiToken: 'dd8bad604e64c5ca01c6e6bd0ed79602',
    email: 'preview+automation+3861@jobadder.com',
    password: 'e3UeQWWvZr47ntbi',
    region: 'au',
    skipLogin: false,
  }
};
