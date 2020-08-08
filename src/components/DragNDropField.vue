<template>
  <div>
    <div class="row mb-5">
      <div class="col-12">
        <div
          id="dragndrop-field"
          @drop.prevent="drop"
          @dragover.prevent="dragover"
          @dragleave="dragleave"
          class="z-depth-1-half p-3 cursor-pointer"
        >
          <div>
            <i class="fas fa-cloud-upload-alt"></i>
            <br />Drop your audio files here ou click to select
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
            v-for="(audio,index) of audios"
            :key="index"
            style="margin: .4rem;padding: 0 1.28rem;background: #f0f0f0;border: .1rem solid #cfdbde;border-radius: .2rem;font-weight: bold;"
          >
            <span class="col-2">{{index+1}}</span>
            <span class="col-2">{{audios[index].name}}</span>
            <span class="col-2"></span>

            <span class="col-1">
              <i class="fas fa-trash-alt cursor-pointer" @click="removeAudioFile(audio)"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12" id="button-area">
        <button
          
          @click="getMailAddress"
          class="float-left col-6 btn-block btn btn-primary"
          :disabled="noFiles"
        >
          Transcript
          <i class="fas fa-upload"></i>
        </button>
        <button :disabled="noFiles" class="col-6 btn-block btn btn-danger" @click="clearAll">
          Clear
          <i class="fas fa-broom"></i>
        </button>
      </div>
    </div>
    <EmailModal :modal="modal"></EmailModal>
  </div>
</template>


<script>
import S3 from "aws-s3";
import EmailModal from "./EmailModal.vue"

export default {
  name: "dragNdrop",
  components:{
    EmailModal
  },
  data() {
    return {
      audios: [],
      modal:true,
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
          this.$swal({
            title: "Was nein...",
            text:
              "You can't transcribe any other files than audio. Supported files are mp3, ogg, and acc.",
            icon: "error",
            button: "Ok. I understand... ",
            //timer: 2000,
          });
        }
      }

      event.currentTarget.classList.remove("drag-bg");
    },
    createAudio(file) {
      let newAudio = document.createElement("audio");
      newAudio.src = URL.createObjectURL(file);
      this.audios.push(file);
    },
    clearAll() {
      this.audios = [];
      console.log("cleared");
    },
    removeAudioFile(file) {
      this.audios.splice(this.audios.indexOf(file), 1);
    },
    getMailAddress() {
      this.EmailModal.modal = true;
      /*this.$swal({
        title: "Good news!",
        text: "The transciption will be for free! This could take a while. We will send you a download link as soon the files are transcripted. Please enter your Email Address",
        icon: "success",
        button: "Aww yiss!",
      });
      for (let audio of this.audios) {
        this.uploadFile(audio);
      }*/
    },
    uploadFile(file) {
      this.S3Client.uploadFile(file)
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    },
  },

  computed: {
    noFiles() {
      return this.audios.length === 0;
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

