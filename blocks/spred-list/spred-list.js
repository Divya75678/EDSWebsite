export default async function decorate(block) {
  try {
    const response = await fetch('https://main--edswebsite--divya75678.aem.page/spred.json');
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
    const json = await response.json();
    const developers = json.data;

    block.textContent = '';

    const ul = document.createElement('ul');
    ul.classList.add('spred-list');

    developers.forEach((dev) => {
      const li = document.createElement('li');
      li.classList.add('spred-list-item');
      li.innerHTML = `
        <span class="sr-no">#${dev['Sr no']}</span>
        <div class="dev-info">
          <h3 class="dev-name">${dev.Devloper}</h3>
          <p class="dev-tech"><strong>Technology:</strong> ${dev.Technology}</p>
          <p class="dev-exp"><strong>Experience:</strong> ${dev.Expiriance} years</p>
        </div>
      `;
      ul.append(li);
    });

    block.append(ul);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Spred List: failed to load data', error);
    block.textContent = 'Unable to load developer list. Please try again later.';
  }
}
