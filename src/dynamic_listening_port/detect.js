const detect = require('detect-port-alt');
const isRoot = require('is-root');
const chalk = require('chalk');
const inquirer = require('inquirer');

function choosePort(host, defaultPort) {
  return detect(defaultPort, host).then(
    (port) => new Promise((resolve) => {
      if (port === defaultPort) {
        return resolve(defaultPort);
      }

      const message = process.platform !== 'win32' && defaultPort < 1024 && !isRoot()
        ? 'Admin permissions are required to run a server on a port below 1024.'
        : `Something is already running on port ${defaultPort}.`;

      const question = {
        type: 'confirm',
        name: 'shouldChangePort',
        message:
            `${chalk.yellow(
              `${message}`,
            )}\n\nWould you like to run the app on another port instead?`,
        default: true,
      };

      inquirer.prompt(question).then((answer) => {
        if (answer.shouldChangePort) {
          resolve(port);
        } else {
          resolve(null);
        }
      });
    }),
  );
}

choosePort('127.0.0.1', 3000).then(console.log);
