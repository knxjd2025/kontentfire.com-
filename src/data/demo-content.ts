export interface DemoContent {
  id: string;
  template: string;
  templateDescription: string;
  topic: string;
  industry: string;
  platform: 'linkedin' | 'facebook' | 'instagram' | 'twitter';
  generatedTitle: string;
  generatedContent: string;
  hashtags: string[];
  emoji: string;
  scheduleSuggestion: string;
  engagementTip: string;
}

export interface DemoTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  example: string;
}

export const demoTemplates: DemoTemplate[] = [
  { id: 'battle-royale', name: 'Battle Royale', description: 'Compare two options your audience cares about', icon: '\u2694\uFE0F', example: '"iPhone vs Android for Business"' },
  { id: 'myth-buster', name: 'Myth Buster', description: 'Debunk common misconceptions in your industry', icon: '\uD83D\uDD0D', example: '"5 Plumbing Myths That Cost You Money"' },
  { id: 'how-to', name: 'How-To Guide', description: 'Step-by-step instructions your audience needs', icon: '\uD83D\uDCCB', example: '"How to Winterize Your Sprinkler System"' },
  { id: 'checklist', name: 'Checklist', description: 'Actionable checklist your audience can save', icon: '\u2705', example: '"Spring Home Maintenance Checklist"' },
  { id: 'tip-of-the-day', name: 'Tip of the Day', description: 'Quick, valuable tip that builds authority', icon: '\uD83D\uDCA1', example: '"Save 20% on Energy Bills With This One Trick"' },
  { id: 'behind-the-scenes', name: 'Behind the Scenes', description: 'Show the human side of your business', icon: '\uD83C\uDFAC', example: '"A Day in the Life of Our Team"' },
  { id: 'trending-topic', name: 'Trending Topic', description: 'Join the conversation on what\'s trending', icon: '\uD83D\uDD25', example: '"Why Everyone Is Talking About AI Marketing"' },
  { id: 'product-showcase', name: 'Product Showcase', description: 'Highlight your products or services', icon: '\u2B50', example: '"Our Most Popular Service This Month"' },
];

