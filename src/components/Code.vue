<template>
  <div>
    <div class="row">
      <h2>Projects</h2>
      <div>
        <button v-on:click="expandDiv">
          <i id="chevron" class="fas fa-chevron-down fa-lg"></i>
        </button>
      </div>
    </div>

    <div class="cards">
      <Card
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :emoji="card.emoji"
        :link="card.link"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Code",
  components: { Card },
  data() {
    return {
      cards: [
        {
          title: "Covicare",
          emoji: "🦠",
          description:
            "Covid tracker cross-platform mobile application built using <strong>Ionic framework</strong>, integrating the public Covid API data which helps in getting daily stats, analysis and news across the world. Used chart.js for graphical representation of the data.",
          link: "https://github.com/jazirk/covi-care",
        },
        {
          title: "Roll the Dice",
          emoji: "🎲",
          description:
            "Developed and designed Roll the Dice game with <strong>HTML5, CSS3 and JavaScript</strong>.",
          link: "https:/jazirk.github.io/Roll-the-dice/",
        },
        {
          title: "Portfolio Website",
          emoji: "🙋‍♂️",
          description: "My Portfolio website made in Vue.js",
          link: "https://jaasi.me",
        },
      ],
      isExpanded: false,
    };
    // eslint-disable-next-line no-unreachable
  },
  methods: {
    expandDiv() {
      const div = document.querySelector(".cards");
      const chevron = document.getElementById("chevron");

      if (!this.isExpanded) {
        div.classList.add("expandedCards");
        chevron.style.transform = "rotate(180deg)";
        this.isExpanded = true;
      } else {
        div.classList.remove("expandedCards");
        chevron.style.transform = "rotate(0deg)";
        this.isExpanded = false;
      }
      console.log(div.classList);
    },
  },
};
</script>

<style scoped>
.cards {
  grid-gap: 1rem;
  margin: 0 auto;
  display: grid;
  height: 320px;
}

@media screen and (max-width: 580px) {
  .cards {
    height: 100%;
  }
}

.expandedCards {
  height: 100%;
}

@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

.rotate {
  transform: rotate(180deg);
}

.no-rotate {
  transform: rotate(0deg);
}

@media screen and (min-width: 370px) {
  .cards {
    height: 100%;
  }
}

@media screen and (min-width: 900px) and (max-width: 1040px) {
  .cards {
    height: 100%;
  }
}

h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid green;
  line-height: 0.4;
  width: 40px;
  transition: all ease 0.3s;
}

h2:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid #1db954;
  line-height: 0.4;
  width: 100px;
  transition: 0.5s;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

svg {
  color: white;
}

.row button {
  border: none;
  padding: 10px;
  border-radius: 8px;
  background-color: #1b405e;
}

.row button:hover {
  background-color: #15334b;
  transition: background-color ease 0.2s;
  cursor: pointer;
}

.row button:focus {
  outline: none;
}
@media screen and (min-width: 200px) and (max-width: 355px) {
  .cards {
    height: 320px;
  }
}
</style>
