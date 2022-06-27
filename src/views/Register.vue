<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already Have an account?
        <router-link :to="{ name: 'Login' }"> Login </router-link>
      </p>
      <h2>Create An Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <User class="icon" />
        </div>
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

      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
  import Email from "../assets/Icons/envelope-regular.svg";
  import Password from "../assets/Icons/lock-alt-solid.svg";
  import User from "../assets/Icons/user-alt-light.svg";

  import firebase from "firebase/app";
  import "firebase/auth";

  import db from "../firebase/firebaseInit";

  export default {
    name: "register",
    components: {
      Email,
      Password,
      User,
    },
    data() {
      return {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: "",
        errorMsg: "",
      };
    },

    methods: {
      async register() {
        if (
          this.email !== "" &&
          this.password !== "" &&
          this.firstName !== "" &&
          this.lastName !== "" &&
          this.username !== ""
        ) {
          this.error = false;
          const firebaseAuth = firebase.auth();
          const createUser = firebaseAuth.createUserWithEmailAndPassword(
            this.email,
            this.password
          );

          const result = await createUser;

          const database = db.collection("users").doc(result.user.uid);

          await database.set({
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
          });
          this.$router.push({ name: "Home" });
          return;
        }
        this.error = true;
        this.errorMsg = "Please fill out all the fields!";
        return;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .register {
    h2 {
      max-width: 350px;
    }
  }
</style>
