const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};
const username = getQueryParam('username');
const detailsContainer = document.getElementById('details-container');

if (username) {
    const url = `https://api.github.com/users/${username}`;
window
.fetch(url)
.then((res) => {
    if (!res.ok) {
         throw new Error(`User not found or API error: ${res.status}`);
        }
        return res.json();
    })
    .then((person) => {
        detailsContainer.innerHTML = ''; 
        let image = document.createElement("img");
        image.src = person.avatar_url;
        detailsContainer.appendChild(image);
        let h1 = document.createElement("h1");
        h1.innerText = person.name || person.login;
        detailsContainer.appendChild(h1);
        const details = [
             { label: 'GitHub Login', value: person.login },
             { label: 'User ID', value: person.id },
             { label: 'Account Type', value: person.type },
             { label: 'Location', value: person.location || 'N/A' },
             { label: 'Public Repos', value: person.public_repos },
             { label: 'Followers', value: person.followers },
             { label: 'Following', value: person.following },
             { label: 'Bio', value: person.bio || 'No bio available' },
             { label: 'Profile URL', value: person.html_url, isLink: true },
        ];
details.forEach(detail => {
      let p = document.createElement("p");
      let strong = document.createElement("strong");
      strong.innerText = `${detail.label}:`;
      p.appendChild(strong);
      if (detail.isLink) {
         let a = document.createElement("a");
         a.href = detail.value;
         a.target = "_blank"; 
         a.innerText = detail.value;
         p.appendChild(a);
         } else {
             p.appendChild(document.createTextNode(` ${detail.value}`));
          }
           detailsContainer.appendChild(p);

        });
    })
    .catch((err) => {
        console.error(err);
        detailsContainer.innerHTML = `<h1>Error</h1><p>Could not load details for user: **${username}**.</p><p>Please check the username and try again.</p>`;
    });
} else {
    detailsContainer.innerHTML = '<h1>Error</h1><p>No username provided in the URL.</p>';
}