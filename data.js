const POEM_DATA = {
  themes: {
    wasatch_winter: {
      adj: ["snow-capped", "frosty", "silent", "high", "steep", "cold", "pale", "enduring", "frozen", "bitter", "white", "towering", "hidden", "granite", "windswept", "glacial", "hushed", "iron-grey", "slate-blue", "severe", "unyielding", "remote", "crystalline", "blinding"],
      noun: ["Y Mountain", "Timpanogos", "canyon", "valley", "pine", "Provo River", "snowdrift", "peak", "summit", "avalanche", "aspen", "ridge", "wind", "cornice", "couloir", "snowpack", "crevasse", "cirque", "treeline", "snowfield", "powder", "elk", "moose", "granite slab", "icefall", "chute", "backcountry", "snowshed", "lodgepole", "fir"],
      verb: ["slumber", "watch", "gather", "wait", "endure", "breathe", "echo", "stand", "drift", "freeze", "shiver", "hide", "rest", "accumulate", "descend", "crack", "groan", "settle", "compress", "outlast", "silence", "bury", "release", "cascade"],
      preposition: ["beneath", "above", "across", "beyond", "under", "near", "past", "through", "into", "along", "around", "between"]
    },
    campus_twilight: {
      adj: ["quiet", "echoing", "empty", "golden", "faint", "ancient", "faithful", "still", "dim", "worn", "hallowed", "shadowed", "reverent", "ivy-clad", "columned", "spired", "solemn", "illumined", "century-old", "earnest", "devoted", "majestic", "granite-faced", "serene"],
      noun: ["bell tower", "library", "quad", "path", "courtyard", "brick", "shadow", "carillon", "footstep", "hymn", "choir", "stone", "doorway", "Abraham Smoot Building", "Maeser Building", "JFSB", "Cougar statue", "BYU seal", "honor code", "devotional", "ward", "testimony", "scripture", "missionary", "elder", "sister", "creamery", "bookstore", "Heritage Halls", "Helaman Halls", "Stadium"],
      verb: ["linger", "settle", "fade", "listen", "rest", "whisper", "deepen", "remain", "pause", "reflect", "gather", "depart", "consecrate", "testify", "covenant", "kneel", "serve", "study", "edify", "illumine", "uplift", "convene", "sing", "pray"],
      preposition: ["across", "past", "beside", "through", "along", "behind", "within", "beneath", "above", "toward", "under", "beyond"]
    },
    desert_canyon: {
      adj: ["red", "sunbaked", "dry", "carved", "vast", "dusty", "warm", "weathered", "hollow", "burnt", "ancient", "silent", "ochre", "vermillion", "maroon", "bone-dry", "parched", "layered", "stratified", "wind-polished", "copper-hued", "timeless", "eroded", "stark"],
      noun: ["sandstone", "arch", "desert", "sagebrush", "canyon", "cliff", "plateau", "wind", "mesa", "juniper", "gorge", "dust", "Bryce Canyon", "Zion", "Canyonlands", "Arches", "Capitol Reef", "slot canyon", "hoodoo", "petroglyph", "pothole", "wash", "talus", "butte", "spire", "fin", "alcove", "seep", "prickly pear", "yucca"],
      verb: ["stretch", "burn", "shift", "rise", "glow", "sweep", "wait", "remember", "sleep", "crack", "endure", "bake", "carve", "hollow", "oxidize", "calcify", "crumble", "stain", "layer", "compress", "fracture", "expose", "reveal", "outlast"],
      preposition: ["beyond", "below", "into", "over", "within", "across", "between", "beneath", "against", "through", "under", "along"]
    },
    provo_autumn: {
      adj: ["golden", "crisp", "falling", "amber", "brisk", "scattered", "fading", "cool", "sharp", "russet", "tawny", "burgundy", "ochre", "sienna", "smoke-tinged", "blushing", "fleeting", "wind-torn", "dappled", "blazing", "translucent", "ember-bright", "mellow"],
      noun: ["maple", "leaf", "trail", "breeze", "dusk", "aspen", "grove", "harvest", "twilight", "orchard", "Provo Canyon", "Rock Canyon", "Squaw Peak", "cottonwood", "gamble oak", "scrub oak", "foothill", "pumpkin patch", "cornfield", "harvest moon", "bonfire", "woodsmoke", "frost", "stubble field", "Sundance", "Alpine Loop", "canyon road"],
      verb: ["scatter", "drift", "turn", "rustle", "fall", "blow", "change", "dance", "weep", "ignite", "blaze", "flare", "smolder", "release", "surrender", "shimmer", "rake", "crunch", "spiral", "gust", "linger", "deepen", "redden", "bare"],
      preposition: ["through", "beneath", "among", "under", "beside", "along", "past", "across", "over", "within", "between", "into"]
    },
    utah_lake_spring: {
      adj: ["thawing", "bright", "rippling", "shallow", "breezy", "distant", "clear", "glassy", "mild", "silty", "freshening", "hazy", "pewter", "jade-green", "wind-ruffled", "brackish", "low", "flooding", "wading", "migratory", "nesting", "blooming", "tentative", "luminous"],
      noun: ["reed", "lake", "shore", "gull", "sail", "water", "marsh", "reflection", "tide", "morning", "pelican", "heron", "carp", "cattail", "bulrush", "mud flat", "inlet", "Provo Bay", "American Fork", "Lindon Marina", "runoff", "snowmelt", "sandbar", "waterfowl", "teal", "widgeon", "ibis", "egret", "channel", "ferry"],
      verb: ["ripple", "wake", "thaw", "shine", "return", "mirror", "wash", "sparkle", "breathe", "flood", "overflow", "teem", "migrate", "nest", "hover", "skim", "surge", "brim", "refresh", "renew", "swell", "settle", "green", "open"],
      preposition: ["across", "along", "past", "over", "beside", "into", "beneath", "through", "within", "among", "around", "above"]
    },
    great_salt_lake: {
      adj: ["briny", "vast", "flat", "alkaline", "rose-tinged", "pale", "stinging", "mineral", "crusted", "remote", "surreal", "blinding", "receding", "ancient", "primordial", "halite-white", "pink", "saline", "windswept", "desolate", "otherworldly", "shimmering"],
      noun: ["brine shrimp", "salt flat", "causeway", "Antelope Island", "pelican", "phalarope", "flamingo-pink water", "salt crust", "shoreline", "dune", "lake bed", "Bonneville", "spiral jetty", "bison", "pronghorn", "gull", "tufa", "evaporation pond", "alkali", "mirage", "horizon", "Promontory Point", "Stansbury Island"],
      verb: ["recede", "crystallize", "sting", "shimmer", "evaporate", "crust", "bleach", "reflect", "shrink", "expose", "salt", "preserve", "float", "pink", "glisten", "crack", "lay bare", "harden", "dry", "stretch", "flatten", "blind", "dissolve"],
      preposition: ["across", "along", "above", "beneath", "beyond", "into", "over", "past", "within", "under", "beside", "through"]
    },
    pioneer_heritage: {
      adj: ["weathered", "handcart", "sunburned", "faithful", "resolute", "pioneer", "covenant", "westward", "dust-covered", "iron-willed", "suffering", "devoted", "historic", "persevering", "trail-worn", "humble", "steadfast", "sacred", "gathered", "Latter-day", "chosen", "promised", "consecrated", "enduring"],
      noun: ["handcart", "wagon", "Salt Lake Temple", "Brigham Young", "Martin's Cove", "Willie Company", "pioneer", "Zion", "covenant", "restoration", "Joseph Smith", "Book of Mormon", "Nauvoo", "Missouri", "exodus", "Desert News", "Great Basin", "Deseret", "beehive", "seagull", "cricket", "harvest", "tabernacle", "This is the Place monument", "Jordan River"],
      verb: ["cross", "settle", "gather", "consecrate", "build", "sacrifice", "remember", "honor", "inherit", "carry", "pull", "push", "press on", "arrive", "dedicate", "covenant", "suffer", "persevere", "pray", "harvest", "plant", "stake", "witness", "establish"],
      preposition: ["across", "through", "into", "toward", "along", "beyond", "over", "beneath", "within", "among", "past", "beside"]
    },
    byu_football: {
      adj: ["royal", "blue", "white", "thundering", "proud", "roaring", "crowded", "electric", "faithful", "Cougar", "rival", "soaring", "gridiron", "cold", "crisp", "autumn", "triumphant", "bruising", "relentless", "storied", "sacred", "tradition-bound"],
      noun: ["LaVell Edwards Stadium", "Cougar", "touchdown", "rivalry", "Utah Utes", "kickoff", "crowd", "marching band", "end zone", "football", "quarterback", "Hail Mary", "season", "bowl game", "honor code", "team prayer", "locker room", "blue turf", "jersey", "trophy", "fan", "tailgate", "alma mater", "fight song"],
      verb: ["roar", "charge", "tackle", "cheer", "score", "rally", "fight", "run", "throw", "catch", "kick", "rise", "stand", "thunder", "surge", "defend", "honor", "unite", "celebrate", "triumph", "fall", "return", "compete", "strive"],
      preposition: ["across", "through", "into", "beneath", "above", "beyond", "along", "within", "beside", "past", "around", "under"]
    },
    mountain_summer: {
      adj: ["high", "clear", "alpine", "wildflower-dotted", "cool", "bright", "breezy", "boulder-strewn", "sky-blue", "thin-aired", "sun-drenched", "green", "rocky", "open", "sweeping", "storm-building", "thunderhead", "vast", "birdsong-filled", "lupine-purple", "granite-grey", "fleeting", "brief", "radiant"],
      noun: ["columbine", "lupine", "Indian paintbrush", "marmot", "pika", "trail", "tarn", "cirque", "snowfield", "thunderstorm", "lightning", "wildflower meadow", "granite", "talus", "ridgeline", "pass", "Wheeler Peak", "King's Peak", "Uinta", "High Uintas Wilderness", "stream", "waterfall", "footbridge", "cairn", "summit register"],
      verb: ["bloom", "buzz", "scurry", "climb", "crest", "gust", "storm", "clear", "shine", "cool", "lift", "open", "spread", "stretch", "breathe", "survey", "descend", "splash", "tumble", "flow", "melt", "emerge", "wander", "discover"],
      preposition: ["above", "across", "along", "among", "around", "below", "beneath", "beside", "beyond", "into", "over", "through"]
    }
  },
  closings: [
    "until the valley fades into the dusk.",
    "and the Wasatch keeps what I cannot name.",
    "as the campus grows quiet in the cold air.",
    "while the canyon shadows stretch into night.",
    "and no trace remains on the sandstone wall.",
    "while Utah Lake mirrors the fading light.",
    "and the Y stands quiet on the dark hill.",
    "as the first snow reaches the valley floor.",
    "until only the echo of the carillon remains.",
    "and the Salt Lake shimmers into the pale distance.",
    "while the handcart ruts still cross the frozen ground.",
    "as the temple spires hold the last of the light.",
    "and the Uintas keep their silence through the storm.",
    "while Timpanogos turns its face from the setting sun.",
    "and the pioneers' names are carved in the canyon stone.",
    "as the brine flies circle the receding shore.",
    "until the Alpine Loop is swallowed by the dark.",
    "and the Cougar banner fades with the autumn wind.",
    "while the Great Basin holds its breath beneath the stars.",
    "and the hoodoos cast their shadows into the empty wash.",
    "until the Jordan River finds the lake again.",
    "as the Spiral Jetty sinks beneath the rising brine.",
    "and the beehive state keeps turning through the night.",
    "while the desert remembers every name the wind forgets.",
    "and Zion's towers hold the light a little longer.",
    "as the choir's last note dissolves into the dome.",
    "and the Book of Mormon sits open on the empty pew.",
    "while the tailgate smoke drifts past the blue and white.",
    "and the King's Peak register holds one more forgotten name.",
    "until the wildflowers close against the mountain cold."
  ]
};