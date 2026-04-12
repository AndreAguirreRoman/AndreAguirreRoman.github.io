const POEM_DATA = {
  moonlight: {
    titles: [
      "Moon over the Courtyard",
      "Night by the Window",
      "Under a Thin Moon",
      "The Quiet Terrace",
      "Pale Light on the Steps"
    ],
    openings: [
      "A thin moon lingers above the silent roof,",
      "Night settles softly over the courtyard wall,",
      "Pale light drifts across the empty steps,",
      "Moonlight reaches the old bamboo gate,",
      "The western sky clears after a passing rain,"
    ],
    images: [
      "bamboo shadows lie broken on white stone.",
      "a cool wind moves through the paper screen.",
      "the well rope sways without a sound.",
      "plum branches lean toward the lamp glow.",
      "dew gathers along the mossed path."
    ],
    reflections: [
      "I sit long enough to forget the hour,",
      "old thoughts return, but only faintly,",
      "the heart grows quiet before such light,",
      "no one speaks, yet the room feels full,",
      "I remember distance and say nothing,"
    ],
    transitions: [
      "Far off, a bell is carried by the wind,",
      "Somewhere beyond the wall, leaves stir once,",
      "Cloud edges pass and brighten the eaves,",
      "The night deepens around the narrow lane,",
      "A faint fragrance crosses the open sill,"
    ],
    closings: [
      "until even the shadows seem at rest.",
      "and the moon keeps what I cannot name.",
      "while the last brightness slips into stillness.",
      "as though sorrow itself had grown transparent.",
      "and no trace remains but the cool air."
    ]
  },

  autumn: {
    titles: [
      "Autumn Evening",
      "After the Leaves Fall",
      "Cold Season",
      "Autumn on the Hill Path",
      "Late Light"
    ],
    openings: [
      "Autumn enters by way of the western wind,",
      "Late light lies thin across the hillside path,",
      "The first cold reaches the outer fence,",
      "Evening settles over the distant trees,",
      "The sky grows high and the air turns spare,"
    ],
    images: [
      "yellow leaves collect beside the worn steps.",
      "wild geese vanish beyond the pale clouds.",
      "the chrysanthemums hold their color in silence.",
      "the stream carries a few red leaves away.",
      "the grass bends low beneath the frost."
    ],
    reflections: [
      "I feel the season more than I can speak,",
      "the heart yields quietly to this clarity,",
      "old partings return with the colder air,",
      "I stand still and listen to what is leaving,",
      "the day grows empty, but not unkind,"
    ],
    transitions: [
      "A woodcutter's song fades along the slope,",
      "Smoke rises straight from a distant roof,",
      "The long road keeps its silence to the end,",
      "The mountain edge darkens by slow degrees,",
      "No footsteps pass the narrow bridge,"
    ],
    closings: [
      "and evening closes over the remaining light.",
      "until only the clear sky is left behind.",
      "as if the world had finished saying farewell.",
      "and the cold makes every thought more exact.",
      "while one leaf turns in the stream below."
    ]
  },

  spring: {
    titles: [
      "Spring Rain",
      "Early Spring",
      "By the Garden Wall",
      "Spring Morning",
      "New Season"
    ],
    openings: [
      "Spring rain arrives before the dawn is clear,",
      "A mild wind enters through the half-closed gate,",
      "Morning light rests on the wet garden stones,",
      "The new season stirs the branches all at once,",
      "Clouds lift slowly from the distant fields,"
    ],
    images: [
      "pear blossoms scatter over the moss below.",
      "swallows turn above the narrow lane.",
      "green shoots rise along the old wall base.",
      "the stream sounds fuller after the rain.",
      "willow threads tremble in the pale air."
    ],
    reflections: [
      "the heart opens, though I do not call it joy,",
      "I watch quietly and let the morning pass,",
      "some forgotten brightness returns for a moment,",
      "it seems enough merely to remain here,",
      "the season speaks most clearly when no one answers,"
    ],
    transitions: [
      "A neighbor's window opens and closes once,",
      "From the far fields comes the smell of wet earth,",
      "Sunlight begins to gather on the eaves,",
      "Drops still fall from the last low branch,",
      "The courtyard grows brighter without hurry,"
    ],
    closings: [
      "and the whole day feels newly washed.",
      "while the blossoms drift beyond the wall.",
      "as though spring had entered without footsteps.",
      "and the light stays a little longer than before.",
      "until even silence seems full of color."
    ]
  },

  solitude: {
    titles: [
      "Sitting Alone",
      "Solitary Evening",
      "Quiet Room",
      "No Visitor",
      "Alone in the Hills"
    ],
    openings: [
      "No visitor comes to the hill room today,",
      "The small gate remains closed through the afternoon,",
      "I sit alone beside an unlit lamp,",
      "The path outside is empty after rain,",
      "The room is narrow, but the silence is deep,"
    ],
    images: [
      "dust rests undisturbed on the low table.",
      "pine shadows lean across the threshold.",
      "the tea cools beside the open book.",
      "one bird calls, then does not call again.",
      "the mountain mist gathers at the window."
    ],
    reflections: [
      "in such stillness, thought becomes almost visible,",
      "I find no grief in being left alone,",
      "the mind loosens from its needless noise,",
      "what felt heavy in daylight now grows light,",
      "solitude asks little and gives enough,"
    ],
    transitions: [
      "A cloud drifts slowly past the far ridge,",
      "The shadows climb the wall and then disappear,",
      "By degrees the room enters evening,",
      "The incense thread burns down without witness,",
      "Only the wind keeps company with the pines,"
    ],
    closings: [
      "and I let the day end without resistance.",
      "as though quiet were a kind of answer.",
      "until the night folds into the empty chair.",
      "and even loneliness becomes serene.",
      "with nothing missing from the final hour."
    ]
  },

  farewell: {
    titles: [
      "Parting at the Bridge",
      "Farewell Song",
      "After the Departure",
      "Seeing a Friend Off",
      "At the River Crossing"
    ],
    openings: [
      "At the river crossing, we part before noon,",
      "Your boat has already moved beyond the reeds,",
      "The last words were spoken beside the bridge,",
      "Dust rose lightly where your horse turned south,",
      "You left while morning was still cool,"
    ],
    images: [
      "only the wake remains on the quiet water.",
      "the long road fades among willows and mist.",
      "a traveler's shadow narrows in the distance.",
      "the shore grass bends after your passing.",
      "the ferry rope strikes softly against the post."
    ],
    reflections: [
      "I stand longer than there is reason to stand,",
      "parting is simple; its echo is not,",
      "the heart follows farther than the eyes can go,",
      "nothing is said now that was not already known,",
      "I turn back slowly, though the road is empty,"
    ],
    transitions: [
      "Clouds drift low over the far bank,",
      "Even the gulls seem slower above the water,",
      "The afternoon grows quiet around the landing,",
      "A faint song comes from another unseen boat,",
      "The reeds close again around the channel,"
    ],
    closings: [
      "and the river keeps the rest for itself.",
      "while one thought travels on without me.",
      "until distance becomes only a color in the air.",
      "and silence arrives where your voice had been.",
      "as though departure were the truest part of meeting."
    ]
  },

  river: {
    titles: [
      "By the River",
      "Watercourse",
      "River Mist",
      "At the Ford",
      "Flowing East"
    ],
    openings: [
      "The river moves east beneath a pale sky,",
      "Morning mist lingers above the waterline,",
      "At the ford, cold light touches the stones,",
      "The long current passes without haste,",
      "Clouds travel with the river beyond the reeds,"
    ],
    images: [
      "small waves fold against the dark bank grass.",
      "a fishing boat drifts near the far shore.",
      "white gulls rise and settle again.",
      "the sandbar shines after the night's rain.",
      "water sounds among the roots of willow trees."
    ],
    reflections: [
      "I watch until my own thoughts seem to flow with it,",
      "the heart eases when it follows moving water,",
      "nothing stays, yet nothing feels lost,",
      "the river speaks in a language without words,",
      "I could remain here through the whole afternoon,"
    ],
    transitions: [
      "Sunlight breaks briefly through the passing cloud,",
      "An oar strikes the water and then is still,",
      "The far hills fade and return in mist,",
      "A cool breath rises from the current,",
      "The bank path bends out of sight among reeds,"
    ],
    closings: [
      "and the current carries away what I cannot hold.",
      "until even memory moves more gently.",
      "while the day widens beyond the opposite shore.",
      "and all unfinished thoughts drift into distance.",
      "as though the water had room for every silence."
    ]
  }
};