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
          <img src="./DSGN313_Rebeca_Cesar_A01-ExquisiteCorpse-comp.png" id="model1" alt="Assignment 01 Image" />
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
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
          <h4 id="description">In this exploration, I learned the difference between different export files, modelling formats and conversion commands. Exporting as FBX, which I had done most commonly before this proved to have its advantages in minimal file size, while maintaining model geometries. FBX exports are additionally convenient due to easy-to-understand export settings in both Blender and Rhino. On the other hand, OBJs hold more information on material qualities through a separate mtl file, which is probably why I had used this file type when exporting from Rhino, though I did not fully understand this reasoning before this exploration. The OBJ file type certainly has accurate and very smooth geometries, but it exports significantly bigger file types, making it a not-so-ideal choice to export files quickly when changing between programs often. Finally, my findings on the STL file type were the most interesting and unknown qualities I was not aware of before this. I had only ever used STL files when exporting models with the intention of importing them into Creality to make a gcode for 3D printing, so I had never modified the geometry of objects from STL files. I found out that STL files are imported as triangulated meshes, making geometries more accurate while not always being very smooth. However, these triangulated geometries became very complex very quickly when converted to subDs and NURBs, which made any modification process much slower. In addition to being a heavier file type, this is the reason I had not, and probably will not, export files as STLs to use between programs, aside from 3D printing, as they are still very successful that way.</h4> 
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
