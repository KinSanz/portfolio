function typeText(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = "";


    let span = document.createElement("span");
    element.appendChild(span);

    function type() {
        if (i < text.length) {
            span.textContent += text[i];
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

function showDetails(project) {
    const details = {
        "projet1": {
            title: "Création d'un Domaine Active Directory",
            description: "Mise en place d'un contrôleur de domaine sous Windows Server 2019.",
            steps: [
                "⚙️ Configuration réseau et IP statique",
                "📂 Installation d'Active Directory (AD DS)",
                "📢 Promotion du serveur en contrôleur de domaine",
                "👥 Création des utilisateurs et groupes",
                "🔒 Application des stratégies de groupe (GPO)",
                "✅ Tests et vérifications"
            ]
        },
        "projet2": {
            title: "Migration d'un Domaine Active Directory",
            description: "Migration d'un DC sous Windows Server 2019.",
            steps: [
                "➕ Ajout du serveur au domaine",
                "📢 Promotion en contrôleur de domaine",
                "🔄 Vérification de la réplication AD",
                "🔁 Transfert des rôles FSMO",
                "🗑️ Suppression et rétrogradation de l'ancien DC",
                "✅ Validation finale"
            ]
        }
    };

    document.getElementById("project-title").innerText = details[project].title;

    let descriptionElement = document.getElementById("project-description");
    descriptionElement.innerHTML = ""; 
    typeText(descriptionElement, details[project].description);

    let stepsHtml = "<ul>";
    details[project].steps.forEach(step => {
        stepsHtml += `<li>${step}</li>`;
    });
    stepsHtml += "</ul>";
    document.getElementById("project-steps").innerHTML = stepsHtml;

    document.getElementById("project-details").style.display = "block";
}

function closeDetails() {
    document.getElementById("project-details").style.display = "none";
}


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

function showDevDetails(project) {
    const details = {
        "adconfigurator": {
            title: "ADConfigurator by KinSanz",
            description: "Un logiciel permettant d’automatiser la création et la configuration complète d’un domaine Active Directory en quelques clics.",
            steps: [
                "🚀 Gain de temps : Tout est configuré en un clic.",
                "🚫​ Élimination des erreurs humaines : Plus de fautes de frappe.",
                "🛠️ Accessibilité : Aucun besoin de connaissance PowerShell.",
                "🔒 Sécurité et standardisation : Meilleures pratiques appliquées.",
                "📜 Logs détaillés : Suivi précis de l'exécution."
            ],
            installation: [
                "1️⃣ Téléchargez et exécutez l’installateur.",
                "2️⃣ Suivez l’assistant d’installation.",
                "3️⃣ Lancez ADConfigurator en mode administrateur."
            ],
            usage: [
                "1️⃣ Entrez le nom du domaine Active Directory.",
                "2️⃣ Ajoutez des utilisateurs et groupes.",
                "3️⃣ Appliquez des stratégies de groupe (GPO).",
                "4️⃣ Lancez la configuration complète."
            ],
            features: [
                "📥​ Importation CSV : Ajoutez des utilisateurs en un clic.",
                "⚙️​ Mode Simulation : Testez sans modification réelle.",
                "🔄​​ Sauvegarde & Rechargement : Réutilisez vos configurations."
            ],
            precautions: [
                "⚠️ Toujours exécuter en mode administrateur.",
                "⚠️ Vérifier l’activation de PowerShell.",
                "⚠️ Tester en environnement sécurisé avant production."
            ]
        }
    };

    document.getElementById("dev-title").innerText = details[project].title;
    document.getElementById("dev-description").innerText = details[project].description;

    let stepsHtml = "<h3>🛠️ Avantages</h3><ul>";
    details[project].steps.forEach(step => {
        stepsHtml += `<li>${step}</li>`;
    });
    stepsHtml += "</ul>";

    stepsHtml += "<h3>📥 Installation</h3><ul>";
    details[project].installation.forEach(step => {
        stepsHtml += `<li>${step}</li>`;
    });
    stepsHtml += "</ul>";

    stepsHtml += "<h3>🖥️ Utilisation</h3><ul>";
    details[project].usage.forEach(step => {
        stepsHtml += `<li>${step}</li>`;
    });
    stepsHtml += "</ul>";

    stepsHtml += "<h3>⚙️ Fonctionnalités Avancées</h3><ul>";
    details[project].features.forEach(step => {
        stepsHtml += `<li>${step}</li>`;
    });
    stepsHtml += "</ul>";

    stepsHtml += "<h3>⚠️ Précautions & Recommandations</h3><ul>";
    details[project].precautions.forEach(step => {
        stepsHtml += `<li>${step}</li>`;
    });
    stepsHtml += "</ul>";

    document.getElementById("dev-steps").innerHTML = stepsHtml;

    document.getElementById("dev-details").style.display = "block";
}

function closeDevDetails() {
    document.getElementById("dev-details").style.display = "none";
}

function showBTSDetails(section) {
    const details = {
        "company": {
            title: "Groupe Donaldson",
            description: "Donaldson est un leader mondial dans la fabrication de solutions de filtration.",
            content: [
                "🏢 Création : 1915",
                "📍 Lieu : Domjean (50420)",
                "🌍 Siège social : Minneapolis, Minnesota, USA",
                "🗺️​ Siège européen : Louvain, Belgique",
                "💰 Chiffre d’affaires : 73 milliards $",
                "🏭 Activité : Fabrication de solutions de filtres pour l’agriculture et le BTP (Massey Ferguson, John Deere, Caterpillar, JCB, etc.)"
            ]
        },
        "presence": {
            title: "Présence du groupe",
            description: "Donaldson est implanté mondialement avec de nombreuses usines et bureaux.",
            content: `<img src="images/map.png" alt="Présence mondiale de Donaldson" style="width:80%; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 188, 212, 0.6);">`
        },
        "missions": {
            title: "Mes missions",
            description: "Voici les missions que j'accomplis en tant que Technicien Support IT en alternance.",
            content: [
                "📞 Support utilisateur niveau 2 : Hotline téléphonique | sollicitations physiques et messagerie",
                "🛠️ Gestion des incidents & demandes via l’outil ServiceNow",
                "💻 Gestion du parc informatique : installation, gestion et maintenance des ordinateurs, imprimantes et mobiles",
                "📡 Support et maintenance de la téléphonie Cisco",
                "🖥️ Administration système niveau 1 : serveurs d’application métier + serveurs de fichiers",
                "🌎 Collaboration avec les équipes US et EMEA (niveaux 1 et 3)",
                "📚 Formation des utilisateurs"
            ]
        }
    };

    document.getElementById("bts-title").innerText = details[section].title;
    document.getElementById("bts-description").innerText = details[section].description;

    let contentHtml = "<ul>";
    if (Array.isArray(details[section].content)) {
        details[section].content.forEach(item => {
            contentHtml += `<li>${item}</li>`;
        });
    } else {
        contentHtml = details[section].content;
    }
    contentHtml += "</ul>";

    document.getElementById("bts-content").innerHTML = contentHtml;
    document.getElementById("bts-details").style.display = "block";
}

function closeBTSDetails() {
    document.getElementById("bts-details").style.display = "none";
}

function showBTSInfo(section) {
    const btsData = {
        "bts_definition": {
            title: "❓​ Le BTS SIO, c'est quoi ?",
            description: "Le BTS SIO (Services Informatiques aux Organisations) est une formation post-bac qui prépare aux métiers de l’informatique. Il propose deux options : SISR (Solutions d’Infrastructure, Systèmes et Réseaux) pour l’administration des systèmes et réseaux, et SLAM (Solutions Logicielles et Applications Métiers) pour le développement d’applications."
        },
        "sisr_vs_slam": {
            title: "🖥️​ Quelles différences entre SISR et SLAM ?",
            description: "L'option SISR forme à l’administration des réseaux, serveurs, et à la sécurité informatique. L'option SLAM se concentre sur la conception, le développement et la maintenance d’applications informatiques."
        },
        "bts_metiers": {
            title: "🧑‍💻​ Quels métiers après un BTS SIO ?",
            description: "Après un BTS SIO, vous pouvez devenir administrateur réseau, technicien support informatique, développeur d’applications, ou encore consultant en cybersécurité, selon l’option choisie."
        },
        "bts_qualites": {
            title: "🧠​ Quelles sont les qualités requises pour réussir en BTS SIO ?",
            description: "Pour réussir en BTS SIO, il faut être curieux, méthodique, aimer résoudre des problèmes et avoir une appétence pour les technologies numériques. Un bon esprit d’équipe est également un atout."
        },
        "bts_etudes": {
            title: "📚​ Peut-on poursuivre des études après un BTS SIO ?",
            description: "Oui, il est possible de poursuivre en licence professionnelle, en école d’ingénieurs ou en bachelor spécialisé en informatique pour approfondir vos compétences."
        }
    };

    document.getElementById("bts-sio-title").innerText = btsData[section].title;
    document.getElementById("bts-sio-description").innerText = btsData[section].description;

    document.getElementById("bts-sio-details").style.display = "block";
}

function closeBTSInfo() {
    document.getElementById("bts-sio-details").style.display = "none";
}


const themeToggle = document.getElementById("theme-toggle");
const body = document.body;


if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "🌙 Mode sombre";
}


themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");


    if (body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Mode sombre";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️ Mode clair";
        localStorage.setItem("theme", "dark");
    }
});

