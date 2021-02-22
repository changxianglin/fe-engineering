module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['static/**/*.js'],
        dest: 'build/script.js',
      },
      css: {
        src: ['static/**/*.css'],
        dest: 'build/style.css',
      },
    },
    sass: {
      build: {
        files: [{
          src: 'static/css/a.css',
          dest: 'css/style.css',
        }]
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: [{
          src: 'build/script.js',
          dest: 'build/script.js'
        }]
      }
    },
    build: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'build/<%= pkg.name %>.min.js',
    }
  })

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-sass')

  // grunt.registerTask('default', ['uglify'])

  // 创建 task run
  grunt.task.registerTask('run', function () {
    console.log('task runner...')
  })
  // 创建 task run
  grunt.task.registerTask('sleep', function() {
    console.log('task sleep...')
  })
  // 创建 task all and run sleep can use
  grunt.task.registerTask('all', ['run', 'sleep'])
  // 创建 task concat-js
  grunt.task.registerTask('concat-js', ['concat:js'])
  // 创建 task concat-css
  grunt.task.registerTask('concat-css', ['concat:css'])
  
}