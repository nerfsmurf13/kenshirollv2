console.log("Loaded");

const genderList = ["Male", "Female"];
const raceList = [
  "Male Greenlander",
  "Female Greenlander",
  "Hive Worker",
  "Shek",
  "Male Scorchlander",
  "Female Scorchlander",
  "Hive Prince",
  "Skeleton",
  "Hive Soldier",
  "Your Choice",
];
const primaryWeapon = [
  "Unarmed",
  "Heavy Weapons",
  "Polearms",
  "Katanas",
  "All Weapons*",
  "Hackers",
  "Sabers",
  "Crossbows",
  "Blunt",
  "Your Choice",
];
const armourType = [
  "Light Armour",
  "Light Armour",
  "Clothes Only",
  "Clothes Only",
  "Heavy Armour",
  "Heavy Armour",
  "Naked",
  "Medium Armour",
  "Medium Armour",
  "Your Choice",
];
const factionList = [
  "Holy Nation",
  "Skin Bandits",
  "Flotsam Ninjas",
  "Hounds",
  "Shek Kingdom",
  "Trader's Guild",
  "Cannibal Hunters",
  "Anti-Slavers",
  "United Cities",
  "Your Choice",
];
const incomeList = [
  "Merchant/Caravaneer",
  "Artisan/Chef",
  "Slaver",
  "Smith",
  "Drug Lord",
  "Scavenger",
  "Robotics Expert",
  "Bounty Hunter",
  "Farmer/Labourer",
  "Your Choice",
];
const allWeaponsWarning = "*Difference between lowest and highest weapon skill should be no more than 15.";
let quirkList = [
  {
    name: "Kral's Curse",
    desc: "That Guy over there? He's an asshole. Attack him, and everyone else to test their combat prowess.",
  },
  {
    name: "Kleptomaniac",
    desc: "You must sweat glue, because your fingers are always sticky. Steal something everyday.",
  },
  {
    name: "Loner",
    desc: "Only allowed one donut at a time. Can recruit a new one and dismiss the original",
  },
  {
    name: "Natty",
    desc: "All original parts. If you lose a limb, you cannot replace it. Be careful out there.",
  },
  {
    name: "Refined Palette",
    desc: "You've had a taste of some fine cuisine, and bread and meatj ust won't cut it anymore. Eat only high quality food.",
  },
  {
    name: "Nature Reserve",
    desc: "Maybe the ancients lost their war and nowwe live in a moon-wide zoo? It certainly seems that way. 4x Nest Multiplier.",
  },
  {
    name: "Recruitment Stroll",
    desc: "Payment? Nobody ever paid you up front... Spend no cats on recruitment.",
  },
  {
    name: "Sweet Dreams",
    desc: "There's nothing like a good night's rest. Can only save while most (>51%) of your donuts are at a bed. Sleeping bags are fine too.",
  },
  {
    name: "Heart of Gold",
    desc: "Those starving bandits? Victims of circumstance. They never had the opportunity to not be NPCs. Always give as much as you can to hungry people.",
  },
  {
    name: "Size Matters",
    desc: "Shek women only date aft tall guys at a minimum. Max out height and leg length on all your donuts.",
  },
  {
    name: "Weak Shoulders",
    desc: "A strange mutation has left you with a serious condition! That condition being you can only wear small backpacks.",
  },
  {
    name: "Do-It-Yourself",
    desc: "You can do it on your own, right? Don't buy or steal anything from shops or merchants.",
  },
  {
    name: "Butterfingers",
    desc: "The feel of somebody else's property in your hands makes your fingers slippery with shame. Can only loot one item from each person you fight.",
  },
  {
    name: "Kral's 'Blessing'",
    desc: "A Shek warrior has bestowed a great honor upon you-the right to die just like Kral. Only fight 1v1 or outnumbered.",
  },
  {
    name: "Set Lasers to Fun",
    desc: "Name a single person who has tried and failed to live in laser land. You literally cannot. Ashes don't have names. if you settle, it must be in Venge.",
  },
  {
    name: "Hippocratic Oath",
    desc: "Doctors have a code, even if you were the one who cut their arm off in the first place. Heal and care for as many people as you can.",
  },
  {
    name: "Karmic Balance",
    desc: "Balance your good and evil deeds. Heal and care for someone who attacked you, or attack and rob a stranger passing by.",
  },
  {
    name: "Nomadic Wanderlust",
    desc: "The warmth of the sun on your back. The feel of the breeze... the sting of the acid rain. You love it all. No permanent settlement allowed.",
  },
  {
    name: "Hardcore",
    desc: "fou wouldn't abuse a poor and helpless save system would you? No re-loads, no retries. People die •vvhen they are killed. If you wipe, I'll see you back here.",
  },
  {
    name: "Not Your Personal Army",
    desc: "Orion man. They know you started that fight and they are paid to protect the city, not you. Don't kite enemies into gate guards.",
  },
  {
    name: "High Metabolism",
    desc: "A great thing to have! ...if you weren't on a desert moon with bandits and extremely hostile wildlife. 0.25x Hunger Rate.",
  },
  {
    name: "Thunderthighs",
    desc: "You are 'dummy thicc' and the constant clapping of your asscheeks prevents you from sneaking or stealing.",
  },
  {
    name: "Private Harem",
    desc: "You know what's gonna happen. Only hire members of the opposite sex (or the same if you're into that). Skeletons, get creative.",
  },
  {
    name: "All-Thumbs",
    desc: "Somehow, everything you touch turns to shit. You cannot make your own weapons or armour.",
  },
  {
    name: "I'm Vegan By The Way",
    desc: "Do you even know how many people die trying to kill animals for their meat? It's just slaughter. Eat only meat-free food, preferably homegrown.",
  },
  {
    name: "Potato",
    desc: "A botched facelift has left you permanently disfigured. Your love life is over! Also they managed to accidentally amputate your arms and legs.",
  },
  {
    name: "Nemesis",
    desc: "(You) will remember that. The first faction to attack you is your enemy for the rest of the run. No exceptions.",
  },
  {
    name: "Heart of Darkness",
    desc: "Do the worst thing possible in every situation. Turn in escaped slaves, feed people to the fogmen, peel then heal so they can suffer more.",
  },
  {
    name: "Paper Skin, Glass Bones",
    desc: "Your morning routine includes splinting both legs and sewing up your belly. Things could be worse. 2x Damage and Chance of Death mutliplier.",
  },
  {
    name: "Party like an Ethnoparty",
    desc: "Everybody is doing it these days. You want to be cool right? Hire only fellow members of your starting race.",
  },
  {
    name: "Hygenic",
    desc: "Swim around in the river/ocean or stand in the rain for a while every week. This should just be something you do regularly honestly...",
  },
  {
    name: "Crustacean Carnage",
    desc: "Today you feel like becoming a Crab Raider. Disregard faction and armour type. Join the crabs.",
  },
  {
    name: "Warmonger",
    desc: "It's a lovely day on the moon. Perfect for some genocide! Go to war with everyone. Your allied faction gets to die last.",
  },
];