function showBTSInfo(section, event) {
    const btsData = {
        "bts_definition": {
            title: "Le BTS SIO, c'est quoi ?",
            description: "Le BTS SIO (Services Informatiques aux Organisations) est une formation post-bac qui prépare aux métiers de l’informatique. Il propose deux options : SISR (Solutions d’Infrastructure, Systèmes et Réseaux) pour l’administration des systèmes et réseaux, et SLAM (Solutions Logicielles et Applications Métiers) pour le développement d’applications."
        },
        "sisr_vs_slam": {
            title: "Quelles différences entre SISR et SLAM ?",
            description: "L'option SISR forme à l’administration des réseaux, serveurs, et à la sécurité informatique. L'option SLAM se concentre sur la conception, le développement et la maintenance d’applications informatiques."
        },
        "bts_metiers": {
            title: "Quels métiers après un BTS SIO ?",
            description: "Après un BTS SIO, vous pouvez devenir administrateur réseau, technicien support informatique, développeur d’applications, ou encore consultant en cybersécurité, selon l’option choisie."
        },
        "bts_qualites": {
            title: "Quelles sont les qualités requises pour réussir en BTS SIO ?",
            description: "Pour réussir en BTS SIO, il faut être curieux, méthodique, aimer résoudre des problèmes et avoir une appétence pour les technologies numériques. Un bon esprit d’équipe est également un atout."
        },
        "bts_etudes": {
            title: "Peut-on poursuivre des études après un BTS SIO ?",
            description: "Oui, il est possible de poursuivre en licence professionnelle, en école d’ingénieurs ou en bachelor spécialisé en informatique pour approfondir vos compétences."
        }
    };


    const clickedCard = event.currentTarget;


    document.querySelectorAll(".popup-content").forEach(el => el.remove());


    const wrapper = document.createElement("div");
    wrapper.classList.add("popup-wrapper");


    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("popup-content");


    detailsDiv.innerHTML = `
        <button onclick="this.parentElement.remove()">❌ Fermer</button>
        <h3>${btsData[section].title}</h3>
        <p>${btsData[section].description}</p>
    `;


    wrapper.appendChild(detailsDiv);


    clickedCard.parentNode.insertBefore(wrapper, clickedCard.nextSibling);
}

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkFadeIn() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn();
});
