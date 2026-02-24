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

  if (!$sidebar) {
    console.warn('initSidebar: #sidebar not found');
    return;
  }

  if (!$mask) {
    $mask = document.createElement('div');
    $mask.id = 'mask';
    $mask.className = 'd-none';
    document.body.appendChild($mask);
  }

  if ($trigger) {
    $trigger.addEventListener('click', () => SidebarUtil.toggle());
  } else {
    $onDocClick = { handler: null }
    $onDocClick.handler = function (e) {
      const t = e.target.closest && e.target.closest('#sidebar-trigger');
      if (t) {
        SidebarUtil.toggle();
        document.removeEventListener('click', $onDocClick.handler);
      }
    }
    document.addEventListener('click', $onDocClick.handler);
  }

  $mask.addEventListener('click', () => SidebarUtil.toggle());
}
