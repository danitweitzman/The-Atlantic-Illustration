let scrollY = 0;
let fontSize = 24;
let lineHeight = 36;
let textWidthDesired = 600;
let maxScroll = 21000;
let c1, c2;
let waves;
let wavesOffsetX = 0;
let sound;
let img;
let img2;
let img3;
let img4;
let img5; 
let logo;

let caption = "Brandon Sausele (above and lead image) is one of a dying breed of fishermen in Montauk, New York, who wear wetsuits and wade or swim out to offshore rocks in shark-filled waters—­almost exclusively at night. (Peter Fisher for The Atlantic)";
let caption2 = "Sausele and the author in late July; Sausele caught a 29-pound striped bass. (Peter Fisher for The Atlantic)";
let caption3 = "Peter Fisher for The Atlantic";

let quote ="More than a few wetsuiters have lost marriages and jobs in their desperate quest for this fish. Some have lost their life."

let title = "INSIDE THE DANGEROUS,";
let title2 = "SECRETIVE WORLD OF";
let title3 = "EXTREME FISHING";
let oneLiner = "Why I swim out into rough seas 80 nights a year to hunt for striped bass";
let author = "By Tyler Austin Harper";
let photographer = "Photographs by Peter Fisher";
let date = "September 4, 2024";
let issue = "October 2024 Issue";

let articleText = `The wave comes, throat-high and hungry. The last thing I see before it sweeps me off the rock and into the ocean is a man in a wetsuit leaning his shoulder into a wall of water. When we swam out here around 2 a.m. and hoisted ourselves onto the algae-slick face of a boulder, he had warned me: “If you go in here, it won’t be fun.” And he was right.

I manage to keep hold of my fishing rod, and I’m reeling in lost line and treading water and trying to forget all the stories I’ve heard about sharks as a second large wave begins sucking me up its face. By the time the third crashes over me, I’ve abandoned any pretense of swimming back to our original perch. Sputtering and coughing, I make my way toward another rock closer to shore. A last wave pushes me onto it, and I get my feet under me.

Thirty yards in front of me, having held on to that sloping rock through the entire set, Brandon Sausele makes a long, arcing cast into the pounding surf.

Sausele is 27 years old. Shaggy-haired, tattooed, and muscular, he is a devoted practitioner of an extreme sport known as “wetsuiting,” which is both easy to describe and impossible for the uninitiated to understand. When I was first getting into the sport a few years ago, the advice I received from another fisherman was simply: Don’t.

Wetsuiting is a form of saltwater fishing that involves wearing a wetsuit and wading or swimming out to offshore rocks—almost exclusively at night, often during storms—to access deeper water or faster currents than can be reached in traditional waders. The quarry are striped bass, a fish that migrates every spring, mostly from the Chesapeake and Delaware Bays, to as far north as Maine, and back down again in the fall.

Although “stripers”—one of the most popular game fish in America—can be caught during normal waking hours, the largest members of the species, some more than four feet long, usually come close to shore at night. Stripers prefer inclement weather and rough water, which make ambushing their prey easier, but also make conditions more dangerous for the men—wetsuiters are nearly all men—who chase them.

Catching big stripers requires dedication and sleep deprivation. And if you’re wetsuiting, it involves more than a little risk. The hazards of this hobby, coupled with the fact that most of us who do it don’t even keep the fish we catch, are often baffling to outsiders, who quite reasonably wonder why we bother. Perhaps not surprisingly, wetsuiting has long attracted highly particular personalities: cranks, brooding combat veterans, adrenaline junkies, recovering alcoholics, and spiritual questers.`;

