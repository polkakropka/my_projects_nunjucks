**PROJECT INIT**

Before start please install globally:
1. node.js 
2. yarn
3. go to the source file and clone there html_templates repository to start: 
https://stash.anwr-group.com/scm/cms/anwr-frontend_html_templates.git

Change to the project's directory and do following in the command line:
1. $ yarn init-project (to install dev dependencies)
2. $ yarn export (build production-ready code: public/dist and export directory for frontend templates)
3. $ yarn build 
4. $ yarn start 
Technologies used in the project:
1. nunjucks.js (templating engine for javascript)

    --> more info: https://mozilla.github.io/nunjucks/
2. fractal (build and document web component libraries, and integrate them into projects) 

    --> more info: https://fractal.build/guide
    
3. $ yarn start (to start fractal in the project with localhost)

4. development should have place on dev branch or your feature/branches