const c = window.CONTENT;
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

document.title = `${c.name} | Portfolio`;

document.getElementById("nav").innerHTML = [
  ["GitHub", c.links.github],
  ["LinkedIn", c.links.linkedin],
  ["Email", `mailto:${c.links.email}`],
  ["Resume", c.links.resume]
].map(([l, u]) => `<a href="${esc(u)}">${l}</a>`).join("");

document.getElementById("about").innerHTML = `
  <img class="photo" src="${esc(c.photo)}" alt="${esc(c.name)}">
  <div><h1>${esc(c.name)}</h1><p class="role">${esc(c.title)}</p><p>${esc(c.bio)}</p>
  <div class="skills">${c.skills.map(s => `<p><strong>${esc(s.group)}</strong></p><div class="tags">${s.items.map(i => `<span>${esc(i)}</span>`).join("")}</div>`).join("")}</div></div>`;

document.getElementById("cards").innerHTML = c.projects.map(p => `
  <article class="card">
    <img src="${esc(p.image)}" alt="">
    <div>
      <h3>${esc(p.title)} <span class="date">${esc(p.date)}</span></h3>
      <p>${esc(p.description)}</p>
      <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="plinks">${p.links.map(l => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join("")}</div>
    </div>
  </article>`).join("");

document.getElementById("timeline").innerHTML = c.experience.map(e => `
  <li>
    <div class="dates">${esc(e.dates)}</div>
    <div><h3>${esc(e.role)}</h3><p class="org">${esc(e.org)}</p>
    <ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul></div>
  </li>`).join("");
