//
import store from '@/store';

export function toggleRightSidebar() {
  setTimeout(() => document.body.classList.toggle("right-bar-enabled"), 1);
}

export function showRightSidebar() {
  setTimeout(() => document.body.classList.add("right-bar-enabled"), 1);
}
export function hideRightSidebar() {
  setTimeout(() => document.body.classList.remove("right-bar-enabled"), 1);
}

export function showRightPanel(size, data) {
  store.commit("OPEN_RIGHTPANEL", { size: size||30, ...(data||{}) });
}

export function hideRightPanel() {
  store.commit("CLOSE_RIGHTPANEL");
}
