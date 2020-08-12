<template>
  <div>
    <div class="row mb-5">
      <div class="col-12">
        <div
          id="dragndrop-field"
          @drop.prevent="drop"
          @dragover.prevent="dragover"
          @dragleave="dragleave"
          class="z-depth-1-half p-4 cursor-pointer"
        >
          <div>
            <i style="font-size:60px" class="fas fa-upload mb-4"></i>
            <br />Drop your audio files here or click to select
            <br />You can upload multiple files at once
            <br />
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-5" v-if="!noFiles">
      <div class="col-12">
        <div
          style="padding: 1.2rem;border: .1rem solid #bbcbd0;border-radius: .2rem;background-color: #fff;max-width: 96rem;"
        >
          <div
            v-for="(audio,index) of getAudios()"
            :key="index"
            style="margin: .4rem;padding: 0 1.28rem;background: #f0f0f0;border: .1rem solid #cfdbde;border-radius: .2rem;font-weight: bold;"
          >
            <span class="col-2">{{index+1}}</span>
            <span class="col-2">{{audio.name}}</span>
            <span class="col-2"></span>

            <span class="col-1">
              <i class="fas fa-trash-alt cursor-pointer" @click="removeAudio(audio)"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <form class>
      <div class="form-row">
        <div class="col-6 offset-3">
          <mdb-input
            size="sm"
            label="Your email address"
            type="email"
            small="We'll never share your email with anyone."
            v-on:blur="checkmail"
            v-model="email"
            invalidFeedback="Please provide a valid email address."
            validFeedback="Email address looks good!"
            :inputClass="checkmail() ? 'is-valid' : 'is-invalid'"
            required
            :disabled="noFiles"
          />
        </div>
      </div>
    </form>

    <div class="row">
      <div class="col-6 offset-3">
        <router-link  to="/settings">
          <mdb-btn
            iconRight
            size="lg"
            icon="arrow-alt-circle-right"
            :disabled="!checkmail()"
            :outline="!checkmail() ? 'primary' : '' "
            :class="[!checkmail() ? 'btn-primary': 'btn-primary' ,'btn-block', 'btn'] "
          >Nex Step</mdb-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import S3 from "aws-s3";

import { mdbInput, mdbBtn } from "mdbvue";

export default {
  name: "dragNdrop",
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn,
  },
  data() {
    return {
      audios: [],
      email: this.$store.getters.getEmail,
    };
  },
  methods: {
    dragover(event) {
      event.currentTarget.classList.add("drag-bg");
    },
    dragleave() {
      event.currentTarget.classList.remove("drag-bg");
    },
    drop(event) {
      let droppedFiles = event.dataTransfer.files;

      for (let file of droppedFiles) {
        if (file.type.includes("audio")) {
          this.createAudio(file);
        } else {
          this.modal = true;
        }
      }
      event.currentTarget.classList.remove("drag-bg");
    },

    createAudio(file) {
      let newAudio = document.createElement("audio");
      newAudio.src = URL.createObjectURL(file);
      //this.audios.push(file);
      this.$store.dispatch("storeAudio", file);
    },
    removeAudio(audio) {
      //this.audios.splice(this.audios.indexOf(file), 1);
      this.$store.dispatch("removeAudio", audio);
    },
    submit() {
      console.log("Upload gestartet:");
      console.log("Email: " + this.email);
      console.log("Audios :" + this.audios);
      this.$store.dispatch("setEmail", this.email);
    },
    uploadFile(file) {
      this.S3Client.uploadFile(file)
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    },
    checkmail() {
      if (!this.email) {
        return false;
      } else if (!this.validEmail(this.email)) {
        return false;
      } else {
        return true;
      }
    },

    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    getAudios() {
      return this.$store.getters.getAudios;
    },
  },

  computed: {
    noFiles() {
      return this.$store.getters.getAudios.length === 0;
    },
    config() {
      return {
        bucketName: "transcriptor-eddy-uploads",
        dirName: "uploads_from_website",
        region: "eu-central-1",
        accessKeyId: "AKIAYQP5JGNOKJ7RNKH7",
        secretAccessKey: "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",
        s3Url:
          "https://transcriptor-eddy-uploads.s3.eu-central-1.amazonaws.com/",
      };
    },
    S3Client() {
      return new S3(this.config);
    },
  },
};
</script>


<style scoped>
#dragndrop-field:hover {
  background-color: #eee;
  transition: 0.3s ease-out;
}
#dragndrop-field {
  height: 200px;
  text-align: center;
}

.drag-bg {
  background-color: #e8eaf6;
}

.cursor-pointer {
  cursor: pointer;
}
</style>

