<template>
  <div>
    <h2>Articles</h2>
    <div class="timeline">
      <div class="year-container"></div>
      <ul>
        <li v-for="blog in blogs" :key="blog.slug">
          <div class="content">
            <a
              :href="'https://jasir.hashnode.dev/' + blog.slug"
              target="_blank"
            >
              <h3>{{ blog.title }}</h3>
              <!-- <h5>Software Engineer 2</h5> -->
              <div class="grey">
                {{ new Date(blog.dateAdded).toLocaleString() }}
              </div>
              <br />
              <p>
                {{ blog.brief }}
              </p>
            </a>
          </div>
        </li>
        <br />
        <br />
      </ul>

      <div class="green-dot"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gql } from "../hashnode.api";

const blogs = ref([]);

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "iamjaasi") {
            publication {
                posts(page: $page) {
                    _id
                    coverImage
                    slug
                    title
                    brief
                    dateAdded
                    dateUpdated
                }
            }
        }
    }
`;

onMounted(async () => {
  gql(GET_USER_ARTICLES, { page: 0 }).then((result) => {
    const articles = result.data.user.publication.posts;
    console.log(articles);
    blogs.value = articles;
  });
});
</script>

<style scoped>
h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid green;
  line-height: 0.4;
  width: 60px;
  transition: all ease 0.3s;
  margin-bottom: 2rem;
}

strong {
  font-weight: 500;
  color: #1db954;
}

a {
  color: white;
  border: none;
  text-decoration: none;
}

.green-dot {
  width: 16px;
  height: 16px;
  background: #1db954;
  border-radius: 50%;
  margin-left: -0.45em;
}

.year-container {
  position: absolute;
  margin: 0 -2.25em;
  z-index: 9999;
}

.year {
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  background: #1db954;
  border-radius: 16px;
  padding: 0.5rem;
}

h2:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid #1db954;
  line-height: 0.4;
  width: 100px;
  transition: all ease 0.3s;
}

div {
  color: white;
  font-family: "canada-type-gibson" !important;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "canada-type-gibson", sans-serif;
  perspective: 800px;
}

.grey {
  color: #ddd;
  font-size: 0.9rem;
}

body {
  display: flex;
}

.timeline {
  width: 100%;
  background-color: #1a202c;
  color: #fff;
  padding: 30px 20px;
  word-wrap: normal;
}

.timeline ul {
  list-style-type: none;
  border-left: 2px solid white;
  padding: 10px 5px;
}

.timeline ul li {
  padding: 20px 20px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
}

.timeline ul li span {
  display: inline-block;
  border-radius: 25px;
  padding: 2px 5px;
  font-size: 15px;
  text-align: center;
}

.timeline ul li .content h3 {
  color: #1db954;
  font-size: 1.6rem;
  padding-top: 5px;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

h5 {
  font-size: 1.2rem;
  padding-top: 5px;
  font-weight: 500;
  margin-bottom: 8px;
}

.timeline ul li .content p {
  padding: 5px 0px 15px 0px;
  font-size: 15px;
}

.timeline ul li:before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background-color: lawngreen;
  border-radius: 50%;
  left: -11px;
  top: 28px;
  transition: 0.5s;
  margin: 0;
}

.timeline ul li:hover {
  background-color: #1b405e;
  border-radius: 8px;
}

.timeline ul li:hover:before {
  background-color: #0f0;
  box-shadow: 0px 0px 10px 2px #0f0;
}

@media (max-width: 300px) {
  .timeline {
    width: 100%;
    padding: 30px 5px 30px 10px;
  }

  .timeline ul li .content h3 {
    color: #1db954;
    font-size: 15px;
  }
}
</style>