export const demoContentEntries: DemoContent[] = [
  // ── BATTLE ROYALE (4 entries) ──────────────────────────────────────────
  {
    id: 'br-1',
    template: 'battle-royale',
    templateDescription: 'Compare two options your audience cares about',
    topic: 'Tankless vs Traditional Water Heaters',
    industry: 'plumbing',
    platform: 'linkedin',
    generatedTitle: 'Tankless vs. Traditional Water Heaters: Which One Actually Saves You Money?',
    generatedContent: `The tankless vs. traditional water heater debate comes up in nearly every consultation I do. Here\u2019s what 15 years in the plumbing industry has taught me.

Traditional tank heaters cost $800\u2013$1,500 installed. They last 10\u201312 years and keep 40\u201350 gallons hot 24/7 \u2014 even when you\u2019re sleeping.

Tankless units run $2,000\u2013$4,500 installed. They last 20+ years and only heat water on demand, cutting energy bills by 24\u201334%.

The real answer? It depends on your household size. Families of 4+ who run multiple showers simultaneously often find tankless units struggle to keep up without a second unit.

My recommendation: if your current tank is under 8 years old, wait. If it\u2019s failing, consider your daily peak demand before upgrading.

What are you seeing in your market? I\u2019d love to hear from other professionals.`,
    hashtags: ['#Plumbing', '#WaterHeater', '#HomeImprovement', '#HVAC', '#PlumbingTips', '#TradesProfessional'],
    emoji: '\u2694\uFE0F',
    scheduleSuggestion: 'Best posted: Tuesday 9:00 AM',
    engagementTip: 'End with a question to invite professional discussion',
  },
  {
    id: 'br-2',
    template: 'battle-royale',
    templateDescription: 'Compare two options your audience cares about',
    topic: 'Metal Roofing vs Asphalt Shingles',
    industry: 'roofing',
    platform: 'facebook',
    generatedTitle: 'Metal Roof vs. Shingles \u2014 The Honest Truth',
    generatedContent: `We get this question every single week: "Should I go metal or stick with shingles?"

Here\u2019s the no-BS breakdown:

ASPHALT SHINGLES
\u2022 Cost: $5,000\u2013$12,000 (average home)
\u2022 Lifespan: 20\u201330 years
\u2022 Easier to repair
\u2022 More color options

METAL ROOFING
\u2022 Cost: $10,000\u2013$25,000
\u2022 Lifespan: 40\u201370 years
\u2022 Better energy efficiency
\u2022 Handles extreme weather

The bottom line? If you plan to stay in your home 15+ years, metal pays for itself. If you might move in 5\u201310 years, shingles give you a great ROI.

Drop a comment \u2014 which one is on YOUR house right now?`,
    hashtags: ['#Roofing', '#MetalRoof', '#HomeOwner', '#RoofReplacement', '#HomeValue', '#RoofingContractor'],
    emoji: '\u2694\uFE0F',
    scheduleSuggestion: 'Best posted: Saturday 10:00 AM',
    engagementTip: 'Ask readers to share their own experience in comments',
  },
  {
    id: 'br-3',
    template: 'battle-royale',
    templateDescription: 'Compare two options your audience cares about',
    topic: 'Buying vs Renting in 2026',
    industry: 'real estate',
    platform: 'twitter',
    generatedTitle: 'Buying vs. Renting in 2026',
    generatedContent: `Buying vs. renting in 2026 \u2014 let\u2019s settle this:

Renting: Flexibility, no maintenance costs, lower upfront commitment.

Buying: Equity building, tax benefits, locked-in payment (mostly).

The rule of thumb: if you\u2019re staying 5+ years AND your monthly mortgage would be within 30% of gross income, buying usually wins.

But "always buy" is outdated advice. Run YOUR numbers.`,
    hashtags: ['#RealEstate', '#HomeBuying', '#Renting', '#PersonalFinance'],
    emoji: '\u2694\uFE0F',
    scheduleSuggestion: 'Best posted: Wednesday 12:00 PM',
    engagementTip: 'Use a poll to let followers vote on their preference',
  },
  {
    id: 'br-4',
    template: 'battle-royale',
    templateDescription: 'Compare two options your audience cares about',
    topic: 'Natural Grass vs Artificial Turf',
    industry: 'landscaping',
    platform: 'instagram',
    generatedTitle: 'Natural Grass vs. Artificial Turf',
    generatedContent: `NATURAL GRASS vs. ARTIFICIAL TURF \u2694\uFE0F

Which side are you on??

NATURAL GRASS
\u2705 Cooler surface temp
\u2705 Better for the environment
\u2705 That fresh-cut smell
\u274C Weekly mowing
\u274C Watering costs add up
\u274C Brown patches in drought

ARTIFICIAL TURF
\u2705 Zero maintenance
\u2705 Always looks perfect
\u2705 Saves 55,000 gallons of water/year
\u274C Higher upfront cost ($8\u2013$14/sq ft)
\u274C Gets HOT in summer
\u274C Needs replacing every 15\u201320 years

Our take: For front yards with heavy foot traffic and water restrictions \u2014 turf wins. For backyards where kids and pets play \u2014 real grass is still king.

Save this for when you\u2019re deciding!`,
    hashtags: ['#Landscaping', '#LawnCare', '#ArtificialTurf', '#CurbAppeal', '#OutdoorLiving', '#YardGoals'],
    emoji: '\u2694\uFE0F',
    scheduleSuggestion: 'Best posted: Sunday 11:00 AM',
    engagementTip: 'Use carousel format with before/after photos of both options',
  },

  // ── MYTH BUSTER (4 entries) ────────────────────────────────────────────
  {
    id: 'mb-1',
    template: 'myth-buster',
    templateDescription: 'Debunk common misconceptions in your industry',
    topic: '5 HVAC Myths Costing You Hundreds',
    industry: 'hvac',
    platform: 'facebook',
    generatedTitle: '5 HVAC Myths That Are Costing You Hundreds Every Year',
    generatedContent: `Stop believing these HVAC myths \u2014 they\u2019re draining your wallet!

MYTH 1: "Closing vents in unused rooms saves energy."
TRUTH: It actually increases duct pressure and makes your system work harder.

MYTH 2: "You only need to change your filter once a year."
TRUTH: Every 1\u20133 months. A clogged filter can increase energy use by 15%.

MYTH 3: "Bigger AC units cool better."
TRUTH: An oversized unit short-cycles, leaving you with humidity problems and higher bills.

MYTH 4: "Turning the thermostat way down cools faster."
TRUTH: Your AC cools at the same rate no matter where you set it.

MYTH 5: "Maintenance isn\u2019t necessary if everything seems fine."
TRUTH: Annual tune-ups catch small issues before they become $3,000 emergencies.

Which of these surprised you? Share this with a homeowner who needs to see it!`,
    hashtags: ['#HVAC', '#EnergyEfficiency', '#HomeOwnerTips', '#AirConditioning', '#HVACTips', '#SaveMoney'],
    emoji: '\uD83D\uDD0D',
    scheduleSuggestion: 'Best posted: Thursday 2:00 PM',
    engagementTip: 'Ask "Which myth surprised you most?" to drive comments',
  },
  {
    id: 'mb-2',
    template: 'myth-buster',
    templateDescription: 'Debunk common misconceptions in your industry',
    topic: 'Dental Myths Debunked',
    industry: 'dental',
    platform: 'instagram',
    generatedTitle: 'Dental Myths We Hear Every Single Day',
    generatedContent: `STOP believing these dental myths!!

\u274C "White teeth = healthy teeth"
\u2705 Tooth color varies naturally. Yellow teeth can be perfectly healthy. It\u2019s gum health and structure that matter most!

\u274C "Sugar is the #1 cause of cavities"
\u2705 It\u2019s actually ACID from bacteria feeding on sugar. Frequency matters more than quantity \u2014 sipping soda all day is worse than one cookie.

\u274C "You don\u2019t need a dentist if nothing hurts"
\u2705 Most serious dental issues are PAINLESS until they\u2019re advanced. Catching decay early saves you thousands.

\u274C "Harder brushing = cleaner teeth"
\u2705 Hard brushing wears down enamel and damages gums. Gentle circular motions for 2 minutes is all you need.

Share with someone who needs to hear this!`,
    hashtags: ['#DentalHealth', '#DentistTips', '#OralCare', '#HealthMyths', '#SmileCare', '#DentalFacts'],
    emoji: '\uD83D\uDD0D',
    scheduleSuggestion: 'Best posted: Monday 11:00 AM',
    engagementTip: 'Create a swipeable carousel with one myth per slide',
  },
  {
    id: 'mb-3',
    template: 'myth-buster',
    templateDescription: 'Debunk common misconceptions in your industry',
    topic: 'Fitness Myths Holding You Back',
    industry: 'fitness',
    platform: 'twitter',
    generatedTitle: 'Fitness Myths That Need to Die',
    generatedContent: `Fitness myths that need to die in 2026:

\u274C "No pain, no gain" \u2014 Pain is your body\u2019s warning signal, not a progress meter.

\u274C "Lifting heavy makes women bulky" \u2014 Women don\u2019t produce enough testosterone. Strength training builds lean, defined muscle.

\u274C "Cardio is the best way to lose fat" \u2014 Resistance training burns more calories over 24 hours through EPOC.

\u274C "You need to eat every 2\u20133 hours" \u2014 Meal frequency doesn\u2019t affect metabolism. Total daily intake matters.

Stop letting bad advice slow your progress.`,
    hashtags: ['#FitnessMyths', '#GymTips', '#StrengthTraining', '#FitnessFacts'],
    emoji: '\uD83D\uDD0D',
    scheduleSuggestion: 'Best posted: Monday 6:00 AM',
    engagementTip: 'Tag a friend who still believes one of these myths',
  },
  {
    id: 'mb-4',
    template: 'myth-buster',
    templateDescription: 'Debunk common misconceptions in your industry',
    topic: 'Plumbing Myths That Cost You Money',
    industry: 'plumbing',
    platform: 'linkedin',
    generatedTitle: '3 Plumbing Myths That Cost Homeowners Thousands',
    generatedContent: `After 20 years in the plumbing trade, these are the myths I wish every homeowner would stop believing.

Myth #1: "Flushable wipes are safe for your plumbing."
They don\u2019t break down like toilet paper. I\u2019ve pulled basketball-sized clogs from sewer lines caused entirely by "flushable" wipes. The average removal costs $250\u2013$400.

Myth #2: "A slow drain just needs chemical cleaner."
Chemical drain cleaners corrode your pipes from the inside. They provide a temporary fix while creating a long-term replacement problem. A $150 professional snake today saves a $3,000 repipe tomorrow.

Myth #3: "Leaky faucets aren\u2019t urgent."
A faucet dripping once per second wastes 3,000+ gallons per year. That\u2019s $200+ on your water bill, plus potential water damage if the leak worsens.

The best plumbing advice I can give: address small issues immediately. They never get cheaper with time.

What\u2019s the most common myth you encounter in your trade?`,
    hashtags: ['#PlumbingTips', '#HomeOwnership', '#PropertyManagement', '#TradesIndustry', '#PlumbingMyths'],
    emoji: '\uD83D\uDD0D',
    scheduleSuggestion: 'Best posted: Wednesday 8:00 AM',
    engagementTip: 'Invite other trade professionals to share myths from their field',
  },

  // ── HOW-TO GUIDE (4 entries) ───────────────────────────────────────────
  {
    id: 'ht-1',
    template: 'how-to',
    templateDescription: 'Step-by-step instructions your audience needs',
    topic: 'How to Winterize Your Sprinkler System',
    industry: 'landscaping',
    platform: 'facebook',
    generatedTitle: 'How to Winterize Your Sprinkler System (Before It\'s Too Late!)',
    generatedContent: `Frozen pipes = expensive repairs. Here\u2019s how to winterize your sprinkler system in 5 easy steps:

Step 1: Turn off the water supply to your irrigation system at the main valve.

Step 2: Shut off the timer/controller. Set it to "rain mode" so it doesn\u2019t send signals to the valves.

Step 3: Drain the system. Open the drain valves at the end of each zone and let water flow out.

Step 4: Blow out remaining water with an air compressor (50\u201380 PSI max \u2014 more can crack fittings). Run each zone for 2\u20133 minutes.

Step 5: Insulate above-ground components. Wrap backflow preventers and exposed pipes with foam insulation tape.

Do this BEFORE the first hard freeze and you\u2019ll save yourself hundreds in spring repairs.

Need help? We offer winterization service for just $75. Link in comments!`,
    hashtags: ['#Landscaping', '#WinterReady', '#SprinklerSystem', '#LawnCare', '#HomeMaintenanceTips', '#WinterPrep'],
    emoji: '\uD83D\uDCCB',
    scheduleSuggestion: 'Best posted: Saturday 9:00 AM',
    engagementTip: 'Include a short video walkthrough to boost shares',
  },
  {
    id: 'ht-2',
    template: 'how-to',
    templateDescription: 'Step-by-step instructions your audience needs',
    topic: 'How to Deep Clean Your Restaurant Kitchen',
    industry: 'restaurant',
    platform: 'linkedin',
    generatedTitle: 'Restaurant Kitchen Deep Clean: The Process That Keeps Us Passing Every Health Inspection',
    generatedContent: `Health inspections shouldn\u2019t be stressful. Here\u2019s the exact deep-cleaning process we follow weekly that keeps our kitchen scoring 95+ every time.

1. Clear and degrease all cooking surfaces. Commercial degreaser on flat tops, grills, and hoods. Let it sit 15 minutes before scrubbing.

2. Pull equipment away from walls. The area behind fryers and ranges collects grease buildup that\u2019s invisible during daily cleaning. Scrub floors and baseboards thoroughly.

3. Break down and sanitize all prep stations. Remove cutting boards, sanitize underneath, and check for scoring that harbors bacteria.

4. Deep clean walk-in coolers. Remove all items, wipe shelves with food-safe sanitizer, check door gaskets for mold, and verify temperature logs.

5. Clean and inspect grease traps. Document the date and condition for your records.

6. Sanitize all high-touch surfaces: door handles, light switches, POS screens, and reach-in handles.

This process takes our team 3 hours. The return? Zero violations in our last 8 inspections and a reputation that keeps tables full.

How does your team handle deep cleaning?`,
    hashtags: ['#RestaurantManagement', '#FoodSafety', '#KitchenLife', '#HealthInspection', '#RestaurantOwner'],
    emoji: '\uD83D\uDCCB',
    scheduleSuggestion: 'Best posted: Tuesday 7:00 AM',
    engagementTip: 'Share a checklist PDF as a downloadable resource in comments',
  },
  {
    id: 'ht-3',
    template: 'how-to',
    templateDescription: 'Step-by-step instructions your audience needs',
    topic: 'How to Prepare for a Legal Consultation',
    industry: 'law firm',
    platform: 'instagram',
    generatedTitle: 'How to Prepare for Your First Legal Consultation',
    generatedContent: `Meeting with a lawyer for the first time?

Here\u2019s how to make the MOST of your consultation:

1. WRITE DOWN YOUR TIMELINE
List key dates and events in order. Lawyers need facts, not feelings.

2. GATHER YOUR DOCUMENTS
Contracts, emails, photos, police reports \u2014 bring EVERYTHING relevant. More is better.

3. PREPARE YOUR QUESTIONS
Write them down! You WILL forget in the moment. Top questions to ask:
\u2022 What are my options?
\u2022 What\u2019s the realistic timeline?
\u2022 What are the estimated costs?

4. BE HONEST
Attorney-client privilege protects you. Hiding facts only hurts YOUR case.

5. TAKE NOTES
Or ask if you can record the session. You\u2019ll want to review later.

Save this for when you need it!

Free 30-minute consultations available \u2014 link in bio.`,
    hashtags: ['#LegalTips', '#LawyerAdvice', '#KnowYourRights', '#LegalHelp', '#AttorneyTips', '#LawFirm'],
    emoji: '\uD83D\uDCCB',
    scheduleSuggestion: 'Best posted: Wednesday 10:00 AM',
    engagementTip: 'Use a step-by-step carousel format for maximum saves',
  },
  {
    id: 'ht-4',
    template: 'how-to',
    templateDescription: 'Step-by-step instructions your audience needs',
    topic: 'How to Unclog a Drain Without Chemicals',
    industry: 'plumbing',
    platform: 'twitter',
    generatedTitle: 'Unclog a Drain Without Chemicals',
    generatedContent: `How to unclog a drain without harsh chemicals (a plumber\u2019s method):

1. Boil a full kettle of water
2. Pour 1/2 cup baking soda down the drain
3. Wait 5 minutes
4. Pour 1/2 cup white vinegar + 1/2 cup hot water
5. Cover the drain for 10 minutes
6. Flush with the boiling water

Works on ~80% of minor clogs. If it doesn\u2019t clear after 2 attempts, call a pro \u2014 you likely have a deeper blockage.`,
    hashtags: ['#PlumbingTips', '#DIYHome', '#NaturalCleaning', '#HomeHacks'],
    emoji: '\uD83D\uDCCB',
    scheduleSuggestion: 'Best posted: Friday 3:00 PM',
    engagementTip: 'Bookmark-worthy content \u2014 ask followers to save for later',
  },

  // ── CHECKLIST (4 entries) ──────────────────────────────────────────────
  {
    id: 'cl-1',
    template: 'checklist',
    templateDescription: 'Actionable checklist your audience can save',
    topic: 'Spring Home Maintenance Checklist',
    industry: 'hvac',
    platform: 'facebook',
    generatedTitle: 'Your Complete Spring Home Maintenance Checklist',
    generatedContent: `Spring is here! Use this checklist to protect your biggest investment:

EXTERIOR
\u2610 Inspect roof for missing/damaged shingles
\u2610 Clean gutters and downspouts
\u2610 Check siding for cracks or damage
\u2610 Power wash driveway, walkways, and deck
\u2610 Inspect foundation for cracks

HVAC & PLUMBING
\u2610 Schedule AC tune-up (before summer rush!)
\u2610 Replace air filters
\u2610 Test outdoor faucets for freeze damage
\u2610 Flush water heater
\u2610 Check sump pump operation

YARD & LANDSCAPE
\u2610 Dethatch and aerate lawn
\u2610 Trim trees/shrubs away from house
\u2610 Check irrigation system for leaks
\u2610 Mulch flower beds
\u2610 Treat for grubs and early weeds

SAFETY
\u2610 Test smoke and CO detectors
\u2610 Check fire extinguisher dates
\u2610 Inspect weather stripping on doors/windows

Save this post and check them off as you go! Which one are you tackling first?`,
    hashtags: ['#HomeMaintenance', '#SpringCleaning', '#HomeOwnerTips', '#HVACMaintenance', '#PropertyCare', '#ChecklistGoals'],
    emoji: '\u2705',
    scheduleSuggestion: 'Best posted: Saturday 8:00 AM',
    engagementTip: 'Save-worthy content drives algorithm visibility \u2014 ask people to bookmark',
  },
  {
    id: 'cl-2',
    template: 'checklist',
    templateDescription: 'Actionable checklist your audience can save',
    topic: 'Move-In Day Cleaning Checklist',
    industry: 'cleaning',
    platform: 'instagram',
    generatedTitle: 'Move-In Day Deep Clean Checklist',
    generatedContent: `Moving into a new place? DO THIS FIRST:

KITCHEN
\u2610 Wipe inside ALL cabinets & drawers
\u2610 Clean oven, microwave, dishwasher interior
\u2610 Sanitize countertops & backsplash
\u2610 Run garbage disposal with ice + lemon

BATHROOMS
\u2610 Disinfect toilet, tub, shower
\u2610 Clean inside medicine cabinet
\u2610 Replace toilet seat (trust us)
\u2610 Check under sinks for leaks

EVERY ROOM
\u2610 Wipe all light switches & outlets
\u2610 Clean inside closets
\u2610 Wash windows inside & out
\u2610 Steam clean carpets or mop hard floors

DON\u2019T FORGET
\u2610 Change locks or rekey
\u2610 Replace HVAC filter
\u2610 Clean washer/dryer lint trap
\u2610 Wipe down garage floor

Do this BEFORE you move furniture in \u2014 it\u2019s 10x easier.

Save this & share with anyone about to move!`,
    hashtags: ['#MovingDay', '#CleaningTips', '#DeepClean', '#NewHome', '#CleanHouse', '#MovingChecklist'],
    emoji: '\u2705',
    scheduleSuggestion: 'Best posted: Sunday 10:00 AM',
    engagementTip: 'Carousel posts with one room per slide get 3x more saves',
  },
  {
    id: 'cl-3',
    template: 'checklist',
    templateDescription: 'Actionable checklist your audience can save',
    topic: 'Open House Preparation Checklist',
    industry: 'real estate',
    platform: 'linkedin',
    generatedTitle: 'The Open House Checklist That Sells Homes Faster',
    generatedContent: `I\u2019ve hosted over 300 open houses. This is the checklist I share with every seller the week before showing day.

72 Hours Before:
\u2610 Deep clean entire home (hire professionals if budget allows)
\u2610 Declutter every surface \u2014 remove 50% of decorative items
\u2610 Fix minor repairs: leaky faucets, squeaky doors, chipped paint
\u2610 Arrange furniture to maximize perceived space

24 Hours Before:
\u2610 Mow lawn and edge walkways
\u2610 Stage fresh flowers on dining table and kitchen counter
\u2610 Set thermostat to 70\u201372\u00B0F
\u2610 Remove personal photos and religious items
\u2610 Put away all pet items and arrange for pets to be off-site

Day Of:
\u2610 Open all blinds and turn on every light
\u2610 Light a subtle candle (vanilla or linen \u2014 never overpowering)
\u2610 Set out refreshments: bottled water and simple snacks
\u2610 Put property brochures on the entryway table
\u2610 Play soft background music

Agents: feel free to share this with your clients. The difference between a prepared home and an unprepared one averages 3\u20135% on final sale price.`,
    hashtags: ['#RealEstate', '#OpenHouse', '#HomeSelling', '#RealtorTips', '#StagingTips'],
    emoji: '\u2705',
    scheduleSuggestion: 'Best posted: Monday 8:00 AM',
    engagementTip: 'Offer a downloadable PDF version to generate leads',
  },
  {
    id: 'cl-4',
    template: 'checklist',
    templateDescription: 'Actionable checklist your audience can save',
    topic: 'Pre-Workout Nutrition Checklist',
    industry: 'fitness',
    platform: 'twitter',
    generatedTitle: 'Pre-Workout Nutrition Checklist',
    generatedContent: `Pre-workout nutrition checklist for better performance:

\u2610 Eat a balanced meal 2\u20133 hours before (protein + complex carbs)
\u2610 Hydrate: 16\u201320 oz water 2 hours before
\u2610 Optional: small snack 30 min before (banana, rice cake)
\u2610 Caffeine 30\u201345 min before if you use it (3\u20136mg/kg)
\u2610 Skip high-fat and high-fiber foods within 1 hour of training
\u2610 Sip 8 oz water during warm-up

Simple. Consistent. Effective.`,
    hashtags: ['#FitnessTips', '#PreWorkout', '#NutritionTips', '#GymLife'],
    emoji: '\u2705',
    scheduleSuggestion: 'Best posted: Monday 5:30 AM',
    engagementTip: 'Pair with a reply thread sharing your own pre-workout routine',
  },

  // ── TIP OF THE DAY (4 entries) ─────────────────────────────────────────
  {
    id: 'td-1',
    template: 'tip-of-the-day',
    templateDescription: 'Quick, valuable tip that builds authority',
    topic: 'Lower Your Energy Bill This Winter',
    industry: 'hvac',
    platform: 'twitter',
    generatedTitle: 'Save on Heating Bills Tonight',
    generatedContent: `HVAC tip: Lower your thermostat by just 2\u00B0F at night.

You won\u2019t notice the difference under blankets, but your furnace will run 6\u20138% less.

Over a full winter, that\u2019s $100\u2013$200 saved.

Set a programmable schedule: 68\u00B0F when awake, 62\u00B0F when sleeping. Your wallet and your furnace will thank you.`,
    hashtags: ['#HVACTips', '#EnergySaving', '#WinterTips', '#HomeOwner'],
    emoji: '\uD83D\uDCA1',
    scheduleSuggestion: 'Best posted: Tuesday 7:00 AM',
    engagementTip: 'Ask followers what temperature they keep their thermostat at',
  },
  {
    id: 'td-2',
    template: 'tip-of-the-day',
    templateDescription: 'Quick, valuable tip that builds authority',
    topic: 'Protect Your Lawn in a Drought',
    industry: 'landscaping',
    platform: 'facebook',
    generatedTitle: 'One Simple Trick to Save Your Lawn During a Drought',
    generatedContent: `Here\u2019s a lawn care tip most people don\u2019t know:

During a drought, RAISE your mower blade to 3.5\u20134 inches.

Why? Taller grass shades the soil, reducing water evaporation by up to 50%. It also grows deeper roots that access moisture other lawns can\u2019t reach.

Most homeowners cut too short (under 2 inches) thinking it looks tidier. But short grass during heat stress turns brown faster, requires more water, and lets weeds take over.

Taller grass = greener lawn with LESS water.

Try it this week and tag us in your results! We\u2019d love to see the difference.`,
    hashtags: ['#LawnCare', '#DroughtTips', '#Landscaping', '#GreenLawn', '#WaterConservation', '#YardTips'],
    emoji: '\uD83D\uDCA1',
    scheduleSuggestion: 'Best posted: Wednesday 11:00 AM',
    engagementTip: 'Post a side-by-side photo of short vs tall grass in drought',
  },
  {
    id: 'td-3',
    template: 'tip-of-the-day',
    templateDescription: 'Quick, valuable tip that builds authority',
    topic: 'Boost Your Google Reviews',
    industry: 'restaurant',
    platform: 'linkedin',
    generatedTitle: 'The 5-Star Review Hack Every Restaurant Should Know',
    generatedContent: `Want more 5-star Google reviews? Here is the simplest tactic I have seen work consistently across 40+ restaurant clients.

Print a small card with a QR code that goes directly to your Google review page. Hand it to guests with the check and say: "If you enjoyed your experience, we\u2019d love a quick review. It helps us more than you know."

Timing matters. Asking at the peak of satisfaction \u2014 right after a great meal \u2014 converts at 4\u20135x the rate of a follow-up email.

One of our clients went from 47 reviews to 280+ in six months using this method alone. Their Google Maps visibility tripled, and they now rank #1 for "best Italian restaurant" in their city.

The cost? About $15 for 500 cards.

The ROI? Immeasurable.`,
    hashtags: ['#RestaurantMarketing', '#GoogleReviews', '#LocalSEO', '#SmallBusinessTips', '#RestaurantBusiness'],
    emoji: '\uD83D\uDCA1',
    scheduleSuggestion: 'Best posted: Thursday 9:00 AM',
    engagementTip: 'Share a real result or case study to build credibility',
  },
  {
    id: 'td-4',
    template: 'tip-of-the-day',
    templateDescription: 'Quick, valuable tip that builds authority',
    topic: 'Quick Cleaning Hack for Stainless Steel',
    industry: 'cleaning',
    platform: 'instagram',
    generatedTitle: 'Stainless Steel Hack Your Cleaner Won\'t Tell You',
    generatedContent: `PRO TIP from our cleaning crew:

Fingerprints on stainless steel driving you crazy??

Here\u2019s our secret weapon:

A few drops of BABY OIL on a microfiber cloth.

Wipe WITH the grain of the steel (not against it!)

Result? Streak-free, fingerprint-resistant shine that lasts for DAYS.

Works on:
\u2022 Refrigerators
\u2022 Dishwashers
\u2022 Ovens
\u2022 Range hoods
\u2022 Sinks

This is what we use on every job and clients always ask how we get that showroom finish.

Try it tonight and let us know!`,
    hashtags: ['#CleaningHacks', '#CleaningTips', '#StainlessSteel', '#HomeCleaning', '#ProCleaner', '#CleanHome'],
    emoji: '\uD83D\uDCA1',
    scheduleSuggestion: 'Best posted: Friday 12:00 PM',
    engagementTip: 'Post a short Reel demonstrating the technique for maximum reach',
  },

  // ── BEHIND THE SCENES (4 entries) ──────────────────────────────────────
  {
    id: 'bts-1',
    template: 'behind-the-scenes',
    templateDescription: 'Show the human side of your business',
    topic: 'A Day in the Life of a Roofing Crew',
    industry: 'roofing',
    platform: 'instagram',
    generatedTitle: 'A Day on the Roof With Our Crew',
    generatedContent: `5:45 AM \u2014 Crew meeting at the shop
Loading trucks, reviewing today\u2019s job, safety briefing

7:00 AM \u2014 Arrive on site
Tarps down, ladders up, materials staged

9:30 AM \u2014 Tear-off in full swing
Old shingles coming down, inspecting decking underneath

12:00 PM \u2014 Lunch break
These guys earned it. 5 hours of hard labor in the summer heat.

1:00 PM \u2014 Underlayment & ice shield
The layers you never see that protect your home

3:30 PM \u2014 New shingles going on
This is where the transformation happens!

5:00 PM \u2014 Clean up & final inspection
Magnetic nail sweep, gutter check, walkthrough with homeowner

5:30 PM \u2014 Done!
Another family protected. Another roof built to last.

This is what we do. Every. Single. Day.

Double tap if you respect the trades!`,
    hashtags: ['#RoofingLife', '#RoofingCrew', '#TradesLife', '#BehindTheScenes', '#Roofer', '#BlueCollarProud'],
    emoji: '\uD83C\uDFAC',
    scheduleSuggestion: 'Best posted: Friday 5:00 PM',
    engagementTip: 'Use Reels with time-lapse footage for 5\u201310x more reach',
  },
  {
    id: 'bts-2',
    template: 'behind-the-scenes',
    templateDescription: 'Show the human side of your business',
    topic: 'Meet Our Front Desk Team',
    industry: 'dental',
    platform: 'facebook',
    generatedTitle: 'Meet the Smiles Behind Our Front Desk!',
    generatedContent: `You know those friendly voices on the phone and warm smiles when you walk in? Let us introduce the team that makes it all happen!

Meet Sarah, Jessica, and Marcus \u2014 our front desk dream team.

Sarah has been with us for 7 years. She remembers every patient\u2019s name AND their kids\u2019 names. (We\u2019re honestly not sure how she does it.)

Jessica is our insurance wizard. If there\u2019s a way to maximize your benefits, she\u2019ll find it. She\u2019s saved our patients over $45,000 in out-of-pocket costs this year alone.

Marcus is our newest team member, and he\u2019s already a patient favorite. His goal? Making sure nobody feels anxious before their appointment. His secret weapon: dad jokes. (They\u2019re terrible, but they work.)

These three are the heart of our practice. Next time you\u2019re in, let them know you saw this post \u2014 it\u2019ll make their day!

Who\u2019s YOUR favorite front desk team member? Tag them below!`,
    hashtags: ['#DentalOffice', '#MeetTheTeam', '#BehindTheScenes', '#DentalFamily', '#SmileTeam', '#PatientCare'],
    emoji: '\uD83C\uDFAC',
    scheduleSuggestion: 'Best posted: Wednesday 12:00 PM',
    engagementTip: 'Tag team members and encourage patients to share their experiences',
  },
  {
    id: 'bts-3',
    template: 'behind-the-scenes',
    templateDescription: 'Show the human side of your business',
    topic: 'How We Train Our Cleaning Staff',
    industry: 'cleaning',
    platform: 'linkedin',
    generatedTitle: 'Why We Invest 40 Hours in Training Before a Single Client Visit',
    generatedContent: `Every new team member at our cleaning company completes 40 hours of training before they ever step into a client\u2019s home. Here is why.

Our industry has a reputation problem. Low barriers to entry mean inconsistent quality, and homeowners have learned to expect it. We decided early on that training would be our competitive advantage.

Our program covers:
- Product chemistry: understanding which cleaners work on which surfaces and why
- Efficiency patterns: room-by-room workflows that cut time without cutting corners
- Client communication: how to handle access codes, pets, special requests, and feedback
- Safety protocols: proper ventilation, PPE usage, and chemical mixing rules
- Quality standards: our 47-point inspection checklist every home must pass

The result? Our client retention rate is 94%. Our average Google rating is 4.9 stars across 500+ reviews. And our team members earn 30% above industry average because they deliver premium results.

Training is expensive. Replacing clients is more expensive.

How does your company approach onboarding?`,
    hashtags: ['#CleaningBusiness', '#EmployeeTraining', '#ServiceExcellence', '#SmallBusinessOwner', '#CleaningIndustry'],
    emoji: '\uD83C\uDFAC',
    scheduleSuggestion: 'Best posted: Tuesday 10:00 AM',
    engagementTip: 'Share a specific training story or employee success to humanize the brand',
  },
  {
    id: 'bts-4',
    template: 'behind-the-scenes',
    templateDescription: 'Show the human side of your business',
    topic: 'Kitchen Prep at 4 AM',
    industry: 'restaurant',
    platform: 'twitter',
    generatedTitle: 'What 4 AM Looks Like in Our Kitchen',
    generatedContent: `What running a restaurant actually looks like:

4:00 AM \u2014 Baker arrives. Bread dough that\u2019s been proofing overnight goes into the oven.

5:30 AM \u2014 Prep cook starts on stocks, sauces, and today\u2019s specials.

7:00 AM \u2014 Produce delivery. Everything inspected by hand.

8:00 AM \u2014 Full team arrives. Stations set, knives sharpened, mise en place begins.

By the time you sit down for lunch, there\u2019s already 8 hours of work on your plate.

This is why we love what we do.`,
    hashtags: ['#RestaurantLife', '#ChefLife', '#BehindTheScenes', '#FoodIndustry'],
    emoji: '\uD83C\uDFAC',
    scheduleSuggestion: 'Best posted: Thursday 11:00 AM',
    engagementTip: 'Post a photo of the early morning kitchen to add authenticity',
  },

  // ── TRENDING TOPIC (3 entries) ─────────────────────────────────────────
  {
    id: 'tt-1',
    template: 'trending-topic',
    templateDescription: 'Join the conversation on what\'s trending',
    topic: 'AI in Home Services',
    industry: 'hvac',
    platform: 'linkedin',
    generatedTitle: 'AI Is Coming to Home Services \u2014 Here\'s What That Actually Means',
    generatedContent: `Everyone is talking about AI disrupting white-collar jobs. But AI is quietly transforming home services too, and most contractors aren\u2019t paying attention.

Here is what I am seeing in the HVAC space right now:

AI-powered diagnostics: Smart thermostats and connected systems can now detect compressor inefficiency, refrigerant leaks, and airflow problems before they cause failures. One manufacturer claims their system catches 73% of issues before the homeowner notices.

Automated scheduling: AI chatbots are handling after-hours calls, booking appointments, and sending reminders. Companies using them report 35% fewer missed appointments.

Predictive maintenance: Machine learning models analyze equipment age, usage patterns, and weather data to predict when systems will fail \u2014 allowing contractors to offer proactive service plans.

Route optimization: AI routing has cut our drive time by 22% this year, adding an extra service call per technician per day.

My take: AI will not replace HVAC technicians. But HVAC companies that use AI will replace those that do not.

What AI tools is your company experimenting with?`,
    hashtags: ['#AIinBusiness', '#HVAC', '#HomeServices', '#TechTrends', '#SmallBusinessTech'],
    emoji: '\uD83D\uDD25',
    scheduleSuggestion: 'Best posted: Monday 9:00 AM',
    engagementTip: 'Timely topics get 2\u20133x more impressions \u2014 post while the trend is hot',
  },
  {
    id: 'tt-2',
    template: 'trending-topic',
    templateDescription: 'Join the conversation on what\'s trending',
    topic: 'Short-Form Video for Local Business',
    industry: 'law firm',
    platform: 'facebook',
    generatedTitle: 'Should Your Law Firm Be Making TikToks?',
    generatedContent: `We need to talk about something: lawyers on TikTok and Instagram Reels.

A few years ago, the idea seemed ridiculous. Now? Some of the fastest-growing firms in the country are built on short-form video.

Here\u2019s why it works:
\u2022 62% of people search for legal help online before calling anyone
\u2022 Short videos build trust faster than any website can
\u2022 "Know your rights" content goes viral because everyone finds it valuable
\u2022 You become the familiar face when someone actually needs a lawyer

It doesn\u2019t have to be fancy. A 60-second video answering "What should I do after a car accident?" filmed on your phone in your office gets more engagement than a $5,000 TV commercial.

Our firm started posting weekly legal tips 6 months ago. We\u2019ve gotten 23 new clients who said they found us through our videos.

The attorneys who figure this out now will dominate their markets for the next decade.

What do you think \u2014 would you hire a lawyer you first discovered on social media? Let us know below!`,
    hashtags: ['#LawFirm', '#LegalMarketing', '#SocialMediaTips', '#ShortFormVideo', '#LawyerLife', '#SmallBusinessMarketing'],
    emoji: '\uD83D\uDD25',
    scheduleSuggestion: 'Best posted: Wednesday 1:00 PM',
    engagementTip: 'Ask a provocative question to spark debate in comments',
  },
  {
    id: 'tt-3',
    template: 'trending-topic',
    templateDescription: 'Join the conversation on what\'s trending',
    topic: 'GLP-1 Medications and the Fitness Industry',
    industry: 'fitness',
    platform: 'instagram',
    generatedTitle: 'The GLP-1 Revolution & What It Means for Fitness',
    generatedContent: `Let\u2019s talk about the elephant in the room.

GLP-1 medications are changing the fitness industry FAST.

Here\u2019s what we\u2019re seeing as gym owners:

Fewer people joining JUST to lose weight.
MORE people joining to build muscle & strength.
A shift from "punishment workouts" to performance training.

Our take? This is actually GREAT for fitness.

Why:
\u2705 People on GLP-1s NEED strength training to preserve muscle mass
\u2705 Exercise improves outcomes for everyone, medication or not
\u2705 The conversation is shifting from "skinny" to "strong & healthy"

What we\u2019re doing about it:
\u2022 Added more strength-focused programming
\u2022 Expanded nutrition coaching
\u2022 Educating members on body composition vs. scale weight

The gyms that adapt to this shift will thrive. The ones stuck in "burn calories" mode will struggle.

What are you seeing at YOUR gym?`,
    hashtags: ['#FitnessIndustry', '#GymOwner', '#StrengthTraining', '#FitnessEvolution', '#GymLife', '#PersonalTrainer'],
    emoji: '\uD83D\uDD25',
    scheduleSuggestion: 'Best posted: Tuesday 6:00 PM',
    engagementTip: 'Controversial takes get shared more \u2014 take a clear stance',
  },

  // ── PRODUCT SHOWCASE (3 entries) ───────────────────────────────────────
  {
    id: 'ps-1',
    template: 'product-showcase',
    templateDescription: 'Highlight your products or services',
    topic: 'Premium Roof Inspection Service',
    industry: 'roofing',
    platform: 'facebook',
    generatedTitle: 'Our 21-Point Roof Inspection \u2014 Now Just $49',
    generatedContent: `Storm season is coming. Do you know the condition of your roof?

Our 21-Point Premium Roof Inspection covers:

\u2714\uFE0F Shingle condition & remaining lifespan estimate
\u2714\uFE0F Flashing around chimneys, vents, and skylights
\u2714\uFE0F Gutter attachment and drainage
\u2714\uFE0F Soffit and fascia integrity
\u2714\uFE0F Attic ventilation check
\u2714\uFE0F Drone photography of hard-to-reach areas
\u2714\uFE0F Written report with photos emailed within 24 hours

Normally $149 \u2014 now just $49 through the end of the month.

We\u2019ve already caught over $180,000 in damage for homeowners this year that would have gotten worse (and more expensive) without early detection.

No high-pressure sales. Just honest answers about your roof.

Comment "INSPECT" or call us at (555) 123-4567 to book!`,
    hashtags: ['#RoofInspection', '#StormPrep', '#HomeProtection', '#RoofingCompany', '#HomeOwner', '#RoofRepair'],
    emoji: '\u2B50',
    scheduleSuggestion: 'Best posted: Saturday 9:00 AM',
    engagementTip: 'Use a keyword comment trigger ("INSPECT") to boost engagement and capture leads',
  },
  {
    id: 'ps-2',
    template: 'product-showcase',
    templateDescription: 'Highlight your products or services',
    topic: 'New Landscape Design Service',
    industry: 'landscaping',
    platform: 'linkedin',
    generatedTitle: 'Introducing Our 3D Landscape Design Service',
    generatedContent: `We are excited to announce a new service that has already transformed how our clients plan their outdoor spaces.

Our 3D Landscape Design Package includes:
- On-site consultation and property measurement
- 3D photorealistic rendering of your proposed landscape
- Two revision rounds to refine the design
- Detailed plant and material specification list
- Phased implementation plan with cost estimates for each stage

Why 3D? Because flat sketches leave too much to imagination. Our clients can now see exactly what their backyard will look like before a single shovel hits the ground. They can visualize plant maturity, lighting effects, and seasonal changes.

Since launching this service three months ago:
- Our project approval rate increased from 62% to 89%
- Average project size grew by 34% (clients invest more when they can see the result)
- Client satisfaction scores hit an all-time high

The design fee starts at $500 and is credited toward any project over $5,000.

Interested in learning more? Send me a message or visit the link in comments.`,
    hashtags: ['#LandscapeDesign', '#3DRendering', '#OutdoorLiving', '#LandscapingBusiness', '#BackyardGoals'],
    emoji: '\u2B50',
    scheduleSuggestion: 'Best posted: Thursday 10:00 AM',
    engagementTip: 'Include a before/after 3D render comparison image for maximum impact',
  },
  {
    id: 'ps-3',
    template: 'product-showcase',
    templateDescription: 'Highlight your products or services',
    topic: 'Teeth Whitening Special',
    industry: 'dental',
    platform: 'twitter',
    generatedTitle: 'Professional Whitening \u2014 Limited Offer',
    generatedContent: `Professional teeth whitening: $199 this month (regularly $450).

What you get:
\u2022 Custom-fitted trays made from your impressions
\u2022 Professional-grade whitening gel (6x stronger than store brands)
\u2022 Results in 1\u20132 weeks
\u2022 Lasts 1\u20132 years with proper care

Over-the-counter strips? $40 and barely noticeable results.

Book before month\u2019s end. Link in bio.`,
    hashtags: ['#TeethWhitening', '#DentalSpecial', '#SmileMakeover', '#DentistOffice'],
    emoji: '\u2B50',
    scheduleSuggestion: 'Best posted: Friday 11:00 AM',
    engagementTip: 'Include a before/after photo (with patient permission) for social proof',
  },
];