let articleText2 = `Fishing for striped bass from the shore—known as “surf casting”—was once a pastime for the rich, who created clubs and built “bass stands” in places such as Newport and Cuttyhunk Island in the 1800s. But what Sausele does, wetsuiting, was born in the mid-20th century in Montauk, New York, back when it was a hardscrabble fishing town. Who exactly invented the sport is a matter of substantial debate, but it’s generally agreed on that by the early 1960s, a handful of men were donning wetsuits and swimming sometimes 100 yards or more through the churning surf to reach the sandbars and outer rocks on Montauk’s shores.

Montauk’s geography is uniquely perfect for the sport. Situated at the eastern tip of Long Island’s South Fork, which some call simply “The End,” the town has a mix of sand beaches, boulder fields, and ripping currents that provides an ideal habitat for stripers, and a singular challenge for those who hunt them. By most standards, I’m a serious wetsuiter; I go out some 80 nights a year. But I was not fully prepared for the nights I spent on Long Island this summer, fishing with one of the most celebrated anglers on Montauk’s coastline.

Wetsuiters often talk about their “career” in fishing, and Sausele has already had a decorated run. He has seven Montauk Surfmasters tournament victories to his name and a “50” under his belt. Catching a 50-pound striped bass is an achievement that most spend their life chasing, and very few attain.

During the day, Sausele works as a pipeline-rehabilitation specialist, traveling the country to repair lines that carry water, chemicals, and natural gas. But like most die-hard wetsuiters, he treats fishing as his second job, which means forgoing anything approaching a healthy sleep schedule. Sausele regularly fishes from sunset to sunrise before driving 90 minutes from Montauk back home to change; then he goes straight to work. This isn’t uncommon: Most dedicated wetsuiters are out in the surf multiple nights a week from May to November. Some junkies log 100 or more nights a year.

In this prolonged state of sleep deprivation, wetsuiters must keep constant track of moon phases, bait migration, wind direction, tide swings, current speed, water temperature, swell and surf conditions—knowing that a single mistake can spell injury or worse. Wetsuiters pursue a fish, yes, but also an old and very human question: What can a body do?

I sought out Sausele because he’s a good fisherman, really good, but also because he is, as he himself puts it, one of a dying breed. By Sausele’s estimate and that of other Montauk fishermen I talked with, only about five or six hard-core wetsuiters fish The End regularly today, down from dozens in the ’90s and 2000s. (Many local fishermen still wear a wetsuit, but vanishingly few swim out to Montauk’s far-flung reefs at night.)

In part that’s because Montauk has long since become a vacation spot for influencers and Wall Street guys, pushing out the working class and making it harder for fishermen to find affordable places to stay. It’s also because striper numbers have dropped after years of inadequate conservation. But just as much as any of these reasons, it’s a story about sharks. 

Because if there’s one thing keeping Montauk wetsuiters shorebound, it’s the shark population. Sausele often takes to Instagram to share videos and images of large bass bitten in half by “the tax man” while he is reeling them in, as well as other encounters he has with large sharks while precariously perched on offshore rocks, most of which are submerged, leaving him belly-deep with predators bigger than he is. In one video, he releases what looks like a sizable bull shark at night. It had hooked itself after eating a bluefish on his line.`;

