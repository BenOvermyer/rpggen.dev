"use strict";

import Entry from "./entry";
import Link from "./link";

export function all(): Entry[] {
  return [
    new Entry(
  '5e Magic Shop',
  new Link('Website', 'https://5emagic.shop/'),
new Link('Interview', 'https://randroll.com/archive/creative_interview_5e_magic_shop/'),
  [new Link('Mercenary cost calculator', 'https://5emagic.shop/mercenary-cost-calculator'),new Link('Wizard spellbook generator', 'https://5emagic.shop/spellbook/generate'),],
  ['Dungeons & Dragons 5e','fantasy','items',]
),
new Entry(
  '5th D&D',
  new Link('Website', 'https://www.5thdnd.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_jerry_joe_seltzer/'),
  [new Link('Melee weapon fumbles', 'https://www.5thdnd.com/melee-weapon'),new Link('Shield generator', 'https://www.5thdnd.com/copy-of-armor'),],
  ['Dungeons & Dragons 5e','fantasy',]
),
new Entry(
  'Ancient Quests',
  new Link('Website', 'http://ancientquests.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_ancient_quests/'),
  [],
  ['fantasy',]
),
new Entry(
  'Azgaar\'s Fantasy Map Generator',
  new Link('Website', 'https://azgaar.github.io/Fantasy-Map-Generator/'),
null,
  [],
  ['fantasy','maps',]
),
new Entry(
  'Beastlands',
  new Link('Website', 'https://beastlands.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_beastlands/'),
  [],
  []
),
new Entry(
  'ChaosGen',
  new Link('Website', 'https://chaosgen.com/'),
null,
  [new Link('D&D 5E encounter generator', 'https://www.chaosgen.com/dnd5e/random-encounter/'),new Link('Adventuring group name generator', 'https://www.chaosgen.com/fantasy/party-name'),],
  ['Dungeons & Dragons 5e','fantasy','names',]
),
new Entry(
  'Chaotic Shiny',
  new Link('Website', 'http://chaoticshiny.com/'),
new Link('Interview', 'https://randroll.com/archive/interview-with-hannah-lipsky-of-chaotic-shiny/'),
  [new Link('Civilization generator', 'http://chaoticshiny.com/civgen.php'),new Link('Holiday generator', 'http://chaoticshiny.com/holidaygen.php'),],
  ['fantasy',]
),
new Entry(
  'Chartopia',
  new Link('Website', 'https://chartopia.d12dev.com/'),
new Link('Interview', 'https://randroll.com/archive/interview-with-glenn-mccord-of-chartopia/'),
  [],
  []
),
new Entry(
  'Copper Sanctum',
  new Link('Website', 'https://thecoppersanctum.github.io/thecoppersanctum/taverns.html'),
new Link('Interview', 'https://randroll.com/archive/interview_copper_sanctum/'),
  [],
  []
),
new Entry(
  'D&D 5E Tools by Leugren',
  new Link('Website', 'https://1-dot-encounter-planner.appspot.com/'),
null,
  [new Link('Building generator', 'https://1-dot-encounter-planner.appspot.com/building-generator.html'),new Link('World-shaking event generator', 'https://1-dot-encounter-planner.appspot.com/world-shaking-event-generator.html'),],
  ['Dungeons & Dragons 5e','fantasy',]
),
new Entry(
  'D&D Speak',
  new Link('Website', 'http://dndspeak.com/generators/'),
new Link('Interview', 'https://randroll.com/archive/interview-with-casey-of-dndspeak/'),
  [new Link('Random disease generator', 'http://dndspeak.com/2019/09/random-disease-generator/'),new Link('Random potion generator', 'http://dndspeak.com/2019/06/random-potion-generator/'),],
  ['fantasy',]
),
new Entry(
  'Dareheart\'s Monstrous Codex',
  new Link('Website', 'http://www.ionzone.com/rpg/dmc.php'),
null,
  [],
  ['fantasy',]
),
new Entry(
  'Darkest of Nights',
  new Link('Website', 'https://www.darkestofnights.com/gens.php'),
null,
  [new Link('Constellation generator', 'https://www.darkestofnights.com/gen_cons.php'),new Link('Art idea generator', 'https://www.darkestofnights.com/gen_artidea.php'),],
  []
),
new Entry(
  'Dave\'s Mapper',
  new Link('Website', 'https://davesmapper.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_daves_mapper/'),
  [],
  ['fantasy','maps',]
),
new Entry(
  'Donjon',
  new Link('Website', 'https://donjon.bin.sh/'),
new Link('Interview', 'https://randroll.com/archive/interview-with-donjon-of-donjonbinsh/'),
  [new Link('Sci-fi world generator', 'Sci-fi world generator'),new Link('Random 5E dungeon generator', 'https://donjon.bin.sh/5e/dungeon/'),],
  ['fantasy','sci-fi','Dungeons & Dragons 5e','Old School Revival','maps',]
),
new Entry(
  'Dungen',
  new Link('Website', 'https://dungen.app/dungen/'),
new Link('Interview', 'https://randroll.com/archive/interview-with-nick-of-dungen/'),
  [],
  ['fantasy','maps',]
),
new Entry(
  'Dungeon Master\'s Vault',
  new Link('Website', 'https://www.dungeonmastersvault.com/'),
new Link('Interview', 'https://randroll.com/archive/interview-dungeon-masters-vault/'),
  [new Link('City generator', 'https://www.dungeonmastersvault.com/generator/citygenerator'),new Link('Rumor generator', 'https://www.dungeonmastersvault.com/generator/rumorgenerator'),],
  ['fantasy',]
),
new Entry(
  'Eigengrau\'s Generator',
  new Link('Website', 'http://eigengrausgenerator.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_rhys_eigengraus/'),
  [],
  []
),
new Entry(
  'Ennead Games',
  new Link('Website', 'http://enneadgames.com/generators-and-tools/'),
new Link('Interview', 'https://randroll.com/archive/interview-with-chris-kentlea-of-ennead-games/'),
  [new Link('Arcane babble generator', 'http://enneadgames.com/generators-and-tools/arcane-babble-generator/'),new Link('Altar generator', 'http://enneadgames.com/generators/dungeon-generator/altar-generator/'),],
  ['fantasy',]
),
new Entry(
  'Eposic',
  new Link('Website', 'https://www.trollmystic.com/pub/category/generators/'),
null,
  [new Link('Magic effects generator', 'https://www.trollmystic.com/pub/2012/03/03/magic-effects-generator/'),new Link('Event generator', 'https://www.trollmystic.com/pub/2012/03/03/event-generator/'),],
  []
),
new Entry(
  'Everweird',
  new Link('Website', 'https://everweird.app'),
new Link('Interview', 'https://randroll.com/archive/interview-everweird/'),
  [new Link('Critical miss generator', 'https://everweird.app/category/critical-miss/'),new Link('Pocket filler', 'https://everweird.app/category/item/pocket-filler/'),],
  []
),
new Entry(
  'Fantasy Calendar',
  new Link('Website', 'https://fantasy-calendar.com/'),
new Link('Interview', 'https://randroll.com/archive/interview-fantasy-calendar/'),
  [],
  ['calendars',]
),
new Entry(
  'Fantasy Name Generators',
  new Link('Website', 'https://www.fantasynamegenerators.com/'),
null,
  [new Link('Evil name generator', 'https://www.fantasynamegenerators.com/evil_names.php'),new Link('Magic user names', 'https://www.fantasynamegenerators.com/magic-user-names.php'),],
  ['names',]
),
new Entry(
  'Glumdark',
  new Link('Website', 'https://www.glumdark.com/'),
new Link('Interview', 'https://www.randroll.com/interview-glum/'),
  [new Link('Abhorrent artifacts', 'https://glumdark.com/?tableUuid=23227adf7b08dc7dee20'),new Link('Extremely unexpected creatures', 'https://glumdark.com/?tableUuid=f80a333a63618f52113d'),],
  ['fantasy','horror',]
),
new Entry(
  'Gozzy\'s Maps',
  new Link('Website', 'https://www.gozzys.com/'),
new Link('Interview', 'https://www.randroll.com/interview-gozzys/'),
  [new Link('Dungeon battlemap generator', 'https://www.gozzys.com/battlemap/dungeons'),new Link('Cave battlemap generator', 'https://www.gozzys.com/battlemap/caves'),],
  ['fantasy','maps',]
),
new Entry(
  'Here Be Taverns',
  new Link('Website', 'http://www.herebetaverns.com/'),
null,
  [new Link('Character generator', 'http://www.herebetaverns.com/characters'),new Link('Item generator', 'http://www.herebetaverns.com/items'),],
  []
),
new Entry(
  'Hexroll',
  new Link('Website', 'https://pendicepaper.com/hexroll/'),
new Link('Interview', 'https://www.randroll.com/interview-hexroll/'),
  [],
  ['fantasy','maps',]
),
new Entry(
  'Iron Arachne',
  new Link('Website', 'https://ironarachne.com/'),
new Link('Interview', 'https://randroll.com/archive/interview-with-ben-overmyer-of-iron-arachne/'),
  [new Link('Culture generator', 'https://ironarachne.com/#/culture'),new Link('Uncharted Worlds character generator', 'https://ironarachne.com/#/unchartedworlds/character'),],
  ['Dungeon Crawl Classics','Uncharted Worlds','Stars Without Number','sci-fi','cyberpunk','fantasy', 'maps', 'Old School Revival']
),
new Entry(
  'John\'s Dungeons and Dragons Tools',
  new Link('Website', 'https://jtevans.kilnar.com/rpg/dnd/tools/index.php'),
null,
  [new Link('Air odor generator', 'https://jtevans.kilnar.com/rpg/dnd/tools/dress.php?input=2'),new Link('Mage furnishings generator', 'https://jtevans.kilnar.com/rpg/dnd/tools/dress.php?input=9'),],
  []
),
new Entry(
  'Kassoon\'s Campaign Generator',
  new Link('Website', 'https://www.kassoon.com/dnd/'),
new Link('Interview', 'https://randroll.com/archive/interview-with-kassoon-of-rogue-legend-2/'),
  [new Link('Backstory generator', 'https://www.kassoon.com/dnd/backstory-generator/'),new Link('Interesting location generator', 'https://www.kassoon.com/dnd/interesting-locations/'),],
  []
),
new Entry(
  'Lady Tiefling',
  new Link('Website', 'https://www.patreon.com/ladytiefling'),
new Link('Interview', 'https://randroll.com/archive/interview_lady_tiefling/'),
  [],
  []
),
new Entry(
  'LitRPG Adventures',
  new Link('Website', 'https://www.litrpgadventures.com/'),
new Link('Interview', 'https://www.randroll.com/interview-litrpg/'),
  [],
  ['Artificial Intelligence',]
),
new Entry(
  'Magical Gurll! Generators',
  new Link('Website', 'https://generators.magicalgurll.com/'),
null,
  [new Link('Magical girl generator', 'https://generators.magicalgurll.com/original/magicalgirl.html'),new Link('Witch generator', 'https://generators.magicalgurll.com/original/witch.html'),],
  []
),
new Entry(
  'Mithril and Mages',
  new Link('Website', 'https://www.mithrilandmages.com/'),
null,
  [new Link('Inn and tavern name generator', 'https://www.mithrilandmages.com/utilities/Inns.php'),new Link('Labyrinth Lord monster mangler', 'https://www.mithrilandmages.com/utilities/LLMonsterMangler.php'),],
  []
),
new Entry(
  'Nerdbuilding',
  new Link('Website', 'https://nerdbuilding.com/'),
new Link('Interview', 'https://www.randroll.com/nerdbuild/'),
  [],
  ['settlements',]
),
new Entry(
  'NPC Generator',
  new Link('Website', 'http://www.npcgenerator.com/'),
null,
  [],
  []
),
new Entry(
  'Old-School Essentials Generators',
  new Link('Website', 'https://oldschoolessentials.necroticgnome.com/generators/'),
null,
  [new Link('Sentient sword generator', 'https://oldschoolessentials.necroticgnome.com/generators/sentient-sword-generator'),new Link('Treasure by dungeon level', 'https://oldschoolessentials.necroticgnome.com/generators/treasure-by-dungeon-level-generator'),],
  ['Old School Revival',]
),
new Entry(
  'Paco\'s Miscellaneous Stuff',
  new Link('Website', 'https://pacomiscelaneousstuff.blogspot.com/'),
new Link('Interview', 'https://randroll.com/archive/interview-wfrp-paco/'),
  [],
  ['Warhammer Fantasy Role Play','fantasy',]
),
new Entry(
  'Perchance',
  new Link('Website', 'https://perchance.org/welcome'),
null,
  [],
  []
),
new Entry(
  'RandomCreation',
  new Link('Website', 'https://randomcreation.net/'),
null,
  [new Link('Five room dungeon generator', 'https://randomcreation.net/Five_Room_Dungeon.html?token=ebecdf214f3740778da3202232bebec7'),new Link('Monster concept generator', 'https://randomcreation.net/generators.html?token=3cc36c24a43949678c6ca652b106514a'),],
  []
),
new Entry(
  'RanGen',
  new Link('Website', 'http://www.rangen.co.uk/'),
new Link('Interview', 'https://randroll.com/archive/interview_creator_of_rangen/'),
  [new Link('Character archetype generator', 'https://www.rangen.co.uk/chars/archegen.php'),new Link('Law generator', 'https://www.rangen.co.uk/world/lawgen.php'),],
  ['fantasy',]
),
new Entry(
  'Role Playing Tips',
  new Link('Website', 'https://roleplayingtips.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_johnn_four/'),
  [],
  []
),
new Entry(
  'Roll and Play',
  new Link('Website', 'https://rollandplaypress.com/'),
new Link('Interview', 'https://randroll.com/archive/interview-roll-play-sam/'),
  [],
  []
),
new Entry(
  'Secret Door',
  new Link('Website', 'http://www.secretdoor.online/npc/namegen'),
new Link('Interview', 'https://randroll.com/archive/interview-secret-door/'),
  [new Link('Dragon name generator', 'http://www.secretdoor.online/npc/dragons'),new Link('Lizardfolk name generator', 'http://www.secretdoor.online/npc/lizard0'),],
  ['fantasy','names',]
),
new Entry(
  'Serious d6',
  new Link('Website', 'https://seriousd6.github.io/'),
new Link('Interview', 'https://randroll.com/archive/interview-serious-d6/'),
  [new Link('Tavern generator', 'https://seriousd6.github.io/tavern.html'),new Link('Shopkeeper generator', 'https://seriousd6.github.io/shopkeeper.html'),],
  ['fantasy',]
),
new Entry(
  'Seventh Sanctum',
  new Link('Website', 'https://www.seventhsanctum.com/'),
new Link('Interview', 'https://randroll.com/archive/an-interview-with-steven-savage/'),
  [new Link('Supervillain theme generator', 'https://www.seventhsanctum.com/generate.php?Genname=supervillaintheme'),new Link('Super profession generator', 'https://www.seventhsanctum.com/generate.php?Genname=superprofession'),],
  ['fantasy','superheroes',]
),
new Entry(
  'SFRPG Tools',
  new Link('Website', 'https://sfrpgtools.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_sfrpgtools_creator/'),
  [new Link('Starship generator', 'https://sfrpgtools.com/starship-generator'),new Link('Starfinder trap generator', 'https://sfrpgtools.com/trap-generator'),],
  ['sci-fi',]
),
new Entry(
  'Snow White Hills',
  new Link('Website', 'https://snowwhitehills.blogspot.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_with_bobo/'),
  [],
  []
),
new Entry(
  'Springhole Random Generators',
  new Link('Website', 'https://www.springhole.net/writing_roleplaying_randomators/index.html'),
null,
  [new Link('Plant generator', 'https://www.springhole.net/writing_roleplaying_randomators/plants.htm'),new Link('Humanoid race generator', 'https://www.springhole.net/writing_roleplaying_randomators/humanoid.htm'),],
  ['fantasy',]
),
new Entry(
  'Star Wars RPG Shop',
  new Link('Website', 'https://www.swrpg-shop.com/'),
new Link('Interview', 'https://randroll.com/archive/interview_swrpg_shop/'),
  [],
  ['Star Wars',]
),
new Entry(
  'Total Party Kill 5e NPC Generator',
  new Link('Website', 'http://character.totalpartykill.ca/5e/'),
null,
  [],
  []
),
new Entry(
  'Watabou\'s Generators',
  new Link('Website', 'https://watabou.itch.io/'),
null,
  [new Link('One page dungeon generator', 'https://watabou.itch.io/one-page-dungeon'),new Link('Perilous Shores', 'https://watabou.itch.io/perilous-shores'),],
  []
),
new Entry(
  'Wintertree',
  new Link('Website', 'https://www.wintertreeredux.com/'),
new Link('Interview', 'https://randroll.com/archive/interview-table-master/'),
  [],
  []
),

  ];
}