let rollBtn = document.getElementById("roll-btn");
let saveBtn = document.getElementById("save-btn");

//init variables
let quirk1Roll = 0;
let quirk2Roll = 0;
let quirk3Roll = 0;

let domRaceNum = 0;
let domWeaponNum = 0;
let domArmourNum = 0;
let domFactionNum = 0;
let domIncomeNum = 0;

let domQuirk1Num = 0;
let domQuirk2Num = 0;
let domQuirk3Num = 0;

//init links to dom elements
let domRace = document.getElementById("race-roll");
let domWeapon = document.getElementById("weapon-roll");
let domArmour = document.getElementById("armour-roll");
let domFaction = document.getElementById("faction-roll");
let domIncome = document.getElementById("income-roll");

let dom1QuirkName = document.getElementById("q1-roll-name");
let dom1QuirkDesc = document.getElementById("q1-roll-desc");

let dom2QuirkName = document.getElementById("q2-roll-name");
let dom2QuirkDesc = document.getElementById("q2-roll-desc");

let dom3QuirkName = document.getElementById("q3-roll-name");
let dom3QuirkDesc = document.getElementById("q3-roll-desc");

let domInfoCard = document.getElementById("info-card");
let infoBody = document.getElementById("info-body");

let quirkArea = document.getElementById("quirk-area");
let storySection = document.getElementById("story-section");