let articleText3 = `If this sounds insane, that’s because it is. Wetsuiters are all mad, and they always have been. Spending sleepless night after sleepless night up to your chest in the riotous Atlantic, hunting fish the size of a preschooler, isn’t a hobby that people who are psychologically grounded pursue. (I do not exempt myself from this charge.) Many disciples speak about their relationship with the sport as a kind of addiction. More than a few have lost marriages and jobs in their desperate quest for this fish. Some have lost their life.

I went down to Long Island in June and again in July—a time of year when shark run-ins are common—to swim to the outer rocks with Sausele in an attempt to understand why he risks life and limb, chasing massive fish only to release them, with nothing but the occasional Instagram post and a few hundred likes to show for it.

Wetsuiters have a mantra: “Boat fish don’t count.” It’s often said tongue in cheek, but most of us sort of mean it. I’ve thought about the meaning of this phrase a lot: on the long drives to my fishing spots; while wading out, neck-deep, to sandbars in white-shark territory; in a parking lot, gearing up to fish the bleeding edge of a hurricane. Boat fish don’t count because, generally, boat fishing can’t kill you.

I arrive in Montauk during the first week of June, my wife and seven-month-old in tow. We haven’t been away together since our son was born, so we decided to make the trip a family affair, staying in one of the rental homes that are helping drive up the town’s housing prices. We get in on a Monday afternoon and spend the evening like tourists, drinking South Fork rosé at a picnic table and watching the sun sink into Lake Montauk.

Twenty-four hours later, Brandon Sausele is giving me a firm handshake in a dirt-and-gravel parking lot. Although we talked on the phone several times in the months leading up to my trip, Sausele takes me a little by surprise. You might expect a man who swims through a shark-infested ocean at night to be brash and full of swagger. Sausele is not quiet, but he is understated and modest. He asks me questions about my gear, whether I like a certain brand of hook, if I have thoughts on a certain kind of “plug” (an artificial lure). It’s a bit like if Phil Mickelson asked an amateur golfer his opinion on a particular nine iron.

After a few minutes of chitchat, we’re piling into Sausele’s truck and driving to a second location, where we’ll slip into our wetsuits and prepare for the night. He tells me he doesn’t like to get ready in the same place that he’s fishing in case he’s recognized by another wetsuiter who might try to horn in on his bite. (This kind of secrecy is typical—I have my own similar routines and rituals that shade from privacy into paranoia.)

We take our time getting our gear together: pool-cue-thick rods and waterproof reels made of aircraft-grade aluminum; plug bags made of sailcloth attached to thick belts made of scuba material; rust-proof rescue knives; primary and backup dive flashlights attached to lanyards made of surgical tubing; nitrile-coated gloves; specialized shoes called Korkers fitted with carbide cleats designed to grip rock; an assortment of other tools, including pliers, stainless-steel D rings, and handheld scales to weigh fish. And finally, with those sharks in mind, tourniquets.

By 8 o’clock, we’ve driven to a third location, and I’m wading deep into the Montauk surf with Sausele. Our first perches are maybe 60 yards offshore, a pair of flat rocks that we can reach without swimming. He directs me to the bigger of the two and we fish until the blue wash of sky turns purple and the ebbing tide sucks out a little farther. He keeps a polite eye on me.

“All right,” Sausele announces. Night has fully set in, and soon I’m watching Sausele’s dark form side-stroking through the choppy Atlantic, using his 11-foot surf rod to feel for a specific rock that allegedly lies somewhere below the surface. He does this without turning on his flashlight, so as not to spook the fish; as he later explains, he locates these underwater rocks, which he scouts during the day, by triangulating from various onshore landmarks. The water is pushing fast and he starts his swim up current, letting it swing him toward the rock. A few minutes later, I can just make out Sausele’s silhouette standing some 40 yards in front of me. He signals for me to join him. I slip into the black water.

As Sausele promised, the rock is plenty big but awkwardly shaped. The water is well above my waist, even when I’m standing on the highest part. I’ve fished plenty of difficult places—my home waters offer miles of ledge-studded coastline, craggy death traps battered by New England tides—but Montauk is an entirely different animal. I’m not used to fishing from rocks that are this deeply submerged, and the surf is frothing and the current tugs at me. Within the first 10 minutes, a big roller comes in and pushes me off into deep water. Sausele extends a hand and pulls me back on only for the next wave to push me off again. This time, I swim around to the front of the boulder and let the next wave deposit me belly-first onto the rock.`;

