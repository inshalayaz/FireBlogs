<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost v-for="(post, index) in sampleBlog" :post="post" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            v-for="(post, index) in sampleBlogCards"
            :post="post"
            :key="index"
          />
        </div>
      </div>
    </div>

    <div class="updates">
      <div class="container">
        <h2 class="heading">
          never miss a post. Register for your free account today!
        </h2>
        <router-link class="router-button" to="#">
          Register for FireBlogs <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogPost from "../components/BlogPost.vue";
  import BlogCard from "../components/BlogCard.vue";
  import Arrow from "../assets/Icons/arrow-right-light.svg";
  export default {
    name: "Home",
    components: { BlogPost, BlogCard, Arrow },
    data() {
      return {
        welcomeScreen: {
          title: "Welcome!",
          blogPost:
            "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
          welcomeScreen: true,
          photo: "coding",
        },
        sampleBlog: [
          {
            title: "Blog Post!",
            blogHTML: " Register today to never miss a post!",
            blogCoverPhoto: "designed-for-everyone",
          },
          {
            title: "Blog Post!",
            blogHTML:
              " HTML, CSS, JavaScript and more. Register today to never miss a post!",
            blogCoverPhoto: "beautiful-stories",
          },
        ],
      };
    },
    computed: {
      sampleBlogCards() {
        return this.$store.state.sampleBlogCards;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .blog-card-wrap {
    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
  .updates {
    .container {
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        padding: 125px 25px;
        flex-direction: row;
      }
      .heading {
        font-weight: 300;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;

        @media (min-width: 800px) {
          text-align: initial;
          font-size: 40px;
        }
      }
      .router-button {
        display: flex;
        font-size: 14px;
        text-decoration: none;

        @media (min-width: 800px) {
          margin-left: auto;
        }
      }
    }
  }
</style>
