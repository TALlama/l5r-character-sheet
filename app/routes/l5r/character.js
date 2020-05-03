import Route from '@ember/routing/route';

export default class L5rCharacterRoute extends Route {
  model(params) {
    let csheets = {
      "1": {
        "name": "Kitsuki Yasu",
        "portrait_url": "/img/portraits/kitsuki_yasu.jpg",
        "school_rank": 1,
      
        "stance": "earth",
        "fatigue": 1,
        "strife": 8,
      
        "modifiers": {
          'honor': 0,
          'glory': -1,
          'status': 1,
        },
      
        "ring_components": {
          "fire": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "clan"}
          ],
          "air": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "family"}
          ],
          "water": [
            {"add": 1, "from": "default"}
          ],
          "earth": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "stands_out"}
          ],
          "void": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "6xp"},
          ]
        },
  
        "skill_components": {
          "Meditation": [
            {"add": 1, "from": "clan"}
          ],
          "Government": [
            {"add": 1, "from": "family"},
            {"add": 1, "from": "school"}
          ],
          "Sentiment": [
            {"add": 1, "from": "family"},
            {"add": 1, "from": "school"}
          ],
          "Culture": [
            {"add": 1, "from": "school"}
          ],
          "Skulduggery": [
            {"add": 1, "from": "school"},
            {"add": 1, "from": "bushido"}
          ],
          "Martial Arts [Melee]": [
            {"add": 1, "from": "school"}
          ],
          "Courtesy": [
            {"add": 1, "from": "clan_relation"},
            {"add": 1, "from": "samurai_heritage"}
          ],
          "Command": [
            {"add": 1, "from": "parents"},
          ]
        },
  
        "honor_components": [
          {"add": 45, "from": "school"}
        ],
        "glory_components": [
          {"add": 44, "from": "family"},
          {"add": -3, "from": "samurai_heritage"}
        ],
        "status_components": [
          {"add": 30, "from": "clan"}
        ],
  
        "equipment": [
          {"name": "6 koko", "from": "family"},
          {"name": "Traveling clothes", "from": "school"},
          {"name": "Wakizashi", "from": "school"},
          {"name": "Knife", "from": "school"},
          {"name": "Calligraphy set", "from": "school"},
          {"name": "Bō", "from": "school"},
          {"name": "Traveling pack", "from": "school"},
          {"name": "Journal of observations", "from": "school"},
          {"name": "Personal seal", "from": "inter_clan_relations"}
        ],
  
        "techniques_available": [
          {"name": "Kata", "from": "school"},
          {"name": "Rituals", "from": "school"},
          {"name": "Shūji", "from": "school"}
        ],
  
        "techniques": [
          {"name": "Tactical Assessment", "category": "kata", "rank": 2, "from": "school", "page": "p178", "body": "Activation: When you make an Initiative check, you may spend  in the following way:\nAir : Choose an enemy in the conflict. Learn one of their advantages (of their choice) and their physical or supernatural resistance (your choice).\nEarth : Choose a character in the conflict. They do not apply any of their disadvantages to their checks until the end of their first turn.\nWater : Choose a piece of terrain in the scene (see Terrain on page 267). Until the start of your first turn, it counts as having the Obscuring quality for Attack action checks targeting you and your allies.\nFire : Choose a character in the conflict and one of their advantages you know. Until the end of their first turn, they apply that advantage to all of their checks."},
          {"name": "Ancestry Unearthed", "category": "shūji", "rank": 1, "ring": "earth", "from": "school", "page": "p216", "body": "Activation: When you make a Scholar skill (Earth) or Social skill (Earth) check targeting a character, you may spend  as follows:\nEarth : You know one sworn oath the character’s family took in the past, and whether or not they have broken or bent it.\nEarth  : You know one secret of the character’s family that they would prefer be forgotten, and have perhaps even worked to bury.\nEarth   : You know something the character does not even known about their own ancestry."},
          {"name": "Kitsuki's Method", "category": "school", "from": "school", "page": "p67", "body": "When performing a **check to investigate** with any skill (see The Art of Investigation, on page 170), you may treat your ranks in the skill you are using as being equal to your school rank. If your ranks in the skill are equal to or higher than your school rank, or if you have 5 ranks in the skill, you may add a kept  set to an  result instead."}
        ],
  
        "advantages": [
          {"name": "Subtle Observer", "ring": "air", "page": "p110", "from": "known_for", "types": ["Interpersonal", "Mental"], "effects": ['You can understand the cues that people give off while speaking, and you can **read people’s lips** and facial expressions to understand what they are saying, even if you cannot hear them.', 'When performing a check for which you need to **spot or use small details** of other people nearby (such as a Courtesy [Air] check to reveal an unpleasant truth pleasantly or a Sentiment [Air] check to detect someone else’s weaknesses), you may reroll up to two dice.']},
          {"name": "Curiosity", "ring": "fire", "page": "p112", "from": "passion", "types": ["Mental"], "effects": ["The first time you **attempt a new task and fail**, you always think of another route you could take to try to overcome or learn more about the problem.", "After performing a check to **seek answers to an intriguing question** (such as a Medicine [Fire] check to create a new chemical concoction or a Theology [Fire] check to try to determine the metaphysical underpinnings of a particular kami’s behavior), you remove 3 strife."]},
          {"name": "Precise Memory", "ring": "earth", "page": "p109", "from": "mentor", "types": ["Mental"], "effects": ["You can **recall anything you have read or heard** within the current game session exactly, and you often dredge up older facts with much greater ease than others.", "When performing a check for which you must **recall details precisely** (such as a Games [Earth] check to recall the opening moves of a classic defensive strategy in shōgi or a Government [Earth] check to remember the specifics of a historical event), you may reroll up to two dice."]}
        ],
        "disadvantages": [
          {"name": "Lost Eye", "ring": "water", "page": "p124", "from": "adversity", "types": ["Physical", "Scar"], "effects": ["You have only **one eye**. Your field of vision is narrower, and your depth perception is somewhat diminished.", "When you make a check for which your **reduced ability to observe a wide field** or discern the exact distance to faraway objects would cause difficulties (such as a Tactics [Water] check to spot incoming threats or a Martial Arts [Ranged] [Water] check to hit targets while moving), you must choose and reroll two dice containing  or . After resolving the check, if you failed, you gain 1 Void point."]},
          {"name": "Painful Honesty", "ring": "air", "page": "p134", "from": "anxiety", "types": ["Interpersonal"], "effects": ["You are **tormented by internal conflict when you lie or allow a lie to pass**. You cannot make claims you know to be false, although you can say technically truthful things that imply untruths, if politeness or circumstances demand it.", "After you make a check to **mislead someone else** (such as a Courtesy [Air] check to falsely besmirch someone’s reputation or a Command [Air] check to manipulate an underling), you receive 3 strife. If this is the first time this has occurred this scene, gain 1 Void point."]}
        ],
  
        "questions": {
          "1": {
            "step_name": "clan",
            "page": "p44",
            "answer": "Dragon"
          },
          "2": {
            "step_name": "family",
            "page": "p51",
            "answer": "Kitsuki"
          },
          "3": {
            "step_name": "school",
            "page": "p67",
            "answer": "Investigator"
          },
          "4": {
            "step_name": "stands_out",
            "page": "p88",
            "answer": "Calm"
          },
          "5": {
            "step_name": "giri",
            "page": "p88",
            "answer": "Lady Togashi Gin sent me to investigate the death of her husband"
          },
          "6": {
            "step_name": "ninjo",
            "page": "p90",
            "answer": "A quiet life at home"
          },
          "7": {
            "step_name": "clan_relation",
            "page": "p91",
            "answer": "disagreement"
          },
          "8": {
            "step_name": "bushido_relation",
            "page": "p91",
            "answer": "divergent"
          },
          "9": {
            "step_name": "known_for",
            "page": "p92",
            "answer": "Noticing things"
          },
          "10": {
            "step_name": "adversity",
            "page": "p92",
            "answer": "The old war wound"
          },
          "11": {
            "step_name": "passion",
            "page": "p92",
            "answer": "Discovering new things"
          },
          "12": {
            "step_name": "anxiety",
            "page": "p93",
            "answer": "Knowing too much"
          },
          "13": {
            "step_name": "mentor",
            "page": "p93",
            "answer": "Shinjo Saru, Unicorn"
          },
          "14": {
            "step_name": "first_notice",
            "page": "p94",
            "answer": "Blind white right eye"
          },
          "15": {
            "step_name": "stress_reaction",
            "page": "p94",
            "answer": "Postulates increasingly irrational explanations"
          },
          "16": {
            "step_name": "inter_clan_relations",
            "page": "p94",
            "answer": "In her ronin days, worked with the Unicorn clan and sent information back home from abroad; Once uncovered a scandal among the Kitsu family"
          },
          "17": {
            "step_name": "parents",
            "page": "p95",
            "answer": "Wandering soul still in need of an anchor"
          },
          "18": {
            "step_name": "samurai_heritage",
            "page": "p95",
            "answer": "Dynasty Builder",
            "detail": "Grandmother"
          },
          "19": {
            "step_name": "personal_name",
            "page": "p95",
            "answer": "Yasu",
            "detail": "Means tranquility"
          },
          "20": {
            "step_name": "death",
            "page": "p95",
            "answer": "Dying of old age in a monastery"
          }
        }
      },
      "2": {
        "name": "Doji Kumo",
        "portrait_url": "/img/portraits/doji_kumo.jpg",
        "school_rank": 1,
      
        "stance": "water",
        "fatigue": 0,
        "strife": 0,
      
        "modifiers": {
          'honor': 0,
          'glory': 0,
          'status': 0,
        },
      
        "ring_components": {
          "fire": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "school"},
          ],
          "air": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "clan"},
            {"add": 1, "from": "school"},
          ],
          "water": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "family"},
            {"add": 1, "from": "stands_out"},
          ],
          "earth": [
            {"add": 1, "from": "default"},
          ],
          "void": [
            {"add": 1, "from": "default"},
          ]
        },
  
        "skill_components": {
          'Culture': [
            {"add": 1, "from": "clan"},     
            {"add": 1, "from": "samurai_heritage"},
          ],
          'Courtesy': [
            {"add": 1, "from": "family"},
            {"add": 1, "from": "school"},
          ],
          'Culture': [
            {"add": 1, "from": "school"},
          ],
          'Design': [
            {"add": 1, "from": "family"},
            {"add": 1, "from": "school"},
          ],
          'Smithing': [
            {"add": 1, "from": "bushido"},
            {"add": 1, "from": "mentor"},
            {"add": 1, "from": "clan_relation"},
          ],
          "Medicine": [
            {"add": 1, "from": "parents"},
          ]
        },
  
        "honor_components": [
          {"add": 50, "from": "school"},
          {"add": 10, "from": "bushido"},
        ],
        "glory_components": [
          {"add": 44, "from": "family"},
          {"add": 5, "from": "samurai_heritage"},
        ],
        "status_components": [
          {"add": 35, "from": "clan"},
        ],
  
        "equipment": [
          {"name": "8 koko", "from": "family"},
          {"name": "Sanctified robes", "from": "school"},
          {"name": "Wakizashi", "from": "school"},
          {"name": "Knife", "from": "school"},
          {"name": "Yumi", "from": "school"},
          {"name": "Quiver of arrows", "from": "school"},
          {"name": "Scroll satchel", "from": "school"},
          {"name": "Traveling pack", "from": "school"},
          {"name": "Treasure", "from": "inter_clan_relations"}
        ],
  
        "techniques_available": [
          {"name": "Invocations", "from": "school"},
          {"name": "Rituals", "from": "school"},
          {"name": "Shūji", "from": "school"},
        ],
  
        "techniques": [
          {"name": "Blessed Wind", "category": "invocations", "rank": 1, "ring": "air", "from": "school", "page": "p192", "body": "Activation: As a Support action, you may make a TN 2 Theology (Air) check targeting one position at range 0–3.\nEffects: If you succeed, you summon a swirling wind at the target position. Any character at range 0–2 of the chosen position counts as being in Obscuring terrain (see Terrain, on page 267) for the purposes of Attack actions targeting them. This effect persists for one round, plus additional rounds equal to your bonus successes.\nAir : This effect persists until the end of the scene instead."},
          {"name": "Reflections of P'an Ku", "category": "invocations", "rank": 1, "ring": "water", "from": "school", "page": "p209", "body": "Activation: As a Scheme action, you may make a TN 2 Theology (Water) check targeting one item at range 0–1.\nEffects: If you succeed, you scry to uncover all properties an item possesses, including its name, maker, mundane qualities, magical properties, curses, and sealed techniques (see Nemuranai on page 307).\nWater : Gain knowledge of the item’s origin in broad strokes, such as where it was forged, the clan of the individual who has carried it the longest, or a similar piece of information.\nWater : You may target a character instead of an object. If you succeed, you identify one invocation, kihō, mahō, or supernatural ability or item possessed by that person, along with its name and general qualities."},
          {"name": "Token of Memory", "category": "invocations", "rank": 1, "ring": "air", "from": "school", "page": "p195", "body": "Activation: As a Scheme action, you may make a TN 2 Theology (Air) check targeting one position at range 0–1.\nEffects: If you succeed, you summon an illusion of one inanimate object at the target position. The illusory object’s size is a silhouette of up to your bonus successes (beginning at 0, or a small handheld object). The item appears real, but it does not actually exist, and it cannot be used. Any character confronted with one of these illusions must resist with a TN 4 Artisan, Smithing, or Design check (Earth 5, Fire 2) using a Scholar skill approach to discern its illusory nature. The object persists until the end of the scene.\nAir : The object can appear to be a creature or per- son (though it does not move).\nAir +: Summon one additional illusory object in range per  spent this way.\nAir  : Illusory objects you summon this way have mass, and they can be used as if they were real (though they are still inanimate, and thus do not move on their own). They still vanish when the effect ends."},
          {"name": "Commune with the Spirits", "category": "rituals", "rank": 1, "ring": "void", "from": "school", "page": "p212", "body": "Activation: As a downtime activity or Support action, you may make a TN 1 Theology check using Air, Earth, Fire, Water, or Void to appeal to nearby spirits of that Element (appeal to the departed, such as ancestor spirits, and other non-elemental supernatural presenc- es, if using Void) for aid.\nEffects: If you succeed, choose and receive one of the following boons from the spirit or spirits you contacted:\n* Sense the Kami: Detect all spirits and uses of their magic by shugenja within a number of range bands equal to the ring you used plus your bonus successes.\n* Spiritual Knowledge: Learn one fact the spirits know about the area.\n* Elemental Gift: The kami deliver a small amount of the Element in question to you. For instance, a prayer to a water kami might cause it to begin raining lightly, for a short time, but it might also cause you to run across a stream, or even find groundwater. In contrast, a prayer to fire kami might bring forth a small shower of sparks, while a prayer to an air kami might elicit a gust of wind. Praying to an earth kami might cause you to stumble across a large stone, or find a small patch of arable ground amid a wasteland. Prayers to the ancestors may allow the petitioner to find something that belonged to an ancestor in a time of need.\n: Reduce the TN of your next check to interact with or appeal to kami or supernatural presences of this Ele- ment by 1.\n+: If you succeed, receive one additional boon per  spent this way. Each boon can only be received one time per activation."},
          {"name": "Cleansing Rite", "category": "rituals", "rank": 1, "ring": "void", "from": "school", "page": "p212", "body": "Activation: As a downtime activity, you may make a TN 3 Theology (Void) check targeting up to five char- acters to remove spiritual contaminants from the tar- gets before they spread. Note that this cannot remove a Shadowlands Taint disadvantage once it has taken hold, but it can prevent this spiritual contamination from taking root after a character is exposed.\nEffects: If you succeed, remove the Afflicted condition from the target.\nVoid : If one or more targets is an Otherworldly being, you become aware of it after completing the ritual—but you do not know which target.\nVoid +: Choose one additional target per  spent this way.\nVoid +: Instead of targeting characters, you may target an area that encompasses a number of range bands around you equal to  spent this way. Remove the Defiled terrain quality from this area. If it is a deeply unhallowed place that has long been the domain of evil, the Defiled quality returns after one day, plus addi- tional days equal to your bonus successes."},
        ],
  
        "advantages": [
          {"name": "Bishamon's Blessing", "ring": "water", "page": "p102", "from": "known_for", "types": ["Physical", "Spiritual"], "effects": ['You **recover from physical exhaustion** twice as quickly as others.', 'When performing a check for which the **favor of this Fortune** is a benefit (such as a Fitness [Water] check to recover from exhaustion or a Martial Arts [Unarmed] [Water] check to subdue a foe), you may reroll up to two dice.']},
          {"name": "Armament", "ring": "earth", "page": "p111", "from": "passion", "types": ["Mental"], "effects": ['Unless the piece comes from outside of the Emerald Empire, you **know the name of any weapon or piece of armor** you encounter, are aware of its function, and have a rudimentary understanding of how to equip and wield it.', 'After performing a check to **make or study arms or armor** (such as a Smithing [Earth] check to polish a suit of armor or a Tactics [Earth] check to know how to arrange a proper spear formation), you remove 3 strife.']},
        ],
        "disadvantages": [
          {"name": "Bitter Betrothal", "ring": "water", "page": "p117", "from": "adversity", "types": ["Interpersonal"], "effects": ['Something significantly complicates **your relationship with your betrothed or spouse**. As a result, they often undermine your efforts, whether out of malice, negligence, or an incompatible set of goals.', 'When you make a check that **requires the collaboration of your betrothed or spouse** (such as a Courtesy [Water] check to make a polite request to their family for political backing or a Culture [Water] check to know the proper thing to do at a social function involving their relatives), you must choose and reroll two dice containing  or . After resolving the check, if you failed, you gain 1 Void point.']},
          {"name": "Cognitive Lapses", "ring": "void", "page": "p118", "from": "anxiety", "types": ["Mental", "Scar"], "effects": ['At the GM’s discretion, you sometimes **lose your ability to focus or think consciously**. Your body continues to act during these times according to your general instincts, and it does not undertake actions you would not consciously perform, but you do not form coherent memories of these times. After you suffer such a lapse that lasts for more than a few brief moments at the GM’s choice, you gain 1 Void point.', 'When you make a check for which you must **recall anything that happened during a period of cognitive lapse** (such as a Meditation [Void] check to understand your past decisions or a Sentiment [Void] check to guess what you might have said to someone based on their reaction to you), you must choose and reroll two dice con- taining  or . After resolving the check, if you failed, you gain 1 Void point.']},
          {"name": "Loathing for Peasants", "ring": "water", "page": "pEE247", "from": "mentor", "types": ["..."], "effects": ['', '']},
        ],
  
        "questions": {
          "1": {
            "step_name": "clan",
            "page": "p44 XXX",
            "answer": "Crane"
          },
          "2": {
            "step_name": "family",
            "page": "p51 XXX",
            "answer": "Doji"
          },
          "3": {
            "step_name": "school",
            "page": "p67 XXX",
            "answer": "Asahina Artificer"
          },
          "4": {
            "step_name": "stands_out",
            "page": "p88 XXX",
            "answer": "Adaptability"
          },
          "5": {
            "step_name": "giri",
            "page": "p88",
            "answer": "Doji no Takeko-sama. I craft weapons for her"
          },
          "6": {
            "step_name": "ninjo",
            "page": "p90",
            "answer": "I long to wield the weapons I create"
          },
          "7": {
            "step_name": "clan_relation",
            "page": "p91",
            "answer": "Conflicted. I belong to a pacifistic clan and craft weapons that enable violence"
          },
          "8": {
            "step_name": "bushido_relation",
            "page": "p91",
            "answer": "It is an honorable code to follow, even moreso while wielding one of my masterpieces"
          },
          "9": {
            "step_name": "known_for",
            "page": "p92",
            "answer": "Crafting Takeko-sama's personal katana"
          },
          "10": {
            "step_name": "adversity",
            "page": "p92",
            "answer": "The necessity of my trade"
          },
          "11": {
            "step_name": "passion",
            "page": "p92",
            "answer": "Designing adornments for scabbards and blades"
          },
          "12": {
            "step_name": "anxiety",
            "page": "p93",
            "answer": "Embarrassing my clan"
          },
          "13": {
            "step_name": "mentor",
            "page": "p93",
            "answer": "Gogo Masamune - the blacksmith I apprenticed under"
          },
          "14": {
            "step_name": "first_notice",
            "page": "p94",
            "answer": "My jade green eyes and long black hair. They then slowly realize I am not the greeter for the smithy, I am the Smith"
          },
          "15": {
            "step_name": "stress_reaction",
            "page": "p94",
            "answer": "I speak without thinking"
          },
          "16": {
            "step_name": "inter_clan_relations",
            "page": "p94",
            "answer": "The Yasuki family of Crab supply me with the raw materials I use to craft my goods.\nThe Isawa family of the Phoenix clan are black magic elementalists."
          },
          "17": {
            "step_name": "parents",
            "page": "p95",
            "answer": "Misled"
          },
          "18": {
            "step_name": "samurai_heritage",
            "page": "p95",
            "answer": "Wondrous work",
            "detail": "Scabbard"
          },
          "19": {
            "step_name": "personal_name",
            "page": "p95",
            "answer": "Kumo",
            "detail": "XXX"
          },
          "20": {
            "step_name": "death",
            "page": "p95",
            "answer": "In battle, finally wielding a blade she crafted herself"
          }
        }
      },
      "3": {
        "name": "Doji Uchida",
        "portrait_url": "/img/portraits/doji_uchida.png",
        "school_rank": 1,
      
        "stance": "air",
        "fatigue": 0,
        "strife": 0,
      
        "modifiers": {
          'honor': 0,
          'glory': 0,
          'status': 0,
        },
      
        "ring_components": {
          "fire": [
            {"add": 1, "from": "default"},
          ],
          "air": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "family"},
            {"add": 1, "from": "school"},
          ],
          "water": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "clan"},
            {"add": 1, "from": "school"},
          ],
          "earth": [
            {"add": 1, "from": "default"},
          ],
          "void": [
            {"add": 1, "from": "default"},
            {"add": 1, "from": "stands_out"},
          ]
        },
  
        "skill_components": {
          'Aesthetics': [
            {"add": 1, "from": "school"},
          ],
          'Composition': [
            {"add": 1, "from": "school"},            
          ],
          'Design': [
            {"add": 1, "from": "school"},
          ],
          'Smithing': [
            {"add": 1, "from": "bushido"},
          ],
          'Courtesy': [
            {"add": 1, "from": "clan"},
            {"add": 1, "from": "family"},
          ],
          'Culture': [
            {"add": 1, "from": "family"},
            {"add": 1, "from": "clan_relation"},
          ],
          'Government': [
            {"add": 1, "from": "school"},
          ],
          'Commerce': [
            {"add": 1, "from": "parents"},
            {"add": 1, "from": "samurai_heritage"},
          ],
          'Skulduggery': [
            {"add": 1, "from": "???"},
          ]
        },
  
        "honor_components": [
          {"add": 0, "from": "school"}
        ],
        "glory_components": [
          {"add": 0, "from": "family"},
          {"add": 0, "from": "samurai_heritage"}
        ],
        "status_components": [
          {"add": 0, "from": "clan"}
        ],
  
        "equipment": [
          {"name": "8 koko", "from": "family"},
          {"name": "Ceremonial Clothes", "from": "school"},
          {"name": "Wakisashi", "from": "school"},
          {"name": "Yumi", "from": "school"},
          {"name": "Calligraphy Set", "from": "school"},
          {"name": "Traveling Pack", "from": "school"},
          {"name": "Attendant", "from": "school"},
          {"name": "Calligraphy Set", "from": "school"},
          {"name": "Treasure", "from": "inter_clan_relations"}
        ],
  
        "techniques_available": [
          {"name": "Kata", "from": "school"},
          {"name": "Rituals", "from": "school"},
          {"name": "Shūji", "from": "school"},
        ],
  
        "techniques": [
          {"name": "Whispers of Court", "ring": "air", "category": "shūji", "rank": 1, "from": "school", "page": "p215", "body": "Activation: As a Scheme action, you may make a Cour- tesy (Air) check targeting each character in the scene. The TN of this check is equal to the lowest vigilance among your targets.\nEffects: If you succeed, you create a rumor that sweeps across the room like a storm. Everyone in the scene hears it, and characters with vigilance lower than your bonus successes even come to give it some credence. If spreading a rumor is your social objective in an intrigue, you score rhetorical points equal to your Air Ring plus your bonus successes.\nAir : Learn one other rumor that is spreading in the current scene."},
          {"name": "Lady Doji's Decree", "ring": "void", "category": "shūji", "rank": 1, "from": "school", "page": "p222", "body": "Activation: Once per game session as an action, you may make a Courtesy (Void) check targeting a number of characters up to your school rank. The TN of this check is equal to the vigilance of the character with the highest status among your targets.\nEffects: If you succeed, your targets cannot perform Attack actions targeting you. This effect persists for one round, plus additional rounds equal to your bonus successes, or until you perform an Attack action.\nVoid +: Choose one additional target with status lower than your first target per  spent this way.\nVoid  : Your targets also cannot perform Scheme actions targeting you."},
          {"name": "Speaking in Silence", "category": "school", "from": "school", "page": "p64", "body": "Once per scene when making a check to persuade or influence some- one, you may add a number of kept  set to a  results equal to your school rank."},
        ],
  
        "advantages": [
          {"name": "Dangerous Allure", "ring": "fire", "page": "p103", "from": "known_for", "types": ["Physical", "Interpersonal"], "effects": ["You always make an impression, and NPCs remember your name and face after interacting with you for one or more scenes (unless you take pains to disguise yourself).", "When performing a check for which your good looks are a benefit (such as a Command [Fire] check to get someone to act in spite of the possible consequences or a Performance [Fire] check to incite emotion in someone), you may reroll up to two dice."]},
          {"name": "Gossip", "ring": "air", "page": "p113", "from": "passion", "types": ["Interpersonal"], "effects": ["At the start of each scene, you can always iden- tify the character present who will know the juiciest rumors (besides yourself, obviously).", "After performing a check to spread or receive rumors (such as a Courtesy [Air] check to cast someone in a certain light when telling a story about them or a Culture [Air] check to read peo- ple’s current anxieties from the subtle ways they obey or break etiquette), you remove 3 strife."]},
        ],
        "disadvantages": [
          {"name": "Sworn Enemy", "ring": "earth", "page": "p129", "from": "adversity", "types": ["Interpersonal"], "effects": ["You and the GM should select or create a character to be your sworn enemy. Your sworn enemy exists within the world and periodically meddles in your affairs, directly or indirectly, at the GM’s discretion. If your sworn enemy perishes, you must either remove this disad- vantage, acquire a new sworn enemy (perhaps someone who hates you because of your role in the demise of the previous one), or find a way for your deceased foe to continue playing a role in your life.", "When you make a check to remain rational in the presence of this person you hate (such as a Courtesy [Earth] check to interact with this per- son without being provocative or a Meditation [Earth] check to stay stoic in the face of their insults), you must choose and reroll two dice containing  or . After resolving the check, if you failed, you gain 1 Void point."]},
          {"name": "Irrepressible Flirtation", "ring": "earth", "page": "p134", "from": "anxiety", "types": ["Interpersonal"], "effects": ["You find it difficult to pass up the chance to flirt with people you find attractive, and when some- one you find attractive flirts with you, you cannot help but return their advances with your own flir- tation. Your interest is obvious to all onlookers.", "After performing a check to interact with (or ignore) someone you are interested in without exceeding propriety (such as a Courtesy [Earth] check to make appropriate small talk or a Sen- timent [Earth] check to know how to tread cau- tiously in a social scene), you receive 3 strife. If this is the first time this has occurred this scene, gain 1 Void point."]},
          {"name": "Superstition", "ring": "void", "page": "p136", "from": "mentor", "types": ["Mental", "Spiritual"], "effects": ["When faced with signs of the supernatural, you become visibly agitated, and you attempt to leave the scene, appease the being or phe- nomenon in question, or acquire supernatural protection of some kind.", "After performing a check to interact with or learn about a supernatural being or phenome- non (such as a Meditation [Void] check to per- ceive the presence of a supernatural being or a Theology [Void] check to know a supernatural being’s designs or desires), you receive 3 strife. If this is the first time this has occurred this scene, gain 1 Void point."]},
        ],
  
        "questions": {
          "1": {
            "step_name": "clan",
            "page": "p44 XXX",
            "answer": "Crane"
          },
          "2": {
            "step_name": "family",
            "page": "p51 XXX",
            "answer": "Doji"
          },
          "3": {
            "step_name": "school",
            "page": "p67 XXX",
            "answer": "Diplomat"
          },
          "4": {
            "step_name": "stands_out",
            "page": "p88 XXX",
            "answer": "Self awareness, insight, or mysticism"
          },
          "5": {
            "step_name": "giri",
            "page": "p88",
            "answer": "Doji Miyamoto. Try and establish an illegal arms deal."
          },
          "6": {
            "step_name": "ninjo",
            "page": "p90",
            "answer": "I want to be the new regional Daimyo"
          },
          "7": {
            "step_name": "clan_relation",
            "page": "p91",
            "answer": "???"
          },
          "8": {
            "step_name": "bushido_relation",
            "page": "p91",
            "answer": "It's convenient with it's needed"
          },
          "9": {
            "step_name": "known_for",
            "page": "p92",
            "answer": "Won a spot on a diplomatic trip to a major clan"
          },
          "10": {
            "step_name": "adversity",
            "page": "p92",
            "answer": "Hirai Yogo, my rival in the Scorpion clan"
          },
          "11": {
            "step_name": "passion",
            "page": "p92",
            "answer": "What happens at the court…"
          },
          "12": {
            "step_name": "anxiety",
            "page": "p93",
            "answer": "The draw of a lovely lady"
          },
          "13": {
            "step_name": "mentor",
            "page": "p93",
            "answer": "Obason"
          },
          "14": {
            "step_name": "first_notice",
            "page": "p94",
            "answer": "Welcoming smile leads people into a false sense of security"
          },
          "15": {
            "step_name": "stress_reaction",
            "page": "p94",
            "answer": "He rolls his eyes and nervously chuckles to oneself as if a joke was told but only he heard it"
          },
          "16": {
            "step_name": "inter_clan_relations",
            "page": "p94",
            "answer": "Tensions with the Scorpion Yogo family. Great business relationship with the Lion Ikoma family"
          },
          "17": {
            "step_name": "parents",
            "page": "p95",
            "answer": "???"
          },
          "18": {
            "step_name": "samurai_heritage",
            "page": "p95",
            "answer": "Elevated for Service",
            "detail": "???"
          },
          "19": {
            "step_name": "personal_name",
            "page": "p95",
            "answer": "???",
            "detail": "???"
          },
          "20": {
            "step_name": "death",
            "page": "p95",
            "answer": "Returning to the Doji school to train a new batch of Diplomats"
          }
        }
      },
      "template": {
        "name": "Doji Kumo",
        "portrait_url": "/img/portraits/doji_jumo.jpg",
        "school_rank": 1,
      
        "stance": "water",
        "fatigue": 0,
        "strife": 0,
      
        "modifiers": {
          'honor': 0,
          'glory': 0,
          'status': 0,
        },
      
        "ring_components": {
          "unplaced": [
            {"add": 1, "from": "clan"},
            {"add": 1, "from": "family"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "stands_out"},
            
          ],
          "fire": [
            {"add": 1, "from": "default"},
          ],
          "air": [
            {"add": 1, "from": "default"},
          ],
          "water": [
            {"add": 1, "from": "default"},
          ],
          "earth": [
            {"add": 1, "from": "default"},
          ],
          "void": [
            {"add": 1, "from": "default"},
          ]
        },
  
        "skill_components": {
          "unplaced": [
            {"add": 1, "from": "clan"},
            {"add": 1, "from": "family"},
            {"add": 1, "from": "family"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "school"},
            {"add": 1, "from": "bushido"},
            {"add": 1, "from": "parents"},
            {"add": 1, "from": "clan_relation"},
            {"add": 1, "from": "samurai_heritage"},
          ],
        },
  
        "honor_components": [
          {"add": 0, "from": "school"}
        ],
        "glory_components": [
          {"add": 0, "from": "family"},
          {"add": 0, "from": "samurai_heritage"}
        ],
        "status_components": [
          {"add": 0, "from": "clan"}
        ],
  
        "equipment": [
          {"name": "0 koko", "from": "family"},
          {"name": "Stuff", "from": "school"},
          {"name": "Treasure", "from": "inter_clan_relations"}
        ],
  
        "techniques_available": [
          {"name": "X", "from": "school"},
        ],
  
        "techniques": [
          {"name": "...", "ring": "air|earth|fire|water|void", "category": "kata|shūji|school|invocations|rituals", "rank": 1, "from": "school", "page": "pXXX", "body": "..."},
        ],
  
        "advantages": [
          {"name": "...", "ring": "air|earth|fire|water|void", "page": "pXXX", "from": "known_for", "types": ["..."], "effects": ['', '']},
          {"name": "...", "ring": "air|earth|fire|water|void", "page": "pXXX", "from": "passion", "types": ["..."], "effects": ['', '']},
          {"name": "...", "ring": "air|earth|fire|water|void", "page": "pXXX", "from": "mentor", "types": ["..."], "effects": ['', '']},
        ],
        "disadvantages": [
          {"name": "...", "ring": "air|earth|fire|water|void", "page": "pXXX", "from": "adversity", "types": ["..."], "effects": ['', '']},
          {"name": "...", "ring": "air|earth|fire|water|void", "page": "pXXX", "from": "anxiety", "types": ["..."], "effects": ['', '']},
        ],
  
        "questions": {
          "1": {
            "step_name": "clan",
            "page": "p44 XXX",
            "answer": "XXX"
          },
          "2": {
            "step_name": "family",
            "page": "p51 XXX",
            "answer": "XXX"
          },
          "3": {
            "step_name": "school",
            "page": "p67 XXX",
            "answer": "XXX"
          },
          "4": {
            "step_name": "stands_out",
            "page": "p88 XXX",
            "answer": "XXX"
          },
          "5": {
            "step_name": "giri",
            "page": "p88",
            "answer": "XXX"
          },
          "6": {
            "step_name": "ninjo",
            "page": "p90",
            "answer": "XXX"
          },
          "7": {
            "step_name": "clan_relation",
            "page": "p91",
            "answer": "XXX"
          },
          "8": {
            "step_name": "bushido_relation",
            "page": "p91",
            "answer": "XXX"
          },
          "9": {
            "step_name": "known_for",
            "page": "p92",
            "answer": "XXX"
          },
          "10": {
            "step_name": "adversity",
            "page": "p92",
            "answer": "XXX"
          },
          "11": {
            "step_name": "passion",
            "page": "p92",
            "answer": "XXX"
          },
          "12": {
            "step_name": "anxiety",
            "page": "p93",
            "answer": "XXX"
          },
          "13": {
            "step_name": "mentor",
            "page": "p93",
            "answer": "XXX"
          },
          "14": {
            "step_name": "first_notice",
            "page": "p94",
            "answer": "XXX"
          },
          "15": {
            "step_name": "stress_reaction",
            "page": "p94",
            "answer": "XXX"
          },
          "16": {
            "step_name": "inter_clan_relations",
            "page": "p94",
            "answer": "XXX"
          },
          "17": {
            "step_name": "parents",
            "page": "p95",
            "answer": "XXX"
          },
          "18": {
            "step_name": "samurai_heritage",
            "page": "p95",
            "answer": "XXX",
            "who": "XXX"
          },
          "19": {
            "step_name": "personal_name",
            "page": "p95",
            "answer": "XXX",
            "why": "XXX"
          },
          "20": {
            "step_name": "death",
            "page": "p95",
            "answer": "XXX"
          }
        }
      }
    };
    
    return this.store.createRecord('l5r/character', csheets[params.id]);
  }
}
