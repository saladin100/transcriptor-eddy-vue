<template>
  <mdb-container>
    <mdb-row class="mb-5">
      <mdb-col col="12">
        <h1>Settings</h1>
        <p>
          You are almost done. But before we transcribe your audio files,
          please provide the following information to gain an even more accurate transcript
        </p>
      </mdb-col>
    </mdb-row>

    <mdb-row class="mb-5">
      <mdb-col col="12">
        <form>
          <mdb-row>
            <mdb-col col="6">
              <label>Language</label>
              <select class="browser-default custom-select" @change="print" v-model="language">
                <option selected>English</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <mdb-input
                label="Numbers of speakers"
                type="number"
                placeholder="1"
                :min="1"
                :emptyValue="1"
                @change="setNumberOfSpeakers"
              />

              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                <label class="custom-control-label" for="customSwitch1">Automatic puctuation</label>
              </div>
            </mdb-col>
            <mdb-col col="6">
              <mdb-input label="Custom vocabulary" placeholder="placeholder" />
              <mdb-input label="Content redaction" placeholder="placeholder" />
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                <label class="custom-control-label" for="customSwitch2">Add timestamps</label>
              </div>
            </mdb-col>
          </mdb-row>
        </form>
      </mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-col col="6">
        <router-link to="/">
          <mdb-btn color="blue-grey" icon="arrow-circle-left" block>Back</mdb-btn>
        </router-link>
      </mdb-col>
      <mdb-col col="6">
        <router-link to="/purchase">
          <mdb-btn color="primary" icon="arrow-circle-right" iconRight block>Next</mdb-btn>
        </router-link>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>


<script>
import { mdbInput, mdbBtn, mdbContainer, mdbRow, mdbCol } from "mdbvue";
import { mapActions } from "vuex";
export default {
  name: "settings",
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn,
    "mdb-container": mdbContainer,
    "mdb-row": mdbRow,
    "mdb-col": mdbCol,
  },
  data() {
    return {
      language:'',
      numberOfSpeakers:1,
    };
  },
  methods: {
    ...mapActions(["setLanguage", "setNumberOfSpeakers"]),
    print(e) {
      if (e.target.options.selectedIndex > -1) {
        console.log(
          e.target.options[e.target.options.selectedIndex].dataset.foo
        );
      }
    },
  },
};
</script>


<style scoped>
</style>