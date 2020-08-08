<template>
  <!-- Footer -->
  <mdb-footer color="elegant-color" class="font-small pt-4 mt-4">
    <mdb-container>
      <mdb-row class="mb-4 text-left">
        <mdb-col sm="6">
          <h5 class="title">Footer Content</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,,
          </p>
        </mdb-col>
        <mdb-col sm="3">
          <h5 class="title">Footer Content</h5>
          <a>Link 1</a>
          <br />
          <a>Link 1</a>
          <br />
          <a>Link 1</a>
          <br />
          <a>Link 1</a>
          <br />
          <a>Link 1</a>
          <br />
        </mdb-col>
        <mdb-col sm="3">
          <h5 class="title">Footer Content</h5>
          <a>Link 1</a>
          <br />
          <a>Link 1</a>
          <br />
          <a>Link 1</a>
          <br />
          <a>Link 1</a>
          <br />
          <a>Link 1</a>
          <br />
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright py-3 text-left">
      <mdb-container>
        <mdb-row class="text-left">
          <mdb-col sm="8">
            &copy; 2020 Copyright: 
            <router-link to="/">transcriptor-eddy.com</router-link>
          
            <!--<router-link to="/">Imprint</router-link> |
              
            <router-link to="/">Privacy & Policy</router-link>|
            <router-link to="/">Terms of use</router-link>-->
          </mdb-col>
          <mdb-col sm="4" class="text-right">
            <a
              class="mr-3 waves-effect waves-light"
              href="https://www.facebook.com"
              target="_blank"
            >
              <i class="fab fa-facebook-f fa-lg"></i>
            </a>
            <a
              class="mr-3 waves-effect waves-light"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="mr-3 waves-effect waves-light"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <i class="fab fa-twitter fa-lg"></i>
            </a>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "Footer",
  components: {
    "mdb-footer": mdbFooter,
    "mdb-container": mdbContainer,
    "mdb-row": mdbRow,
    "mdb-col": mdbCol,
  },
};
</script>

<style scoped>
</style>