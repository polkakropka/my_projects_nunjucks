

/**
 * Grunt
 * =====
 *
 * TODO: Add description.
 *
 * NOTES
 * -----
 */

module.exports = function (grunt) {
    "use strict";
    require("jit-grunt")(grunt);
    require('load-grunt-tasks')(grunt);
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        path: {
            assets: 'source/assets',
            bootstrap: 'source/html_markup/bootstrap',
            components: 'source/html_markup/components',
            scripts: 'source/js',
            styles: 'source/styles',
            pub: 'public',
            dist: 'public/dist'
        },

        // Configure the "sass" task [1]
        sass: {
            default: {
                options: {
                    sourceMap: false
                },
                src: '<%= path.styles %>/main.scss',
                dest: '<%= path.dist %>/css/main.css',
            },

        },

        /**
         * grunt-webpack
         */
        webpack : {
            options : {
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader',
                            query: {
                                optional: ['es7.classProperties']
                            }
                        },
                        {
                            test: /\.json$/,
                            exclude: /node_modules/,
                            loader: 'json-loader'
                        }
                    ]
                }
            },
            static : {
                entry: './source/js/main.js',
                output: {
                    path: "public/dist/js",
                    filename: "main.js",
                },
                stats: {
                    colors: true,
                    modules: false,
                    reasons: true
                },
                progress: false,
                watch: false,
                keepalive: false
            }
        },

        // Configure the "clean" task [3]
        clean: {
            public: ['<%= path.pub %>/*'],
            assets: ['<%= path.dist %>/assets/']
        },


        // Configure the "copy" task [4]
        copy: {
            serviceworker: {
                // expand: true,
                src: '<%= path.scripts %>/service-worker.js',
                dest: '<%= path.dist %>/../../js/'
            },
			assets: {
				expand: true,
				cwd: '<%= path.assets %>/',
				src: '**/*',
				dest: '<%= path.dist %>/assets/'
			},
        },

        // Configure the "watch" task [6]
        watch: {
            styles: {
                files: [
                    '<%= path.components %>/**/*.scss',
                    '<%= path.styles %>/**/*.scss',
                    '<%= path.styles %>/main.scss'
                ],
                tasks: ['sass']
            },
            scripts: {
                files: [
                    '<%= path.components %>/**/*.js',
                    '<%= path.scripts %>/**/*.js',
                    '<%= path.scripts %>/main.js'
                ],
                tasks: ['webpack:static']
            },
            assets: {
                files: [
                    '<%= path.assets %>/**/*'
                ],
                tasks: ['clean:assets', 'copy']
            }
        }
    });

    // Load the plugin that provides the "sass" task
    grunt.loadNpmTasks('grunt-sass');

    // Load the plugin that provides the "clean" task
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Load the plugin that provides the "copy" task
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-import-js');


    // Load the plugin that provides the "watch" task
    grunt.loadNpmTasks('grunt-contrib-watch');



    // Define default task(s)
    grunt.registerTask('default', ['watch']);

    // Define build task(s)
    grunt.registerTask('build', ['clean:public', 'sass','copy', 'webpack:static']);

    // Define dist task(s)
    grunt.registerTask('dist', ['clean:public', 'sass',  'copy', 'webpack:static']);
};