let articleText4 = `We don’t catch any stripers that night, and my entire body aches—Sausele stays on that slimy boulder like he’s glued to it, while I seem to spend as much time swimming back to our rock as I do fishing from it. Nevertheless, the entire affair is deliriously fun. Wetsuiting can feel illicit, almost juvenile: courting danger while the rest of the world sleeps, the sense that something exciting—catching not just a fish, but The Fish—could happen at any moment. When the sky brightens over the distant Montauk Point Lighthouse, Sausele’s watch reads a quarter to five and we call it quits. We mostly float back, paddling with the hands not holding our rods, relying on the buoyancy of our wetsuits and letting the waves push us toward shallow water.

Back onshore, we stand on the rocky beach, panting lightly, leaning on our surf rods like canes under Montauk’s crumbling bluffs. A sliver of moon is dissolving into the morning. Sausele says he hopes the fishing will be better tomorrow.The teenager in the surf shop is tanned and stoned. When I tell him I’m working on a story about fishermen, striped bass, and sharks, his bloodshot eyes flash, his mouth splitting into a grin. “Oh, the sharks are here, man.” He leans back on his stool until it’s balanced on two legs. “I’ve seen them two different times. One night, I was out at dusk. Whole crowd of surfers. And we see this big fin coming down the lineup. Just fucking cruising.” He presses his hands together and makes them swim like a fish. “Just fucking cruising,” he repeats. “And we’re all like … shit! You know?” I agree, shit. He forgets to tell me about the second time he saw a shark.

It’s been a month since my June trip and I’m back in town. When I pull into the parking lot around midnight, Sausele is tying a monofilament leader to his braided fishing line, fingers lit up by the beam of a headlamp.

We had fished hard the day before, meeting at midnight and staying out through sunrise with only two bass and some hefty bluefish, all released, for our efforts. When I got back to the parking lot of my beachside motel that morning, vacationers were already ambling toward the ocean, weighed down by coolers and sandy beach chairs. I slept until 10 a.m. Sausele went straight to his job.

It’s the week of July 4, when sandbar sharks and other species typically begin showing up in Montauk in big numbers. Sausele hasn’t had a fish bitten in half yet this season, but during the height of summer, it can be a weekly, sometimes daily occurrence. He expects his first visit from the tax man any day now, a prospect that doesn’t seem to cause him much anxiety, though it keeps my heart rate up.

Craig O’Connell—the director of the O’Seas Conservation Foundation, who is also known as the “Shark Doctor” and has appeared on Shark Week—told me that on top of a growing sandbar-shark population, the Montauk surf is also home to white sharks, duskies, spinners, bulls, and sand tigers (these are reportedly behind Long Island’s recent uptick in attacks).

When I asked Oliver Shipley, a marine biologist who studies Long Island’s sharks, if he thought it was safe to go wetsuiting at night during Montauk’s summer months, he let out a peal of laughter. He said he’s seen some of Sausele’s Instagram videos. Shipley emphasized that it’s important not to demonize sharks, and that attacks on humans remain extraordinarily rare. Though some fishermen feel like the shark population, especially sandbars, is “exploding,” he said, it’s actually rebounding after decades of decline, as a result of effective conservation efforts. But he also said that he personally would not go swimming after dark, smelling like fish and eels (common striper bait), looking like a harbor seal in black neoprene.

Shipley’s gallows laughter is on my mind tonight as I’m pushing out toward an eddy that marks the location of a submerged rock a short distance from the one Sausele is already on. I’m uncomfortably aware of how soft a human belly is as I swim. I scramble onto my rock and try—and fail—not to look like a wounded seal.

I’ve spent plenty of time in New England waters at night during the peak of our white-shark season. But I’ve never actually seen or encountered a white—which are relatively uncommon and often interested in chasing larger prey than striped bass—whereas the ubiquity of Montauk’s sandbar sharks, as well as the fact that we’re both chasing the same fish, means there’s a decent chance I’ll come across one of them. While I stand on my rock with the tide incoming, bioluminescent algae sparking around my waist, I think of the stories I’ve heard from other Montauk wetsuiters: releasing a large bass only to hear the surface erupt 10 feet away as a shark strikes it; exploratory bumps on the leg from curious sandbars; eight-foot-long shadows cruising cresting waves; a large fin surfacing in front of your rock, then slipping beneath the surface.

Two of Sausele’s friends join us, swimming out through the incoming tide. They are among the very small number of people he fishes (and shares information) with. During the glory days of Montauk wetsuiting, when dozens of fishermen regularly pushed out to the farthest rocks, wetsuiters often worked in “crews,” cooperating to scout new territory and claim choice rocks. As Sausele and his friends banter, getting washed off their rocks and cracking jokes at one another’s expense, laughing at the prospect of being eaten, I catch a glimpse of what it might have been like at its peak. As John Papciak, a still-active fisherman who wetsuited in Montauk in the ’90s and early 2000s, told me, the crews were in no small part about commiserating amid discomfort.

A season in the surf is an accumulation of petty miseries broken by fleeting triumphs. Permanent sand in your boots. The wetsuit that never fully dries from one night to the next. The October waves that hit you in the face and the feeling that you’ll never be warm again. The trudging, flashlight-free walks through the woods or along the beach at night, trying to keep your secret spot a secret. The hunger for sleep. And the all-too-real risks. Papciak warned me that I should not glamorize wetsuiting, and during our hour-long conversation, he reminded me again and again how dangerous the sport is. He mentioned an acquaintance who had washed up lifeless in the surf on Cuttyhunk Island, and told me stories of his own close calls. But I also noticed the twinkle in his eye as he told them.

Anyone who is being honest will tell you that wetsuiting is a sport of considerable torment. But there is also nothing like it. When you feel the bracing hit of a 30- or 40-pound striped bass after six hours of futile casting, and the line goes singing off your reel all at once, and your rod is bucking and the surf is building and you’re trying to hold your rock and hold your rod and weather the sea that wants to claim you until suddenly, as if by magic, you see a tail the size of a broom head spraying water at your feet—in that moment, the months of pain are all worth it.`;

