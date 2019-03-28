import Vue from 'vue/dist/vue.js';
import hljs from 'highlight.js';

declare global {
	const IS_WEB_BUNDLE: boolean;

	interface Window {
		hljs: typeof hljs;
		Vue: typeof Vue;
	}
}
