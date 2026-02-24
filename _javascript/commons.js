import { basic, initSidebar, initTopbar } from './modules/layouts';

// Initialize layout modules after DOM is ready so elements are present.
document.addEventListener('DOMContentLoaded', () => {
	initSidebar();
	initTopbar();
	basic();
});

// Expose for debugging in the browser console
window.initSidebar = initSidebar;