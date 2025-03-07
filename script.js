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

// Correction de l'affichage des pop-ups BTS Questions
function ShowBTSQuestion(section, event) {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Script chargé !");
    });
    const btsQuestions = {
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

    // Sélectionner la carte cliquée
    const clickedCard = event.currentTarget;

    // Supprimer tous les anciens pop-ups BTS uniquement sous la carte sélectionnée
    document.querySelectorAll(".bts-question-popup").forEach(el => el.remove());

    // Vérifier si un pop-up est déjà affiché sous la carte, sinon l'ajouter
    let existingPopup = clickedCard.nextElementSibling;
    if (existingPopup && existingPopup.classList.contains("bts-question-popup")) {
        existingPopup.remove();
        return;
    }

    // Créer le conteneur du pop-up
    const wrapper = document.createElement("div");
    wrapper.classList.add("popup-wrapper", "bts-question-popup");

    // Créer le pop-up dynamique
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("popup-content");

    // Ajouter le contenu dynamique
    detailsDiv.innerHTML = `
        <button class="popup-close" onclick="this.closest('.bts-question-popup').remove()">❌ Fermer</button>
        <h3>${btsQuestions[section].title}</h3>
        <p>${btsQuestions[section].description}</p>
    `;

    // Ajouter le pop-up dans le wrapper
    wrapper.appendChild(detailsDiv);

    // **Insérer le pop-up directement après la carte cliquée**
    clickedCard.parentNode.insertBefore(wrapper, clickedCard.nextSibling);
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
        "company": {
            title: "📄 Groupe Donaldson",
            description: "Donaldson est un leader mondial dans la fabrication de solutions de filtration.",
            details: `
                <ul>
                    <li>🏢 <b>Création:</b> 1915</li>
                    <li>📍 <b>Lieu:</b> Domjean (50420)</li>
                    <li>🌍 <b>Siège social:</b> Minneapolis, Minnesota, USA</li>
                    <li>🗺️ <b>Siège européen:</b> Louvain, Belgique</li>
                    <li>💰 <b>Chiffre d’affaires:</b> 73 milliards $</li>
                    <li>🏗️ <b>Activité:</b> Fabrication de solutions de filtration pour l’agriculture et le BTP</li>
                </ul>
            `
        },
        "presence": {
            title: "🌍 Présence du Groupe",
            description: "<img src='images/map.png' alt='Carte de présence du groupe' style='max-width:100%; border-radius:8px;'>"
        },
        "missions": {
            title: "📋 Mes Missions",
            description: `
                <ul>
                <li>📞 Support utilisateur niveau 2 : Hotline téléphonique | sollicitations physiques et messagerie</li>
                <li>🛠️ Gestion des incidents & demandes via l’outil ServiceNow</li>
                <li>💻 Gestion du parc informatique : installation, gestion et maintenance des ordinateurs, imprimantes et mobiles</li>
                <li>📡 Support et maintenance de la téléphonie Cisco</li>
                <li>🖥️ Administration système niveau 1 : serveurs d’application métier + serveurs de fichiers</li>
                <li>🌎 Collaboration avec les équipes US et EMEA (niveaux 1 et 3)</li>
                <li>📚 Formation des utilisateurs</li>
                </ul>
            `
        }
    };

    // Supprimer les autres pop-ups BTS pour éviter l’accumulation
    document.querySelectorAll(".bts-popup").forEach(el => el.remove());

    // Sélectionner la carte cliquée
    const clickedCard = event.currentTarget;

    // Vérifier si un pop-up est déjà affiché sous la carte, sinon l'ajouter
    let existingPopup = clickedCard.nextElementSibling;
    if (existingPopup && existingPopup.classList.contains("bts-popup")) {
        existingPopup.remove();
        return;
    }

    // Créer le conteneur du pop-up
    const wrapper = document.createElement("div");
    wrapper.classList.add("popup-wrapper", "bts-popup");

    // Créer le pop-up dynamique
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("popup-content");

    // Ajouter le contenu dynamique
    detailsDiv.innerHTML = `
        <button class="popup-close" onclick="this.closest('.bts-popup').remove()">❌ Fermer</button>
        <h3>${btsData[section].title}</h3>
        <p>${btsData[section].description}</p>
        ${btsData[section].details ? btsData[section].details : ""}
    `;

    // Ajouter le pop-up dans le wrapper
    wrapper.appendChild(detailsDiv);

    // **Insérer le pop-up sous la carte cliquée**
    clickedCard.insertAdjacentElement("afterend", wrapper);
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

// Fonction pour récupérer et afficher le nombre de téléchargements
function updateDownloadCount() {
    let count = localStorage.getItem("cvDownloadCount") || 0;
    document.getElementById("cv-download-count").innerText = `📊 Nombre de téléchargements : ${count}`;
}

// Fonction pour incrémenter le compteur de téléchargements
function incrementDownloadCount() {
    let count = localStorage.getItem("cvDownloadCount") || 0;
    count = parseInt(count) + 1;
    localStorage.setItem("cvDownloadCount", count);
    updateDownloadCount();
}

// Charger le compteur au démarrage de la page
document.addEventListener("DOMContentLoaded", updateDownloadCount);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdBF6E06eID9x1Ec34wCGrxyi_QN8w1Sc",
  authDomain: "portfoliocvcounter.firebaseapp.com",
  databaseURL: "https://portfoliocvcounter-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "portfoliocvcounter",
  storageBucket: "portfoliocvcounter.firebasestorage.app",
  messagingSenderId: "928088334282",
  appId: "1:928088334282:web:025a2dbbfa5a48a51b7933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);