export function showModal({ self, key, data }) {
  const keyArr = ["bonus-log-modal", "game-log-modal", "cash-log-modal", "tip-log-modal", "tip-modal"]  
  for (let i = 0; i < keyArr.length; i++) {
    if(keyArr[i] == key){
      keyArr.splice(i, 1);
      i--
    }
  }
  console.log(keyArr)

  for(let j=0; j<keyArr.length; j++){
    console.log(keyArr[j])
    self.$store.commit("NOMODAL", keyArr[j]);
  }

  self.$store.commit("MODAL", { key, data: { isVisible: true, ...(data||{}) }, });

}

export function setModalResult({ self, key, data }) {
  self.$store.commit("MODAL", { key, data: { isVisible: false, ...(data||{}) }, });
}

export function hideModal({ self, key }) {
  self.$store.commit("NOMODAL", key);
}