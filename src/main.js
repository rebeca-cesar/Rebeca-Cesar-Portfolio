import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./analysis/DSGN313_A01_Analysis.png",
  "./analysis/DSGN313_A01_Analysis2.png",
  "./analysis/DSGN313_A01_Analysis3.png",
  "./analysis/DSGN313_A01_Analysis4.png",
];

const trees = [
  "./charts/comparison_chart_pavilion.png",
  "./charts/comparison_chart_torus.png",
  "./charts/comparison_chart_luma.png",
  "./charts/models_luma.png",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      A01: Cadavre Exquis
        <div class="three-model">
          <a href="./analysis/DSGN313_Rebeca_Cesar_A01-ExquisiteCorpse-comp.png" target="new">
              <img src="./analysis/DSGN313_Rebeca_Cesar_A01-ExquisiteCorpse-comp.png" alt="cadavre exquis" width="400" height="300" id="model1">
            </a>
        </div>
        <div id="images-description">
          <div id="images">
          <a href="./analysis/DSGN313_A01_Analysis.png" target="new">
              <img src="./analysis/DSGN313_A01_Analysis.png" alt="random image" width="400" height="300">
            </a>
          <a href="./analysis/DSGN313_A01_Analysis2.png" target="new">
              <img src="./analysis/DSGN313_A01_Analysis2.png" alt="random image" width="400" height="300">
            </a>
          <a href="./analysis/DSGN313_A01_Analysis3.png" target="new">
              <img src="./analysis/DSGN313_A01_Analysis3.png" alt="random image" width="400" height="300">
            </a>
          <a href="./analysis/DSGN313_A01_Analysis4.png" target="new">
             <img src="./analysis/DSGN313_A01_Analysis4.png" alt="random image" width="400" height="300">
          </div>
          <h4 id="description">Cadavre Exquis: The Fragile Beauty of Mutual Dependence. This project visually explores the human need for community despite isolation culture through five facets: context, fragility, society, humanity, and beauty.</h4>
        </div>
      </div>

      <div id="project-row">
      A02: Interop
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">In this exploration, I learned the difference between different export files, modelling formats and conversion commands, enhancing interoperability between Blender and Rhino.</h4> 
        </div>
      </div>

      ${/* Model 3 commented out}
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
// createThreeScene("#model2", "/3DModels/project2/luma_smooth.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
