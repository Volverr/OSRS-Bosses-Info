const bosses = {
  "abyssalSire": {
    name: "Abyssal Sire",
    weaknesses: ["Stab", "Ranged"],
    tips: [
      "Use a stab weapon, such as a Zamorakian hasta or abyssal tentacle, for the most effective damage.",
      "Use ranged attacks if you don't have access to a good stab weapon.",
      "Watch out for the Sire's deadly poison attack and be prepared to move away quickly."
    ],
    imgUrl: "https://oldschool.runescape.wiki/images/thumb/b/ba/Abyssal_Sire.png/300px-Abyssal_Sire.png?8e497"
  },
  "cerberus": {
    name: "Cerberus",
    weaknesses: ["Magic"],
    tips: [
      "Use magic attacks for the most effective damage against Cerberus.",
      "Watch out for Cerberus' powerful melee attacks and be ready to dodge.",
      "Be prepared to switch between attacking different heads."
    ],
    imgUrl: "https://oldschool.runescape.wiki/images/thumb/d/d7/Cerberus.png/350px-Cerberus.png?2e8b6"
  },
  "kraken": {
    name: "Kraken",
    weaknesses: ["Magic"],
    tips: [
      "Use magic attacks for the most effective damage against the Kraken.",
      "Bring a trident of the seas/swamp for the most efficient magic damage.",
      "Avoid standing in the Kraken's ink attack.",
      "Be prepared to fight the Kraken's tentacles."
    ],
    imgUrl: "https://oldschool.runescape.wiki/images/thumb/f/fe/Kraken.png/300px-Kraken.png?3510a"
  },
  "zulrah": {
    name: "Zulrah",
    weaknesses: ["None"],
    tips: [
      "Use magic attacks for the most effective damage against Zulrah.",
      "Watch out for Zulrah's dangerous range and magic attacks.",
      "Be prepared to switch between attack styles depending on Zulrah's form.",
      "Be aware of Zulrah's poisonous attacks and bring antipoison potions."
    ],
    imgUrl: "https://oldschool.runescape.wiki/images/thumb/5/5f/Zulrah.png/280px-Zulrah.png?51de5"
  }
};

const bossForm = document.querySelector("#boss-form");
const bossInput = document.querySelector("#boss-input");
const bossInfo = document.querySelector("#boss-info");
const bossImg = document.querySelector("#boss-img");
const bossName = document.querySelector("#boss-name");
const bossWeaknesses = document.querySelector("#boss-weaknesses");
const bossTips = document.querySelector("#boss-tips");

bossForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const bossNameInput = bossInput.value.trim().toLowerCase();
  const boss = bosses[bossNameInput];
  if (boss) {
    bossImg.setAttribute("src", boss.imgUrl);
    bossName.textContent = boss.name;
    bossWeaknesses.textContent = `Weaknesses: ${boss.weaknesses.join(", ")}`;
    bossTips.innerHTML = `<strong>Tips:</strong>`;
    boss.tips.forEach((tip) => {
      const li = document.createElement("li");
      li.textContent = tip;
      bossTips.appendChild(li);
    });
    bossInfo.style.display = "block";
  } else {
    bossInfo.style.display = "none";
  }
  bossInput.value = "";
});