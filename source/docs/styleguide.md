---
title: Styleguide
---

## Grid

## Colors

<div class="palette">
	{% for key, value in colors -%}
	<div class="color" style="color: {{ value }}">
		<span>{{ value }}</span>
		<code>{{ key }}</code>
	</div>
	{% endfor %}
</div>

## Icons

var         | value         | class                           | output                                         
------------|---------------|---------------------------------|------------------------------------------------
{% for key, value in icons -%}
`{{ key }}` | `{{ value }}` | `{{ key | replace('$', '.') }}` | <span class="{{ key | replace('$', '') }}"></span>
{% endfor -%}

## Fonts

var         | value
------------|------------
{% for key, value in fonts -%}
`{{ key }}` | <span class="font {{ key | replace('$', '') }}">{{ value }}</span>
{% endfor -%}

## Boundaries

var         | value
------------|------------
{% for key, value in boundaries -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Breakpoints

var         | value
------------|------------
{% for key, value in breakpoints -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Timing

var         | value
------------|------------
{% for key, value in timing -%}
`{{ key }}` | {{ value }}
{% endfor -%}