rollBtn.addEventListener("click", function () {
  rollStory();
});

saveBtn.addEventListener("click", function () {
  saveView();
});

//Rolls through the story elements.
function rollStory() {
  infoBody.innerText = "";
  domRaceNum = rollDice(10);
  domWeaponNum = rollDice(10);
  domArmourNum = rollDice(10);
  domFactionNum = rollDice(10);
  domIncomeNum = rollDice(10);

  domRace.innerText = raceList[domRaceNum];
  domWeapon.innerText = primaryWeapon[domWeaponNum];
  domArmour.innerText = armourType[domArmourNum];
  domFaction.innerText = factionList[domFactionNum];
  domIncome.innerText = incomeList[domIncomeNum];

  rollQuirks();
}

//Rolls through the random quirks, duplicate rolls cause a reroll.
function rollQuirks() {
  quirk1Roll = rollDice(quirkList.length);
  quirk2Roll = rollDice(quirkList.length);
  quirk3Roll = rollDice(quirkList.length);
  console.log("Rolls are " + quirk1Roll, quirk2Roll, quirk3Roll);
  while (quirk1Roll == quirk2Roll) {
    console.log("Collision");
    quirk2Roll = rollDice(quirkList.length);
    console.log(quirk2Roll);
    rollQuirks();
  }
  while (quirk2Roll == quirk3Roll) {
    console.log("Collision");
    quirk3Roll = rollDice(quirkList.length);
    console.log(quirk3Roll);
    rollQuirks();
  }
  while (quirk3Roll == quirk1Roll) {
    console.log("Collision");
    quirk1Roll = rollDice(quirkList.length);
    console.log(quirk1Roll);
    rollQuirks();
  }
  if (domWeapon.innerText == "All Weapons*") {
    infoBody.innerText = allWeaponsWarning;
  } else {
    infoBody.innerText = "";
  }

  drawQuirks();
}
//redraw DOM
function drawQuirks() {
  console.log("Rolls are " + quirk1Roll, quirk2Roll, quirk3Roll);
  dom1QuirkName.innerText = quirkList[quirk1Roll].name;
  dom1QuirkDesc.innerText = quirkList[quirk1Roll].desc;
  dom2QuirkName.innerText = quirkList[quirk2Roll].name;
  dom2QuirkDesc.innerText = quirkList[quirk2Roll].desc;
  dom3QuirkName.innerText = quirkList[quirk3Roll].name;
  dom3QuirkDesc.innerText = quirkList[quirk3Roll].desc;

  quirkArea.className = "card-area";

  if (domWeapon.innerText == "All Weapons*") {
    domInfoCard.className = "card";
  } else {
    domInfoCard.className = "hide card";
  }
}
function rollDice(x) {
  return Math.floor(Math.random(1) * x);
}

function saveView() {
  // html2canvas(document.body, function (canvas) {
  //   // document.body.appendChild(canvas);
  //   return Canvas2Image.saveAsJPEG(canvas);
  // });

  html2canvas(document.body).then(function (canvas) {
    return Canvas2Image.saveAsJPEG(
      canvas,
      document.body.offsetWidth,
      document.body.offsetHeight,
      saveFilenameGenerator()
    );
    // document.body.appendChild(canvas);
  });
}

function saveFilenameGenerator() {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  let filename = "Kenshi-Story-" + date + "-" + month + "-" + year + "-" + hour + "-" + minute + "-" + second + ".jpg";
  return filename;
}
