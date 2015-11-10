var pkg = require('./package.json');

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy-test-workspace',
      deployTo: '/tmp/deploy-test',
      repositoryUrl: pkg.repository.url,
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      key: '~/.ssh/deploy-key',
      shallowClone: true
    },
    staging: {
      servers: 'deploy@52.28.211.195'
    }
  });

  shipit.task('pwd', function () {
    return shipit.remote('pwd');
  });
};