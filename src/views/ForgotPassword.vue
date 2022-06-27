<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <Email class="icon" />
          </div>
        </div>
        <router-link class="forgot-password" :to="{ name: 'Login' }">
          Go To Login Page
        </router-link>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
  import Email from "../assets/Icons/envelope-regular.svg";
  import Modal from "../components/Modal.vue";
  import Loading from "../components/Loading.vue";
  import firebase from "firebase/app";
  import "firebase/auth";

  export default {
    name: "forgotPassword",
    components: {
      Email,
      Modal,
      Loading,
    },
    data() {
      return {
        email: "",
        modalActive: null,
        modalMessage: "",
        loading: null,
      };
    },
    methods: {
      closeModal() {
        this.modalActive = false;
        this.email = "";
      },
      resetPassword() {
        if (this.email !== "") {
          this.loading = true;
          this.error = false;
          const firebaseAuth = firebase.auth();

          firebaseAuth
            .sendPasswordResetEmail(this.email)
            .then(() => {
              this.modalMessage =
                "If your account Exists, you will recieve an email";
              this.loading = false;
              this.modalActive = true;
            })
            .catch((err) => {
              this.modalMessage = err.message;
              this.loading = false;
              this.modalActive = true;
            });
        } else {
          this.modalMessage = "Please Enter the Email";
          this.loading = false;
          this.modalActive = true;

          return;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .reset-password {
    position: relative;
    .form-wrap {
      .reset {
        h2 {
          margin-bottom: 8px;
        }
        p {
          text-align: center;
          margin-bottom: 32px;
        }
      }
    }
  }
</style>
