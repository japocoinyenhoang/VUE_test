import "./styles.css";

new Vue({
  el: "#app",
  data: {
    logo: "Mis proyectos",
    projects: [
      {
        id: 1,
        title: "PROYECTO 1",
        text: "descripcion 1"
      },
      {
        id: 2,
        title: "PROYECTO 2",
        text: "descripcion 2"
      }
    ],
    inputText:''
  },
  computed: {
  filteredProjects: function() {
    return this.projects.filter(
      p => p.title.toLowerCase().indexOf(this.inputText.toLowerCase()) > -1
    );
  },
  showProjects: function() {
  return this.filteredProjects.length !== 0;
}
}
});
