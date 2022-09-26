
export function showModal({ self, key, data }) {
  self.$store.commit("MODAL", { key, data: { isVisible: true, ...(data||{}) }, });
}

export function setModalResult({ self, key, data }) {
  self.$store.commit("MODAL", { key, data: { isVisible: false, ...(data||{}) }, });
}

export function hideModal({ self, key }) {
  self.$store.commit("NOMODAL", key);
}
