<script context="module">
	export function update(options) {
		if (piePlot) {
			piePlot.update({
				...piePlotOption,
				...options,
				data: pieData
			});
		}
	}
</script>

<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { Pie } from '@antv/g2plot';
	const dispatch = createEventDispatcher();
	export let data;
	export let options = {};
	export let piePlotOption = {
		appendPadding: 10,
		data,
		angleField: 'value',
		colorField: 'type',
		radius: 1,
		interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
		...options
	};

	let charts;
	let piePlot;

	onMount(() => {
		piePlot = new Pie(charts, piePlotOption);
		piePlot.render();
		piePlot.on('element:click', args => {
			dispatch('element:click', args.data.data);
		});
	});
</script>

<div bind:this={charts} />
