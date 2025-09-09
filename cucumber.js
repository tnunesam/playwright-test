// cucumber.js
module.exports = {
  default: {
    // A linha 'requireModule' foi removida
    require: ['features/**/*.js'],      // Agora aponta para arquivos .js
    paths: ['features/**/*.feature'],
    format: ['progress-bar', 'html:cucumber-report.html'],
  },
};