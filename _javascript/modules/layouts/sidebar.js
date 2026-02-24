const ATTR_DISPLAY = 'sidebar-display';
let $sidebar, $trigger, $mask;

class SidebarUtil {
  static #isExpanded = false;

  static toggle() {
    if (!$sidebar || !$mask) return;
    this.#isExpanded = !this.#isExpanded;
    document.body.toggleAttribute(ATTR_DISPLAY, this.#isExpanded);
    $sidebar.classList.toggle('z-2', this.#isExpanded);
    $mask.classList.toggle('d-none', !this.#isExpanded);
  }
}

export function initSidebar() {
  $sidebar = document.getElementById('sidebar');
  $trigger = document.getElementById('sidebar-trigger');
  $mask = document.getElementById('mask');

  if (!$trigger || !$mask || !$sidebar) {
    document.addEventListener('DOMContentLoaded', initSidebar, { once: true });
    return;
  }

  $trigger.addEventListener('click', () => SidebarUtil.toggle());
  $mask.addEventListener('click', () => SidebarUtil.toggle());
}