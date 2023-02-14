///<reference types="svelte" />

import { SvelteComponent, createEventDispatcher } from 'svelte'
import {  PieOptions, Pie } from '@antv/g2plot';

/** 图表配置参数 与AntV G2Plot Pie一致 */
export interface options extends PieOptions { }

/** 事件上报 */
declare const dispatch: (arg0: string, arg1: any) => void;

/** 图表需要的数据格式 需要转化为{`type` ： `value`} 格式*/
export interface data {
	type: string | number;
	value: number;
}

/** 饼图图表组件 */
export default class SveltePie extends SvelteComponent {
	// Props
	$$prop_def: {
		/** 图表需要的数组 需要转化为{`type` ： `value`}[] 格式 */
		data: data[],
		/**  图表初始化默认配置*/
		options?: options,
	}
	/** 图表配置参数 与AntV G2Plot Pie一致 */
	private piePlotOption: options;

	/** 图表需要的DOM元素 */
	private charts: HTMLElement;

	/** 饼图图表对象*/
	private piePlot: Pie;

	/** 更新图表配置项，配置覆盖，不会做差异比对。*/
	update(option: Partial<options>): void;

	// TODO 事件监听
	// $on(event: 'routeEvent', callback: (event: CustomEvent) => void): () => void
}
