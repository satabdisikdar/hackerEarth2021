const chromedriver = require('chromedriver');
module.exports = {
    src_folders: ["tests"],  
    webdriver: {
      start_process: true,
      port: 4444,
      server_path: chromedriver.path,
      cli_args: ['--port=4444']
    },
    globals:{
        waitForConditionTimeout: 10000,
      },
  
    test_settings: {
      default: {
        //launch_url: 'https://nightwatchjs.org',
        desiredCapabilities: {
            browserName: 'chrome',
            javascriptEnabled: true,
            acceptSslCerts: true,
            chromeOptions: {
              args: ['disable-gpu', 'start-maximized','disable-infobars']
            }
          }
      }
    }
  };
  