let articleText5 = `The truth is, it’s worth it even when the fish aren’t there. And they aren’t in Montauk, at least this time. Neither are the sharks. None that we see, anyway. We swim off our rocks at 3 a.m. Sausele needs a Red Bull, one of his friends needs a cigarette, and another needs to get his car into the driveway before his wife realizes he sneaked out again. “If one of my kids wakes her up, I’m fucked,” he says, laughing. Sausele asks if I’m up for regrouping and swimming back out to fish through sunrise. The only sleep he’s gotten in two days is the two hours he grabbed in his truck before we met up tonight.

I haven’t slept much more than he has, and I have a long drive ahead of me. I remind myself that my wife and son are expecting me to return in one piece, and that the most dangerous part of wetsuiting is what happens not in the water but on the sleep-deprived trip home. I tell him I should get back to my motel and rack out for a few hours.

He understands. His friends disperse. Sausele gives me a fist bump, and I watch him disappear again beneath a maze of stars. I listen to the death rattle of the Atlantic as it sucks sea-polished stones, and one fisherman, back into its embrace.
through the summer, I continue to hear from Sausele that the fishing in Montauk is tough. Anecdotally, it seems tough everywhere. Maine. Massachusetts. Rhode Island. Connecticut. The story is the same. The most talented wetsuiters I know report their worst season ever.

So when I return for a third and final trip to The End in late July, my expectations are low. “You take what Montauk gives,” Sausele’s friend tells me as we’re bullshitting on the shore. “And lately she isn’t giving much.” But tonight Montauk is generous. Around 1 a.m., Sausele’s rod doubles over. Minutes later, he’s treading in deep water, cradling in his arms a bass that weighed in at 29 pounds, reviving her until she’s ready to swim off. “That water’s fucking murky,” Sausele observes with a grin. I know he’s thinking about those sandbars that love to steal an easy meal. We spend the rest of the night on a minivan-size boulder that Sausele’s crew calls “shark mountain,” the site of his aforementioned bull-shark video. No other fish make an appearance, and I wonder if this is normal now.

For at least a decade, anglers, conservationists, and fisheries biologists have been warning that the striped-bass population is in crisis thanks to a combination of overfishing and poor spawning years due to unusually warm and dry springs and winters. Between commercial fishing, guided charters, and recreational angling, stripers represent a multibillion-dollar industry, composed of stakeholders who always seem to think that someone else is the problem. The recreational fishermen accuse “the comms” of harvesting too many fish. The commercial fishermen respond by pointing out that “the recs” kill more than their share annually, and that a percentage of released fish still die. And on and on.

In the attempt to keep everyone happy, the Atlantic States Marine Fisheries Commission has long avoided making the hard decisions—namely, declaring a moratorium on harvesting striped bass—necessary to allow striper numbers to rebound. The species’ population collapsed once before, in the 1980s, and many of us think we’re on the verge of another collapse, if we’re not there already. If it does happen again, it may well prove the final blow to Montauk’s wetsuiting scene.

Like any town that was once a fishing town and is now that and something else, Montauk is a sprawl of contradictions. In the past 15 or so years, The End has been transformed into a summer gathering spot for the rich, a fate that was perhaps inevitable given the proximity to the wealthier Hamptons. Nearly every local I spoke with referred, with some degree of ambivalence, to the 2008 appearance of Surf Lodge—a clubby, celebrity-filled hotel, where rooms can start at $600 a night during the peak summer months—as the town’s point of no return. “Our B.C./A.D.,” one said.

The crusty dive bars that once gave Montauk its character—a local fishing legend, Bill Wetzel, told me that “surf rats” used to pull up a bar stool, still dripping in their wetsuits—are now something like vestigial organs, touchstones from an earlier moment in its evolutionary history that are gradually being pushed to the margins by New Montauk. There are beachside cocktail joints with $22 Negronis. There is SoulCycle and green juice. There are Land Rovers with custom golf clubs in the passenger seat. There are big houses with perfect lawns that sit empty 50 weeks out of 52. There are finance boys lined up outside the Shagwong Tavern, where they will dance badly to a bad DJ on the same floor where commercial fishermen slop beer in the hard winter.

But for now at least, they also remain—the men who ply the dark surf, who fish hard and sleep little and pull a great American fish from the ocean and know, as all fishermen know, that there is a kind of love that is also violence. And if it is around dusk and you take the parkway east toward the lighthouse, and you drive until you can’t drive anymore, you might still see them. They will be changing hooks and checking lights and strapping dive knives to their ankles and heavy belts to their waists. They drink Red Bull and gas-station coffee and read texts from their wives that say “Be safe.” And when the sun sets over the Atlantic, a few of these last Ahabs will push out past the breakers and swim for the horizon.`;

