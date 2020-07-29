<template>
  <mdb-container class="mt-5">
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>New message to {{mailAddress}}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-input type="text" :label="mailAddress" />
        <mdb-textarea label="Message" />
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="modal = false">Close</mdb-btn>
        <mdb-btn color="primary">Send message</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>


<script>
import {
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbInput,
  mdbTextarea,
  mdbContainer,
} from "mdbvue";

export default {
  name: "ModalPage",
  data() {
    return {
      modal: false,
      mailAddress: "@mdo",
    };
  },
  components: {
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,

    mdbInput,
    mdbTextarea,
    mdbContainer,
  },
};
</script>

<style scoped>
</style>