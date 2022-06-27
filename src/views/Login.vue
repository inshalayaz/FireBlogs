<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link :to="{ name: 'Register' }"> Register </router-link>
      </p>
      <h2>Login to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <Email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <Password class="icon" />
        </div>
        <div class="error" v-show="error">{{ errorMsg }}</div>
      </div>

      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">
        Forgot Your Password?
      </router-link>

      <button @click.prevent="login">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
  import Email from "../assets/Icons/envelope-regular.svg";
  import Password from "../assets/Icons/lock-alt-solid.svg";
  import firebase from "firebase/app";
  import "firebase/auth";

  export default {
    name: "login",
    components: {
      Email,
      Password,
    },
    data() {
      return {
        email: null,
        password: null,
        error: null,
        errorMsg: "",
      };
    },
    methods: {
      async login() {
        try {
          if (this.email !== "" && this.password !== "") {
            this.error = false;
            const firebaseAuth = firebase.auth();
            const signUp = firebaseAuth.signInWithEmailAndPassword(
              this.email,
              this.password
            );
            const result = await signUp;
            console.log(result.user);
            this.$router.push({ name: "Home" });
            return;
          }
          this.error = true;
          this.errorMsg = "Please fill out all the fields!";

          return;
        } catch (error) {
          this.error = true;
          this.errorMsg = error.message;
        }
      },
    },
  };
</script>

<style lang="scss">
  .form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    align-self: center;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 900px) {
      width: 90%;
    }

    .login-register {
      margin-bottom: 32px;

      .router-link {
        color: #000;
      }
    }

    form {
      padding: 0 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;

      @media (min-width: 900px) {
        padding: 0 50px;
      }

      h2 {
        text-align: center;
        font-size: 32px;
        color: #303030;
        margin-bottom: 40px;
        @media (min-width: 900px) {
          font-size: 40px;
        }
      }

      .inputs {
        width: 100%;
        max-width: 350px;
        .input {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;
          input {
            width: 100%;
            border: none;
            background-color: #f2f7f6;
            padding: 4px 4px 4px 30px;
            height: 50px;

            &:focus {
              outline: none;
            }
          }

          .icon {
            width: 15px;
            position: absolute;
            left: 6px;
          }
        }
      }

      .forgot-password {
        text-decoration: none;
        color: #000;
        cursor: pointer;
        font-size: 14px;
        margin: 16px 0 32px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease all;

        &:hover {
          border-color: #303030;
        }
      }
      .angle {
        display: none;
        position: absolute;
        background-color: #fff;
        transform: rotateZ(3deg);
        width: 60px;
        right: -30px;
        height: 101%;
        @media (min-width: 900px) {
          display: initial;
        }
      }
    }
    .background {
      display: none;
      flex: 2;
      background-size: cover;
      background-image: url("../assets/background.png");
      width: 100%;
      height: 100%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }
</style>