function preload() {
  waves = loadImage('https://i.ibb.co/3T4jKyx/Frame-1.png'); 
  img = loadImage('https://i.ibb.co/R7PxDxp/original.jpg');
  img2 = loadImage('https://i.ibb.co/dcjvbvY/original-1.jpg');
  img3 = loadImage('https://i.ibb.co/ZNfgc6B/original-2.jpg');
  img4 = loadImage('https://i.ibb.co/SPT4zCm/original-3.jpg');
  img5 = loadImage('https://i.ibb.co/BPd9WbC/original-4.jpg');
  logo = loadImage('https://i.ibb.co/rQTbB5z/uwk3sq66yzmrwf4zwv7q-copy.png');
  //sound = loadSound('https://www.youtube.com/watch?v=iInLS5tuGbo');
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('times');
  textSize(fontSize);
  textLeading(lineHeight);
  c1 = color("#486E8B");
  c2 = color("#385E9B");
  b1 = color("#002C68");
  b2 = color("#03223C");  
}

function draw() {
  let darknessFactor = map(scrollY, 0, -maxScroll, 0, 1);
  let currentB1 = lerpColor(b1, color(0, 0, 0), darknessFactor);
  let currentB2 = lerpColor(b2, color(0, 0, 0), darknessFactor);
  setGradient(0, 0, windowWidth, windowHeight, currentB1, currentB2, 1);
  fill(255);

  push();
  translate(0, scrollY);
  
  let x = (windowWidth - textWidthDesired) / 2;

  push();
  fill(255);
  setGradient(0,0, windowWidth, 810, c1, c2, 1);
  pop();
  
  wavesOffsetX -= 2; 

  let scaleFactor = windowHeight / waves.height;
  let scaledWavesWidth = waves.width * scaleFactor;

  if (wavesOffsetX <= -scaledWavesWidth) {
    wavesOffsetX += scaledWavesWidth;
  }

  for (let x = wavesOffsetX; x < windowWidth; x += scaledWavesWidth) {
    image(waves, x, 0, scaledWavesWidth, windowHeight);
  }
  
  push();
  let yTitle = 150;
  textAlign(CENTER, TOP);
  textSize(fontSize + 50);
  fill("#002C68")
  text(title, windowWidth / 2, yTitle);
  text(title2, windowWidth /2, yTitle + 60);
  text(title3, windowWidth /2, yTitle + 120);
  pop();

  push();
  textAlign(CENTER, TOP);
  fill("#002C68");
  textSize(fontSize - 5);
  text(oneLiner, windowWidth / 2, yTitle - 60 );
  text(author, windowWidth / 2, yTitle + 230);
  text(photographer, windowWidth / 2, yTitle + 260);
  pop();
  
  let yBody = yTitle + (fontSize + 8) * 1.2 + 1500; 
  textSize(fontSize);
  textStyle(NORMAL);
  textLeading(lineHeight);
  textAlign(LEFT, TOP);
  
  image(img, windowWidth/2 - 650, yBody - 800,1300,700);
  text(articleText, x, yBody, textWidthDesired);
  image(img2, windowWidth/2 - 350 ,yBody + 2000,700,450);
  text(articleText2, x, yBody + 2550, textWidthDesired);
  text(articleText3, x, yBody + 5510, textWidthDesired);
  image(img3,windowWidth/2 - 350 ,yBody + 9200, 700,450);
  image(img4,windowWidth/2 - 350 ,yBody + 9200 + 490 ,700,450);
  text(articleText4, x, yBody + 10250, textWidthDesired);
  image(img5,windowWidth/2 - 350 ,yBody + 15200,700,900);
  text(articleText5, x, yBody + 16200, textWidthDesired);
  
  push();
  textFont ('Courier New');
  textSize (fontSize - 10);
  textLeading(15);
  fill("#8292A7")
  noStroke();
  text(caption, windowWidth/2 - 350 ,yBody + 2000 + 450,700,450);
  text(caption2,windowWidth/2 - 350 ,yBody + 9200 + 450 + 490,700,450);
  text(caption3,windowWidth/2 - 350 ,yBody + 15200 + 900,700,900);
  pop();
  
  push();
  textAlign(CENTER,TOP);
  textSize (fontSize + 15);
  text(quote,windowWidth/2 - 350 ,yBody + 5300,700,450);
  pop();
  
  noFill();
  stroke("#002C68");
  let titleWidth = textWidth(title) + textWidth(title2) + textWidth(title3);
  let lastGPosition = windowWidth / 2 - titleWidth / 2 + titleWidth - textWidth("EROUS"); 
  ellipse(lastGPosition, yTitle + 180 + scrollY, 10, 30); 
  line (lastGPosition, yTitle + 195 + scrollY, lastGPosition, windowHeight);
  //image(logo,windowWidth/2 - 40, -10,200,200); 
  pop();
  
  addGradientOverlay();
  
  
  
  
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
}

function addGradientOverlay() {
  push();
  let ctx = drawingContext;
  let radius = Math.max(windowWidth, windowHeight) * 1.5; // Ensures the gradient covers the entire canvas
  let gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, radius);

  // Define the gradient colors and transparency
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');       // Center is fully transparent
  gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.8)');   // Midpoint with 50% opacity
  gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');       // Edges are fully opaque

  // Set the fill style and draw the rectangle
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  pop();
}
      
function mouseWheel(event) {
  scrollY -= event.deltaY; 
  scrollY = constrain(scrollY, -maxScroll, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