// ── Helper Functions ─────────────────────────────────────────────────────

/**
 * Filter demo content by template and/or platform.
 * Pass an empty string or omit to skip that filter.
 */
export function getDemoContent(template: string, platform: string): DemoContent[] {
  return demoContentEntries.filter((entry) => {
    const matchesTemplate = !template || entry.template === template;
    const matchesPlatform = !platform || entry.platform === platform;
    return matchesTemplate && matchesPlatform;
  });
}

/**
 * Get a random demo content entry, optionally filtered by template and/or platform.
 */
export function getRandomDemoContent(template?: string, platform?: string): DemoContent {
  const filtered = getDemoContent(template ?? '', platform ?? '');
  const pool = filtered.length > 0 ? filtered : demoContentEntries;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

/**
 * Fuzzy-match demo content on topic, industry, title, or content body.
 * Splits the query into words and returns entries matching ALL words (case-insensitive).
 */
export function searchDemoContent(topic: string): DemoContent[] {
  const words = topic
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 0);

  if (words.length === 0) {
    return demoContentEntries;
  }

  return demoContentEntries.filter((entry) => {
    const searchable = [
      entry.topic,
      entry.industry,
      entry.generatedTitle,
      entry.generatedContent,
      entry.template,
      ...entry.hashtags,
    ]
      .join(' ')
      .toLowerCase();

    return words.every((word) => searchable.includes(word));
  });
}
