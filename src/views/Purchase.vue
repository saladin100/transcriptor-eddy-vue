<template>
  <mdb-container>
    <mdb-row>
      <mdb-col col="12">
        <h1>Purchase</h1>
      </mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-col col="12">
        <div class="text-center">
          <mdb-icon icon="sad-cry" size="5x" class="mb-5" />
          <h2 class="card-title h2">Ohh nooo....</h2>
          <p class="blue-text my-4 font-weight-bold">Lorem ipsum wasweis ich</p>
          <mdb-row class="d-flex justify-content-center">
            <mdb-col xl="7" class="pb-2">
              <p class="card-text">
                Oooops – we only allow three minutes of FREE transcription.
                Your audio is longer than that (45:22 minutes). What do you want to do?
              </p>
            </mdb-col>
          </mdb-row>
          <hr class="my-4" />
          <div v-show="this.clickedPay" ref="paypal"></div>
          <router-link to="/settings">
            <mdb-btn color="blue-grey" icon="arrow-circle-left">Go Back</mdb-btn>
          </router-link>
          <mdb-btn
            v-show="!this.clickedPay"
            color="primary"
            icon="shopping-cart"
            @click="showPaymentMethods()"
            iconRight
            darkWaves
          >Purchase</mdb-btn>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon } from "mdbvue";

export default {
  name: "purchase",

  components: {
    "mdb-container": mdbContainer,
    "mdb-row": mdbRow,
    "mdb-col": mdbCol,
    "mdb-icon": mdbIcon,
    "mdb-btn": mdbBtn,
  },
  data() {
    return {
      clickedPay: false,
      loaded: false,
      paidFor: false,
      product: {
        price: 777.77,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg",
      },
    };
  },
  mounted: function () {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AS7xbfWYN5vLREgAwT_fTDcl1Bl4_cJJRuw7EJCsoE6UUm-t-Gy9C_L5CuIMl84vtMJ6bpsZozqN-olo";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },

  methods: {
    showPaymentMethods() {
      this.clickedPay = true;
    },
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },
};
</script>


<style scoped>
</style>