/**
 * Fractal
 * =======
 *
 * TODO: Add description.
 *
 * NOTES
 * -----
 *
 * 1. https://github.com/frctl/nunjucks#including-and-extending-non-component-view-templates
 */

'use strict';

// Create a new Fractal instance and export it for use elsewhere if required
const fractal = module.exports = require('@frctl/fractal').create();

// Tell Fractal where theme extensions will live
const mandelbrot = require('@frctl/mandelbrot')({
	styles: ['default', '/fractal.css'],
	static: {
		mount: 'fractal'
	}
});

fractal.web.theme(mandelbrot);

// Set the title of the project
fractal.set('project.title', 'Sport2000');

// Tell Fractal where the components will live
fractal.components.set('path', __dirname + '/source/anwr-frontend_html_templates/components');

// Tell Fractal where the documentation will live
fractal.docs.set('path', __dirname + '/source/docs');

// Tell Fractal where the static assets will live
fractal.web.set('static.path', __dirname + '/public');

// Tell Fractal where the static HTML export should be generated
fractal.web.set('builder.dest', __dirname + '/export');

// Add custom statuses
fractal.components.set('statuses', {
	wip: {
		label: "WIP",
		description: "Work in progress. Implement with caution.",
		color: "#ff0063"
	},
	qs: {
		label: "QS",
		description: "Work is done, but needs testing.",
		color: '#ff7700'
	},
	ready: {
		label: "Ready",
		description: "Ready to implement.",
		color: "#29cc29"
	}
});

// Set a new default status
fractal.components.set('default.status', 'wip');

// Tell Fractal where the bootstrap components will live [1]
const nunj = require('@frctl/nunjucks')({
    paths: ['source/html_markup/bootstrap']
});

// Set new file extensions for the components
fractal.components.engine(nunj);
fractal.components.set('ext', '.njk');

// Set new file extensions for the docs
fractal.docs.engine(nunj);
fractal.docs.set('ext', '.md');
