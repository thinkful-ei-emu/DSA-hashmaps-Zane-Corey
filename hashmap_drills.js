let Hashmap = require("./Hashmaps");

function main() {
  let lor = new Hashmap();
  lor.set("Hobbit", "Frodo");
  lor.set("Hobbit", "Bilbo");
  lor.set("Wizard", "Gandolf");
  lor.set("Human", "Aragon");
  lor.set("Elf", "Legolas");
  lor.set("Maiar", "Necromancer");
  lor.set("Maiar", "Sauron");
  lor.set("RingBearer", "Gollum");
  lor.set("LadyofLight", "Galidriel");
  lor.set("HalfElven", "Arwen");
  lor.set("Ent", "Treebeard");
  // console.log(JSON.stringify(lor,null,2));
  console.log(lor.get("Hobbit"));
  console.log(lor.get("Maiar"));
  console.log(JSON.stringify(lor._findSlot("Hobbit")));
}

main();

// 1).
// [22,88,open,open,4,15,28,17,59,31,10]
// 2).
// [28,open,20,12,open,5,15,open,17]
//  19                   33
//  10



function removeDuplicates(str) {
  let results = "";
  let map = new Hashmap();
  for (let x = 0; x < str.length; x++) {
    map.set(str[x], str[x]);
  }
  for (let x = 0; x < str.length; x++) {
    try {
      results += map.get(str[x]);
       map.delete(str[x]);
    } catch (key) {}
  }

  console.log(results);
  return results;
}

console.log(removeDuplicates('google'));

 
