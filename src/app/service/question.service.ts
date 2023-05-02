import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export type Quote = {
  sentence: string,
  character: any
};


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private readonly URL = 'https://api.gameofthronesquotes.xyz'

  constructor(private http : HttpClient) { }

  getRandomQuestions(number: any){
    return this.http.get<any>(this.URL + '/v1/random/' + number);
  }

  getQuestions() {
    return [
      {
          "sentence": "Everyone who makes a joke about a dwarf's height thinks he's the only person ever to make a joke about a dwarf's height.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "Every man must die, Jon Snow. but first, he must live",
          "character": {
              "name": "Ygritte",
              "slug": "ygritte",
              "house": {
                  "name": null,
                  "slug": null
              }
          }
      },
      {
          "sentence": "You know nothing, Jon Snow.",
          "character": {
              "name": "Ygritte",
              "slug": "ygritte",
              "house": {
                  "name": null,
                  "slug": null
              }
          }
      },
      {
          "sentence": "I want our baby to live. Don't let me die, Jaime. Please don't let me die.",
          "character": {
              "name": "Cersei Lannister",
              "slug": "cersei",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "Fear cuts deeper than swords.",
          "character": {
              "name": "Arya Stark",
              "slug": "arya",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "All this horror that has come to my family, it's all because I couldn't love a motherless child.",
          "character": {
              "name": "Catelyn Stark",
              "slug": "catelyn",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "I'm guilty of being a dwarf.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "Tears aren't a woman's only weapon. The best one's between your legs.",
          "character": {
              "name": "Cersei Lannister",
              "slug": "cersei",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "All I ever wanted was to fight for a lord I believed in. But the good lords are dead and the rest are monsters.",
          "character": {
              "name": "Brienne of Tharth",
              "slug": "brienne",
              "house": {
                  "name": "House Tarth of Evenfall Hall",
                  "slug": "tarth"
              }
          }
      },
      {
          "sentence": "I hate the king more than any of them.",
          "character": {
              "name": "Sansa Stark",
              "slug": "sansa",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "He was no dragon. Fire cannot kill a dragon.",
          "character": {
              "name": "Daenerys Targaryen",
              "slug": "daenerys",
              "house": {
                  "name": "House Targaryen of King's Landing",
                  "slug": "targaryen"
              }
          }
      },
      {
          "sentence": "When you tear out a man's tongue, you are not proving him a liar, you're only telling the world that you fear what he might say",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "Death is so terribly final, while life is full of possibilities.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "Everything before the word \"but\" is horseshit.",
          "character": {
              "name": "Jon Snow",
              "slug": "jon",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "I was told you were drunk, impertinent and thoroughly debauched. You can imagine my disappointment at finding nothing but a browbeaten bookkeeper.",
          "character": {
              "name": "Olenna Tyrell",
              "slug": "olenna",
              "house": {
                  "name": "House Tyrell of Highgarden",
                  "slug": "tyrell"
              }
          }
      },
      {
          "sentence": "When the snows fall and the white winds blow, the lone wolf dies but the pack survives",
          "character": {
              "name": "Eddard \"Ned\" Stark",
              "slug": "ned",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "I have a lot of experience in losing.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "A Lannister always pays his debts.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "It doesn’t matter what we want. Once we get it, then we want something else.",
          "character": {
              "name": "Petyr Baelish",
              "slug": "baelish",
              "house": {
                  "name": "House Baelish of Harrenhal",
                  "slug": "baelish"
              }
          }
      },
      {
          "sentence": "That's what I do: I drink and I know things.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "I'm a constant disappointment to my own father, and I have learned to live with it.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "Burn them all!",
          "character": {
              "name": "Aerys II Targaryen",
              "slug": "aerys",
              "house": {
                  "name": "House Targaryen of King's Landing",
                  "slug": "targaryen"
              }
          }
      },
      {
          "sentence": "We don't have time for all this. The Night King has your dragon. He's one of them now. The Wall has fallen. The dead march south.",
          "character": {
              "name": "Bran Stark",
              "slug": "bran",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "A ruler who hides behind paid executioners soon forgets what death is.",
          "character": {
              "name": "Eddard \"Ned\" Stark",
              "slug": "ned",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "Laughter is poison to fear.",
          "character": {
              "name": "Catelyn Stark",
              "slug": "catelyn",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "People often claim to hunger for truth, but seldom like the taste when it's served up.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "The war is not over. And I promise you, friend, the true enemy won't wait out the storm. He brings the storm.",
          "character": {
              "name": "Jon Snow",
              "slug": "jon",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "I am a Stark of Winterfell, this is my home. And you can't frighten me.",
          "character": {
              "name": "Sansa Stark",
              "slug": "sansa",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "You love your children. It's your one redeeming quality. That and your cheekbones.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "I have always found revenge to be the purest of motivations.",
          "character": {
              "name": "Petyr Baelish",
              "slug": "baelish",
              "house": {
                  "name": "House Baelish of Harrenhal",
                  "slug": "baelish"
              }
          }
      },
      {
          "sentence": "I know that our enemies hate each other almost as much as they hate us.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "No matter who you are, no matter how strong you are, sooner or later, you'll face circumstances beyond your control.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "The only way to keep your people loyal is to make certain they fear you more than they do the enemy.",
          "character": {
              "name": "Cersei Lannister",
              "slug": "cersei",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "The man who passes the sentence should swing the sword.",
          "character": {
              "name": "Eddard \"Ned\" Stark",
              "slug": "ned",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "It doesn't matter what we want. Once we get it, then we want something else.",
          "character": {
              "name": "Petyr Baelish",
              "slug": "baelish",
              "house": {
                  "name": "House Baelish of Harrenhal",
                  "slug": "baelish"
              }
          }
      },
      {
          "sentence": "I was nothing at all. And when you're nothing at all, there's no reason to be afraid.",
          "character": {
              "name": "Samwell Tarly",
              "slug": "samwell",
              "house": {
                  "name": "House Tarly of Horn Hill",
                  "slug": "tarly"
              }
          }
      },
      {
          "sentence": "My sword is yours, in victory and defeat, from this day until my last day.",
          "character": {
              "name": "Theon Greyjoy",
              "slug": "theon",
              "house": {
                  "name": "House Greyjoy of Pyke",
                  "slug": "greyjoy"
              }
          }
      },
      {
          "sentence": "I don't choose sides. I'm the queen of the Seven Kingdoms.",
          "character": {
              "name": "Cersei Lannister",
              "slug": "cersei",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "I grew up with soldiers. I learned how to die a long time ago.",
          "character": {
              "name": "Eddard \"Ned\" Stark",
              "slug": "ned",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "I have a tender spot in my heart for cripples, bastards and broken things.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "Three victories don't make you a conqueror.",
          "character": {
              "name": "Jaime Lannister",
              "slug": "jaime",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "A madman sees what he sees.",
          "character": {
              "name": "Eddard \"Ned\" Stark",
              "slug": "ned",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "All men must die, but we are not men.",
          "character": {
              "name": "Daenerys Targaryen",
              "slug": "daenerys",
              "house": {
                  "name": "House Targaryen of King's Landing",
                  "slug": "targaryen"
              }
          }
      },
      {
          "sentence": "Winter is coming!",
          "character": {
              "name": "Eddard \"Ned\" Stark",
              "slug": "ned",
              "house": {
                  "name": "House Stark of Winterfell",
                  "slug": "stark"
              }
          }
      },
      {
          "sentence": "Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.",
          "character": {
              "name": "Tyrion Lannister",
              "slug": "tyrion",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "You love your children. It's why you'll never win.",
          "character": {
              "name": "Cersei Lannister",
              "slug": "cersei",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "A lion does not concern himself with the opinion of sheep.",
          "character": {
              "name": "Tywin Lannister",
              "slug": "tywin",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "I need you to become the man you were always meant to be. Not next year, not tomorrow, now.",
          "character": {
              "name": "Tywin Lannister",
              "slug": "tywin",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      },
      {
          "sentence": "The more people you love, the weaker you are.",
          "character": {
              "name": "Cersei Lannister",
              "slug": "cersei",
              "house": {
                  "name": "House Lannister of Casterly Rock",
                  "slug": "lannister"
              }
          }
      }
  ]
  }
}
